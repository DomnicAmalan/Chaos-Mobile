export const USER_FAVOURITES = "USER_FAVOURITES";
export const USER_FAVOURITES_SCHEMA = {
  name: USER_FAVOURITES,
  properties: {
    favouriteSports: {type: 'int', indexed: true}
  }
}

export const USER_PERMISSIONS = "USER_PERMISSIONS";
export const USER_PERMISSIONS_SCHEMA = {
  name: USER_PERMISSIONS,
  properties: {
    location: {type: 'bool'},
    notification: {type: 'bool'},
  }
}

export const USER_LOCATION = "USER_LOCATION";
export const USER_LOCATION_SCHEMA = {
  name: USER_LOCATION,
  properties: {
    latitude: {type: 'string', indexed: true},
    longitude: {type: 'string', indexed: true},
    time: {type: 'string', indexed: true}
  }
}

