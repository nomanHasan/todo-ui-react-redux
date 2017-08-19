export default (state = [], action ) => {
    switch(action.type){
        case 'CREATE_TODO':
            return [
                ...state,
                Object.assign({}, action.todo)
            ]
            break;
        default:
            return state;
    }
}