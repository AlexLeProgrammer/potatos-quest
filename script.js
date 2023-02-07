// jeu d'aventure rpg "potato's quest"
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

// constantes
const PLAYER_SIZE = 60;
const PLAYER_SWORD_WIDTH = PLAYER_SIZE / 32 * 40;
const PLAYER_ATTACK_WIDTH = PLAYER_SIZE / 32 * 46;
const SWORD_WIDTH = PLAYER_SIZE / 32 * 8;
const SWORD_HEIGHT = PLAYER_SIZE / 32 * 22;
const CLUB_WIDTH = PLAYER_SIZE / 24 * 6;
const CLUB_HEIGHT = PLAYER_SIZE / 24 * 15;
const CARROT_WIDTH = PLAYER_SIZE / 24 * 19;
const CARROT_HEIGHT = PLAYER_SIZE / 24 * 25;
const CARROT_ATTACK_WIDTH = PLAYER_SIZE;
const CARROT_JUMP_HEIGHT = 50;
const PLAYER_SPEED = 4;
const ENEMY_SPEED = 2;
const TERRAIN_UNIT_WIDTH = 1540;
const TERRAIN_UNIT_HEIGHT = 1120;
const MAP_WIDTH = 933;
const MAP_HEIGHT = 700;
const HIT_ZONE = CARROT_HEIGHT - CARROT_HEIGHT / 4;
const CARROT_ATTACK_RANGE = 200;
const PLAYER_MAX_LIFE = 10;
const CARROT_MAX_LIFE = 10;
const HEALTH_BAR_WIDTH = 300;
const HEALTH_BAR_HEIGHT = 50;
const LOAD_DISTANCE = 1500;

// variables globales
// texture
// idle
var player_idle = new Image();
player_idle.src = 'sprites/player/idle.png';

// idle sword
var player_sword_idle = new Image();
player_sword_idle.src = 'sprites/player/idle_sword.png';

// idle reverse sword
var player_Rsword_idle = new Image();
player_Rsword_idle.src = 'sprites/player/idle_Rsword.png';

// run
var player_run = [new Image(), new Image()]
player_run[0].src = 'sprites/player/run_0.png';
player_run[1].src = 'sprites/player/run_1.png';

// run sword
var player_run_sword = [new Image(), new Image()]
player_run_sword[0].src = 'sprites/player/run_sword_0.png';
player_run_sword[1].src = 'sprites/player/run_sword_1.png';

// run reversed sword
var player_run_Rsword = [new Image(), new Image()]
player_run_Rsword[0].src = 'sprites/player/run_Rsword_0.png';
player_run_Rsword[1].src = 'sprites/player/run_Rsword_1.png'

// attack
var player_attack = new Image();
player_attack.src = 'sprites/player/attack.png';

// enemi
// carrotte
// idle / jump
var carrot_sprite = new Image();
carrot_sprite.src = 'sprites/enemy/carrot/carrot_sprite.png';

// attack
var carrot_attack = new Image();
carrot_attack.src = 'sprites/enemy/carrot/carrot_attack.png';

// arme
// sword
var sword = new Image();
sword.src = 'sprites/weapon/sword.png';

// club (gourdin)
var club = new Image();
club.src = 'sprites/weapon/club.png';

// texture map
var map = new Image();
map.src = '';

//#region texture terrain
var terrain_0 = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
    
