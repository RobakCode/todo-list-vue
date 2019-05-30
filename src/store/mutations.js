import Vue from 'vue';
import { TASK_ADD_NEW, MOVE_TAKS_TO, REMOVE_TAKS } from './mutations-types';

export default {
  [TASK_ADD_NEW](state, { title, description = '' } = {}) {
    const nextIndex = Math.max(Object.keys(state.tasks)) + 1;
    const newToDo = [...state.todo, nextIndex];
    const newTasks = Object.assign(state.tasks, {
      [nextIndex]: { id: nextIndex, title, description },
    });
    Vue.set(state, 'todo', newToDo);
    Vue.set(state, 'tasks', newTasks);
  },
  [MOVE_TAKS_TO](state, { list, newList, id } = {}) {
    Vue.set(state, list, state[list].filter(x => x !== id));
    Vue.set(state, newList, [...state[newList], id]);
  },
  [REMOVE_TAKS](state, { list, id } = {}) {
    const newTasks = state.tasks;
    delete newTasks[id];
    Vue.set(state, list, state[list].filter(x => x !== id));
    Vue.set(state, 'tasks', newTasks);
  },
};
