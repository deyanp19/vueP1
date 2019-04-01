// import items from '../components/list'

const state = {
    // items:[2,3,3]
    items:3,
    flavor:'e2'
}
const getters = {
    getItems: state => 
        state.items,
    
    flavor: state => state.flavor
}

const mutations = {
    addItems: state =>  {
        state.items.push(addItems);
    } ,
    change: (state, flavor) =>
        state.flavor = flavor
      
}
const actions = {
   addItems:  ({ commit }) => commit('addItems')
}
    
 
export default {
    state, 
    getters, 
    actions, 
    mutations
}
 