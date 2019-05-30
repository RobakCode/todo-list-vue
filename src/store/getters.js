const getTasksList = state => list => state[list].map(id => state.tasks[id]);

export default {
  getTasksList,
};
