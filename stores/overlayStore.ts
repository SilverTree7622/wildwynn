import { defineStore } from "pinia";


export const useOverlayStore = defineStore('overlayStore', () => {

    const ShowOverlay = function (overlayName, animationName) {
        console.log('overlayName, animationName: ', overlayName, animationName);
        const overlay = document.getElementById(overlayName);
        console.log('overlay: ', overlay);
        if (!overlay) return;
        overlayName = "overlay-" + overlayName;
        var cssClasses = overlay.className.split(" ");
        var last = cssClasses.slice(-1)[0];
        if (last.lastIndexOf("animate") == -1) {
            overlay.className =
                overlay.className + " " + animationName;
        }
        if (window['loadAsyncSrc'] != undefined) {
            window['loadAsyncSrc']();
        }
    };
    
    const HideOverlay = function (overlayName, animationName) {
        const overlay = document.getElementById(overlayName);
        if (!overlay) return;
        overlayName = "overlay-" + overlayName;
        var cssClasses = overlay.className.split(" ");
        var last = cssClasses.slice(-1)[0];
        if (last.lastIndexOf("animate") != -1) {
            cssClasses.splice(-1);
            cssClasses.push(animationName);
            overlay.className = cssClasses.join(" ");
    
            cssClasses.splice(-1);
            setTimeout(function () {
                overlay.className = cssClasses.join(" ");
            }, 1100);
        }
        var vids = document.getElementsByTagName("video");
        if (vids) {
            for (var i = 0; i < vids.length; i++) {
                var video = vids.item(i);
                video && video.pause();
            }
        }
    };
    
    const closeOutsideOverlay = function (overlay_slug) {
        var overlay_id = `overlay-${overlay_slug}`;
        const overlayElement = document.getElementById(overlay_id);
        if (!overlayElement) return;
        overlayElement.addEventListener(
            `click`,
            function (event) {
                var overlay_id = `overlay-${overlay_slug}`;
                var e = event || window.event;
                var overlayContainer = overlayElement.getElementsByClassName(`${overlay_slug}`);
                if (e.target === overlayElement) {
                    HideOverlay(`${overlay_slug}`, "animate-disappear");
                }
            },
            false
        );
    };
    
    const CloseOnOverlayClick = function (overlay_slug) {
        var overlay_id = `overlay-${overlay_slug}`;
        const overlay = document.getElementById(overlay_id);
        if (!overlay) return;
        overlay.addEventListener(
            `click`,
            function (event) {
                {
                    var overlay_id = `overlay-${overlay_slug}`;
                    var e = event || window.event;
                    var overlayElement = document.getElementById(overlay_id);
                    if (!overlayElement) return;
                    var overlayContainer = overlayElement.getElementsByClassName(`${overlay_slug}`);
                    var clickedDiv = e['toElement'] || e.target;
                    var dismissButton = clickedDiv.parentElement.id == overlay_id;
                    var clickOutsideOverlay = false;
                    if (overlayContainer.length > 0) {
                        {
                            clickOutsideOverlay = !overlayContainer[0].contains(clickedDiv) || overlayContainer[0] == clickedDiv;
                        }
                    }
                    if (dismissButton || clickOutsideOverlay) {
                        {
                            HideOverlay(`${overlay_slug}`, "animate-disappear");
                        }
                    }
                }
            },
            false
        );
    };

    return {
        ShowOverlay,
        HideOverlay,
        closeOutsideOverlay,
        CloseOnOverlayClick,
    };
});