terrain_0[0].src = 'sprites/map/terrain_0/tile000.png';
terrain_0[1].src = 'sprites/map/terrain_0/tile001.png';
terrain_0[2].src = 'sprites/map/terrain_0/tile002.png';
terrain_0[3].src = 'sprites/map/terrain_0/tile003.png';
terrain_0[4].src = 'sprites/map/terrain_0/tile004.png';
terrain_0[5].src = 'sprites/map/terrain_0/tile005.png';
terrain_0[6].src = 'sprites/map/terrain_0/tile006.png';
terrain_0[7].src = 'sprites/map/terrain_0/tile007.png';
terrain_0[8].src = 'sprites/map/terrain_0/tile008.png';
terrain_0[9].src = 'sprites/map/terrain_0/tile009.png';
terrain_0[10].src = 'sprites/map/terrain_0/tile010.png';
terrain_0[11].src = 'sprites/map/terrain_0/tile011.png';
terrain_0[12].src = 'sprites/map/terrain_0/tile012.png';
terrain_0[13].src = 'sprites/map/terrain_0/tile013.png';
terrain_0[14].src = 'sprites/map/terrain_0/tile014.png';
terrain_0[15].src = 'sprites/map/terrain_0/tile015.png';
terrain_0[16].src = 'sprites/map/terrain_0/tile016.png';
terrain_0[17].src = 'sprites/map/terrain_0/tile017.png';
terrain_0[18].src = 'sprites/map/terrain_0/tile018.png';
terrain_0[19].src = 'sprites/map/terrain_0/tile019.png';
terrain_0[20].src = 'sprites/map/terrain_0/tile020.png';
terrain_0[21].src = 'sprites/map/terrain_0/tile021.png';
terrain_0[22].src = 'sprites/map/terrain_0/tile022.png';
terrain_0[23].src = 'sprites/map/terrain_0/tile023.png';
terrain_0[24].src = 'sprites/map/terrain_0/tile024.png';
terrain_0[25].src = 'sprites/map/terrain_0/tile025.png';
terrain_0[26].src = 'sprites/map/terrain_0/tile026.png';
terrain_0[27].src = 'sprites/map/terrain_0/tile027.png';
terrain_0[28].src = 'sprites/map/terrain_0/tile028.png';
terrain_0[29].src = 'sprites/map/terrain_0/tile029.png';
terrain_0[30].src = 'sprites/map/terrain_0/tile030.png';
terrain_0[31].src = 'sprites/map/terrain_0/tile031.png';
terrain_0[32].src = 'sprites/map/terrain_0/tile032.png';
terrain_0[33].src = 'sprites/map/terrain_0/tile033.png';
terrain_0[34].src = 'sprites/map/terrain_0/tile034.png';
terrain_0[35].src = 'sprites/map/terrain_0/tile035.png';
terrain_0[36].src = 'sprites/map/terrain_0/tile036.png';
terrain_0[37].src = 'sprites/map/terrain_0/tile037.png';
terrain_0[38].src = 'sprites/map/terrain_0/tile038.png';
terrain_0[39].src = 'sprites/map/terrain_0/tile039.png';
terrain_0[40].src = 'sprites/map/terrain_0/tile040.png';
terrain_0[41].src = 'sprites/map/terrain_0/tile041.png';
terrain_0[42].src = 'sprites/map/terrain_0/tile042.png';
terrain_0[43].src = 'sprites/map/terrain_0/tile043.png';
terrain_0[44].src = 'sprites/map/terrain_0/tile044.png';
terrain_0[45].src = 'sprites/map/terrain_0/tile045.png';
terrain_0[46].src = 'sprites/map/terrain_0/tile046.png';
terrain_0[47].src = 'sprites/map/terrain_0/tile047.png';
terrain_0[48].src = 'sprites/map/terrain_0/tile048.png';
terrain_0[49].src = 'sprites/map/terrain_0/tile049.png';
terrain_0[50].src = 'sprites/map/terrain_0/tile050.png';
terrain_0[51].src = 'sprites/map/terrain_0/tile051.png';
terrain_0[52].src = 'sprites/map/terrain_0/tile052.png';
terrain_0[53].src = 'sprites/map/terrain_0/tile053.png';
terrain_0[54].src = 'sprites/map/terrain_0/tile054.png';
terrain_0[55].src = 'sprites/map/terrain_0/tile055.png';
terrain_0[56].src = 'sprites/map/terrain_0/tile056.png';
terrain_0[57].src = 'sprites/map/terrain_0/tile057.png';
terrain_0[58].src = 'sprites/map/terrain_0/tile058.png';
terrain_0[59].src = 'sprites/map/terrain_0/tile059.png';
terrain_0[60].src = 'sprites/map/terrain_0/tile060.png';
terrain_0[61].src = 'sprites/map/terrain_0/tile061.png';
terrain_0[62].src = 'sprites/map/terrain_0/tile062.png';
terrain_0[63].src = 'sprites/map/terrain_0/tile063.png';
terrain_0[64].src = 'sprites/map/terrain_0/tile064.png';
terrain_0[65].src = 'sprites/map/terrain_0/tile065.png';
terrain_0[66].src = 'sprites/map/terrain_0/tile066.png';
terrain_0[67].src = 'sprites/map/terrain_0/tile067.png';
terrain_0[68].src = 'sprites/map/terrain_0/tile068.png';
terrain_0[69].src = 'sprites/map/terrain_0/tile069.png';
terrain_0[70].src = 'sprites/map/terrain_0/tile070.png';
terrain_0[71].src = 'sprites/map/terrain_0/tile071.png';
terrain_0[72].src = 'sprites/map/terrain_0/tile072.png';
terrain_0[73].src = 'sprites/map/terrain_0/tile073.png';
terrain_0[74].src = 'sprites/map/terrain_0/tile074.png';
terrain_0[75].src = 'sprites/map/terrain_0/tile075.png';
terrain_0[76].src = 'sprites/map/terrain_0/tile076.png';
terrain_0[77].src = 'sprites/map/terrain_0/tile077.png';
terrain_0[78].src = 'sprites/map/terrain_0/tile078.png';
terrain_0[79].src = 'sprites/map/terrain_0/tile079.png';
terrain_0[80].src = 'sprites/map/terrain_0/tile080.png';
terrain_0[81].src = 'sprites/map/terrain_0/tile081.png';
terrain_0[82].src = 'sprites/map/terrain_0/tile082.png';
terrain_0[83].src = 'sprites/map/terrain_0/tile083.png';
terrain_0[84].src = 'sprites/map/terrain_0/tile084.png';
terrain_0[85].src = 'sprites/map/terrain_0/tile085.png';
terrain_0[86].src = 'sprites/map/terrain_0/tile086.png';
terrain_0[87].src = 'sprites/map/terrain_0/tile087.png';
terrain_0[88].src = 'sprites/map/terrain_0/tile088.png';
terrain_0[89].src = 'sprites/map/terrain_0/tile089.png';
terrain_0[90].src = 'sprites/map/terrain_0/tile090.png';
terrain_0[91].src = 'sprites/map/terrain_0/tile091.png';
terrain_0[92].src = 'sprites/map/terrain_0/tile092.png';
terrain_0[93].src = 'sprites/map/terrain_0/tile093.png';
terrain_0[94].src = 'sprites/map/terrain_0/tile094.png';
terrain_0[95].src = 'sprites/map/terrain_0/tile095.png';
terrain_0[96].src = 'sprites/map/terrain_0/tile096.png';
terrain_0[97].src = 'sprites/map/terrain_0/tile097.png';
terrain_0[98].src = 'sprites/map/terrain_0/tile098.png';
terrain_0[99].src = 'sprites/map/terrain_0/tile099.png';

var terrain_1 = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
    
