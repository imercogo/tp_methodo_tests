import { Expressions } from "./expression";
import { LangueInterface } from "./langueInterface";

export class LangueFrançaise implements LangueInterface {
    public feliciter(): string {
        return Expressions.BIEN_DIT;
    }
}