<template>
    <section class="page-wrap">
        <div class="content-wrap">
            <logo />

            <verify-o-t-p-form></verify-o-t-p-form>
        </div>
    </section>
</template>

<script>
import VerifyOTPForm from '../components/VerifyOTPForm.vue';
import Logo from '../components/Logo.vue';

export default {
    name: 'VerifyOTP',
    props: {
        emailId: String
    },
    components: {
        VerifyOTPForm,
        Logo
    }
};
</script>

<style lang="scss" scoped></style>
