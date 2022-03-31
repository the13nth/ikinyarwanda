import { CONFIG } from './config'

export const VALIDGUESSES = [
  'ariko',
'bimwe',
'hanze',
'igihe',
'bwira',
'ikora',
'urugo',
'nyina',
'akazi',
'igice',
'nyuma',
'byiza',
'tanga',
'munsi',
'izina',
'cyane',
'mbere',
'kimwe',
'byose',
'ngaho',
'ryari',
'bityo',
'ifite',
'genda',
'menya',
'amazi',
'mbere',
'ninde',
'kwiga',
'izuba',
'igiti',
'kanda',
'ijoro',
'kurya',
'amafi',
'rimwe',
'ibara',
'inkwi',
'hamwe',
'cyera',
'abana',
'genda',
'uruzi',
'nubwo',
'imbwa',
'genda',
'ngufi',
'igice',
'ipine',
'ahuze',
'yumye',
'aseka',
'ipine',
'igice',
'kugwa',
'izina',
'pound',
'ukuri',
'byiza',
'isaha',
'byiza',
'ukuri',
'ijana',
'ibuka',
'ameza',
'munsi',
'icumi',
'amagi',
'ahari',
'grand',
'agace',
'icara',
'mount',
'ijuru',
'akazi',
'idubu',
'gupfa',
'isuku',
'ijana',
'vanga',
'banki',
'icumi',
'rwose',
'kwica',
'isoko',
'amata',
'buryo',
'igice',
'igicu',
'ibuye',
'hepfo',
'uruhu',
'umuzi',
'igika',
'kumva',
'akaga',
'ninde',
'igihe',
'muntu',
'bityo',
'ibaba',
'itiyo',
'ihute',
'isaha',
'major',
'Emera',
'shika',
'igice',
'isoko',
'amazi',
'ijosi',
'byiza',
'igihe',
'ifeza',
'cyane',
'ikoti',
'inoti',
'ikofi',
'menya',
'iduka',
'izuru',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
