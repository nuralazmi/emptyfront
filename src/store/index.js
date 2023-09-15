
import { createStore } from 'vuex'
import appModule from './modules/app'

const store = createStore({
    modules: {
        app: appModule // app modülünü ekleyin
    }
})
export default store
