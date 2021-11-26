const todos = (state = [{ task: 'Study', isComplete: false }], actions) => {
  const nextState = [...state];
  switch (actions.type) {
    case 'ADD_TASK':
      nextState.push(actions.newTask);
      return nextState;
    case 'COMPLETE_TASK':
      nextState[actions.index].isComplete =
        !nextState[actions.index].isComplete;
      return nextState;
    case 'DELETE_TASK':
      nextState.splice(actions.index, 1);
      return nextState;
    default:
      return nextState;
  }
};

export default todos;
