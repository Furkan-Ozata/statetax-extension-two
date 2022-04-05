chrome.runtime.onMessage.addListener(function getExternalAPI(request) {
  fetch(
    `https://statetax-extesion-data-default-rtdb.firebaseio.com/users/${request.data}.json`
  )
    .then((response) => response.json())
    .then((data) => {
      (document.getElementById("UserName").value = data.userName),
        (document.getElementById("EmailAddress").value = data.email),
        (document.getElementById("Password").type = "password"),
        (document.getElementById("Password").value = data.password),
        (document.getElementById("ConfirmUserName").value = data.userName),
        (document.getElementById("ConfirmEmailAddress").value = data.email),
        (document.getElementById("ConfirmPassword").type = "password"),
        (document.getElementById("ConfirmPassword").value = data.password),
        setTimeout(() => {
          document.getElementById("btnSubmit").click();
        }, 1000);
      // sendResponse({ status: "success!" });
    })
    .catch((err) => console.log(err));
  // sendResponse({ status: "Exception accurrend!" });
});
