const INITIAL_STATE = {
    id : '',
    nama : '',
    email : '',
    token : '',
    role : '',
    menu : [],
    defaultUrl: '',
    status : 'NOT LOGIN'
};

const AuthReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        default:
            return state;
        case 'LOGIN':
            const newState = Object.assign({},state,{
                id : action.payload.id,
                nama : action.payload.nama,
                email : action.payload.email,
                token : action.payload.token,
                role : action.payload.role,
                menu : action.payload.menu,
                defaultUrl: action.payload.defaultUrl,
                status : 'SUCCESS',
            })

            return newState;
        case 'LOGOUT':
            return INITIAL_STATE;
    }
};

export default AuthReducer;