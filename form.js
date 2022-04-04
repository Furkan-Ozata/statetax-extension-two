chrome.runtime.onMessage.addListener(function (sender, sendResponse) {
  try {
    //start new form
    setTimeout(() => {
      document.getElementById("btnNewApplication").click();
    }, 5000);
    setTimeout(() => {
      document.getElementById("k-input").click();
    }, 10000);
    setTimeout(() => {
      document.getElementById("b5a0f5d0-0c74-40e4-aec6-4048939670ea").click();
    }, 15000);
    sendResponse({ status: "success!" });
  } catch (error) {
    console.log(error);
    sendResponse({ status: "Exception accurrend!" });
  }
});
