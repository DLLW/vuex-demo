<template>
    <div class="nunBox">
        <button @click="numAdd()">+</button>
        <button @click="numAddAsync()">+Async</button>
        <button @click="numAdd2()">+N</button>
        <button @click="numBack()">-1</button>
        <button @click="numBackN()">-N</button>
        <button @click="subNAsyncBtn()">-subNAsyncBtn</button>
        <button @click="subNAsync(11)">-subNAsyncBtn1</button>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    name: 'numBox',
    props: ['count'],
    data() {
        return {
            numCount: 0
        }
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
        ...mapMutations(['sun', 'subN']),
        ...mapActions(['subNAsync']),
        numAdd() {
            this.$store.commit('add')
        },

        numAdd2() {
            this.$store.commit('addN', 2)
        },
        numBack() {
            this.sun()
        },
        numBackN () {
            this.subN(3)
        },
        numAddAsync () {
            /// dispatch 专门用来触发action
            this.$store.dispatch('addAsync')
        },
        subNAsyncBtn () {
            this.subNAsync(10)
        }
    },
}
</script>
