import {BUY_BOOK} from './bookType';

const initialState = {
    numberOfBooks:15
}

const BookReducer=(state=initialState, action)=>{
    switch (action.type){
     case BUY_BOOK : return{
            ...state,
            numberOfBooks: state.numberOfBooks-action.payload
    }
    default : return state;
}
}

export default BookReducer;