chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  document.getElementById("autoFill").addEventListener("click", function () {
    chrome.tabs.sendMessage(
      tabs[0].id,

      {
        data: document.getElementById("data").value,
        file: "content.js",
        file: "form.js",
        file: "createUser.js",
      }
    );
  });
});

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   document
//     .getElementById("formAutoFill")
//     .addEventListener("click", function () {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         {
//           file: "form.js",
//         }
//         // function (responce) {
//         //   console.log(responce.status);
//         // }
//       );
//     });
// });

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   document
//     .getElementById("createUserAutoFill")
//     .addEventListener("click", function () {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         {
//           file: "createUser.js",
//         }
//         // function (responce) {
//         //   console.log(responce.status);
//         // }
//       );
//     });
// });
