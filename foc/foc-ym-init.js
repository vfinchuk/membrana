
const SLOT_CODE = 'FOC_VIDEO';
const container = document.createElement('div');
container.classList.add(SLOT_CODE);

document.body.appendChild(container);

window.notsyCmd = window.notsyCmd || [];
window.notsyCmd.push(function () {
    window.notsyInit({
        pageVersionAutodetect: true,
    });
});