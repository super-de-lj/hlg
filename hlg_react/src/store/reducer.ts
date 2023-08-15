const initiaState = {
    tel: '',
    token: '',
    userid: ''
}
interface actionType {
    type: string,
    payload: any
}
// import { combineReducers } from 'redux'

//纯函数
//参数一: state , 之前的state状态
//参数二: action , 触发的action动作
var reducer = (state = initiaState, action: actionType) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'UPDATE_TEL':
            newState.tel = action.payload
            return newState;
        case 'UPDATE_TOKEN':
            newState.token = action.payload
            return newState;
        case 'UPDATE_USERID':
            newState.userid = action.payload
            return newState;
        case 'DELETE_ALL':
            newState.userid = ''
            newState.token = ''
            newState.tel = ''
            return newState;
        default:
            return state;
    }
}

export default reducer;