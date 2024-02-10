import { MomentDeLaJournee } from "../src/domain/MomentDeLaJournee";
import { LangueAnglaise } from "../src/domain/langueAnglaise";
import { VerificateurChaineBuilder } from "./utilities/verificateurChaineBuilder";
import * as os from "os";


describe('test recette', () => {
    test.each([
        ['girafarig'],
        ['kayak']
    ])('ÉTANT donné un utilisateur parlant Anglais ' +
    'ET que la période de la journée est le soir ' +
    'QUAND il saisit un palindrome ' +
    'ALORS on lui dit Bonjour, puis on renvoie le palindrome, suivi de bien dit et de bonsoir en anglais',
    (chaine: any) => {
        const moment: MomentDeLaJournee = MomentDeLaJournee.SOIREE;
        const anglais : LangueAnglaise = new LangueAnglaise();
        const resultat = new VerificateurChaineBuilder()
                                                        .AyantPourLangue(anglais)
                                                        .AyantPourMomentDeLaJournee(moment)
                                                        .Build().verifier(chaine);

        var premiereLigne = resultat.split(os.EOL)[0];                                                
        var palindrome = resultat.split(os.EOL)[1];
        var felicitations = resultat.split(os.EOL)[2];
        var derniereLigne = resultat.split(os.EOL)[3];

        
        expect(premiereLigne).toEqual(anglais.saluer(moment))
        expect(palindrome).toEqual(chaine)
        expect(felicitations).toEqual(anglais.feliciter())
        expect(derniereLigne).toEqual(anglais.quitter(moment))

    })
})