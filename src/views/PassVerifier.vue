<template>
    <section>
        <div class="content-wrap">
            <div class="form-wrap" v-if="verifyForm">
                <h2 class="has-text-centered">Verify your ImmunoPass</h2>
                <b-field label="Document type">
                    <b-select placeholder="Select one">
                        <option>Mobile No.</option>
                        <option>Aadhar card</option>
                        <option>Voucher No.</option>
                    </b-select>
                </b-field>
                <b-field label="Document Number" label-position="labelPosition">
                    <b-input v-model="code"></b-input>
                </b-field>
                <b-button
                    type="is-primary"
                    :expanded="true"
                    @click.prevent="submitVerify"
                >
                    Verify
                </b-button>
            </div>
            <div class="form-wrap" v-else>
                <form @submit.prevent.stop>
                    <b-field label="Enter 6 digit OTP">
                        <b-input
                            maxlength="6"
                            type="number"
                            v-model="otp"
                        ></b-input>
                    </b-field>
                    <b-button
                        :disabled="loading"
                        :loading="loading"
                        @click="submitOTP"
                        class="has-text-weight-bold"
                        expanded
                        native-type="submit"
                        type="is-primary"
                        >Verify</b-button
                    >
                </form>
                <br />
                <div class="is-size-6">
                    <span class="m-r-8">Didn’t receive the OTP?</span>
                    <a class="has-text-weight-semibold">Resend OTP</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            verifyForm: true,
            otp: '',
            code: ''
        };
    },
    methods: {
        submitVerify() {
            this.verifyForm = false;
        },
        submitOTP() {
            if (this.otp === '123456') {
                this.$router.push(`/certificate/${this.code}`);
            } else {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `Incorrect OTP. Please try again.`,
                    type: 'is-danger'
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.label-to {
    margin-right: 10px;
    font-weight: 600;
    position: relative;
    top: 8px;
    font-size: 14px;
}

.button.is-primary {
    // margin-top: 50px;
}
</style>
