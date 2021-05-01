import Realm from 'realm';
import {
    USER_FAVOURITES_SCHEMA,
    USER_LOCATION_SCHEMA,
    USER_PERMISSIONS_SCHEMA
} from './Users';

const databaseOptions = {
    path: 'Chaos.realm',
    schema: [ 
        USER_FAVOURITES_SCHEMA,  
        USER_LOCATION_SCHEMA,
        USER_PERMISSIONS_SCHEMA
    ],
    schemaVersion: 0
}

export default new Realm(databaseOptions);