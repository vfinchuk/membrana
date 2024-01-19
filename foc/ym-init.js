(function() {
    const loadScript = function(url) {
        const script = document.createElement('script');
        document.head.appendChild(script);
        script.async = true;
        script.src = url;
    };

    const addSlotContainer = function(className = '') {
        const container = document.createElement('div');
        container.classList.add(className);
        document.body.appendChild(container);
    }

    addSlotContainer('FOC_VIDEO');

    loadScript('https://cdn.membrana.media/foc/ym.js');

    window.notsyCmd = window.notsyCmd || [];
    window.notsyCmd.push(function () {
        window.notsyInit({
            pageVersionAutodetect: true,
        });
    });
})();