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
var playersDatas = [];
var playersId = [];
var firstPlayerDB = 0;

// enemi
var enemyX = [];
var enemyY = [];
var enemyLife = [];
var targetX = [];
var targetY = [];
var enemyFramesCounter = [];
var enemyWaitTime = [];
var enemyAttackTime = [];
var enemyAttackCountdown = [];

// ajoute la position du joueur dans la base de donnee
function sendPlayerDatas(x, y, isAttacking, isSwordInHand, isSwordReversed, isMoving) {
    var listRef = database.ref('players/' + DB_ID);
    listRef.set({
        x: x,
        y: y,
        isAttacking: isAttacking,
        isSwordInHand: isSwordInHand,
        isSwordReversed: isSwordReversed,
        isMoving: isMoving
    });
}

// ajoute les donnees des enemis dans la base de donnee
function sendEnemisDatas() {
    var listRef = database.ref('enemis');
    listRef.set({
        enemyX: enemyX,
        enemyY: enemyY,
        enemyLife: enemyLife,
        targetX: targetX,
        targetY: targetY,
        enemyFramesCounter: enemyFramesCounter,
        enemyWaitTime: enemyWaitTime,
        enemyAttackTime: enemyAttackTime,
        enemyAttackCountdown: enemyAttackCountdown
    });
}

// recupere les joueurs
function getPlayerDatas() {
    var listRef = database.ref('players');
    listRef.get().then((snapshot) => {
    if (snapshot.exists()) {
        playersDatas = Object.values(snapshot.val());
        playersId = Object.keys(snapshot.val());
    }});
}

// recupere les donnees des enemis
function getEnemisDatas() {
    var listRef = database.ref('enemis');
    listRef.get().then((snapshot) => {
    if (snapshot.exists()) {
        enemyX = snapshot.val().enemyX;
        enemyY = snapshot.val().enemyY;
        enemyLife = snapshot.val().enemyLife;
        targetX = snapshot.val().targetX;
        targetY = snapshot.val().targetY;
        enemyFramesCounter = snapshot.val().enemyFramesCounter;
        enemyWaitTime = snapshot.val().enemyWaitTime;
        enemyAttackTime = snapshot.val().enemyAttackTime;
        enemyAttackCountdown = snapshot.val().enemyAttackCountdown;
    }});
}

// definit le premier joueur
function getFirstPlayer() {
    var listRef = database.ref('players/firstplayer');
    listRef.get().then((snapshot) => {
    if (snapshot.exists()) {
        firstPlayerDB = snapshot.val().id;
    } else {
        // definit le joueur comme premier joueur
        listRef.set({
            id: DB_ID
        });
    }});
}

// supprime les joueurs
function removePlayers() {
    var listRef = database.ref('players');
    listRef.remove();
}

// supprime les joueurs
removePlayers();

// recupere les donnees enemis
getEnemisDatas();
