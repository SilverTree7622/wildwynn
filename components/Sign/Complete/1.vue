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
                        <a @click="clickComplete1Country">
                        <!-- <a @click="ShowOverlay('frmu95signu95complate1u95selectcountry', 'animate-appear');"> -->
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
        </div>
    </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

const clickComplete1Country = () => {
    authStore.show('complete1country');
};

const clickComplete2 = () => {
    authStore.show('complete2');
};

onMounted(async () => {
    await nextTick();
});

</script>

<style scoped>
@import '@/public/css/sign/styleguide.css';
@import '@/public/css/sign/globals.css';
@import '@/public/css/sign/frmu95signu95complate1.css';
@import '@/public/css/sign/frmu95signu95complate1u95selectcountry.css';
</style>