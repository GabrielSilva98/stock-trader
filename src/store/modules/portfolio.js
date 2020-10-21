export default {
    state: {
        funds: 1000,
        stocks: []
    },
    mutations: {
        buyStock(state, { stockId, quantity, stockPrice}){
            const findStockById = stock => stock.id == stockId
            const record = state.stocks.find(findStockById)
            const stock = { id: stockId, quantity }
            record ? record.quantity += quantity : state.stocks.push(stock)
            state.funds -= stockPrice * quantity
        },
        sellStocks(state, { stockId, quantity, stockPrice }){
            const findStockById = stock => stock.id == stockId
            const record = state.stocks.find(findStockById)
            record.quantity > quantity 
                ? record.quantity -= quantity 
                : state.stocks.splice(state.stocks.indexOf(record),1)
            
             state.funds += stockPrice * quantity
        },
        setPortfolio(state, {funds, stockPortfolio}){
            state.funds = funds 
            state.stocks = stockPortfolio ? stockPortfolio : [] 
        }
    },
    actions: {
        sellStock({ commit }, order){
            commit('sellStocks', order)
        }
    },
    getters: {
        stockPortfolio(state, getters){
            return state.stocks.map(({ id, quantity }) => {
                const {name, price} = getters.stocks.find(element => element.id == id)
                return {id, quantity, name, price }
            })
        },
        funds(state){
            return state.funds
        }
    }
}