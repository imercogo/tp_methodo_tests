
export class VerificateurChaine {


    constructor() {

    }

    public verifier(chaine:string) : string {

         let miroir = chaine.split('').reverse().join('')

        return miroir;

    }
}