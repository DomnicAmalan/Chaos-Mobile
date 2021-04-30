import Realm from "realm";

class Permissions extends Realm.Object {}

Permissions.schema = {
  name: 'Users',
  properties: {
    name: 'string',
  }
}

let realm = new Realm({schema: [Permissions], schemaVersion: 1});

let task1, task2;
realm.write(() => {
  task1 = realm.create("Users", {
    name: "go grocery shopping",
  });
  task2 = realm.create("Users", {
    name: "go exercise",
  });
  console.log(`created two tasks: ${task1.name} & ${task2.name}`);
});

export default realm;