terrain_1[0].src = 'sprites/map/terrain_1/tile000.png';
terrain_1[1].src = 'sprites/map/terrain_1/tile001.png';
terrain_1[2].src = 'sprites/map/terrain_1/tile002.png';
terrain_1[3].src = 'sprites/map/terrain_1/tile003.png';
terrain_1[4].src = 'sprites/map/terrain_1/tile004.png';
terrain_1[5].src = 'sprites/map/terrain_1/tile005.png';
terrain_1[6].src = 'sprites/map/terrain_1/tile006.png';
terrain_1[7].src = 'sprites/map/terrain_1/tile007.png';
terrain_1[8].src = 'sprites/map/terrain_1/tile008.png';
terrain_1[9].src = 'sprites/map/terrain_1/tile009.png';
terrain_1[10].src = 'sprites/map/terrain_1/tile010.png';
terrain_1[11].src = 'sprites/map/terrain_1/tile011.png';
terrain_1[12].src = 'sprites/map/terrain_1/tile012.png';
terrain_1[13].src = 'sprites/map/terrain_1/tile013.png';
terrain_1[14].src = 'sprites/map/terrain_1/tile014.png';
terrain_1[15].src = 'sprites/map/terrain_1/tile015.png';
terrain_1[16].src = 'sprites/map/terrain_1/tile016.png';
terrain_1[17].src = 'sprites/map/terrain_1/tile017.png';
terrain_1[18].src = 'sprites/map/terrain_1/tile018.png';
terrain_1[19].src = 'sprites/map/terrain_1/tile019.png';
terrain_1[20].src = 'sprites/map/terrain_1/tile020.png';
terrain_1[21].src = 'sprites/map/terrain_1/tile021.png';
terrain_1[22].src = 'sprites/map/terrain_1/tile022.png';
terrain_1[23].src = 'sprites/map/terrain_1/tile023.png';
terrain_1[24].src = 'sprites/map/terrain_1/tile024.png';
terrain_1[25].src = 'sprites/map/terrain_1/tile025.png';
terrain_1[26].src = 'sprites/map/terrain_1/tile026.png';
terrain_1[27].src = 'sprites/map/terrain_1/tile027.png';
terrain_1[28].src = 'sprites/map/terrain_1/tile028.png';
terrain_1[29].src = 'sprites/map/terrain_1/tile029.png';
terrain_1[30].src = 'sprites/map/terrain_1/tile030.png';
terrain_1[31].src = 'sprites/map/terrain_1/tile031.png';
terrain_1[32].src = 'sprites/map/terrain_1/tile032.png';
terrain_1[33].src = 'sprites/map/terrain_1/tile033.png';
terrain_1[34].src = 'sprites/map/terrain_1/tile034.png';
terrain_1[35].src = 'sprites/map/terrain_1/tile035.png';
terrain_1[36].src = 'sprites/map/terrain_1/tile036.png';
terrain_1[37].src = 'sprites/map/terrain_1/tile037.png';
terrain_1[38].src = 'sprites/map/terrain_1/tile038.png';
terrain_1[39].src = 'sprites/map/terrain_1/tile039.png';
terrain_1[40].src = 'sprites/map/terrain_1/tile040.png';
terrain_1[41].src = 'sprites/map/terrain_1/tile041.png';
terrain_1[42].src = 'sprites/map/terrain_1/tile042.png';
terrain_1[43].src = 'sprites/map/terrain_1/tile043.png';
terrain_1[44].src = 'sprites/map/terrain_1/tile044.png';
terrain_1[45].src = 'sprites/map/terrain_1/tile045.png';
terrain_1[46].src = 'sprites/map/terrain_1/tile046.png';
terrain_1[47].src = 'sprites/map/terrain_1/tile047.png';
terrain_1[48].src = 'sprites/map/terrain_1/tile048.png';
terrain_1[49].src = 'sprites/map/terrain_1/tile049.png';
terrain_1[50].src = 'sprites/map/terrain_1/tile050.png';
terrain_1[51].src = 'sprites/map/terrain_1/tile051.png';
terrain_1[52].src = 'sprites/map/terrain_1/tile052.png';
terrain_1[53].src = 'sprites/map/terrain_1/tile053.png';
terrain_1[54].src = 'sprites/map/terrain_1/tile054.png';
terrain_1[55].src = 'sprites/map/terrain_1/tile055.png';
terrain_1[56].src = 'sprites/map/terrain_1/tile056.png';
terrain_1[57].src = 'sprites/map/terrain_1/tile057.png';
terrain_1[58].src = 'sprites/map/terrain_1/tile058.png';
terrain_1[59].src = 'sprites/map/terrain_1/tile059.png';
terrain_1[60].src = 'sprites/map/terrain_1/tile060.png';
terrain_1[61].src = 'sprites/map/terrain_1/tile061.png';
terrain_1[62].src = 'sprites/map/terrain_1/tile062.png';
terrain_1[63].src = 'sprites/map/terrain_1/tile063.png';
terrain_1[64].src = 'sprites/map/terrain_1/tile064.png';
terrain_1[65].src = 'sprites/map/terrain_1/tile065.png';
terrain_1[66].src = 'sprites/map/terrain_1/tile066.png';
terrain_1[67].src = 'sprites/map/terrain_1/tile067.png';
terrain_1[68].src = 'sprites/map/terrain_1/tile068.png';
terrain_1[69].src = 'sprites/map/terrain_1/tile069.png';
terrain_1[70].src = 'sprites/map/terrain_1/tile070.png';
terrain_1[71].src = 'sprites/map/terrain_1/tile071.png';
terrain_1[72].src = 'sprites/map/terrain_1/tile072.png';
terrain_1[73].src = 'sprites/map/terrain_1/tile073.png';
terrain_1[74].src = 'sprites/map/terrain_1/tile074.png';
terrain_1[75].src = 'sprites/map/terrain_1/tile075.png';
terrain_1[76].src = 'sprites/map/terrain_1/tile076.png';
terrain_1[77].src = 'sprites/map/terrain_1/tile077.png';
terrain_1[78].src = 'sprites/map/terrain_1/tile078.png';
terrain_1[79].src = 'sprites/map/terrain_1/tile079.png';
terrain_1[80].src = 'sprites/map/terrain_1/tile080.png';
terrain_1[81].src = 'sprites/map/terrain_1/tile081.png';
terrain_1[82].src = 'sprites/map/terrain_1/tile082.png';
terrain_1[83].src = 'sprites/map/terrain_1/tile083.png';
terrain_1[84].src = 'sprites/map/terrain_1/tile084.png';
terrain_1[85].src = 'sprites/map/terrain_1/tile085.png';
terrain_1[86].src = 'sprites/map/terrain_1/tile086.png';
terrain_1[87].src = 'sprites/map/terrain_1/tile087.png';
terrain_1[88].src = 'sprites/map/terrain_1/tile088.png';
terrain_1[89].src = 'sprites/map/terrain_1/tile089.png';
terrain_1[90].src = 'sprites/map/terrain_1/tile090.png';
terrain_1[91].src = 'sprites/map/terrain_1/tile091.png';
terrain_1[92].src = 'sprites/map/terrain_1/tile092.png';
terrain_1[93].src = 'sprites/map/terrain_1/tile093.png';
terrain_1[94].src = 'sprites/map/terrain_1/tile094.png';
terrain_1[95].src = 'sprites/map/terrain_1/tile095.png';
terrain_1[96].src = 'sprites/map/terrain_1/tile096.png';
terrain_1[97].src = 'sprites/map/terrain_1/tile097.png';
terrain_1[98].src = 'sprites/map/terrain_1/tile098.png';
terrain_1[99].src = 'sprites/map/terrain_1/tile099.png';

