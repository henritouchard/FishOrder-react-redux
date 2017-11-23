
export const constAddFish = 'ADD_FISH';
export const constLoadFishes = 'LOAD_FISHES';
export const constNewOrder = 'NEW_ORDER'

//fonction ajouter un poisson
export function actionAddFish(id, newFish){
    return {
        type: constAddFish,
        id,
        payload: newFish
    };
}


//load les poissons depuis le fichier sample-fishes
export function actionLoadFishes(fishesList){
    return {
        type: constLoadFishes,
        payload: fishesList
    };
}

//order fish
export function actionOrderFish(fishIndex){
    return {
        type: constNewOrder,
        payload: fishIndex
    };
} 