<template>
    <div style="margin: 0;" class="h-full">
        <div class="frmu95signu95complate1 screen">
            <div class="sign_-in_-contents">
                <div class="sign_-in_-title">
                    <h1 class="title valign-text-middle leaguetitle">Hooray!</h1>
                    <p class="now-lets-setup-your-profile valign-text-middle body">Now Let’s Setup Your Profile</p>
                </div>
                <a href="/Gallery" target="_blank">
                    <div class="sign_-in_-profile">
                        <div class="overlap-group">
                            <img class="non_-available_-player1_-cirle" src="/img/non-available-player1-cirle-4@2x.png"
                                alt="Non_Available_Player1_Cirle" />
                            <div class="img_-profile_-add">
                                <div class="text-39 valign-text-middle title">+</div>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="sign_-in_-input_-nickname_-coun">
                    <div class="sign_-in">
                        <div class="x-you valign-text-middle body">Enter your nickname</div>
                        <div class="txt-input_-sign">
                            <input class="email-address body" name="emailaddress" placeholder="search" type="text"
                                required />
                        </div>
                        <p class="x-is valign-text-middle caption">There is already a resistered user with this nickname
                        </p>
                        <p class="your-username-can-co valign-text-middle caption">
                            Your username can contain: uppercase letters (A – Z), lowercase letters (a – z), numbers (0
                            – 9)
                            and
                            spaces.
                        </p>
                    </div>
                    <div class="sign_-in">
                        <div class="x-you valign-text-middle body">Where are you from?</div>
                        <a @click="ShowOverlay('frmu95signu95complate1u95selectcountry', 'animate-appear');">
                            <div class="btn_-sign_-pick-country">
                                <div class="pick-a-country valign-text-middle body">Pick a Country</div>
                                <img class="vector44423e3" src="/img/vector44423e3@2x.png" alt="Vector44423e3" />
                            </div>
                        </a>
                        <p class="x-is valign-text-middle caption">The country field is required</p>
                    </div>
                    <a @click="clickComplete2">
                        <div class="btn_-join_-membership_-blue">
                            <div class="join valign-text-middle headline3">CONTINUE</div>
                        </div>
                    </a>
                </div>
            </div>

            <SignComplete1SelectCountry />
        </div>
    </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

const clickComplete2 = () => {
    authStore.show('complete2');
};

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