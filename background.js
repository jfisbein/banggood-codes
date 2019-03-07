chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab);
        var detail = {
            file: 'coupon.js'
        }
        chrome.tabs.executeScript(tab.id, detail, function(response) {
            //alert(response);
        });
});
