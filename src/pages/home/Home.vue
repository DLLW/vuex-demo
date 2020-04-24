<template>
    <div class="home">
        <num-box :count="{numCount}" @countUpdata="countUpdata"></num-box>
        当前购物车数量: {{num}}

        <div>
            {{this.$store.state.count.numCounts}}
        </div>
        <div>当前的新值是{{$store.getters.newNum}}</div>
        <div>
            {{newNum}}
        </div>
    </div>
    
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import numBox from '../../components/numBox'
export default {
    name: 'home',
    components: {
        numBox: numBox, // 别名在前, 实名在后
    },
    data() {
        return {
            numCount: 0,
            allCounts: 0
        }
    },
    computed: {
        ...mapState({
            num: state => state.count
        }),
        ...mapGetters(['newNum'])
    },
    created() {
        let totalCount = localStorage.getItem('counts')
        if(!totalCount) {
            totalCount = 0
            localStorage.setItem('counts', 0)
        }
        this.allCounts = totalCount 
  },
  methods: {
      countUpdata(numCount) {
          this.allCounts = numCount
          
      }
  },
}
</script>
<style lang="">
    
</style>