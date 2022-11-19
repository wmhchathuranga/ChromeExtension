let options = {
    active: true,
    lastFocusedWindow: true
}
let current_url;

chrome.tabs.query(options, setUrl);

function setUrl(tabs) {
    current_url = tabs[0].url;
    document.getElementById('url').setAttribute('value', current_url);
}

function download() {

}