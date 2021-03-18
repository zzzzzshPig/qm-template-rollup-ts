奇思妙行登录插件

## 使用
```shell
yarn add https://gitlab.malmam.com/qm/qm-plugin-admin-login.git#1.0.0
```

```js
import login from 'qm-plugin-admin-login'

login.init({
    tokenKey: 'qm_token',
    target: '_self',
    title: '分析师后台管理登录',
    env: 'development'
})
```

插件在init之后会检测有没有登录，如果没有登录会自动调用`login`，在需要的时候，你也可以手动调用
```js
if (hackAttack) {
    login.login()
}
```

在token过期之后，接口返回10500错误，或者用户退出登录，可以调用`logout`
```js
if (code === 10500) {
    login.logout()
    return
}
```

插件在init之后会自动处理路径中存在的token并设置到localStorage中，key为`tokenKey`的内容，并且清除当前路径中的`qm_token`参数

## 参数
### tokenKey
* default: qm_token
* type: string
* token在localStorage中的key

### target
* default: _self
* type: string
* 跳转login时的跳转方式

### title
* default: 登录
* type: string
* 登录页显示的网页title

### env
* default: development
* type: string
* 当前开发环境，用来判断跳转哪里登录
