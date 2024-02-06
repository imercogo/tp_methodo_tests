import { LangueFrançaise } from "../../src/domain/langueFrançaise";
import { LangueInterface } from "../../src/domain/langueInterface";
import { VerificateurChaine } from "../../src/domain/verificateurChaine";

export class VerificateurChaineBuilder {
    private _langue: LangueInterface = new LangueFrançaise();

    public static Default() {
        return new VerificateurChaineBuilder().Build();
    }

    public Build() : VerificateurChaine {
        return new VerificateurChaine(this._langue);
    }

    public AyantPourLangue(langue: LangueInterface): VerificateurChaineBuilder {
        this._langue = langue;
        return this;
    }
}