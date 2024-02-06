import { MomentDeLaJournee } from "./MomentDeLaJournee";
import { Expressions } from "./expression";
import { LangueInterface } from "./langueInterface";

export class LangueFrançaise implements LangueInterface {
    public feliciter(): string {
        return Expressions.BIEN_DIT;
    }

    public saluer(moment : MomentDeLaJournee): string {
        if(moment === MomentDeLaJournee.SOIREE || moment === MomentDeLaJournee.NUIT )
            return Expressions.BONSOIR;
        return Expressions.BONJOUR;
    }

    public quitter(): string {
        return Expressions.AU_REVOIR;
    }
}