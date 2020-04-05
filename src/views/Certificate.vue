<template>
    <div>
        <app-header />
        <section class="page-wrap voucher-section">
            <div class="container">
                <logo />
                <div class="columns">
                    <div
                        class="column is-half is-offset-one-quarter is-full-mobile"
                    >
                        <div class="voucher-details">
                            <h2 class="text-center title">
                                This ImmunoPass is assigned to:
                            </h2>
                            <div class="columns">
                                <div class="column is-full">
                                    <span
                                        class="has-text-weight-bold label is-inline-block"
                                        >Name:</span
                                    >
                                    <span>User Name</span>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-half">
                                    <span
                                        class="has-text-weight-bold label is-inline-block"
                                        >Gender:</span
                                    >
                                    <span>M / F</span>
                                </div>
                                <div class="column is-half">
                                    <span
                                        class="has-text-weight-bold label is-inline-block"
                                        >Age:</span
                                    >
                                    <span>25</span>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-full">
                                    <span
                                        class="has-text-weight-bold label is-inline-block"
                                        >Document:</span
                                    >
                                    <span>Aadhaar Card</span>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-full">
                                    <span
                                        class="has-text-weight-bold label is-inline-block"
                                        >Last 4 digits:</span
                                    >
                                    <span>1234</span>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-full">
                                    <div class="box has-text-success">
                                        <h4>This certificate is valid!</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
    components: { Logo }
};
</script>

<style lang="scss" scoped>
.label {
    margin-right: 1rem;
}
</style>
