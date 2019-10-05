const defaultState = {
    'holder': 'add something',
    'list': ['做事情A', '做事情B'],
    'inputValue': 'ha'
};
export default (state = defaultState, action) => {

    // console.log(state, action);
    //Reducer里只能接受state，不能改变state
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state));//深度拷贝
        newState.inputValue = action.value;
        return newState;
    } else if (action.type === 'addItem') {
        let newstate = JSON.parse(JSON.stringify(state));
        newstate.list.push(newstate.inputValue);
        newstate.inputValue = '';
        return newstate;
    }
    return state
}