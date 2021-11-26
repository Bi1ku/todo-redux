export const addNewTask = (task) => {
  return {
    type: 'ADD_TASK',
    newTask: { task, isComplete: false },
  };
};

export const completeTask = (index) => {
  return {
    type: 'COMPLETE_TASK',
    index,
  };
};

export const deleteTask = (index) => {
  return {
    type: 'DELETE_TASK',
    index,
  };
};
