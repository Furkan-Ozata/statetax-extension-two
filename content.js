chrome.runtime.onMessage.addListener(function (sender, sendResponse) {
  try {
    (document.getElementById("UserName").value = "mustafa55"),
      // (document.getElementById("EmailAddress").value = request.email),
      (document.getElementById("Password").type = "password"),
      (document.getElementById("Password").value = "Sifre12345*"),
      // (document.getElementById("ConfirmUserName").value = request.userName),
      // (document.getElementById("ConfirmEmailAddress").value = request.email),
      // (document.getElementById("ConfirmPassword").value = request.password),
      setTimeout(() => {
        document.getElementById("btnLogin").click();
      }, 1000);
    sendResponse({ status: "success!" });
  } catch (error) {
    console.log(error);
    sendResponse({ status: "Exception accurrend!" });
  }
});
