import Realm from './index';
import {USER_FAVOURITES} from './Users';


export const addFavourites = (favourite, id) => {
    Realm.write(async() => {
        const resp = Realm.create(USER_FAVOURITES, { favouriteSports: favourite, decathalonId: id });
        console.log(typeof resp, resp)
    });
}

export const deleteFavourites = id => {
    Realm.write(async() => {
        const resp = Realm.objectForPrimaryKey(USER_FAVOURITES, id);
        console.log(typeof resp, resp)
        Realm.delete(resp)
    });
}

export const getAllFavourites = () => {
    const resp = Realm.objects(USER_FAVOURITES)
    return resp.map(item => item.decathalonId)
}