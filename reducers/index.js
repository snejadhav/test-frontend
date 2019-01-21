const initialState = {
    id : null,
    role :null,

    userName : null
};
export default function reducer(state = initialState, action={}) {
    switch (action.type) {
        case 'updateInfo':
            console.log("reducer info:", action.payload);
            state.id = action.payload.id;
            state.role = action.payload.role;
            console.log("reducer info state:", state);
            return state;

        case 'updateUser':
            console.log("user name:", action.payload);
            state.userName = action.payload;
            console.log("user:", state);
            return state;

        case  'update_role':
            console.log("reducer role:", action.payload);
            console.log("reducer role state:", state);
            return state;


        default:
            console.log("in default");
            return state;
    }

}

