import { VerificateurChaine } from "./src/domain/verificateurChaine";

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
})