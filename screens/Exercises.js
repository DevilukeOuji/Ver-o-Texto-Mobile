const amizade = require('../assets/img/amizade.png')
const bebida = require('../assets/img/bebida.png')
const casaco = require('../assets/img/casaco.png')
const duvida = require('../assets/img/duvida.png')
const edificio = require('../assets/img/edificio.png')
const fivela = require('../assets/img/fivela.png')
const ideia = require('../assets/img/ideia.png')
const janela = require('../assets/img/janela.png')
const luneta = require('../assets/img/luneta.png')
const medica = require('../assets/img/medica.png')

//sons
var Sound = require('react-native-sound');
const amizadeS = new Sound(require('../assets/sound/amizade.mp3'))
const bebidaS = new Sound(require('../assets/sound/bebida.mp3'))
const casacoS = new Sound (require('../assets/sound/casaco.mp3'))
const duvidaS = new Sound(require('../assets/sound/duvida.mp3'))
const edificioS = new Sound(require('../assets/sound/edificio.mp3'))
const fivelaS = new Sound(require('../assets/sound/fivela.mp3'))
const ideiaS = new Sound(require('../assets/sound/ideia.mp3'))
const janelaS = new Sound(require('../assets/sound/janela.mp3'))
const lunetaS = new Sound(require('../assets/sound/luneta.mp3'))
const medicaS = new Sound(require('../assets/sound/medica.mp3'))

const elefanteS = new Sound(require('../assets/sound/elefante.mp3'))
const eletricidadeS = new Sound(require('../assets/sound/eletricidade.mp3'))

const a = new Sound (require('../assets/sound/a.mp3'))
const mi = new Sound (require('../assets/sound/mi.mp3'))
const ca = new Sound (require('../assets/sound/ca.mp3'))
const za = new Sound (require('../assets/sound/za.mp3'))
const de = new Sound (require('../assets/sound/de.mp3'))
const be = new Sound (require('../assets/sound/be.mp3'))
const bi = new Sound (require('../assets/sound/bi.mp3'))
const da = new Sound (require('../assets/sound/da.mp3'))
const sa = new Sound (require('../assets/sound/sa.mp3'))
const co = new Sound (require('../assets/sound/co.mp3'))
const du = new Sound (require('../assets/sound/du.mp3'))
const vi = new Sound (require('../assets/sound/vi.mp3'))
const e = new Sound (require('../assets/sound/e.mp3'))
const di = new Sound (require('../assets/sound/di.mp3'))
const fi = new Sound (require('../assets/sound/fi.mp3'))
const cio = new Sound (require('../assets/sound/cio.mp3'))
const ve = new Sound (require('../assets/sound/ve.mp3'))
const la = new Sound (require('../assets/sound/la.mp3'))
const i = new Sound (require('../assets/sound/i.mp3'))
const dei = new Sound (require('../assets/sound/dei.mp3'))
const ja = new Sound (require('../assets/sound/ja.mp3'))
const ne = new Sound (require('../assets/sound/ne.mp3'))
const lu = new Sound (require('../assets/sound/lu.mp3'))
const ta = new Sound (require('../assets/sound/ta.mp3'))
const me = new Sound (require('../assets/sound/me.mp3'))
const mo = new Sound (require('../assets/sound/mo.mp3'))
const gi = new Sound (require('../assets/sound/gi.mp3'))
const bo = new Sound (require('../assets/sound/bo.mp3'))
const tra = new Sound (require('../assets/sound/tra.mp3'))
const mu = new Sound (require('../assets/sound/mu.mp3'))
const ni = new Sound (require('../assets/sound/ni.mp3'))
const li = new Sound (require('../assets/sound/li.mp3'))
const u = new Sound (require('../assets/sound/u.mp3'))
const se = new Sound (require('../assets/sound/se.mp3'))
const xi = new Sound (require('../assets/sound/xi.mp3'))
const go = new Sound (require('../assets/sound/go.mp3'))
const tri = new Sound (require('../assets/sound/tri.mp3'))
const cho = new Sound (require('../assets/sound/cho.mp3'))
const to = new Sound(require('../assets/sound/to.mp3'))
const basic = [
    { word: 'Amizade',image: amizade, spelled: [{id: 564, syl:'A',syl_sound:a},{id: 754, syl:'mi',syl_sound:mi},{id: 784,syl:'za',syl_sound:za},{id: 254,syl:'de',syl_sound:de}], sound: amizadeS},
    { word: 'Bebida',image: bebida, spelled: [{id: 724,syl:'Be',syl_sound:be},{id: 758,syl:'bi',syl_sound:bi},{syl:'da',id: 764,syl_sound:da}], sound: bebidaS},
    { word: 'Casaco', image: casaco, spelled: [{id: 1054,syl:'Ca',syl_sound:ca},{id: 757,syl:'sa',syl_sound:sa},{id: 354,syl:'co',syl_sound:co}], sound: casacoS},
    { word: 'Dúvida',image: duvida, spelled: [{id: 1744,syl:'Dú',syl_sound:du},{id: 750,syl:'vi',syl_sound:vi},{id: 614,syl:'da',syl_sound:da}], sound: duvidaS},
    { word: 'Edifício',image: edificio, spelled: [{id: 1421,syl:'E',syl_sound:e},{id: 1321,syl:'di',syl_sound:di},{id: 1121,syl:'fí',syl_sound:fi},{syl:'cio',syl_sound:cio}], sound: edificioS},
    { word: 'Fivela',image: fivela, spelled: [{id: 1426,syl:'Fi',syl_sound:fi},{id: 1428,syl:'ve',syl_sound:ve},{id: 1423,syl:'la',syl_sound:la}], sound: fivelaS},
    { word: 'Ideia',image: ideia, spelled: [{id: 1611,syl:'I',syl_sound:i},{id: 1821,syl:'dei',syl_sound:dei},{id: 1831,syl:'a',syl_sound:a}], sound: ideiaS},
    { word: 'Janela',image: janela, spelled: [{id: 1419,syl:'Ja',syl_sound:ja},{id: 4521,syl:'ne',syl_sound:ne},{id: 1871,syl:'la',syl_sound:la}], sound: janelaS},
    { word: 'Luneta',image: luneta, spelled: [{id: 8621,syl:'Lu',syl_sound:lu},{id: 2121,syl:'ne',syl_sound:ne},{id: 1981,syl:'ta',syl_sound:ta}], sound: lunetaS},
    { word: 'Médica',image: medica, spelled: [{id: 8321,syl:'Mé',syl_sound:me},{id: 8421,syl:'di',syl_sound:di},{id: 1651,syl:'ca',syl_sound:ca}], sound: medicaS},
]
 //const medium = []
  //const advanced = []
  
