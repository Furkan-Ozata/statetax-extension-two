chrome.runtime.onMessage.addListener(function (sender, sendResponse) {
  try {
    (document.getElementById("UserName").value = "furkanke55"),
      (document.getElementById("EmailAddress").value = "furkanke@hotmail.com"),
      (document.getElementById("Password").type = "password"),
      (document.getElementById("Password").value = "Sifre12345*"),
      (document.getElementById("ConfirmUserName").value = "furkanke55"),
      (document.getElementById("ConfirmEmailAddress").value =
        "furkanke@hotmail.com"),
      (document.getElementById("ConfirmPassword").type = "password"),
      (document.getElementById("ConfirmPassword").value = "Sifre12345*"),
      setTimeout(() => {
        document.getElementById("btnSubmit").click();
      }, 1000);
    sendResponse({ status: "success!" });
  } catch (error) {
    console.log(error);
    sendResponse({ status: "Exception accurrend!" });
  }
});
