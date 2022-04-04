chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("welcome/hello.html");
  let tab = await chrome.tabs.create({ url });
  console.log(`create tan ${tab.id}`);
});
