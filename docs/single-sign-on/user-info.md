# 获取用户信息

:::caution 注意
本页两个接口均应在服务端进行调用，以防泄露你的应用Secret和access token。
:::

## 简介

得到auth code后，先通过auth code换取access token，再通过access token换取用户信息。

## 获取Access Token

* 接口描述：通过auth code换取access token
* 接口地址：`https://onlyid.net/api/open/access-token`
* 请求方式：`POST`
* 内容类型：`application/json`

请求参数：

<table><thead>
    <tr>
        <th>参数</th>
        <th>是否必需</th>
        <th>含义</th>
    </tr>
</thead><tbody>
    <tr>
        <td>clientSecret</td>
        <td>是</td>
        <td>你的应用Secret</td>
    </tr>
    <tr>
        <td>authCode</td>
        <td>是</td>
        <td>获取到的auth code</td>
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
        <td>token</td>
        <td>调用接口的凭证</td>
    </tr><tr>
        <td>userId</td>
        <td>用户id，24位字符串</td>
    </tr><tr>
        <td>expireDate</td>
        <td>token的过期时间</td>
    </tr>
</tbody></table>

请求示例：

```http
POST https://onlyid.net/api/open/access-token HTTP/1.1
Content-Type: application/json
{
    "clientSecret": "8d08fbbd89a547df8bda56eba12fac2e",
    "authCode": "6e4de248e9223c9d"
}
```

请求成功，响应报文示例：

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
    "token": "27fb7b817a4244a2a51ad7948d4a2d4e",
    "userId": "3b814ddf888fba57e1c4c5fe",
    "expireDate": "2021-06-30T12:45:59",
}
```

请求失败，响应报文示例：

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "error": "应用Secret错误，请检查"
}
```

## 获取用户信息

* 接口描述：通过access token换取用户信息
* 接口地址：`https://onlyid.net/api/open/user-info`
* 请求方式：`GET`
* 内容类型：`query string`

请求参数：

<table><thead>
    <tr>
        <th>参数</th>
        <th>是否必需</th>
        <th>含义</th>
    </tr>
</thead><tbody>
    <tr>
        <td>accessToken</td>
        <td>是</td>
        <td>获取到的access token</td>
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
        <td>id</td>
        <td>用户id，24位字符串</td>
    </tr><tr>
        <td>avatar</td>
        <td>用户头像url</td>
    </tr><tr>
        <td>nickname</td>
        <td>用户昵称</td>
    </tr><tr>
        <td>mobile</td>
        <td>用户手机号</td>
    </tr><tr>
        <td>email</td>
        <td>用户邮箱</td>
    </tr><tr>
        <td>gender</td>
        <td>用户性别，male或female</td>
    </tr><tr>
        <td>birthDate</td>
        <td>用户出生年代，年份+s，如1990s表示90后</td>
    </tr><tr>
        <td>province</td>
        <td>用户地区省份，如广东省</td>
    </tr><tr>
        <td>city</td>
        <td>用户地区城市，如佛山市</td>
    </tr>
</tbody></table>

:::info 提示
以上响应字段，id、avatar、nickname不为空，mobile和email至少一个不为空，余下字段可能为空（返回null）。

用户id是全局静态不变的：同一个用户在你的应用和其他所有应用（可能属于其他开发者）的用户id是一样的。
:::

请求示例：

```http
GET https://onlyid.net/api/open/user-info?accessToken=27fb7b817a4244a2a51ad7948d4a2d4e HTTP/1.1
```

请求成功，响应报文示例：

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
  "id": "3b814ddf888fba57e1c4c5fe",
  "avatar": "https://onlyid.net/static/user-avatars/3b814ddf888fba57e1c4c5fe.png?1719418109223",
  "nickname": "王语嫣",
  "mobile": "18588000048",
  "email": null,
  "gender": "female",
  "birthDate": "2000s",
  "province": "广东省",
  "city": "广州市"
}
```

请求失败，响应报文示例：

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "error": "Access Token错误（或超过有效期）"
}
```