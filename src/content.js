let observer;
(() => {
  observer = new MutationObserver(function (mutations) {
    const m = String(mutations[0].target.innerText).match(/\((\d+)\)/);
    const unread = m && m[1];
    if (unread) {
      navigator.setAppBadge(unread);
    } else {
      navigator.clearAppBadge();
    }
  });
  observer.observe(document.querySelector("title"), {
    subtree: true,
    characterData: true,
    childList: true,
  });
})();
