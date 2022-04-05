chrome.runtime.onMessage.addListener(function (sender, sendResponse) {
  try {
    setTimeout(() => {
      document.getElementById("btnNewApplication").click();
    }, 1000);
    setTimeout(() => {
      document.getElementById("btnNext").click();
    }, 11000);
  } catch (error) {
    console.log(error);
    sendResponse({ status: "Exception accurrend!" });
  }
});
