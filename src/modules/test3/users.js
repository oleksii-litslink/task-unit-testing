// This test begins with the first user logged in.
// In a production app this would of course be serverside.
import { Ability } from '@casl/ability';

export const users = [
  { username: 'Erik', password: 'Kire', abilities: [{ action: 'manage', subject: 'all' }] },
  { username: 'Olof', password: 'Folo', abilities: [{ action: 'read', subject: 'messages' }] },
];

let currentUser;
let currentAbility;

function login(username, password) {
  currentUser = users.find((user) => user.username === username && user.password === password);
  currentAbility = new Ability(currentUser.abilities);
}

login(users[0].username, users[0].password);

export default {
  dispatch: {
    login,

    async fetch() {
      return new Promise((resolve, reject) => setTimeout(() => {
        if (currentAbility.can('read', 'destiny')) {
          resolve(`Data can been fetched by ${currentUser.username} at ${Date.now()}`);
        } else {
          reject(`Data cannot be fetched by ${currentUser.username} at ${Date.now()}`);
        }
      }, Math.random() * 1000));
    },
  },
};
