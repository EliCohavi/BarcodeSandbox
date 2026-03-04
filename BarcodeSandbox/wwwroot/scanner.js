// Maintain a single listener reference so it can be added/removed on demand
window._barcodeKeyListener = {
    handler: null,
    dotNetRef: null
};

window.startKeyListener = function (dotNetRef) {
    // if already listening, ignore
    if (window._barcodeKeyListener.handler) return;

    window._barcodeKeyListener.dotNetRef = dotNetRef;
    window._barcodeKeyListener.handler = function (e) {
        console.log("Key pressed:", e.key);
        window._barcodeKeyListener.dotNetRef.invokeMethodAsync("ReceiveKey", e.key);
    };

    document.addEventListener("keydown", window._barcodeKeyListener.handler);
};

window.stopKeyListener = function () {
    if (!window._barcodeKeyListener.handler) return;

    document.removeEventListener("keydown", window._barcodeKeyListener.handler);
    window._barcodeKeyListener.handler = null;

    // clear stored reference
    window._barcodeKeyListener.dotNetRef = null;
};
