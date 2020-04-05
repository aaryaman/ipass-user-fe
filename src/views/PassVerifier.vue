<template>
    <section class="page-content page-wrap">
        <div class="content-wrap">
            <logo />
            <div class="form-wrap">
                <h2 class="has-text-centered">Verify your ImmunoPass</h2>

                <b-field label="Document type">
                    <b-select placeholder="Select one">
                        <option>Mobile No.</option>
                        <option>Aadhar card</option>
                        <option>Voucher No.</option>
                    </b-select>
                </b-field>

                <b-field label="Document Number" label-position="labelPosition">
                    <b-input></b-input>
                </b-field>

                <b-button type="is-primary" :expanded="true">Verify</b-button>
            </div>
        </div>
    </section>
</template>
<script>
import Logo from '../components/Logo.vue';
export default {
    components: {
        Logo
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
    margin-top: 50px;
}
</style>
