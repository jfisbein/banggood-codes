function sleep(seconds) {
    var start = new Date().getTime();
    while (new Date() < start + seconds * 1000) {}
    return 0;
}

// document.getElementsByClassName("top_couponCenter_button_20170105")[0].click();
// sleep(5);

var links = document.getElementsByClassName("middle_getIt_button_20170105");
for (i = 0; i < links.length; i++) {
    var link = links[i];
    link.click();
}

sleep(2);


var close = document.getElementsByClassName("modal_title").childNodes;
if (close) {
    alert(close)
    close.click();
}
