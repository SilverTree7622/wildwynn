<template>
    <div class="frmu95signu95complate2 screen">
        <div class="sign_-in_-contents sign_-in_">
            <div class="sign_-in sign_">
                <h1 class="title valign-text-middle leaguetitle">Hooray!</h1>
                <p class="now-lets-setup-your-profile valign-text-middle body">Now Let’s Setup Your Profile</p>
            </div>
            <div class="sign_-in_-profile sign_-in_">
                <img class="non_-available_-player1_-cirle" src="/img/non-available-player1-cirle-1@2x.png"
                    alt="Non_Available_Player1_Cirle" />
            </div>
            <div class="sign_-in_-input_-nickname_-coun">
                <div class="sign_-in_-nickname sign_-in_">
                    <div class="nickname valign-text-middle biggerbody">Nickname</div>
                    <div class="frame-568">
                        <div class="flag_-circle_br"></div>
                        <div class="country valign-text-middle body">Country</div>
                    </div>
                </div>
                <div class="sign_-in_country sign_">
                    <div class="sign_-in-1 sign_-in-4">
                        <div class="sign_-in-2 sign_-in-4">
                            <p class="which-is valign-text-middle biggerbody">Which is your favourite teame?</p>
                            <p class="you valign-text-middle body">
                                The first team you select will be visible next to your abatar.
                            </p>
                        </div>
                        <div class="sign_-in-3 sign_-in-4">
                            <div class="img_-profile_-add">
                                <div class="text-4 valign-text-middle title">+</div>
                            </div>
                        </div>
                    </div>
                    <a onclick="ShowOverlay('frmu95signu95complate2u95selectyourleagues', 'animate-appear');">
                        <div class="sign_-in-1 sign_-in-4">
                            <div class="sign_-in-2 sign_-in-4">
                                <p class="which-is valign-text-middle biggerbody">Which is leagues do you follow?</p>
                                <p class="you valign-text-middle body">You can always add more.</p>
                            </div>
                            <div class="sign_-in-3 sign_-in-4">
                                <div class="img_-profile_-add">
                                    <div class="text-4 valign-text-middle title">+</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <a href="javascript:HideOverlay('frmu95signu95complate2', 'animate-disappear');">
                    <div class="btn_-join_-membership_-blue">
                        <div class="join valign-text-middle headline3">CONTINUE</div>
                    </div>
                </a>
                <div class="sign_-in sign_ body">
                    <p class="set-up-my-profile-later valign-text-middle">Set up my profile later</p>
                    <div class="go-back valign-text-middle">Go back</div>
                </div>
            </div>
        </div>

        <SignComplete2SelectLeague />
    </div>
</template>

<script setup lang="ts">

const ShowOverlay = function (overlayName, animationName) {
    overlayName = "overlay-" + overlayName;
    console.log('overlayName: ', overlayName);
    let overlayEle = document.getElementById(overlayName);
    if (!overlayEle) return;
    var cssClasses = overlayEle.className.split(" ");
    var last = cssClasses.slice(-1)[0];
    if (last.lastIndexOf("animate") == -1) {
        overlayEle.className =
            overlayEle.className + " " + animationName;
    }
    if (window['loadAsyncSrc'] !== undefined) {
        window['loadAsyncSrc']();
    }
};

const HideOverlay = function (overlayName, animationName) {
    overlayName = "overlay-" + overlayName;
    let overlayEle = document.getElementById(overlayName);
    if (!overlayEle) return;
    var cssClasses = overlayEle.className.split(" ");
    var last = cssClasses.slice(-1)[0];
    if (last.lastIndexOf("animate") != -1) {
        cssClasses.splice(-1);
        cssClasses.push(animationName);
        overlayEle.className = cssClasses.join(" ");

        cssClasses.splice(-1);
        setTimeout(function () {
            overlayEle.className = cssClasses.join(" ");
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
    let overlayEle = document.getElementById(overlay_id);
    if (!overlayEle) return;
    overlayEle.addEventListener(
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

onMounted(async () => {
    await nextTick();
    // closeOutsideOverlay("left");
    // closeOutsideOverlay("frmu95signu95in");
    // closeOutsideOverlay("frmu95signu95up");
    closeOutsideOverlay("frmu95signu95complate1u95selectcountry");
    // closeOutsideOverlay("frmu95signu95complate2u95selectyourleagues");
});

</script>

<style scoped>
@import '@/public/css/sign/styleguide.css';
@import '@/public/css/sign/globals.css';
@import '@/public/css/sign/frmu95signu95complate1.css';
@import '@/public/css/sign/frmu95signu95complate1u95selectcountry.css';
</style>