var terrain_2 = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
    
terrain_2[0].src = 'sprites/map/terrain_2/tile000.png';
terrain_2[1].src = 'sprites/map/terrain_2/tile001.png';
terrain_2[2].src = 'sprites/map/terrain_2/tile002.png';
terrain_2[3].src = 'sprites/map/terrain_2/tile003.png';
terrain_2[4].src = 'sprites/map/terrain_2/tile004.png';
terrain_2[5].src = 'sprites/map/terrain_2/tile005.png';
terrain_2[6].src = 'sprites/map/terrain_2/tile006.png';
terrain_2[7].src = 'sprites/map/terrain_2/tile007.png';
terrain_2[8].src = 'sprites/map/terrain_2/tile008.png';
terrain_2[9].src = 'sprites/map/terrain_2/tile009.png';
terrain_2[10].src = 'sprites/map/terrain_2/tile010.png';
terrain_2[11].src = 'sprites/map/terrain_2/tile011.png';
terrain_2[12].src = 'sprites/map/terrain_2/tile012.png';
terrain_2[13].src = 'sprites/map/terrain_2/tile013.png';
terrain_2[14].src = 'sprites/map/terrain_2/tile014.png';
terrain_2[15].src = 'sprites/map/terrain_2/tile015.png';
terrain_2[16].src = 'sprites/map/terrain_2/tile016.png';
terrain_2[17].src = 'sprites/map/terrain_2/tile017.png';
terrain_2[18].src = 'sprites/map/terrain_2/tile018.png';
terrain_2[19].src = 'sprites/map/terrain_2/tile019.png';
terrain_2[20].src = 'sprites/map/terrain_2/tile020.png';
terrain_2[21].src = 'sprites/map/terrain_2/tile021.png';
terrain_2[22].src = 'sprites/map/terrain_2/tile022.png';
terrain_2[23].src = 'sprites/map/terrain_2/tile023.png';
terrain_2[24].src = 'sprites/map/terrain_2/tile024.png';
terrain_2[25].src = 'sprites/map/terrain_2/tile025.png';
terrain_2[26].src = 'sprites/map/terrain_2/tile026.png';
terrain_2[27].src = 'sprites/map/terrain_2/tile027.png';
terrain_2[28].src = 'sprites/map/terrain_2/tile028.png';
terrain_2[29].src = 'sprites/map/terrain_2/tile029.png';
terrain_2[30].src = 'sprites/map/terrain_2/tile030.png';
terrain_2[31].src = 'sprites/map/terrain_2/tile031.png';
terrain_2[32].src = 'sprites/map/terrain_2/tile032.png';
terrain_2[33].src = 'sprites/map/terrain_2/tile033.png';
terrain_2[34].src = 'sprites/map/terrain_2/tile034.png';
terrain_2[35].src = 'sprites/map/terrain_2/tile035.png';
terrain_2[36].src = 'sprites/map/terrain_2/tile036.png';
terrain_2[37].src = 'sprites/map/terrain_2/tile037.png';
terrain_2[38].src = 'sprites/map/terrain_2/tile038.png';
terrain_2[39].src = 'sprites/map/terrain_2/tile039.png';
terrain_2[40].src = 'sprites/map/terrain_2/tile040.png';
terrain_2[41].src = 'sprites/map/terrain_2/tile041.png';
terrain_2[42].src = 'sprites/map/terrain_2/tile042.png';
terrain_2[43].src = 'sprites/map/terrain_2/tile043.png';
terrain_2[44].src = 'sprites/map/terrain_2/tile044.png';
terrain_2[45].src = 'sprites/map/terrain_2/tile045.png';
terrain_2[46].src = 'sprites/map/terrain_2/tile046.png';
terrain_2[47].src = 'sprites/map/terrain_2/tile047.png';
terrain_2[48].src = 'sprites/map/terrain_2/tile048.png';
terrain_2[49].src = 'sprites/map/terrain_2/tile049.png';
terrain_2[50].src = 'sprites/map/terrain_2/tile050.png';
terrain_2[51].src = 'sprites/map/terrain_2/tile051.png';
terrain_2[52].src = 'sprites/map/terrain_2/tile052.png';
terrain_2[53].src = 'sprites/map/terrain_2/tile053.png';
terrain_2[54].src = 'sprites/map/terrain_2/tile054.png';
terrain_2[55].src = 'sprites/map/terrain_2/tile055.png';
terrain_2[56].src = 'sprites/map/terrain_2/tile056.png';
terrain_2[57].src = 'sprites/map/terrain_2/tile057.png';
terrain_2[58].src = 'sprites/map/terrain_2/tile058.png';
terrain_2[59].src = 'sprites/map/terrain_2/tile059.png';
terrain_2[60].src = 'sprites/map/terrain_2/tile060.png';
terrain_2[61].src = 'sprites/map/terrain_2/tile061.png';
terrain_2[62].src = 'sprites/map/terrain_2/tile062.png';
terrain_2[63].src = 'sprites/map/terrain_2/tile063.png';
terrain_2[64].src = 'sprites/map/terrain_2/tile064.png';
terrain_2[65].src = 'sprites/map/terrain_2/tile065.png';
terrain_2[66].src = 'sprites/map/terrain_2/tile066.png';
terrain_2[67].src = 'sprites/map/terrain_2/tile067.png';
terrain_2[68].src = 'sprites/map/terrain_2/tile068.png';
terrain_2[69].src = 'sprites/map/terrain_2/tile069.png';
terrain_2[70].src = 'sprites/map/terrain_2/tile070.png';
terrain_2[71].src = 'sprites/map/terrain_2/tile071.png';
terrain_2[72].src = 'sprites/map/terrain_2/tile072.png';
terrain_2[73].src = 'sprites/map/terrain_2/tile073.png';
terrain_2[74].src = 'sprites/map/terrain_2/tile074.png';
terrain_2[75].src = 'sprites/map/terrain_2/tile075.png';
terrain_2[76].src = 'sprites/map/terrain_2/tile076.png';
terrain_2[77].src = 'sprites/map/terrain_2/tile077.png';
terrain_2[78].src = 'sprites/map/terrain_2/tile078.png';
terrain_2[79].src = 'sprites/map/terrain_2/tile079.png';
terrain_2[80].src = 'sprites/map/terrain_2/tile080.png';
terrain_2[81].src = 'sprites/map/terrain_2/tile081.png';
terrain_2[82].src = 'sprites/map/terrain_2/tile082.png';
terrain_2[83].src = 'sprites/map/terrain_2/tile083.png';
terrain_2[84].src = 'sprites/map/terrain_2/tile084.png';
terrain_2[85].src = 'sprites/map/terrain_2/tile085.png';
terrain_2[86].src = 'sprites/map/terrain_2/tile086.png';
terrain_2[87].src = 'sprites/map/terrain_2/tile087.png';
terrain_2[88].src = 'sprites/map/terrain_2/tile088.png';
terrain_2[89].src = 'sprites/map/terrain_2/tile089.png';
terrain_2[90].src = 'sprites/map/terrain_2/tile090.png';
terrain_2[91].src = 'sprites/map/terrain_2/tile091.png';
terrain_2[92].src = 'sprites/map/terrain_2/tile092.png';
terrain_2[93].src = 'sprites/map/terrain_2/tile093.png';
terrain_2[94].src = 'sprites/map/terrain_2/tile094.png';
terrain_2[95].src = 'sprites/map/terrain_2/tile095.png';
terrain_2[96].src = 'sprites/map/terrain_2/tile096.png';
terrain_2[97].src = 'sprites/map/terrain_2/tile097.png';
terrain_2[98].src = 'sprites/map/terrain_2/tile098.png';
terrain_2[99].src = 'sprites/map/terrain_2/tile099.png';

