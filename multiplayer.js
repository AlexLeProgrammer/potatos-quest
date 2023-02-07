// configuration de la base de donnee
const firebaseConfig = {
    databaseURL: "https://potato-s-quest-default-rtdb.europe-west1.firebasedatabase.app"
};
  
// initialize firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// constantes
const DB_ID = (parseInt(Math.random() * 100000)).toString();

// variables globales
playersDatas = [];
playersId = [];

// ajoute les donnees dans la base de donnees
function sendPlayerPosition(x, y) {
    var listRef = database.ref('players/' + DB_ID);
    listRef.set({
        x: x,
        y: y,
    });
}

// recupere les joueurs
function getDatas() {
    var listRef = database.ref('players');
    listRef.get().then((snapshot) => {
    if (snapshot.exists()) {
        playersDatas = Object.values(snapshot.val());
        playersId = Object.keys(snapshot.val());
    }});
}

// supprime les joueurs
function removePlayers() {
    var listRef = database.ref('players');
    listRef.remove();
}