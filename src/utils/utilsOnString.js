import {splitAt, trim} from 'ramda';

export const letterToProfil = (name, nber=2) => {
    let twoLetters = splitAt(nber, trim(name));
    return twoLetters[0];
}