var terrain_3 = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(),
    new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
    
terrain_3[0].src = 'sprites/map/terrain_3/tile000.png';
terrain_3[1].src = 'sprites/map/terrain_3/tile001.png';
terrain_3[2].src = 'sprites/map/terrain_3/tile002.png';
terrain_3[3].src = 'sprites/map/terrain_3/tile003.png';
terrain_3[4].src = 'sprites/map/terrain_3/tile004.png';
terrain_3[5].src = 'sprites/map/terrain_3/tile005.png';
terrain_3[6].src = 'sprites/map/terrain_3/tile006.png';
terrain_3[7].src = 'sprites/map/terrain_3/tile007.png';
terrain_3[8].src = 'sprites/map/terrain_3/tile008.png';
terrain_3[9].src = 'sprites/map/terrain_3/tile009.png';
terrain_3[10].src = 'sprites/map/terrain_3/tile010.png';
terrain_3[11].src = 'sprites/map/terrain_3/tile011.png';
terrain_3[12].src = 'sprites/map/terrain_3/tile012.png';
terrain_3[13].src = 'sprites/map/terrain_3/tile013.png';
terrain_3[14].src = 'sprites/map/terrain_3/tile014.png';
terrain_3[15].src = 'sprites/map/terrain_3/tile015.png';
terrain_3[16].src = 'sprites/map/terrain_3/tile016.png';
terrain_3[17].src = 'sprites/map/terrain_3/tile017.png';
terrain_3[18].src = 'sprites/map/terrain_3/tile018.png';
terrain_3[19].src = 'sprites/map/terrain_3/tile019.png';
terrain_3[20].src = 'sprites/map/terrain_3/tile020.png';
terrain_3[21].src = 'sprites/map/terrain_3/tile021.png';
terrain_3[22].src = 'sprites/map/terrain_3/tile022.png';
terrain_3[23].src = 'sprites/map/terrain_3/tile023.png';
terrain_3[24].src = 'sprites/map/terrain_3/tile024.png';
terrain_3[25].src = 'sprites/map/terrain_3/tile025.png';
terrain_3[26].src = 'sprites/map/terrain_3/tile026.png';
terrain_3[27].src = 'sprites/map/terrain_3/tile027.png';
terrain_3[28].src = 'sprites/map/terrain_3/tile028.png';
terrain_3[29].src = 'sprites/map/terrain_3/tile029.png';
terrain_3[30].src = 'sprites/map/terrain_3/tile030.png';
terrain_3[31].src = 'sprites/map/terrain_3/tile031.png';
terrain_3[32].src = 'sprites/map/terrain_3/tile032.png';
terrain_3[33].src = 'sprites/map/terrain_3/tile033.png';
terrain_3[34].src = 'sprites/map/terrain_3/tile034.png';
terrain_3[35].src = 'sprites/map/terrain_3/tile035.png';
terrain_3[36].src = 'sprites/map/terrain_3/tile036.png';
terrain_3[37].src = 'sprites/map/terrain_3/tile037.png';
terrain_3[38].src = 'sprites/map/terrain_3/tile038.png';
terrain_3[39].src = 'sprites/map/terrain_3/tile039.png';
terrain_3[40].src = 'sprites/map/terrain_3/tile040.png';
terrain_3[41].src = 'sprites/map/terrain_3/tile041.png';
terrain_3[42].src = 'sprites/map/terrain_3/tile042.png';
terrain_3[43].src = 'sprites/map/terrain_3/tile043.png';
terrain_3[44].src = 'sprites/map/terrain_3/tile044.png';
terrain_3[45].src = 'sprites/map/terrain_3/tile045.png';
terrain_3[46].src = 'sprites/map/terrain_3/tile046.png';
terrain_3[47].src = 'sprites/map/terrain_3/tile047.png';
terrain_3[48].src = 'sprites/map/terrain_3/tile048.png';
terrain_3[49].src = 'sprites/map/terrain_3/tile049.png';
terrain_3[50].src = 'sprites/map/terrain_3/tile050.png';
terrain_3[51].src = 'sprites/map/terrain_3/tile051.png';
terrain_3[52].src = 'sprites/map/terrain_3/tile052.png';
terrain_3[53].src = 'sprites/map/terrain_3/tile053.png';
terrain_3[54].src = 'sprites/map/terrain_3/tile054.png';
terrain_3[55].src = 'sprites/map/terrain_3/tile055.png';
terrain_3[56].src = 'sprites/map/terrain_3/tile056.png';
terrain_3[57].src = 'sprites/map/terrain_3/tile057.png';
terrain_3[58].src = 'sprites/map/terrain_3/tile058.png';
terrain_3[59].src = 'sprites/map/terrain_3/tile059.png';
terrain_3[60].src = 'sprites/map/terrain_3/tile060.png';
terrain_3[61].src = 'sprites/map/terrain_3/tile061.png';
terrain_3[62].src = 'sprites/map/terrain_3/tile062.png';
terrain_3[63].src = 'sprites/map/terrain_3/tile063.png';
terrain_3[64].src = 'sprites/map/terrain_3/tile064.png';
terrain_3[65].src = 'sprites/map/terrain_3/tile065.png';
terrain_3[66].src = 'sprites/map/terrain_3/tile066.png';
terrain_3[67].src = 'sprites/map/terrain_3/tile067.png';
terrain_3[68].src = 'sprites/map/terrain_3/tile068.png';
terrain_3[69].src = 'sprites/map/terrain_3/tile069.png';
terrain_3[70].src = 'sprites/map/terrain_3/tile070.png';
terrain_3[71].src = 'sprites/map/terrain_3/tile071.png';
terrain_3[72].src = 'sprites/map/terrain_3/tile072.png';
terrain_3[73].src = 'sprites/map/terrain_3/tile073.png';
terrain_3[74].src = 'sprites/map/terrain_3/tile074.png';
terrain_3[75].src = 'sprites/map/terrain_3/tile075.png';
terrain_3[76].src = 'sprites/map/terrain_3/tile076.png';
terrain_3[77].src = 'sprites/map/terrain_3/tile077.png';
terrain_3[78].src = 'sprites/map/terrain_3/tile078.png';
terrain_3[79].src = 'sprites/map/terrain_3/tile079.png';
terrain_3[80].src = 'sprites/map/terrain_3/tile080.png';
terrain_3[81].src = 'sprites/map/terrain_3/tile081.png';
terrain_3[82].src = 'sprites/map/terrain_3/tile082.png';
terrain_3[83].src = 'sprites/map/terrain_3/tile083.png';
terrain_3[84].src = 'sprites/map/terrain_3/tile084.png';
terrain_3[85].src = 'sprites/map/terrain_3/tile085.png';
terrain_3[86].src = 'sprites/map/terrain_3/tile086.png';
terrain_3[87].src = 'sprites/map/terrain_3/tile087.png';
terrain_3[88].src = 'sprites/map/terrain_3/tile088.png';
terrain_3[89].src = 'sprites/map/terrain_3/tile089.png';
terrain_3[90].src = 'sprites/map/terrain_3/tile090.png';
terrain_3[91].src = 'sprites/map/terrain_3/tile091.png';
terrain_3[92].src = 'sprites/map/terrain_3/tile092.png';
terrain_3[93].src = 'sprites/map/terrain_3/tile093.png';
terrain_3[94].src = 'sprites/map/terrain_3/tile094.png';
terrain_3[95].src = 'sprites/map/terrain_3/tile095.png';
terrain_3[96].src = 'sprites/map/terrain_3/tile096.png';
terrain_3[97].src = 'sprites/map/terrain_3/tile097.png';
terrain_3[98].src = 'sprites/map/terrain_3/tile098.png';
terrain_3[99].src = 'sprites/map/terrain_3/tile099.png';
//#endregion

