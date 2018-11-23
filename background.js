chrome.webRequest.onBeforeRedirect.addListener((info) => {
	// find existing open Wrike tabs
	chrome.tabs.query({
		url: 'https://www.wrike.com/workspace.htm*'
    }, (tabs) => {
    	if (tabs.length > 0) {
    		// open permalink content in the last Wrike tab
	    	chrome.tabs.update(tabs[tabs.length - 1].id, {
	    		url: info.redirectUrl,
	    		active: true
	    	}, () => chrome.tabs.remove(info.tabId));
	    }
    });
}, {urls: ["https://www.wrike.com/open*"]});
