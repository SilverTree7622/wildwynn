<template>
    <div style="margin: 0;" class="h-full">
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
                        <div class="sign_-in-1 sign_-in-4" @click="clickComplete2Team">
                            <div class="sign_-in-2 sign_-in-4">
                                <p class="which-is valign-text-middle biggerbody">Which is your favourite team?</p>
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
                        <a>
                            <div class="sign_-in-1 sign_-in-4"  @click="clickComplete2League">
                                <div class="sign_-in-2 sign_-in-4">
                                    <p class="which-is valign-text-middle biggerbody">Which is leagues do you follow?
                                    </p>
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
                    <a @click="clickContinue">
                        <div class="btn_-join_-membership_-blue">
                            <div class="join valign-text-middle headline3">CONTINUE</div>
                        </div>
                    </a>
                    <div class="sign_-in sign_ body">
                        <p class="set-up-my-profile-later valign-text-middle cursor-pointer" @click="clickContinue">Set up my profile later</p>
                        <div class="go-back valign-text-middle cursor-pointer" @click="clickGoBack">Go back</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

const clickComplete2Team = () => {
    authStore.show('complete2team');
};

const clickComplete2League = () => {
    authStore.show('complete2league');
};

const clickContinue = () => {
    authStore.hide();
};

const clickGoBack = () => {
    authStore.show('complete1');
};

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped>
@import '@/public/css/sign/styleguide.css';
@import '@/public/css/sign/globals.css';
@import '@/public/css/sign/frmu95signu95complate2.css';
</style>