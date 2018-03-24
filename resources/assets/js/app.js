
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('todo-component', require('./components/Todo.vue'));

export const store = new Vuex.Store({
 state: {
    items: [],
    loading: true
  },
  getters:{},
  actions:{
      loadTodos({commit}){
            window.axios.get('/todos').then(({ data }) => {
        commit('updateTodos', data)
        commit('changeLoadingState', false)
      })
      },
      addTodo({commit},todo){
                 window.axios.post('/todos',todo).then(({ data }) => {
                    commit('addTodo', data)
                });

      },
      removeTodo({commit},id){
                     var self = this;
                    window.axios.delete('/todos/' + id).then(({ data }) => {
                            commit('removeTodo',id);
    });


      },
      toggleDone({commit},id){
          var index = this.state.items.findIndex(todo => todo.id == id);
          var todo = this.state.items[index];
            window.axios.put('/todos/' + id,{done:!todo.done}).then(({ data }) => {
                 commit('toggleDone',todo);
    });
                            
    


      }
  },
  mutations: {
      updateTodos(state, todos) {
      state.items = todos
    },
      addTodo(state, todo) {
      state.items.push(todo);
    },
      removeTodo(state, id) {
          state.items = state.items.filter(item => item.id !== id);
    },
      toggleDone(state, todo) {
          var index = state.items.findIndex(todo => todo.id == todo.id);
          console.log(state.items[index]);
          state.items[index].todo = !state.items[index].todo;
          console.log(state.items[index]);
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    }
  }
});
   
const app = new Vue({
    el: '#app',
    store
});

