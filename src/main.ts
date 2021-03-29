import querystring from 'querystring'

type InitOptions = Partial<{
    tokenKey: string;
    target: string;
    title: string;
    env: 'development' | 'production'; // production development
}>

function openWin (url: string, target: string) {
    const a = document.createElement('a')
    const id = '___false_click'

    a.setAttribute('href', url)
    a.setAttribute('target', target)
    a.setAttribute('id', id)

    // 防止反复添加
    if (!document.getElementById(id)) {
        document.body.appendChild(a)
    }

    a.click()
}

export class Login {
    private target = ''
    private title = ''
    private env = ''
    private tokenKey = ''

    init ({ tokenKey = 'qm_token', target = '_self', title = '登录', env = 'development' }: InitOptions = {}) {
        this.env = env
        this.target = target
        this.title = title
        this.tokenKey = tokenKey
        const token = querystring.parse(location.search.slice(1)).qm_token as string

        // 路径上存在 token 则设置进local 并且清除掉路径上的 token
        if (token) {
            localStorage.setItem(tokenKey, JSON.stringify(token))
            history.pushState({}, '', location.href.replace(/&?qm_token=[^&]*/, ''))
        } else if (!localStorage.getItem(tokenKey)) {
            // 本地没有存有token 则登录
            this.login()
        }
    }

    login () {
        const url = this.env === 'production' ? 'https://admin.91xiangju.com/frontend-platform/login' : 'http://192.168.1.66/frontend-platform-dev/login'
        const from = `qm_from=${encodeURIComponent(location.href)}`
        const title = `&title=${encodeURIComponent(this.title)}`
        openWin(`${url}?${from}${title}`, this.target)
    }

    logout () {
        this.login()
    }
}

const qmLogin = new Login()

if (window) {
    window.qmLogin = qmLogin
}

export default qmLogin
