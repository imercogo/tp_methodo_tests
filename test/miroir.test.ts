import { Expressions } from "../src/domain/expression";
import { LangueAnglaise } from "../src/domain/langueAnglaise";
import { LangueFrançaise } from "../src/domain/langueFrançaise";
import { VerificateurChaine } from "../src/domain/verificateurChaine";
import * as os from "os";
import { LangueFake } from "./utilities/LangueFake";
import { LangueStub } from "./utilities/LangueStub";

const chaine = ['test', 'radar', 'coucou', 'hello']
const palindrome = ['engagelejeuquejelegagne', 'radar', 'girafarig'];

describe('test works', () => {
    test.each([
        ...chaine
    ])('QUAND on saisit une chaine %s ' + 
    'ALORS elle est renvoyée en miroir',
    (chaine : any) => {
        let langue = new LangueStub();

        let attendu = chaine.split('').reverse().join('');
        let resultat = new VerificateurChaine(langue).verifier(chaine);
        expect(resultat).toContain(attendu);
    });

    test.each([
        ...palindrome
    ])('QUAND on saisit un palindrome, ALORS celui-ci est renvoyé et il est renvoyé Bien dit !',
     (chaine: string) => {
        let langue = new LangueFrançaise();

        let resultat = new VerificateurChaine(langue).verifier(chaine);

        expect(resultat).toContain(chaine + os.EOL + langue.feliciter());
     })

     test.each([
        ...chaine
    ])('QUAND on saisit une chaine ' +
     'ALORS Bonjour est renvoyé avant toute réponse',
     (chaine: string) => {
        let langue = new LangueFrançaise();

        let resultat = new VerificateurChaine(langue).verifier(chaine);

        let premiereLigne = resultat.split(os.EOL)[0];
        
        expect(premiereLigne).toContain(Expressions.BONJOUR);
     })

     
     test.each([
        ...chaine
    ])('QUAND on saisit une chaine ' +
    'ALORS Au revoir est renvoyé après toute réponse',
     (chaine: string) => {
        let langue = new LangueFrançaise();

        let resultat = new VerificateurChaine(langue).verifier(chaine);

        let resultatSplit = resultat.split(os.EOL);
        let derniereLigne = resultatSplit[resultatSplit.length - 1];
        
        expect(derniereLigne).toContain(Expressions.AU_REVOIR);
     })

     test.each([
        ...palindrome
     ])('ETANT DONNE un utilisateur parlant français' +
     'QUAND on entre un palindrome' +
     'ALORS il est renvoyé et le BIEN DIT de la langue française',
     (chaine: string) => {
        let langue = new LangueFrançaise();

        let resultat = new VerificateurChaine(langue).verifier(chaine);

        let resultatSplit = resultat.split(os.EOL)[2];

        expect(resultatSplit).toContain(langue.feliciter())
     })

     test.each([
        ...palindrome
     ])('ETANT DONNE un utilisateur parlant anglais' +
     'QUAND on entre un palindrome' +
     'ALORS il est renvoyé et le BIEN DIT de la langue anglaise',
     (chaine: string) => {
        let langue = new LangueAnglaise();

        let resultat = new VerificateurChaine(langue).verifier(chaine);

        let resultatSplit = resultat.split(os.EOL)[2];

        expect(resultatSplit).toContain(langue.feliciter())
     })

     test.each([
        ...palindrome
     ])('ETANT DONNE un utilisateur parlant une fausse langue' +
     'QUAND on entre un palindrome' +
     'ALORS il est renvoyé et le BIEN DIT de la fausse langue',
     (chaine: string) => {
        let langue = new LangueFake();

        let resultat = new VerificateurChaine(langue).verifier(chaine);

        let resultatSplit = resultat.split(os.EOL)[2];

        expect(resultatSplit).toContain(langue.feliciter())
     })

     test.each([
        ...chaine
     ])('ETANT DONNE un utilisateur parlant une langue' +
     'QUAND on saisit une chaine' + 
     'ALORS Bonjour de cette langue est renvoyé avant tout',
     (chaine: string) => {
        let langue = new LangueFake();

        let resultat = new VerificateurChaine(langue).verifier(chaine);

        let resultatSplit = resultat.split(os.EOL)[0];

        expect(resultatSplit).toContain(langue.saluer())
     })

     test.each([
        ...chaine
     ])('ETANT DONNE un utilisateur parlant une langue' +
     'QUAND on saisit une chaine' + 
     'ALORS Au Revoir de cette langue est renvoyé après tout',
     (chaine: string) => {
        let langue = new LangueFake();

        let resultat = new VerificateurChaine(langue).verifier(chaine);

        let resultatSplit = resultat.split(os.EOL);
        let derniereLigne = resultatSplit[resultatSplit.length - 1];

        expect(derniereLigne).toContain(langue.quitter())
     })
})