declare global {
    namespace jest {
        interface Matchers<R> {
            ayantPourDernièreLigne(attendu: string) : R;
            ayantPourPremièreLigne(attendu: string) : R;
            étantUnPalindrome(attendu: string) : R;
            étantLeMiroir(attendu: string) : R;
        }
    }
}

export {};