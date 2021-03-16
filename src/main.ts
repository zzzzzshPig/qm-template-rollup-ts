import querystring from 'querystring'

type InitOptions = Partial<{
    tokenKey: string;
    target: string;
    title: string;
    env: 'development' | 'production'; // production development
}>

const ENV = {
    development: 'development',
    production: 'production'
}

class Login {
    private target = ''
    private title = ''
    private env = ''

    init ({ tokenKey = 'token', target = '_self', title = '登录', env = 'development' }: InitOptions = {}) {
        this.env = env
        this.target = target
        this.title = title
        const token = querystring.parse(location.search.slice(1)).qm_token as string

        // 路径上存在 token 则设置进local 并且清除掉路径上的 token
        if (token) {
            localStorage.setItem(tokenKey, JSON.stringify(token))
            history.pushState({}, '', location.href.split('?')[0])
        } else if (!localStorage.getItem(tokenKey)) {
            // 本地没有存有token 则登录
            this.login()
        }
    }

    login () {
        const url = this.env === ENV.development ? 'http://192.168.1.160:8001/login' : 'https://admin.91xiangju.com/frontend-platform/login'
        const from = `qm_from=${encodeURIComponent(location.href)}`
        const title = `&title=${encodeURIComponent(this.title)}`
        open(`${url}?${from}${title}`, this.target)
    }
}

export default new Login()
