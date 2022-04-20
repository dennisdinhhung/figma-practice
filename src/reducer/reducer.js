import { ACTIONS } from "./action";

export const initialState = {
    users: localStorage.getItem('figma') ? JSON.parse(localStorage.getItem('figma')) : [],
    user: {
        id: '',
        name: '',
        phone: '',
        address: '',
        email: '',
        pref: '',
        dob: ''
    }
}

const reducer = (state, action) => {
    switch (action.type){
        case ACTIONS.SET_STATE_INFO:
            return {
                ...state,
                user: action.payload
            }
        case ACTIONS.RESET_STATE_INFO:
            return initialState
        case ACTIONS.ADD_INFO:
            const newAddList = [...state.users];

            // create a new id
            let inputId = Math.floor(Math.random()*10000);

            //set the payload's id as id
            action.payload.id = inputId;

            newAddList.push(action.payload);

            localStorage.setItem('figma', JSON.stringify(newAddList));

            return{
                users: [...newAddList],
                user: initialState.user
            }
        case ACTIONS.EDIT_INFO:
            return{
                ...state,
                user: action.payload
            }
        case ACTIONS.UPDATE_INFO:
            const newUpdateList = [...state.users];
            
            let rowToUpdate = 0;

            for (let i = 0; i < state.users.length; i++){
                if ( state.users[i].id === action.payload.id ){
                    rowToUpdate = state.users[i]
                }
            }

            const indexUpdate = state.users.indexOf(rowToUpdate)

            newUpdateList[indexUpdate] = action.payload;

            localStorage.setItem('figma', JSON.stringify(newUpdateList))

            return{
                users: [...newUpdateList],
                user: initialState.user
            }
        case ACTIONS.DEL_INFO:
            const indexDel = state.users.indexOf(action.payload);

            const newDelList = [...state.users];

            newDelList.splice(indexDel, 1);

            localStorage.setItem('figma', JSON.stringify(newDelList));

            return{
                ...state,
                users: [...newDelList]
            }
        default:
            return state
    }
}

export default reducer;