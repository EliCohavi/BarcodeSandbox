window.initKeyListener = function (dotNetRef) {
    console.log("JS Loaded");

    document.addEventListener("keydown", function (e) {
        console.log("Key pressed:", e.key);
        dotNetRef.invokeMethodAsync("ReceiveKey", e.key);
    });
};