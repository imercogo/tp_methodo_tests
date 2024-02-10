import * as os from "os";
import {expect} from '@jest/globals';
import type {MatcherFunction} from 'expect';

const ayantPourDernièreLigneNonVide: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, attendu: unknown) {
        if(typeof actual !== 'string') throw new Error("Only works with strings");
        if(typeof attendu !== 'string') throw new Error("Only works with strings");

        const lignesNonVides = actual
            .split(os.EOL)
            .filter(line => line != "");

        const dernièreLigne = lignesNonVides[lignesNonVides.length - 1];

        const pass = dernièreLigne == attendu;
        const message = pass
            ? `La dernière ligne ne devrait pas être ${attendu}, ${actual} obtenu`
            : `La dernière ligne devrait être ${attendu}, ${actual} obtenu`;

        return {
            message: () => message,
            pass: pass
        }
    };

const ayantPourPremièreLigne: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, attendu: unknown) {
        if(typeof actual !== 'string') throw new Error("Only works with strings");
        if(typeof attendu !== 'string') throw new Error("Only works with strings");

        const lignes = actual.split(os.EOL);
        const premièreLigne = lignes[0];

        const pass = premièreLigne == attendu;
        const message = pass
            ? `La première ligne ne devrait pas être ${attendu}, ${actual} obtenu`
            : `La première ligne devrait être ${attendu}, ${actual} obtenu`;

        return {
            message: () => message,
            pass: pass
        }
    };

    const étantUnPalindrome: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, attendu: unknown) {
        if(typeof actual !== 'string') throw new Error("Only works with strings");
        if(typeof attendu !== 'string') throw new Error("Only works with strings");

        const lignes = actual.split(os.EOL);
        const palindrome = lignes[0];
        const féliciter = lignes[1];

        const attenduSplit = attendu.split(os.EOL);

        const attenduPalindrome = attenduSplit[0];
        const attenduFéliciter = attenduSplit[1];

        const pass = palindrome == attenduPalindrome && féliciter == attenduFéliciter;
        const message = pass
            ? `Le palindrome et le féliciter ne devraient pas être ${attendu}, ${actual} obtenu`
            : `Le palindrome et le féliciter devraient être ${attendu}, ${actual} obtenu`;

        return {
            message: () => message,
            pass: pass
        }
    };

    const étantLeMiroir: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, attendu: unknown) {
        if(typeof actual !== 'string') throw new Error("Only works with strings");
        if(typeof attendu !== 'string') throw new Error("Only works with strings");

        const lignes = actual.split(os.EOL);
        const miroir = lignes[1];

        const pass = miroir == attendu;
        const message = pass
            ? `La première ligne ne devrait pas être ${attendu}, ${actual} obtenu`
            : `La première ligne devrait être ${attendu}, ${actual} obtenu`;

        return {
            message: () => message,
            pass: pass
        }
    };

expect.extend({
    ayantPourDernièreLigne: ayantPourDernièreLigneNonVide,
    ayantPourPremièreLigne,
    étantUnPalindrome,
    étantLeMiroir
});