const alfa = [{letter: 'E e', related: [{word: 'Edifício',sound:edificioS},{word: 'Elefante',sound: elefanteS},{word:'Eletricidade',sound: eletricidadeS}]}]
  const colors = [
    { code: '#1abc9c' },
    { code: '#2ecc71' },
    { code: '#3498db' },
    { code: '#9b59b6' },
    { code: '#34495e' },
    { code: '#16a085' },
    { code: '#27ae60' },
    { code: '#2980b9' },
    { code: '#8e44ad' },
    { code: '#2c3e50' },
    { code: '#f1c40f' },
    { code: '#e67e22' },
    { code: '#e74c3c' },
    { code: '#ecf0f1' },
    { code: '#95a5a6' },
    { code: '#f39c12' },
    { code: '#d35400' },
    { code: '#c0392b' },
    { code: '#bdc3c7' },
    { code: '#7f8c8d' },
  ];

const syllab = [{syl: 'mo',syl_sound:mo},
{id: 1151,syl: 'gi',syl_sound:gi},
{id: 1725,syl: 'bo',syl_sound:bo},
{id: 1564,syl: 'cho',syl_sound:cho},
{id: 1586,syl: 'tra',syl_sound:tra},
{id: 1234,syl: 'mu',syl_sound:mu},
{id: 5643,syl: 'ni',syl_sound:ni},
{id: 5613,syl: 'go',syl_sound:go},
{id: 5313,syl: 'u',syl_sound:u},
{id: 5146,syl: 'se',syl_sound:se},
{id: 5612,syl: 'xi',syl_sound:xi},
{id: 3513,syl: 'li',syl_sound:li},
{id: 5460,syl: 'to',syl_sound:to},
{id: 3513,syl: 'tri',syl_sound:tri}]

