import Realm from "realm";

class UserSchema extends Realm.Object {}

// TODO - Sample
UserSchema.schema = {
  name: 'Users',
  properties: {
    name: 'string',
    cognitoid: 'string'
  }
}

let realm = new Realm({schema: [UserSchema], schemaVersion: 1});

export default realm;