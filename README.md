奇思妙行登录插件

## 使用
```shell
yarn add qm-plugin-admin-login
```

```js
import login from 'qm-plugin-admin-login'

login.init({
    tokenKey: 'token',
    target: '_self',
    title: '分析师后台管理登录'
})
```

插件在init之后会检测有没有登录，如果没有登录会自动调用`login`。你也可以手动调用`login`，比如在token过期之后，接口返回10500错误
```js
if (code === 10500) {
    login.login()
    return
}
```

插件在init之后会自动处理路径中存在的token并设置到localStorage中，key为`tokenKey`的内容，并且清除当前路径中的`qm_token`参数

## 参数
### tokenKey
* default: token
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