const transform = (item,arr) =>{
    for (var i = 0; i < item.length; i++) {
      const word = capitalizeFirstLetter(item[i].toLowerCase());
      var obj = {word: word, image: Bola,spelled:[]};
      arr.push(obj);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const randNumber = (arr) =>{
  const rand = Math.round(Math.random() * (arr.length-1));
  return rand
}

function merge(arr){
  var syllab_arr = [];
  for(var i =0; i< arr.length;i++){
    var rand_syl = syllab[Math.round(Math.random() * (arr.length-1))];
    if (rand_syl in arr){
      rand_syl = syllab[Math.round(Math.random() * (arr.length-1))];
    }
    syllab_arr.push(rand_syl)
  }
  const ar = arr.concat(syllab_arr);
  return ar
}

function fisherYates(arr) { //shuffle array
  var i, j, k;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.round(Math.random() * i)
    k = arr[i]
    arr[i] = arr[j]
    arr[j] = k
  }
  return arr
}

function validate(arr1,arr2){
  var count = 0
  for(var i = 0; i < arr1.length; i++){
    if (arr1[i].syl == arr2[i].syl){
      count++;
    }
  }
  if (count == arr1.length){
    return true
  }
  return false
}

export {basic, alfa, colors,randNumber, merge, fisherYates, validate};


const item = [
  'ABACATE',
  'ABACAXI',
  'AJUDA',
  'ALICATE',
  'ALUNA',
  'ALUNO',
  'AMIGA',
  'AMIGO',
  'AMIZADE',
  'APETITE',
  'APITO',
  'AVE',
  'AZEITE',
  'AZEITONA',
  'AZULEJO',
  'BACIA',
  'BALEIA',
  'BATATA',
  'BAÚ',
  'BEBÊ',
  'BEBIDA',
  'BELA',
  'BELO',
  'BICO',
  'BIFE',
  'BIGODE',
  'BOCA',
  'BOI',
  'BOLA',
  'BOLO',
  'BONÉ',
  'BONITA',
  'BUZINA',
  'CABANA',
  'CABELO',
  'CABO',
  'CAFÉ',
  'CAIXA',
  'CAJU',
  'CAMA',
  'CÂMARA',
  'CAMELO',
  'CANETA',
  'CANOA',
  'CANUDO',
  'CAPA',
  'CAPELA',
  'CAPIVARA',
  'CASA',
  'CASACO', 
  'CAULE',
  'CAVALO',
  'COCO',
  'COCÔ',
  'COMIDA',
  'COPO',
  'COTIA',
  'COTOVELO',
  'COXA',
  'CUECA',
  'DADO',
  'DATA',
  'DEDO',
  'DEITADO',
  'DELICADO',
  'DELÍCIA',
  'DEPUTADA',
  'DIA',
  'DIÁLOGO',
  'DITADO',
  'DUNA',
  'DÚVIDA',
  'DÚZIA',
  'ECO',
  'EDIFÍCIO',
  'EDUCADA',
  'EDUCADO',
  'ÉGUA',
  'EU',
  'FÁBULA',
  'FACA',
  'FADA',
  'FAMÍLIA',
  'FATIA',
  'FAXINA',
  'FEIJOADA',
  'FEIO',
  'FÊMEA',
  'FEMININO',
  'FIGO',
  'FILA',
  'FINO',
  'FIO',
  'FITA',
  'FIVELA',
  'FOCA',
  'FOGO',
  'FOME',
  'FOTO',
  'GADO',
  'GALO',
  'GATO',
  'GAVETA',
  'GOLA',
  'GOLE',
  'IDADE',
  'IDEIA',
  'INÍCIO',
  'INIMIGO',
  'IOIÔ',
  'JABUTI',
  'JANELA',
  'JAULA',
  'JIBOIA',
  'JOGO',
  'JUDÔ',
  'JUÍZA',
  'LÁBIO',
  'LADO',
  'LAGO',
  'LAMA',
  'LATA',
  'LEGUME',
  'LEITE',
  'LEVE',
  'LIXO',
  'LOBO',
  'LOCOMOTIVA',
  'LOJA',
  'LUA',
  'LUNETA',
  'LUPA',
  'LUVA',
  'MACACO',
  'MAIÔ',
  'MALA',
  'MAPA',
  'MÉDICA',
  'MÉDIO',
  'MEDO',
  'MEIA',
  'MEIGO',
  'MENINO',
  'METADE',
  'MOEDA',
  'NÁDEGA',
  'NATUREZA',
  'NAVIO',
  'NETA',
  'NEVE',
  'NÓ',
  'NOITE',
  'NOME',
  'NOTA',
  'NOTÍCIA',
  'NOVO',
  'NUA',
  'NUCA',
  'NÚMERO',
  'OCUPADO',
  'OFICINA',
  'OUVIDO',
  'OVO',
  'PÁ',
  'PAI',
  'PANELA',
  'PAPAGAIO',
  'PATA',
  'PATINETE',
  'PÁTIO',
  'PATO',
  'PÉ',
  'PEITO',
  'PEIXE',
  'PEIXE-BOI',
  'PELE',
  'PELO',
  'PENA',
  'PEPINO',
  'PÉTALA',
  'PIADA',
  'PIANO',
  'PICOLÉ',
  'PIJAMA',
  'PIPOCA',
  'PIRÂMIDE',
  'POLÍCIA',
  'RATO',
  'REDE',
  'RETA',
  'ROBÔ',
  'RODA',
  'ROSA',
  'ROXO',
  'RUA',
  'RUÍDO',
  'SABIÁ',
  'SABONETE',
  'SACOLA',
  'SAIA',
  'SALADA',
  'SAPATO',
  'SAPO',
  'SEDE',
  'SELO',
  'SINO',
  'SOFÁ',
  'SOPA',
  'SUCO',
  'SUJO',
  'TACACÁ',
  'TATU',
  'TELEFONE',
  'TIJOLO',
  'TIME',
  'TOCO',
  'TOMATE',
  'TUCANO',
  'UVA',
  'UXI',
  'VACA',
  'VELA',
  'XIXI'
  ]
  
 