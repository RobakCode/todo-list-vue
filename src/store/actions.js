import { TASK_ADD_NEW, MOVE_TAKS_TO, REMOVE_TAKS } from './mutations-types';

const taskAddNew = ({ commit }, params) => {
  commit(TASK_ADD_NEW, params);
};

const taskMoveTo = ({ commit }, params) => {
  commit(MOVE_TAKS_TO, params);
};

const removeTask = ({ commit }, params) => {
  commit(REMOVE_TAKS, params);
};

export default {
  taskAddNew,
  taskMoveTo,
  removeTask,
};
