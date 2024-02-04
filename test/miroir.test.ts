import { Expressions } from "./src/domain/expression";
import { VerificateurChaine } from "./src/domain/verificateurChaine";
import * as os from "os";

const chaine = ['test', 'radar', 'coucou', 'hello']
const palindrome = ['engagelejeuquejelegagne', 'radar', 'girafarig'];

describe('test works', () => {
    test.each([
        ...chaine
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

        expect(resultat).toContain(chaine + os.EOL + Expressions.BIEN_DIT);
     })

     test.each([
        ...chaine
    ])('QUAND on saisit une chaine ' +
     'ALORS Bonjour est renvoyé avant toute réponse',
     (chaine: string) => {

        let resultat = new VerificateurChaine().verifier(chaine);
        
        let premiereLigne = resultat.split(os.EOL)[0];
        
        expect(premiereLigne).toContain(Expressions.BONJOUR);
     })

     test.each([
        ...chaine
    ])('QUAND on saisit une chaine ' +
    'ALORS Au revoir est renvoyé après toute réponse',
     (chaine: string) => {

        let resultat = new VerificateurChaine().verifier(chaine);

        let resultatSplit = resultat.split(os.EOL);
        let derniereLigne = resultatSplit[resultatSplit.length - 1];
        
        expect(derniereLigne).toContain(Expressions.AU_REVOIR);
     })
})