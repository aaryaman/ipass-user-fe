<template>
    <div class="page-wrap">
        <div class="dashboard-container">
            <logo />
            <router-view />
        </div>
    </div>
</template>
<script>
import Logo from '../components/Logo.vue';

export default {
    components: { Logo }
};
</script>