// position du joueur
var playerX = 0;
var playerY = 0;

// camera
var cameraX = 0;
var cameraY = 0;

// souris
var mouseScreenPosX = 0;
var mouseScreenPosY = 0;
var mousePosX = 0;
var mousePosY = 0;

// animation
var frameCounter = 0;

// input
var isLeftPressed = false;
var isRightPressed = false;
var isUpPressed = false;
var isDownPressed = false;

// jeu
// combat
var isSwordInHand = false;
var isSwordReversed = false;
var isAttacking = false;
var attackTime = 0;
var attackCountdown = 0;

// vie
var playerHealth = PLAYER_MAX_LIFE;

// multijoueur
var multiplayer = true;

// enemi
var enemyX = [];
var enemyY = [];
var enemiLife = [];
var targetX = [];
var targetY = [];
var enemyFramesCounter = [];
var enemyWaitTime = [];

// inventaire / map
var isMapOpened = false;

// fonction
// dessine le joueur
function drawPlayer(x, y) {
    if (!isAttacking) {
        if (isSwordInHand) {
            if (isUpPressed || isDownPressed || isLeftPressed ||isRightPressed) {
                if (isSwordReversed) {
                    ctx.drawImage(player_run_Rsword[parseInt(frameCounter / 10) % 2], x - cameraX, y - cameraY, PLAYER_SWORD_WIDTH, PLAYER_SIZE);
                } else {
                    ctx.drawImage(player_run_sword[parseInt(frameCounter / 10) % 2], x - cameraX, y - cameraY, PLAYER_SWORD_WIDTH, PLAYER_SIZE);
                }
            } else {
                if (isSwordReversed) {
                    ctx.drawImage(player_Rsword_idle, x - cameraX, y - cameraY, PLAYER_SWORD_WIDTH, PLAYER_SIZE);
                } else {
                    ctx.drawImage(player_sword_idle, x - cameraX, y - cameraY, PLAYER_SWORD_WIDTH, PLAYER_SIZE);
                }
            }
        } else {
            if (isUpPressed || isDownPressed || isLeftPressed ||isRightPressed) {
                ctx.drawImage(player_run[parseInt(frameCounter / 10) % 2], x - cameraX, y - cameraY, PLAYER_SIZE, PLAYER_SIZE);
            } else {
                ctx.drawImage(player_idle, x - cameraX, y - cameraY, PLAYER_SIZE, PLAYER_SIZE);
            }
        }
    } else {
        ctx.drawImage(player_attack, x - cameraX, y - cameraY, PLAYER_ATTACK_WIDTH, PLAYER_SIZE);
    }
}

