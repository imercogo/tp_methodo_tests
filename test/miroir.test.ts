import { VerificateurChaine } from "./src/domain/verificateurChaine";
import * as os from "os";

const palindrome = ['engagelejeuquejelegagne', 'radar', 'girafarig'];

describe('test works', () => {
    test.each([
        ['test'],
        ['radar'],
        ['coucou'],
        ['hello']
    ])('QUAND on saisit une chaine %s ' + 
    'ALORS elle est renvoyée en miroir',
    (chaine : any) => {

        let attendu = chaine.split('').reverse().join('');
        let resultat = new VerificateurChaine().verifier(chaine);
        expect(resultat).toContain(attendu);
    });

    test.each([
        ...palindrome
    ])('QUAND on saisit un palindrome, ALORS celui-ci est renvoyé et il est renvoyé Bien dit !',
     (chaine: string) => {

        let resultat = new VerificateurChaine().verifier(chaine);

        expect(resultat).toContain(chaine + os.EOL +"Bien dit !");
     })
})