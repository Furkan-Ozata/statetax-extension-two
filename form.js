chrome.runtime.onMessage.addListener(function (sender, sendResponse) {
  setTimeout(() => {
    document.getElementById("btnNewApplication").click();
  }, 1000);
  setTimeout(() => {
    document.getElementById("btnNext").click();
  }, 11000);
});
