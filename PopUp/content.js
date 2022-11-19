chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendresponse) {
  console.log("got the message");
}