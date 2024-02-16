(function() {
    function getUrlParam(k) {
        var p = null;
        try {
            var s = document.currentScript.src;
            var u = new URL(s);
            var ps = new URLSearchParams(u.search);
            p = ps.get(k) || null;
        } catch (e) {}
        return p;
    }

    var site = getUrlParam('site');

    if (!site || ! site.match(/[a-z0-9]{3}/)) {
        return;
    }

    var adUnitCode = getUrlParam('ad_unit_code')
    if (!adUnitCode) {
        return;
    }

    var w = window.top;
    var d = w.document;
    var $$iframe, p;

    var a = 'data-ym-banner-video';
    var n = '' + Math.ceil(Math.random() * 100000);

    window.frameElement.setAttribute(a, n);

    Array.from(d.getElementsByTagName('iframe')).forEach(function($$i) {
        if ($$i.getAttribute(a) === n) {
            p = $$i;
            $$iframe = $$i;
        }
    });

    if (!p) {
        return;
    }

    var $$placementTags = d.getElementsByClassName(adUnitCode);
    if ($$placementTags.length > 0) {
        return;
    }

    $$iframe.style.setProperty('display', 'none', 'important');
    var where = 'afterend';
    p.insertAdjacentHTML(where, '<div class="' + adUnitCode + '"></div>');

    var ljs = function(url) {
        var script = d.createElement('script');
        d.head.appendChild(script);
        script.async = true;
        script.src = url;
    };

    ljs('https://securepubads.g.doubleclick.net/tag/js/gpt.js');
    ljs('https://cdn.membrana.media/' + site + '/ym.js');

    w.yieldMasterCmd = w.yieldMasterCmd || [];
    w.yieldMasterCmd.push(function() {
        w.yieldMaster.init({
            pageVersionAutodetect: true
        });
        w.yieldMaster.initUnit(adUnitCode);
    });
})();