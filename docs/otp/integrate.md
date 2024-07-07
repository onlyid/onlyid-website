# 使用

:::info 提示
如果你还没创建应用，请先到控制台 -> 应用管理 新建一个得到应用ID和应用Secret再继续。
:::

## 发送验证码

* 接口描述：发送验证码到指定手机号、邮箱
* 接口地址：`https://www.onlyid.net/api/open/send-otp`
* 请求方式：`POST`
* 内容类型：`application/json`

请求参数：

<table><thead>
    <tr>
        <th>参数</th>
        <th className="docs__param-c1">必填，类型</th>
        <th>含义</th>
    </tr>
</thead><tbody>
    <tr>
        <td>recipient</td>
        <td>必填，字符串</td>
        <td>接收人，手机号或电子邮箱</td>
    </tr><tr>
        <td>clientId</td>
        <td>必填，字符串</td>
        <td>你的应用ID</td>
    </tr><tr>
        <td>clientSecret</td>
        <td>必填，字符串</td>
        <td>你的应用Secret</td>
    </tr><tr>
        <td>code</td>
        <td>可选，字符串</td>
        <td>使用你生成的验证码，而不是由唯ID生成，4~8个英文字母、数字</td>
    </tr><tr>
        <td>expireMin</td>
        <td>可选，整数</td>
        <td>验证码有效期（分钟），要 >= 1 且 &lt;= 20</td>
    </tr><tr>
        <td>maxFailCount</td>
        <td>可选，整数</td>
        <td>最多失败次数，要 >= 1 且 &lt;= 20。达到该值后，标记验证码失效，后续校验都直接返回失败，不再尝试校验</td>
    </tr><tr>
        <td>reuse</td>
        <td>可选，布尔值</td>
        <td>是否重用。当发送给某用户的一条验证码未过期时再发送一条，会重用前一条验证码，并更新有效期，可以避免用户在短时间收到多条不一样的验证码</td>
    </tr>
</tbody></table>

成功时响应字段：

<table><thead>
    <tr>
        <th>字段</th>
        <th>类型</th>
        <th>含义</th>
    </tr>
</thead><tbody>
    <tr>
        <td>recipient</td>
        <td>字符串</td>
        <td>接收人回显，可忽略</td>
    </tr><tr>
        <td>code</td>
        <td>字符串</td>
        <td>验证码</td>
    </tr><tr>
        <td>createDate</td>
        <td>时间字符串</td>
        <td>创建时间</td>
    </tr><tr>
        <td>expireDate</td>
        <td>时间字符串</td>
        <td>过期时间</td>
    </tr><tr>
        <td>maxFailCount</td>
        <td>整数</td>
        <td>最多失败次数</td>
    </tr>
</tbody></table>

请求示例：

```http
POST https://www.onlyid.net/api/open/send-otp HTTP/1.1
Content-Type: application/json
{
    "recipient": "13612345678",
    "clientId": "07c9770f22b1460398d44b4a3543db79",
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
    "error": "应用不存在或Client ID错误，请检查"
}
```

:::info 提示
唯ID所有Open API，请求成功返回HTTP状态码200，请求失败返回40X（一般是400），然后通过error字段给出具体错误原因。
:::

### 自定义设置

默认发送的验证码是6位数字，你可以自定义包括长度、类型在内的选项，以更符合你的应用需求。有两种方式：

1. 通过API传参的方式自定义，请见上文的请求参数表格。
2. 登录控制台 -> 应用管理 -> OTP 验证码设置 自定义。

注意：

* 通过API传参的方式自定义的优先级比控制台更高。
* 当请求参数code有值时，会认为是一条新的验证码，即使reuse为true，也不再尝试重用未过期验证码。


## 校验验证码

:::caution 注意
尽管发送接口返回了验证码（code），让自行校验成为可能，我们仍建议你调用校验接口完成校验，以保证安全性。
:::

* 接口描述：校验短信、邮箱验证码是否正确
* 接口地址：`https://www.onlyid.net/api/open/verify-otp`
* 请求方式：`POST`
* 内容类型：`application/json`

请求参数：

<table><thead>
    <tr>
        <th>参数</th>
        <th className="docs__param-c1">必填，类型</th>
        <th>含义</th>
    </tr>
</thead><tbody>
    <tr>
        <td>recipient</td>
        <td>必填，字符串</td>
        <td>接收人，手机号或电子邮箱</td>
    </tr><tr>
        <td>clientId</td>
        <td>必填，字符串</td>
        <td>你的应用ID</td>
    </tr><tr>
        <td>clientSecret</td>
        <td>必填，字符串</td>
        <td>你的应用Secret</td>
    </tr><tr>
        <td>code</td>
        <td>必填，字符串</td>
        <td>尝试比对的验证码</td>    
    </tr>
</tbody></table>

成功时响应字段：

<table><thead>
    <tr>
        <th>字段</th>
        <th>类型</th>
        <th>含义</th>
    </tr>
</thead><tbody>
    <tr>
        <td>result</td>
        <td>字符串</td>
        <td>校验结果，固定值：success</td>
    </tr>
</tbody></table>

请求示例：

```http
POST https://www.onlyid.net/api/open/verify-otp HTTP/1.1
Content-Type: application/json
{
    "recipient": "13612345678",
    "clientId": "07c9770f22b1460398d44b4a3543db79",
    "clientSecret": "8d08fbbd89a547df8bda56eba12fac2e",
    "code": "581305"
}
```

验证码校验成功，响应报文示例：

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
    "result": "success"
}
```

验证码校验失败，响应报文示例：

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "error": "验证码错误或超过有效期"
}
```

验证码失效规则：

* 成功验证过一次后立即失效。
* 验证失败次数达到限制立即失效。
* 验证码超时未完成验证自然过期。
* 生成了新验证码后，旧验证码（即使未过期）自动失效。
