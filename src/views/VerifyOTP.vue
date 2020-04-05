<template>
    <section>
        <div class="content-wrap">
            <verify-o-t-p-form></verify-o-t-p-form>
        </div>
    </section>
</template>

<script>
import VerifyOTPForm from '../components/VerifyOTPForm.vue';

export default {
    name: 'VerifyOTP',
    props: {
        emailId: String
    },
    components: {
        VerifyOTPForm
    }
};
</script>

<style lang="scss" scoped></style>
