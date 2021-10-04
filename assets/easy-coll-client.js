function notifyProductVisit() {
    $.post( easy_collections.baseUrl + '/products/' + easy_collections.productId + '/' + easy_collections.shop + '/notify');
    $(document).ready(function () {
        $('.easy-shared').click(function(){
            $.post( easy_collections.baseUrl + '/products/' + easy_collections.productId + '/' + easy_collections.shop + '/shared');
        });
        $('.easy-custom').click(function(){
            $.post( easy_collections.baseUrl + '/products/' + easy_collections.productId + '/' + easy_collections.shop + '/custom');
        });
    });
}

function addEasyShare() {
    $('a').each(function() {
        searchForAndProcess(this);
    });
}

function searchForAndProcess(aElement) {
    if(aElement && aElement.href) {
        if(aElement.href.indexOf('whatsapp://send') > -1 || aElement.href.indexOf('sms:?body=') > -1 
            || aElement.href.indexOf('fb-messenger://share') > -1 || aElement.href.indexOf('twitter.com/share') > -1
            || aElement.href.indexOf('twitter.com/home?status') > -1  || aElement.href.indexOf('facebook.com/sharer') > -1
            || aElement.href.indexOf('pinterest.com/pin/create') > -1 || aElement.href.indexOf('tumblr.com/share') > -1 
            || aElement.href.indexOf('mailto:') > -1 ) {
                addEasyShareClassTo(aElement);
        }
    }
}

function addEasyShareClassTo(aEl) {
    if(!$(aEl).hasClass('easy-shared')) {
        $(aEl).addClass('easy-shared');
    }
}
try{
    if(typeof $ == 'undefined') {
        var headTag = document.getElementsByTagName("head")[0];
        var jqTag = document.createElement('script');
        jqTag.type = 'text/javascript';
        jqTag.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
        jqTag.onload = function() { notifyProductVisit(); addEasyShare(); }
        headTag.appendChild(jqTag);
    } else {
        notifyProductVisit();
        addEasyShare();
    }
} catch(e) {
    // do nothing
}
