import * as firebase from 'firebase'
var config = {
	apiKey: 'AIzaSyC4hLufiryScLWZSW3YuVespdz0McXW6MQ',
	authDomain: 'rocket-agent-7e2b4.firebaseapp.com',
	databaseURL: 'https://rocket-agent-7e2b4.firebaseio.com',
	projectId: 'rocket-agent-7e2b4',
	storageBucket: 'rocket-agent-7e2b4.appspot.com'
}
let myFirebase
if (firebase.apps.length) {
	myFirebase = firebase.app()
} else {
	myFirebase = firebase.initializeApp(config)
}
export default myFirebase.firestore()
// let myFirebase = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
// firebase.initializeApp(config);
// let myFirebase =  firebase.database();
// export default myFirebase.database()
