export const createTodo = (todo) => {
    return {
        type: 'CREATE_TODO',
        todo: todo
    }
}