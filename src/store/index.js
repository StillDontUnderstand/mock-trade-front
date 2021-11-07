import { createStore } from 'vuex'


const actions = {

}
const mutations = {

}
const state = {

}

const store = createStore({
    state() {
        return {
            myValue: 0
        };
    },
    mutations: {
        increment(state, value) {
            state.myValue += value;
        }
    },
    getters: {
        getTodos(state) {
            return state.todos;
        },
        todoCount(state) {
            return state.todos.length;
        }
    }
});
export { store }