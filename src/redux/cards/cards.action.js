import CardsType from './cards.type';


export const setCards = cards => ({
    type: CardsType.LOAD_CARD_DATA,
    payload: cards
});