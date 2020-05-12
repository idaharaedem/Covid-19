import CardsType from './cards.type';

const INITIAL_STATE = {
data: {}
}

const cardsReducer = (state = INITIAL_STATE, action) => {
switch(action.type) {
    
    case CardsType.LOAD_CARD_DATA:
        return {
            ...state,
           data: action.payload
        }
    
    default: 
        return state;
}

}

export default cardsReducer;