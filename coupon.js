function sleep(seconds) {
    var start = new Date().getTime();
    while (new Date() < start + seconds * 1000) {}
    return 0;
}

// document.getElementsByClassName("top_couponCenter_button_20170105")[0].click();
// sleep(5);

var divs = document.getElementsByClassName("get-btn");
for (i = 0; i < divs.length; i++) {
    var div = divs[i];
    var link = div.firstChild;
    link.click();
}

sleep(2);


var close = document.getElementsByClassName("modal_title").childNodes;
if (close) {
    alert(close)
    close.click();
}
