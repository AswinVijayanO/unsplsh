import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyCTwhzI6g_IUcUNv4SgtIvi1QFEZ2DyAp0',
  authDomain: 'https://todo-e6ec9.firebaseio.com',
  databaseURL: 'https://todo-e6ec9.firebaseio.com',
  projectId: 'todo-e6ec9',
  storageBucket: 'todo-e6ec9.appspot.com'
};
let app = Firebase.initializeApp(config);
export const db = app.database();