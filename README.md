# Chrome Web App Unread Count Badge

> This extension will read the count from the page title and display it as a badge on the icon.

### Code

```
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

```
