const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'assets/js/redirect.js'), 'utf8');

function redirect(url) {
  const current = new URL(url);
  const destinations = [];
  vm.runInNewContext(source, {
    window: {
      location: {
        hostname: current.hostname,
        pathname: current.pathname,
        search: current.search,
        hash: current.hash,
        replace: (destination) => destinations.push(destination),
      },
    },
  });
  return destinations;
}

test('old domain redirects to HTTPS while preserving paths, queries and fragments', () => {
  for (const suffix of [
    '/',
    '/basic/',
    '/utsuroi/index.html#services',
    '/app/board/?table-123#control',
    '/app/board/?table-123&name=%E7%99%BE%E5%90%88&tag=a&tag=b',
    '/app/trial/?next=https%3A%2F%2Fexample.org%2F&encoded=%252F#pair%201',
  ]) {
    for (const protocol of ['http:', 'https:']) {
      assert.deepEqual(redirect(protocol + '//yurikure.wr-inst.org' + suffix), [
        'https://yurikure.off-box.net' + suffix,
      ]);
    }
  }
});

test('new domain, local previews and similar hostnames do not redirect', () => {
  for (const host of [
    'yurikure.off-box.net',
    'localhost:8000',
    '127.0.0.1:8000',
    'yurikure.wr-inst.org.example.com',
    'other.wr-inst.org',
  ]) {
    assert.deepEqual(redirect('https://' + host + '/app/board/?table-123#control'), []);
  }
});

function htmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith('.')) return [];
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(filename);
    return entry.name.endsWith('.html') ? [filename] : [];
  });
}

test('every HTML entry loads the redirect synchronously before other scripts and base URLs', () => {
  const files = htmlFiles(root);
  assert.ok(files.length > 0);
  for (const filename of files) {
    const html = fs.readFileSync(filename, 'utf8');
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1];
    assert.ok(head, filename);
    assert.match(head, /^\s*<script src="\/assets\/js\/redirect\.js"><\/script>/, filename);
    assert.equal((head.match(/src="\/assets\/js\/redirect\.js"/g) || []).length, 1, filename);
  }
});
