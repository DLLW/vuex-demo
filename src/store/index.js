import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


// import numCount from './numCount'
  
const store = new Vuex.Store({


    state: {
        count: 0
    },

    mutations: {
        add(state) {
            state.count++
        },
        addN(state, step) {
            state.count += step
        },
        sun(state) {
            state.count--
        },
        subN(state, step) {
            state.count -= step
        }
    },

    actions: {
        addAsync(context) {
            setTimeout(() => {
                context.commit('add')
            }, 1000)
        },
        subNAsync(context, step) {
            setTimeout(() => {
                context.commit('subN', step)
            }, 1000)
        }
    },

    getters: {
        newNum(state) {
            return state.count++
        }
    }

    // modules: {
    //     count: numCount
    // }
})

export default store
