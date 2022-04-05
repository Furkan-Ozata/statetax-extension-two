// document.getElementById("autoFill").addEventListener("click", () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(
//       tabs[0].id,
//       {
//         userName: "mehmet55",
//         // email: "furkander",
//         password: "Sifre12345*",
//       },
//       function (responce) {
//         console.log(responce.status);
//       }
//     );
//   });
// });

// document.getElementById("autoFill").addEventListener("click", function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(
//       tabs[0].id,
//       {
//         file: "content.js",
//       },
//       function (responce) {
//         console.log(responce.status);
//       }
//     );
//   });
// });

// document.getElementById("formAutoFill").addEventListener("click", function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(
//       tabs[0].id,
//       {
//         file: "form.js",
//       },
//       function (responce) {
//         console.log(responce.status);
//       }
//     );
//   });
// });

// document
//   .getElementById("createUserAutoFill")
//   .addEventListener("click", function () {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         {
//           file: "createUser.js",
//         },
//         function (responce) {
//           console.log(responce.status);
//         }
//       );
//     });
//   });

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  document.getElementById("autoFill").addEventListener("click", function () {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        file: "content.js",
        file: "form.js",
        file: "createUser.js",
      }
      // function (responce) {
      //   console.log(responce.status);
      // }
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
