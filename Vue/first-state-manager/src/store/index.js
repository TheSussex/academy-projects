import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'vuex-todo'
})

export default new Vuex.Store({
  state: {
    todoItems: [
      {
        title: 'Eat',
        isComplete: false,
        description: 'List groups are a flexible and powerful component for displaying a series of content. List group items can be modified to support just about any content within. They can also be used as navigation via various props.',
        id: 1,
      },
      {
        title: 'Sleep',
        isComplete: false,
        description: 'List groups are a flexible and powerful component for displaying a series of content. List group items can be modified to support just about any content within. They can also be used as navigation via various props.',
        id: 2,
      },
      {
        title: 'Code',
        isComplete: false,
        description: 'List groups are a flexible and powerful component for displaying a series of content. List group items can be modified to support just about any content within. They can also be used as navigation via various props.',
        id: 3,
      },
    ],
    deletedItems: []    
  },
  mutations: {
    updateTodoItems: (state, payload) => { state.todoItems.push(payload) },
    updateDeletedItems: (state, payload) => { statedeletedItems.push(payload) } 
  },
  actions: {
    addTodoItem: function (context, payload) {
      /*
      @params payload
      payload = {
        item: String,
        description:String
      }
      */
     let currentId = 0
     const idArray = []
     //context is how we communivate with the mutations, getters and state
     context.state.todoItems.forEach(item => {
       idArray.push(item.id)
     }),
     currentId = idArray.length ? Math.max(...idArray) : 0
     const data = {
       ...payload,
       id: currentId + 1,
       isComplete: false
     }
     context.commit('updateTodoItems', data) // to update state with new input data
    },
    deleteTodoItem: function (context, payload) {
      const currentTodo = context.getters.getTodoById(payload)
      console.log(currentTodo);
    }
  },
  getters: {
    getTodoItems: (state) => state.todoItems,
    getTodoById: (state) => (id) => {
      return state.todoItems.find(items => items.id === id)
    },
    getDeletedItems: (state) => state.deletedItems
    // alternatively
    // function(state) {
    //   return function(id) {
    //     return state.todoItems.find(items => items.id === id)
    //   }
    // }
  },
  plugins: [vuexLocal.plugin],
  modules: {
  },
});



//   state: {
//     message: 'Welcome to your vuex app',
//     name: 'Success',
//     company: [
//       'Enyata', 
//       'Google',
//       'Andela',
//     ],
//     job: 'Boss',
//     languages: {
//       name: 'Javascript',
//       experience: null,
//     },
//   },
//   mutations: {
//     updateName(state, payload) {
//       state.name = payload;
//     },
//     addLanguage(state, payload) {
//       state.languages.push(payload)
//     },
//     // updateClicks(state) {
//     //   state.click++
//     // },
//     changeJob(state, payload) {
//       state.job = payload;
//     },
//   },
//   actions: {
//     saveData(context, payload) {
//       const { click } = context.state;
//       context.state.message //to access your state
//       context.commit('changeJob', payload.job); //to commit mutation
//       context.commit('updateClick', payload.click);
//       context.dispatch('logToConsole') ///for actions
//       context.getters.getName();
//     }  
//   },
//   getters: {
//     getMessage(state) {
//       return state.message;
//     },
//     getName(state) {
//       return state.name;
//     },
//     // getClickCount(state) {
//     //   return state.click;
//     // },
//     getJob(state) {
//       return state.job;
//     },
//   },
//   modules: {
//   },
// });

// export default new Vuex.Store({
//   state: {
//     message: 'Welcome to your vuex app',
//     name: 'Success',
//     users: ['Abigail', 'Ruqayaah', 'Lani', 'Success', 'Modupe', 'Peculiar'],
//     languages: ['Python', 'Javascript', 'PHP', 'Java', 'Ruby', 'C++'],
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   getters: {
//     getUsers(state) {
//       return state.users;
//     },
//     getLanguages(state) {
//       return state.languages;
//     },
//     getSortedUsers(state) {
//       const valueCopy = [...state.users];
//       return valueCopy.sort()
//     },
//     getSortedLanguages(state) {
//       const valueCopy = [...state.languages];
//       return valueCopy.sort()
//     },
//   },
//   modules: {
//   },
// });
