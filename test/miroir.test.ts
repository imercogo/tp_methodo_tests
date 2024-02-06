import { Expressions } from "../src/domain/expression";
import { LangueAnglaise } from "../src/domain/langueAnglaise";
import { LangueFrançaise } from "../src/domain/langueFrançaise";
import { VerificateurChaine } from "../src/domain/verificateurChaine";
import * as os from "os";
import { LangueFake } from "./utilities/LangueFake";
import { LangueStub } from "./utilities/LangueStub";
import { VerificateurChaineBuilder } from "./utilities/verificateurChaineBuilder";
import { MomentDeLaJournee } from "../src/domain/MomentDeLaJournee";

const chaine = ['test', 'radar', 'coucou', 'hello']
const palindrome = ['engagelejeuquejelegagne', 'radar', 'girafarig'];
const momentDeLaJournee : MomentDeLaJournee[] = [MomentDeLaJournee.INCONNU, 
   MomentDeLaJournee.MATIN,
   MomentDeLaJournee.APRES_MIDI,
   MomentDeLaJournee.SOIREE,
   MomentDeLaJournee.NUIT];

   function casSalutations() {
      const chaines: string[] = [...chaine, ...palindrome];
      const cases: [MomentDeLaJournee, string][] = [];
      for (let chaine of chaines) {
          for (let moment of momentDeLaJournee) {
              cases.push([moment, chaine])
          }
      }
  
      return cases;
  }

describe('test works', () => {
    test.each([
        ...chaine
    ])('QUAND on saisit une chaine %s ' + 
    'ALORS elle est renvoyée en miroir',
    (chaine : any) => {
        let langue = new LangueStub();

        let attendu = chaine.split('').reverse().join('');
        let resultat = VerificateurChaineBuilder.Default().verifier(chaine);
        expect(resultat).toContain(attendu);
    });

    test.each([
        ...palindrome
    ])('QUAND on saisit un palindrome, ALORS celui-ci est renvoyé et il est renvoyé Bien dit !',
     (chaine: string) => {
        let langue = new LangueFrançaise();

        let resultat = VerificateurChaineBuilder.Default().verifier(chaine);
        expect(resultat).toContain(chaine + os.EOL + langue.feliciter());
     })

     test.each([
        ...chaine
    ])('QUAND on saisit une chaine ' +
     'ALORS Bonjour est renvoyé avant toute réponse',
     (chaine: string) => {
        let langue = new LangueFrançaise();

        let resultat = VerificateurChaineBuilder.Default().verifier(chaine);
        let premiereLigne = resultat.split(os.EOL)[0];
        
        expect(premiereLigne).toContain(Expressions.BONJOUR);
     })

     
     test.each([
        ...chaine
    ])('QUAND on saisit une chaine ' +
    'ALORS Au revoir est renvoyé après toute réponse',
     (chaine: string) => {
        let langue = new LangueFrançaise();

        let resultat = VerificateurChaineBuilder.Default().verifier(chaine);
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

        let resultat = new VerificateurChaineBuilder().AyantPourLangue(langue).Build().verifier(chaine);
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

        let resultat = new VerificateurChaineBuilder().AyantPourLangue(langue).Build().verifier(chaine);

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

        let resultat = new VerificateurChaineBuilder().AyantPourLangue(langue).Build().verifier(chaine);

        let resultatSplit = resultat.split(os.EOL)[2];

        expect(resultatSplit).toContain(langue.feliciter())
     })

     test.each(
      casSalutations()
     )('ETANT DONNE un utilisateur parlant une langue' +
     'QUAND on saisit une chaine' + 
     'ALORS Bonjour de cette langue est renvoyé avant tout',
     (momentDeLaJournee: MomentDeLaJournee,chaine: string) => {
        let langue = new LangueFake();

        let resultat = new VerificateurChaineBuilder().AyantPourLangue(langue).AyantPourMomentDeLaJournee(momentDeLaJournee).Build().verifier(chaine);

        let resultatSplit = resultat.split(os.EOL)[0];

        expect(resultatSplit).toContain(langue.saluer(momentDeLaJournee))
     })

     test.each([
        ...chaine
     ])('ETANT DONNE un utilisateur parlant une langue' +
     'QUAND on saisit une chaine' + 
     'ALORS Au Revoir de cette langue est renvoyé après tout',
     (chaine: string) => {
        let langue = new LangueFake();

        let resultat = new VerificateurChaineBuilder().AyantPourLangue(langue).Build().verifier(chaine);

        let resultatSplit = resultat.split(os.EOL);
        let derniereLigne = resultatSplit[resultatSplit.length - 1];

        expect(derniereLigne).toContain(langue.quitter())
     })

     test.each(
      casSalutations()
      )('ETANT DONNE un utilisateur parlant une langue ' +
      'ET que la période de la journée est <période> ' +
      'QUAND on saisit une chaîne ' +
      'ALORS <salutation> de cette langue à cette période est envoyé avant tout '+
      'CAS %s', (momentDeLaJournee: MomentDeLaJournee, chaine: string) => {
         let langue = new LangueFake();

         let resultat = new VerificateurChaineBuilder().AyantPourLangue(langue).AyantPourMomentDeLaJournee(momentDeLaJournee).Build().verifier(chaine);
         
         let resultatSplit = resultat.split(os.EOL)[0];

         expect(resultatSplit).toContain(langue.saluer(momentDeLaJournee))
      })
})