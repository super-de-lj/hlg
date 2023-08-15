var initState: any = {
    userInfo: {},
    hgBreadcrumb: [],
    collapsed: false,
    DrawerFlag: false,
    DrawerDetail: {},
    TableState: false
}

export var reducer = (state = initState, action: any) => {
    var newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'save_user':
            newState.userInfo = action.payload;
            return newState;
        case 'REMOVE_USER':
            newState.userInfo = {};
            return newState;
        case 'SET_BREAD':
            newState.hgBreadcrumb = action.payload;
            return newState;
        case 'TOGGLE_Collapsed':
            newState.collapsed = !newState.collapsed;
            return newState;
        case 'UPDATE_DRAW':
            newState.DrawerFlag = action.payload;
            return newState;
        case 'ADD_Drawer':
            newState.DrawerDetail = action.payload;
            return newState;
        case 'UPDATE_TABLE':
            newState.TableState = !newState.TableState;
            return newState;
        default:
            return state
    }
}