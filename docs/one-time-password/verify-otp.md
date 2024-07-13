# 核验验证码

:::caution 注意
尽管发送接口返回了验证码（code），让自行核验成为可能，我们仍建议你调用核验接口完成核验，以保证安全性。
:::

* 接口描述：核验短信、邮箱验证码是否正确
* 接口地址：`https://onlyid.net/api/open/verify-otp`
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
        <td>核验结果，固定值：success</td>
    </tr>
</tbody></table>

请求示例：

```http
POST https://onlyid.net/api/open/verify-otp HTTP/1.1
Content-Type: application/json
{
    "recipient": "13612345678",
    "clientId": "07c9770f22b1460398d44b4a3543db79",
    "clientSecret": "8d08fbbd89a547df8bda56eba12fac2e",
    "code": "581305"
}
```

验证码核验成功，响应报文示例：

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
    "result": "success"
}
```

验证码核验失败，响应报文示例：

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
