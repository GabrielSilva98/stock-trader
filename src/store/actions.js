import Vue from 'vue'

export default {
    loadData({ commit }){
        Vue.prototype.$http('data.json').then(res => {
            const {stocks, stockPortfolio, funds } = res.data
            if(res.data) {
                commit('setStocks', stocks)
                commit('setPortfolio', {
                    funds,
                    stockPortfolio
                })
            }
        })
    }
}