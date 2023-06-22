import {ADD_NOTE,DELETE_NOTE} from '../actions/noteActions'


const initialState={
    notes:[
     

    ]
}


 function noteReducer (state=initialState,action){
  switch(action.type){
    case ADD_NOTE:
        return {
            ...state,
            notes:[
                ...state.notes,
                { 
                    text:action.text,
                    createdOn: new Date()
                }
            ]
        
    }
    case DELETE_NOTE:
        console.log('before delte',state.notes)
        state.notes.splice(action.index,1);
        console.log('after delte',state.notes)
        console.log('come to delete',action.index)
        return{
            ...state,
           notes:[...state.notes]
        }
     default:
        return state;   
  }

}
export default noteReducer;