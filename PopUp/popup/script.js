let options = {
  active: true,
  currentWindow: true
}
chrome.tabs.query(options, sendMsg)

function sendMsg(tabs) {
  let msg = {
    action: '1'
  }
  chrome.tabs.sendMessage(tabs[0].id, msg)
}