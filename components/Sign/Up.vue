<template>
    <div style="margin: 0;" class="h-full">
        <input type="hidden" id="anPageName" name="page" value="frmu95signu95up" />
        <div class="frmu95signu95up screen">
            <div class="frm_-sign_up w-full mx-auto px-auto h-screen">
                <div class="sign_-in_-upper-tap">
                    <a @click="clickSignIn">
                        <div class="tap_-sign_-dis-select">
                            <div class="valign-text-middle text-4 headline2 w-full h-full m-auto">SIGN IN</div>
                        </div>
                    </a>
                    <div class="tap_-sign_-select">
                        <div class="top-rectangle2105"></div>
                        <div class="valign-text-middle text-4 headline2 w-full h-full m-auto">SIGN UP</div>
                    </div>
                </div>
                <div class="sign_-in_-contents sign_-in_">
                    <div class="sign_-in_-title sign_-in_">
                        <h1 class="title valign-text-middle leaguetitle">Welcome to OddisNavi</h1>
                        <p class="sign-up-to-the-bigge valign-text-middle body">
                            Sign up to the biggest sports community<br />in less than a minute
                        </p>
                    </div>
                    <div class="sign_-in_-input_id_pw sign_-in_">
                        <p class="please-enter-your-email-address valign-text-middle body">Please, enter your email
                            address:</p>
                        <div class="txt-input_-sign">
                            <input ref="$email" class="email-address body" name="emailaddress" placeholder="email" type="email"
                                required @input="inputEmail" @keyup="keyUpEnter" />
                        </div>
                        <p v-show="required.email" class="the-email-address-field-is-required valign-text-middle caption">
                            The Email Address Field is required
                        </p>
                        <div class="sign_-in_-password_txt sign_-in_">
                            <div class="create-a-password valign-text-middle body">Create a password:</div>
                        </div>
                        <div class="txt-input_-sign">
                            <input ref="$password" class="email-address body" name="emailaddress" placeholder="password" type="password"
                                required @input="inputPassword" @keyup="keyUpEnter" />
                        </div>
                        <p v-show="required.password" class="your-password-should valign-text-middle caption">
                            Your password should be between 8 and 64 symbols and consist of: One uppercase letter (A
                            –
                            Z), One
                            lowercase letter (a – z), and One number (0 – 9). The password must not match the
                            username.
                        </p>
                        <div class="sign_-in">
                            <input type="checkbox" class="btn_-sign_-checkbox_-dis-select color-white" @change="changePrivacyPolicy"></input>
                            <p class="i-hereby-confirm-tha valign-text-middle body">
                                I hereby confirm that I have read, understand and accept Terms and Conditions and
                                Privacy Policy
                            </p>
                        </div>
                        <div class="sign_-in">
                            <input ref="$newsletter" type="checkbox" class="btn_-sign_-checkbox_-select" @change="changeNewsletter" checked></input>
                            <!-- <img class="btn_-sign_-checkbox_-select" src="/img/btn-sign-checkbox-select@2x.png"
                                alt="Btn_Sign_Checkbox_Select" /> -->
                            <p class="i-want-to-receive-newsletters valign-text-middle body">I want to receive
                                newsletters</p>
                        </div>
                        <a @click="clickSignUpBtn">
                            <div class="btn_-join_-membership_-blue" :class="getBtnEnable()">
                                <div class="join valign-text-middle headline3 ">SIGN UP</div>
                            </div>
                        </a>
                    </div>
                    <div class="sign_-in_-resister sign_-in_ cursor-pointer">
                        <a @click="clickSignIn" class="already-have-an-account-sign-in valign-text-middle body">
                            Already
                            have an account? Sign
                            In</a>
                    </div>
                    <div class="sign_-in_-social-join body mb-6">
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
    isSignUpAble: <boolean> false,
    receiveNewsletter: <boolean> true,
});

const required = reactive({
    email: <boolean> false,
    password: <boolean> false,
    privacyPolicy: <boolean> false,
});

const $email = ref();
const $password = ref();
const $newsletter = ref();

const clickSignIn = () => {
    authStore.show('signin');
};

const inputEmail = (evt) => {
    validate();
};

const inputPassword = (evt) => {
    validate();
};

const keyUpEnter = async (evt) => {
    if (evt.key !== 'Enter') return;
    await clickSignUpBtn();
};

const validate = (): boolean => {
    if (!$email.value) return false;
    if (!$password.value) return false;
    const res = props.validate($email.value.value, $password.value.value);
    required.email = res.isEmailFailed;
    required.password = res.isPasswordFailed;
    opt.isSignUpAble = !required.email && !required.password;
    return opt.isSignUpAble;
};

const changePrivacyPolicy = (evt) => {
    console.log('evt.target.checked: ', evt.target.checked);
    
};

const changeNewsletter = (evt) => {
    console.log('evt.target.checked: ', evt.target.checked);

};

const getBtnEnable = () => {
    return opt.isSignUpAble ? '' : '!bg-gray-600';
};

const clickSignUpBtn = async () => {
    if (!validate()) return;
    if (props.validate($email.value.value, $password.value.value).isEmailRequireAtMark) {
        toastStore.warn(`in email input @ required`);
        return;
    }
    authStore.show('complete1');
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
@import '@/public/css/sign/frmu95signu95up.css';
</style>