// detecte si on tape un enemi
function hit() {
    // verifie que la distance entre l'enemi et la souris est la bonne
    for (var carrotIndex = 0; carrotIndex < enemyX.length; carrotIndex++) {
        if (Math.sqrt(Math.pow(enemyX[carrotIndex] + CARROT_WIDTH / 2 - mousePosX, 2) + Math.pow(enemyY[carrotIndex] + CARROT_HEIGHT / 2 - mousePosY, 2)) <= HIT_ZONE &&
        enemiLife[carrotIndex] != 0) {
            enemiLife[carrotIndex] -= 5;
        }
    }
}

// deplacement des enemis
function enemyMovement(index, rangeX, rangeY) {
    // si l'enemi a atteint sa cible, en genere un nouvelle
    if (Math.abs(enemyX[index] - targetX[index]) <= CARROT_WIDTH && Math.abs(enemyY[index] - targetY[index]) <= CARROT_HEIGHT) {
        targetX[index] += Math.floor(Math.random() * rangeX) - rangeX * 0.5;
        targetY[index] += Math.floor(Math.random() * rangeY) - rangeY * 0.5;
    }
    if (enemyX[index] > targetX[index]) {
        enemyX[index] -= ENEMY_SPEED;
    } else if (enemyX[index] < targetX[index]) {
        enemyX[index] += ENEMY_SPEED;
    }
    if (enemyY[index] > targetY[index]) {
        enemyY[index] -= ENEMY_SPEED;
    } else if (enemyY[index] < targetY[index]) {
        enemyY[index] += ENEMY_SPEED;
    }

    while (Math.sqrt(Math.pow(targetX[index], 2) + Math.pow(targetY[index], 2)) > TERRAIN_UNIT_WIDTH * 10) {
        targetX[index] += Math.floor(Math.random() * rangeX) - rangeX * 0.5;
        targetY[index] += Math.floor(Math.random() * rangeY) - rangeY * 0.5;
    }
    enemyFramesCounter[index]++;
}

// comportement des carrottes
function newCarrot(index, x, y) {
    // si la carrotte n'existe pas en creer une nouvelle
    if (index > enemyX.length - 1) {
        enemyX.push(x);
        enemyY.push(y);
        targetX.push(x);
        targetY.push(y);
        enemiLife.push(CARROT_MAX_LIFE);
        enemyFramesCounter.push(Math.floor(Math.random() * 20));
        enemyWaitTime.push(0);
    }
    
    // mets a jour le temps d'attente de l'enemi
    if (enemyFramesCounter[index] % 100 === 0) {
        enemyWaitTime[index] = Math.floor(Math.random() * 100);
    }

    // calcule si le joueur est a porte d'attaque
    var isInRange = false;
    if (Math.sqrt(Math.pow(enemyX[index] - playerX, 2) + Math.pow(enemyY[index] - playerY, 2)) < CARROT_ATTACK_RANGE) {
        isInRange = true;
    }
    // si l'enemi n'as plus de vie
    if (enemiLife[index] === 0) {
        ctx.drawImage(sword, enemyX[index] + CARROT_WIDTH / 2 - SWORD_WIDTH / 2 - cameraX, enemyY[index] - 25 - cameraY, SWORD_WIDTH, SWORD_HEIGHT);
    } else if (enemyWaitTime[index] != 0) {
        // fait attendre l'enemi si il reste du temps d'attente
        enemyWaitTime[index]--;
    } else if (isInRange) {
    } else {
        // deplace l'enemi
        enemyMovement(index, 500, 500);
    }
    
    // si l'enemi est trop loin ne l'affiche plus
    if (Math.sqrt(Math.pow(enemyX[index] - playerX, 2) + Math.pow(enemyY[index] - playerY, 2)) > LOAD_DISTANCE) {
        return;
    }

    // dessine l'enemi
    // attaque
    if (isInRange) {
        ctx.drawImage(carrot_attack, enemyX[index] - cameraX, enemyY[index] - cameraY, CARROT_ATTACK_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 0) {
        // animation de deplacement
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 1) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 2 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 2) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 3 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 3) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 4 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 4) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 5 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 5) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 6 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 6) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 7 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 7) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 8 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 8) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 9 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 9) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 10 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 10) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 11 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 11) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 10 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 12) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 9 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 13) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 8 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 14) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 7 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 15) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 6 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 16) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 5 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 17) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 4 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 18) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 3 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 19) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 * 2 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else if (enemyFramesCounter[index] % 21 === 20) {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - CARROT_JUMP_HEIGHT / 21 - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    } else {
        ctx.drawImage(carrot_sprite, enemyX[index] - cameraX, enemyY[index] - cameraY, CARROT_WIDTH, CARROT_HEIGHT);
    }
}

