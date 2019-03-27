// import items from '../components/list'

const state = {
    items:[]
};

const getters = {
    // return all the items from the array
    allItems: state => state.items
};

const actions = {
    //rootState gets all the data in vuex state;  
    getItems: function({rootState}){
       this.items;
       

    }
}

const mutations = {
    //
    setItems: (state, items) => {
        // 
        state.items = items;
    } 
}

export default {
    state, 
    getters, 
    actions, 
    mutations
}