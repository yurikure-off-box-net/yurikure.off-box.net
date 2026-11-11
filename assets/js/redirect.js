(function () {
  if (window.location.hostname !== 'yurikure.wr-inst.org') {
    return;
  }

  window.location.replace(
    'https://yurikure.off-box.net' +
      window.location.pathname +
      window.location.search +
      window.location.hash
  );
})();