// jeu
function loop() {
    // ajuste la taille du canvas a la taille e l'ecran
    canvas.width = window.innerWidth - 1;
    canvas.height = window.innerHeight - 1;

    // calcule la position de la souris dans le jeu
    mousePosX = mouseScreenPosX + cameraX;
    mousePosY = mouseScreenPosY + cameraY;

    // clear le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // dessine la carte
    if (isMapOpened) {
        ctx.drawImage(map, canvas.width / 2 - MAP_WIDTH / 2, canvas.height / 2 - MAP_HEIGHT / 2, MAP_WIDTH, MAP_HEIGHT);
    }

    // si la carte n'est pas ouverte
    if (!isMapOpened) {
        // positionnement de la camera
        cameraX += (playerX - canvas.width / 2 - cameraX) / 30;
        cameraY += (playerY - canvas.height / 2 - cameraY) / 30;
    
        // deplacement
        // gauche
        if (isLeftPressed) {
            playerX -= PLAYER_SPEED;
        }
        // droit
        if (isRightPressed) {
            playerX += PLAYER_SPEED;
        }
        // haut
        if (isUpPressed) {
            playerY -= PLAYER_SPEED;
        }
        // bas
        if (isDownPressed) {
            playerY += PLAYER_SPEED;
        }
        
        // dessine le terrain
        for (var i = 0; i < 100; i++) {
            // haut gauche
            ctx.drawImage(terrain_0[i], -TERRAIN_UNIT_WIDTH * 10 + i % 10 * TERRAIN_UNIT_WIDTH - cameraX, -TERRAIN_UNIT_HEIGHT * 10 + parseInt(i / 10) * TERRAIN_UNIT_HEIGHT - cameraY, TERRAIN_UNIT_WIDTH, TERRAIN_UNIT_HEIGHT);
            // haut droit
            ctx.drawImage(terrain_1[i], i % 10 * TERRAIN_UNIT_WIDTH - cameraX, -TERRAIN_UNIT_HEIGHT * 10 + parseInt(i / 10) * TERRAIN_UNIT_HEIGHT - cameraY, TERRAIN_UNIT_WIDTH, TERRAIN_UNIT_HEIGHT);
            // bas gauche
            ctx.drawImage(terrain_2[i], -TERRAIN_UNIT_WIDTH * 10 + i % 10 * TERRAIN_UNIT_WIDTH - cameraX, parseInt(i / 10) * TERRAIN_UNIT_HEIGHT - cameraY, TERRAIN_UNIT_WIDTH, TERRAIN_UNIT_HEIGHT);
            // bas droit
            ctx.drawImage(terrain_3[i], i % 10 * TERRAIN_UNIT_WIDTH - cameraX, parseInt(i / 10) * TERRAIN_UNIT_HEIGHT - cameraY, TERRAIN_UNIT_WIDTH, TERRAIN_UNIT_HEIGHT);
        }

        // gere les carrottes
        for (var carrotIndex = 0; carrotIndex < 100; carrotIndex++) {
            newCarrot(carrotIndex, Math.floor(Math.random() * 10000) - 5000, Math.floor(Math.random() * 10000) - 5000);
        }

        // dessine le joueur
        drawPlayer(playerX, playerY);

        // multijoueur
        if (multiplayer) {
            sendPlayerPosition(playerX, playerY);
            getDatas();
            if (playersId.length > 1) {
                for (var i = 0; i < playersId.length; i++) {
                    if (playersId[i] != DB_ID) {
                        console.log(playersId[i]);
                        console.log(playersDatas[i]);
                        drawPlayer(playersDatas[i].x, playersDatas[i].y);
                    }
                }
            }
        }
        // dessine la bar de vie
        var health_bar_start_x = canvas.width - HEALTH_BAR_WIDTH - HEALTH_BAR_WIDTH / 4;
        var health_bar_start_y = canvas.height - HEALTH_BAR_HEIGHT * 1.5;
        // remplissage, palette : https://coolors.co/palette/ff595e-ffca3a-8ac926-1982c4-6a4c93
        if (playerHealth > PLAYER_MAX_LIFE / 3 + PLAYER_MAX_LIFE / 6) {
            ctx.fillStyle = "#8AC926";
        } else if (playerHealth > PLAYER_MAX_LIFE / 6)  {
            ctx.fillStyle = "#FFCA3A";
        } else {
            ctx.fillStyle = "#FF595E";
        }
        ctx.fillRect(health_bar_start_x, health_bar_start_y, HEALTH_BAR_WIDTH / 10 * playerHealth, HEALTH_BAR_HEIGHT);
        // contour
        ctx.lineWidth = 10;
        ctx.strokeStyle = "black";
        ctx.strokeRect(health_bar_start_x, health_bar_start_y, HEALTH_BAR_WIDTH, HEALTH_BAR_HEIGHT);

        // reduit le countdown d'attaque si il n'est pas egale a 0
        if (attackCountdown != 0) {
            attackCountdown--;
        }

        // reduit le temps d'attaque si il n'est pas egale a 0
        if (attackTime != 0) {
            attackTime--;
        } else {
            isAttacking = false;
        }
        // comptage des images
        frameCounter++;
    }

    // passe a la prochaines image
    requestAnimationFrame(loop);
}

// input clavier
document.addEventListener('keydown', function(e) {
    // droite
    if (e.which === 39 || e.which === 68) {
        isRightPressed = true;
    }
    // gauche
    if (e.which === 37 || e.which === 65) {
        isLeftPressed = true;
    }
    // haut
    if (e.which === 38 || e.which === 87) {
        isUpPressed = true;
    }
    // bas
    if (e.which === 40 || e.which === 83) {
        isDownPressed = true;
    }
});
document.addEventListener('keyup', function(e) {
    // droite
    if (e.which === 39 || e.which === 68) {
        isRightPressed = false;
    }
    // gauche
    if (e.which === 37 || e.which === 65) {
        isLeftPressed = false;
    }
    // haut
    if (e.which === 38 || e.which === 87) {
        isUpPressed = false;
    }
    // bas
    if (e.which === 40 || e.which === 83) {
        isDownPressed = false;
    }
    // choisir arme "1"
    if (e.which === 49) {
        isSwordInHand = !isSwordInHand;
    }
    // ouvrir carte "E"
    if (e.which === 69) {
        isMapOpened = !isMapOpened;
    }
    // retourner arme "SPACE"
    if (e.which === 32 && isSwordInHand) {
        isSwordReversed = !isSwordReversed;
    }
});

// input souris
document.addEventListener('mouseup', function(e) {
    if (e.which === 1 && attackCountdown === 0 && isSwordInHand && !isSwordReversed) {
        isAttacking = true;
        attackTime = 20;
        attackCountdown = 50;
        hit();
    }
});

// position de la souris
canvas.addEventListener("mousemove", (e) => {
    mouseScreenPosX = e.clientX;
    mouseScreenPosY = e.clientY;
});

// demarre le jeu
requestAnimationFrame(loop);
