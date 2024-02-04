import * as os from 'os';
import { Expressions } from './expression';
import { LangueInterface } from './langueInterface';
export class VerificateurChaine {
    private readonly _langue: LangueInterface;

    constructor(langue: LangueInterface) {
        this._langue = langue;
    }

    public verifier(chaine:string) : string {

         let miroir = chaine.split('').reverse().join('')

         if(chaine == miroir) {
            miroir = chaine + os.EOL + this._langue.feliciter();
         }

        return Expressions.BONJOUR + os.EOL + miroir + os.EOL + Expressions.AU_REVOIR;

    }
}