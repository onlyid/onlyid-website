# 发送验证码

:::info 提示
OTP的短信支持中国大陆手机号，邮箱支持国内外主流邮箱品牌，如QQ、163、Gmail等。

如果你还没创建应用，请先到控制台 -> 应用管理 新建一个得到应用ID和应用Secret再继续。
:::

## 发送验证码接口

* 接口描述：发送验证码到指定手机号、邮箱
* 接口地址：`https://onlyid.net/api/open/send-otp`
* 请求方式：`POST`
* 内容类型：`application/json`

请求参数：

<table><thead>
    <tr>
        <th>参数</th>
        <th className="docs__param-c1">是否必需</th>
        <th>含义</th>
    </tr>
</thead><tbody>
    <tr>
        <td>recipient</td>
        <td>是</td>
        <td>接收人，手机号或电子邮箱</td>
    </tr><tr>
        <td>clientId</td>
        <td>是</td>
        <td>你的应用ID</td>
    </tr><tr>
        <td>clientSecret</td>
        <td>是</td>
        <td>你的应用Secret</td>
    </tr><tr>
        <td>code</td>
        <td>否</td>
        <td>字符串，使用你的验证码，而不是由唯ID生成，4~8位数字</td>
    </tr><tr>
        <td>expireMin</td>
        <td>否</td>
        <td>验证码有效期（分钟），要 >= 1 且 &lt;= 20</td>
    </tr><tr>
        <td>maxFailCount</td>
        <td>否</td>
        <td>最多失败次数，要 >= 1 且 &lt;= 20。达到该值后，标记验证码失效，后续核验都直接返回失败，不再尝试核验</td>
    </tr>
</tbody></table>

成功时响应字段：

<table><thead>
    <tr>
        <th>字段</th>
        <th>含义</th>
    </tr>
</thead><tbody>
    <tr>
        <td>recipient</td>
        <td>接收人回显，可忽略</td>
    </tr><tr>
        <td>code</td>
        <td>验证码</td>
    </tr><tr>
        <td>createDate</td>
        <td>创建时间</td>
    </tr><tr>
        <td>expireDate</td>
        <td>过期时间</td>
    </tr><tr>
        <td>maxFailCount</td>
        <td>最多失败次数</td>
    </tr>
</tbody></table>

请求示例：

```http
POST https://onlyid.net/api/open/send-otp HTTP/1.1
Content-Type: application/json
{
    "recipient": "13612345678",
    "clientId": "98d44b4a3543db79",
    "clientSecret": "8d08fbbd89a547df8bda56eba12fac2e"
}
```

验证码发送成功，响应报文示例：

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
    "recipient": "13612345678",
    "code": "581305",
    "createDate": "2021-01-05T19:45:30",
    "expireDate": "2021-01-05T19:55:30",
    "maxFailCount": 10
}
```

验证码发送失败，响应报文示例：

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "error": "应用不存在或应用ID错误，请检查"
}
```

## 自定义设置

默认发送的验证码是6位数字，你可以自定义包括长度、类型在内的选项，以更符合你的需求。

有两种方式：

1. 通过API传参的方式自定义，请见上文的请求参数表格。
2. 登录控制台 -> 应用管理 -> OTP 验证码设置 自定义。

注意：通过API传参的方式自定义的优先级比控制台更高。

## 注意事项

随着接入应用增多，唯ID在短信发送上承担了巨额费用成本，但我们仍坚持 3 分钱每条的良心定价。

开发者应合理使用资源，添加必要的防盗刷机制（图形验证码等），同时更推荐接入SSO，通过账号共享方便用户，也稍微降低我们的成本。

:::danger 警告
唯ID有完善的风控机制，滥用短信资源、频繁打扰用户的恶意开发者将被纳入黑名单，面临从封禁单个违规应用一周到最高封禁开发者账号一个月的处罚。
:::
