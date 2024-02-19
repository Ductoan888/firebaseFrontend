import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// Update the import statement to use curly braces for named exports
import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
    apiKey: "AIzaSyDyfVwslvnl31eHtuE1a_3me4MFamrik4Q",
    authDomain: "careful-voyage-403108.firebaseapp.com",
    projectId: "careful-voyage-403108",
    storageBucket: "careful-voyage-403108.appspot.com",
    messagingSenderId: "949691183765",
    appId: "1:949691183765:web:55127a5d89655fd615a19c",
    measurementId: "G-ZX069KVGKV"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
    return getToken(messaging, {
        vapidKey:
            "BAzlErsS1siHlMcUtk4YSQcF1u2eKTUUEjwmqvOWCwdZYFUw_IIu-Lsko4U5YA1weB01MyAZNCH1yHAcyh935ms",
    })
        .then((currentToken) => {
            if (currentToken) {
                console.log("current token for client: ", currentToken);
                setTokenFound(true);
            } else {
                console.log(
                    "No registration token available. Request permission to generate one."
                );
                setTokenFound(false);
            }
        })
        .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
        });
};


export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
