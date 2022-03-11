import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'

const app = createApp(App)

app.use(VueUniversalModal, {
    teleportTarget: '#modals'
})

app.use(store).use(router).mount('#app')