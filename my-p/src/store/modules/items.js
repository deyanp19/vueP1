// import items from '../components/list'

const state = {
    items:[]
};

const getters = {
    // return all the items from the array
    getItems: state => state.items
};

var mutations = {
    //
    setItems(state)  {
        // 
        state.items.push(item);
    } 
}
const actions = {
    //rootState gets all the data in vuex state;  
    addItem:  ({state, commit}) => commit('setItems')
    }
 
export default {
    state, 
    getters, 
    actions, 
    mutations
}