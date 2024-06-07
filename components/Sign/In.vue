<template>
    <div style="margin: 0" class="h-full">
        <input type="hidden" id="anPageName" name="page" value="frmu95signu95in" />
        <div class="frmu95signu95in screen">
            <div class="frm_-sign_-in w-full mx-auto px-auto h-screen">
                <div class="sign_-in_-upper-tap">
                    <div class="tap_-sign_-select">
                        <div class="top-rectangle2105"></div>
                        <div class="valign-text-middle text-4 headline2 w-full h-full m-auto">SIGN IN</div>
                    </div>
                    <a @click="clickSignUp">
                        <div class="tap_-sign_-dis-select">
                            <div class="valign-text-middle text-4 headline2 w-full h-full m-auto">SIGN UP</div>
                        </div>
                    </a>
                </div>
                <div class="sign_-in_-contents sign_-in_ body">
                    <div class="sign_-in_-title sign_-in_">
                        <h1 class="title valign-text-middle leaguetitle">hey howdy, come on in!</h1>
                    </div>
                    <div class="sign_-in_-input_id_pw sign_-in_">
                        <p class="please-enter-your-email-address valign-text-middle body">Please, enter your email
                            address:
                        </p>
                        <div class="txt-input_-sign">
                            <input ref="$email" class="email-address body" name="emailaddress" placeholder="email" type="email"
                                required @input="inputEmail" @keyup="keyUpEnter" />
                        </div>
                        <p v-show="required.email" class="the valign-text-middle caption">The Email Address Field is required</p>
                        <div class="sign_-in_-password_txt sign_-in_ w-full">
                            <div class="password valign-text-middle body">Password</div>
                            <div class="forgot-your-password valign-text-middle caption cursor-pointer" @click="clickForgotPassword">Forgot your password?</div>
                        </div>
                        <div class="txt-input_-sign">
                            <input ref="$password" class="email-address body" name="emailaddress" placeholder="password" type="password"
                                required @input="inputPassword" @keyup="keyUpEnter" />
                        </div>
                        <p v-show="required.password" class="the valign-text-middle caption">The Password Field is required</p>
                        <a @click="clickSignInBtn">
                            <div class="btn_-join_-membership_-blue" :class="getBtnEnable()">
                                <div class="join valign-text-middle headline3">SIGN IN</div>
                            </div>
                        </a>
                    </div>
                    <div class="sign_-in_-resister sign_-in_">
                        <a @click="clickSignUpBtn" class="no-account-register-here valign-text-middle cursor-pointer">No account?
                            Register here</a>
                        <div class="sign_-in_-resister-item valign-text-middle cursor-pointer" @click="clickTermsConditions">Terms and Conditions</div>
                        <div class="sign_-in_-resister-item valign-text-middle cursor-pointer" @click="clickPrivacyPolicy">Privacy Policy</div>
                    </div>
                    <div class="sign_-in_-social-join mb-6">
                        <div class="sign_-in_-social-join_or-line">
                            <img class="line" src="/img/line29@2x.png" alt="Line29" />
                            <div class="or valign-text-middle headline3">OR</div>
                            <img class="line" src="/img/line30@2x.png" alt="Line30" />
                        </div>
                        <div class="btn_-sign_-social cursor-pointer" @click="clickOAuth('facebook')">
                            <div class="text-2 text-4">Continue with Facebook</div>
                            <img class="logo" src="/img/logo-facebooklogo@2x.png" alt="Logo_facebooklogo" />
                        </div>
                        <div class="btn_-sign_-social cursor-pointer" @click="clickOAuth('google')">
                            <div class="text-3 text-4">Continue with Google</div>
                            <img class="logo" src="/img/logo-googlelogo@2x.png" alt="Logo_googlelogo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    validate: (email: string, password: string) => {
        isEmailFailed: boolean;
        isEmailRequireAtMark: boolean;
        isPasswordFailed: boolean;
    },
}>();

const authStore = useAuthStore();
const toastStore = useToastStore();

const opt = reactive({
    isSignInAble: <boolean> false,
});

const required = reactive({
    email: <boolean> false,
    password: <boolean> false,
});

const $email = ref();
const $password = ref();

const init = () => {
    required.email = false;
    required.password = false;
    opt.isSignInAble = false;
    if ($email.value) $email.value.value = '';
    if ($password.value) $password.value.value = '';
};

const inputEmail = (evt) => {
    validate();
};

const inputPassword = (evt) => {
    validate();
};

const keyUpEnter = async (evt) => {
    if (evt.key !== 'Enter') return;
    await clickSignInBtn();
};

const validate = (): boolean => {
    if (!$email.value) return false;
    if (!$password.value) return false;
    const res = props.validate($email.value.value, $password.value.value);
    required.email = res.isEmailFailed;
    required.password = res.isPasswordFailed;
    opt.isSignInAble = !required.email && !required.password;
    return opt.isSignInAble;
};

const getBtnEnable = () => {
    return opt.isSignInAble ? '' : '!bg-gray-600';
};

const clickForgotPassword = () => {

};

const clickSignUp = () => {
    authStore.show('signup');
};

const clickSignInBtn = async () => {
    if (!validate()) return;
    if (props.validate($email.value.value, $password.value.value).isEmailRequireAtMark) {
        toastStore.warn(`in email input @ required`);
        return;
    }
    // authStore.hide();
};

const clickSignUpBtn = () => {
    clickSignUp();
};

const clickTermsConditions = () => {

};

const clickPrivacyPolicy = () => {

};

const clickOAuth = (company: string) => {
    if (company === 'facebook') {
        
    }
    if (company === 'google')
    {

    }
};

onMounted(async () => {
    await nextTick();

});

onUnmounted(() => {
    // init();
});
</script>

<style scoped>
@import '@/public/css/sign/styleguide.css';
@import '@/public/css/sign/globals.css';
@import '@/public/css/sign/frmu95signu95in.css';
</style>