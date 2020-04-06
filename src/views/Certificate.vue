<template>
    <section class="container">
        <div class="columns">
            <div class="column is-half is-offset-one-quarter is-full-mobile">
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
                            <span>Aaryaman Vir</span>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-half">
                            <span
                                class="has-text-weight-bold label is-inline-block"
                                >Gender:</span
                            >
                            <span>M</span>
                        </div>
                        <div class="column is-half">
                            <span
                                class="has-text-weight-bold label is-inline-block"
                                >Age:</span
                            >
                            <span>27</span>
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
                            <div class="box has-text-success" v-if="isValid">
                                <h4>This user has immunity from coronavirus!</h4>
                            </div>
                            <div class="box has-text-danger" v-else>
                                <h4>This user does not have immunity from coronavirus!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    computed: {
        isValid() {
            return this.$route.params.id === 'ASDFGH';
        }
    }
};
</script>
<style lang="scss" scoped>
.label {
    margin-right: 1rem;
}
</style>
