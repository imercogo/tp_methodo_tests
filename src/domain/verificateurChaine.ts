import * as os from 'os';
import { Expressions } from './expression';
export class VerificateurChaine {

    constructor() {

    }

    public verifier(chaine:string) : string {

         let miroir = chaine.split('').reverse().join('')

         if(chaine == miroir) {
            miroir = chaine + os.EOL + Expressions.BIEN_DIT;
         }

        return Expressions.BONJOUR + os.EOL + miroir + os.EOL + Expressions.AU_REVOIR;

    }
}