const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }}, // cancelling every request that we made 
    { urls: defaultFilters },
    ["blocking"]
)