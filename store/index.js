export const state = () => ({
    bid:''
})

export const mutations = {
    SET_BID(state, bid){
        state.bid = bid
    }
}

export const actions = {

    async send({state}, payload){
        const result = await this.$axios.post('http://localhost:8080/process', payload)
        return result.data
    }
}