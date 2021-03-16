declare type InitOptions = Partial<{
    tokenKey: string;
    target: string;
    title: string;
    env: 'development' | 'production';
}>;
declare class Login {
    private target;
    private title;
    private env;
    private tokenKey;
    init({ tokenKey, target, title, env }?: InitOptions): void;
    login(): void;
    logout(): void;
}
declare const _default: Login;
export default _default;
