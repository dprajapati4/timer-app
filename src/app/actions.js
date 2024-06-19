export const ADD_TASK = 'ADD_TASK'

export const addTask = (taskName, time) => ({
    type: ADD_TASK,
    payload: {taskName, time}
})