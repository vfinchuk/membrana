(function() {
    const container = document.createElement('FOC_VIDEO');
    container.classList.add(className);
    document.body.appendChild(container);

    window.notsyCmd = window.notsyCmd || [];
    window.notsyCmd.push(function () {
        window.notsyInit({
            pageVersionAutodetect: true,
        });
    });
})();