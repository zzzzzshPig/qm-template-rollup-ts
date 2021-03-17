declare type InitOptions = Partial<{
    tokenKey: string;
    target: string;
    title: string;
    env: 'development' | 'production';
}>;
export declare class Login {
    private target;
    private title;
    private env;
    private tokenKey;
    init({ tokenKey, target, title, env }?: InitOptions): void;
    login(): void;
    logout(): void;
}
declare const qmLogin: Login;
export default qmLogin;
