import { LangueInterface } from "../../src/domain/langueInterface";

export class LangueFake implements LangueInterface {
    feliciter(): string {
        return 'Félicitations';
    }
}