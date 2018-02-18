import { User } from "./user.interface";

//Typescript weiss nicht, dass wir firebase importieren, deshalb der Trick, mit <declare>
//declare erzeugt eine Art globale Variable in dieser Datei
//Alternativer und schönerer Weg: firebase über npm installieren und regulär mit einem Import-Statement importieren
declare var firebase: any;

export class AuthService {
    signupUser(user: User) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .catch(function(error) {
            console.log(error)
        });
    }
    
    signinUser(user: User) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .catch(function(error) {
            console.log(error)
        });
    }
}