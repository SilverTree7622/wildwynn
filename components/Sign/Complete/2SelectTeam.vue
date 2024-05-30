<template>
    <div style="margin: 0;" class="h-full">
        <input type="hidden" id="anPageName" name="page" value="frmu95signu95complate2u95selectyourteams1" />
        <div class="frmu95signu95complate2u95selectyourteams1 screen">
            <div class="sign_-in_-contents sign_-in_">
                <div class="sign_-in_-title sign_-in_">
                    <a @click="clickBack">
                        <img
                            class="icon_-line-arrow-1" src="/img/icon-linearrow-9@2x.png" alt="Icon_LineArrow" />
                    </a>
                    <div class="select-your-teams valign-text-middle headline2">SELECT YOUR TEAMS</div>
                    <div class="empty"></div>
                </div>
                <div class="sign_-in_-country_-serch_-select">
                    <div class="navbar">
                        <div class="navbar-link valign-text-middle body">You have</div>
                        <div class="navbar-link-number valign-text-middle biggerbody">00</div>
                        <div class="navbar-link valign-text-middle body">free slots out of</div>
                        <div class="navbar-link-number valign-text-middle biggerbody">00</div>
                    </div>
                    <div class="sub-header">
                        <div class="frame-321">
                            <div class="btn_sportsicon_-container">
                                <div class="btn_-sports-icon">
                                    <div class="icon_-container">
                                        <div class="icon_-square_-football icon_-square_">
                                            <img class="icon_-football" src="/img/icon-football@2x.png"
                                                alt="Icon_Football" />
                                            <div class="football body2">FOOTBALL</div>
                                        </div>
                                        <div class="btn_-sports-icon_-hover">
                                            <div class="rectangle-13"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn_-sports-icon">
                                    <div class="icon_-container">
                                        <div class="icon_-square_-basketball icon_-square_">
                                            <img class="icon_-basketball" src="/img/icon-basketball@2x.png"
                                                alt="Icon_Basketball" />
                                            <div class="basketball body2">BASKETBALL</div>
                                        </div>
                                        <div class="btn_-sports-icon_-hover">
                                            <div class="rectangle-13"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn_-sports-icon">
                                    <div class="icon_-container">
                                        <div class="icon_-square_-baseball icon_-square_">
                                            <img class="icon_-baseball" src="/img/icon-baseball@2x.png"
                                                alt="Icon_Baseball" />
                                            <div class="baseball body2">BASEBALL</div>
                                        </div>
                                        <div class="btn_-sports-icon_-hover">
                                            <div class="rectangle-13"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn_-sports-icon">
                                    <div class="icon_-container">
                                        <div class="icon_-square_-vollyball icon_-square_">
                                            <img class="icon_-vollyball" src="/img/icon-vollyball@2x.png"
                                                alt="Icon_Vollyball" />
                                            <div class="vollyball body2">VOLLYBALL</div>
                                        </div>
                                        <div class="btn_-sports-icon_-hover">
                                            <div class="rectangle-13"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn_-sports-icon">
                                    <div class="icon_-container">
                                        <div class="icon_-square_-tennis icon_-square_">
                                            <img class="icon_-tennis" src="/img/icon-tennis@2x.png" alt="Icon_Tennis" />
                                            <div class="tennis body2">TENNIS</div>
                                        </div>
                                        <div class="btn_-sports-icon_-hover">
                                            <div class="rectangle-13"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn_-sports-icon">
                                    <div class="icon_-container">
                                        <div class="icon_-square_-icehockey icon_-square_">
                                            <img class="icon_-icehackey" src="/img/icon-icehackey@2x.png"
                                                alt="Icon_Icehackey" />
                                            <div class="icehockey body2">ICEHOCKEY</div>
                                        </div>
                                        <div class="btn_-sports-icon_-hover">
                                            <div class="rectangle-13"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sign_-in_-teams_-searcher sign_-in_-teams_">
                        <img class="x1" src="/img/-1-2@2x.png" alt="1" />
                        <input class="search body" name="search" placeholder="search" type="text" required />
                    </div>
                    <div class="sign_-in_-teams_-table sign_-in_-teams_ body">
                        <a onclick="ShowOverlay('frmu95signu95complate2u95selectyourteams2', 'animate-appear');">
                            <article class="row">
                                <div class="cell-3 cell-4">
                                    <div class="content content-3">
                                        <div class="img_-pouplar_-teams_-select">
                                            <img class="star124523" src="/img/star124523@2x.png" alt="Star124523" />
                                        </div>
                                    </div>
                                </div>
                                <div class="cell cell-4">
                                    <div class="content-1 content-3">
                                        <div class="teams">Poular teams</div>
                                    </div>
                                </div>
                                <div class="cell-1 cell-4" @click="clickTeamDetail">
                                    <div class="content-2 content-3">
                                        <img class="icon_-line-arrow" src="/img/icon-linearrow-2@2x.png"
                                            alt="Icon_LineArrow" />
                                    </div>
                                </div>
                            </article>
                        </a>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Brazil</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4" @click="clickTeamDetail">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-2@2x.png" alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_cl flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Chilie</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4" @click="clickTeamDetail">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-2@2x.png" alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_eng flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">England</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4" @click="clickTeamDetail">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-2@2x.png" alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_kor flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Korea</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4" @click="clickTeamDetail">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-2@2x.png" alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_uk flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">United Kingdom</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4" @click="clickTeamDetail">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-2@2x.png" alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_us flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">United States</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4" @click="clickTeamDetail">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-2@2x.png" alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-9@2x.png" alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                        <article class="sign_-in_-teams_-table-item">
                            <div class="cell-2 cell-4">
                                <div class="content content-3">
                                    <div class="flag_-circle_br flag_"></div>
                                </div>
                            </div>
                            <div class="cell cell-4">
                                <div class="content-1 content-3">
                                    <div class="teams">Teams</div>
                                </div>
                            </div>
                            <div class="cell-1 cell-4">
                                <div class="content-2 content-3">
                                    <img class="icon_-line-arrow" src="/img/icon-linearrow-5@2x.png"
                                        alt="Icon_LineArrow" />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

const ShowOverlay = function (overlayName, animationName) {
    overlayName = "overlay-" + overlayName;
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
        }, 100);
    }
    var vids = document.getElementsByTagName("video");
    if (vids) {
        for (var i = 0; i < vids.length; i++) {
            var video = vids.item(i);
            video && video.pause();
        }
    }
};

const clickTeamDetail = () => {
    authStore.show('complete2teamdetail');
    HideOverlay('frmu95signu95complate2u95selectyourteams1', 'animate-disappear');
};

const clickBack = () => {
    authStore.show('complete2');
    HideOverlay('frmu95signu95complate2u95selectyourteams1', 'animate-disappear');
};

onMounted(async () => {
    await nextTick();
    ShowOverlay('frmu95signu95complate2u95selectyourteams1', 'animate-appear');
});
</script>

<style scoped>
@import '@/public/css/sign/complete2select/styleguide.css';
@import '@/public/css/sign/complete2select/globals.css';
@import '@/public/css/sign/complete2select/frmu95signu95complate2u95selectyourteams1.css';
/* @import '@/public/css/sign/complete2select/frmu95signu95complate2u95selectyourteams2.css'; */
</style>