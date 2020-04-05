import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import LabDetails from '../views/LabDetails.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import VerifyOTP from '../views/VerifyOTP.vue';
import ReEnterEmail from '../views/ReEnterEmail.vue';
import ResetPassword from '../views/ResetPassword.vue';
import Static from '../views/static';
import GetOTP from '../views/static/GetOTP.vue';
import PassVerifier from '../views/PassVerifier.vue';
import Certificate from '../views/Certificate.vue';
// import LabDetails from '../views/static/LabDetails.vue';
import NewDashboard from '../views/static/NewDashboard.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/static',
        component: Static,
        children: [
            {
                path: 'getotp',
                component: GetOTP
            },
            {
                path: 'lab-details',
                component: LabDetails
            },
            {
                path: 'new-dashboard',
                component: NewDashboard
            }
        ]
    },
    {
        path: '/',
        name: Dashboard.name,
        component: Dashboard,
        meta: {
            // auth: true
        },
        children: [
            {
                path: '/verify-otp',
                name: VerifyOTP.name,
                component: VerifyOTP
            },
            {
                path: '/verify',
                name: PassVerifier,
                component: PassVerifier
            },
            {
                path: '/certificate/:id',
                name: Certificate,
                component: Certificate
            }
        ]
    },
    {
        path: '/login',
        name: Login.name,
        component: Login
    },
    {
        path: '/register',
        name: Register.name,
        component: Register
    },
    {
        path: '/reset-password',
        name: ReEnterEmail.name,
        component: ReEnterEmail
    },
    {
        path: '/reset-password/verify-otp',
        name: `ResetPassword${VerifyOTP.name}`,
        component: VerifyOTP
    },
    {
        path: '/reset-password/update',
        name: ResetPassword.name,
        component: ResetPassword
        // beforeEnter: (to, from, next) => {
        //     if (
        //         sessionStorage.getItem('auth') &&
        //         sessionStorage.getItem('email')
        //     ) {
        //         next();
        //     } else next('/login');
        // }
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    routes,
    base: process.env.APPLICATION_PATH,
    mode: process.env.HISTORY_MODE ? 'history' : 'hash'
});

export default router;
