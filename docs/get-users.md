# 更新用户信息

:::caution 注意
本页两个接口均应在服务端进行调用，以防泄露你的应用Secret。
:::

## 简介

通过 `user-info` 接口获取用户信息受access token有效期的限制，当token过期后再次调用会返回错误。

access token的有效期是24小时，可以满足网站类应用的使用需求。但APP类应用一般会保持登录数月之久，对于这种情况，请使用本页两个接口获取最新的用户信息。

这两个接口使用OAuth 2.0的Client Credentials授权方式，以应用Secret作为调用凭证，长期有效不会像access token一样过期。

:::tip 建议
一般来说，在用户每次打开APP时更新一次用户信息足矣，不需要频繁定时去同步。
:::

## 单个查询接口

:::info 提示
本接口只能查询授权用户的账号信息，用户登录过一次你的应用即视为授权，授权关系长期有效不会超时自动解除。
:::

:::caution 注意
用户可以在唯ID APP的授权管理页撤销对你应用的授权，此时调用接口会返回403 Forbidden错误，请做好异常处理。
:::

* 接口描述：查询单个授权用户的账号信息
* 接口地址：`https://onlyid.net/api/open/users/用户id`
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
        <td>clientId</td>
        <td>是</td>
        <td>你的应用ID</td>
    </tr><tr>
        <td>clientSecret</td>
        <td>是</td>
        <td>你的应用Secret</td>
    </tr>
</tbody></table>

成功时响应字段和 `user-info` 接口一样：

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

请求示例：

```http
GET https://onlyid.net/api/open/users/3b814ddf888fba57e1c4c5fe?clientId=98d44b4a3543db79&clientSecret=8d08fbbd89a547df8bda56eba12fac2e HTTP/1.1
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
HTTP/1.1 403 Forbidden
Content-Type: application/json
{
    "error": "用户未授权或已撤销授权"
}
```

## 批量查询接口

:::info 提示
单个查询接口已经可以满足大部分应用，对于少数需要批量/全量同步用户信息的应用，请使用批量查询接口。
:::

* 接口描述：批量查询授权用户的账号信息
* 接口地址：`https://onlyid.net/api/open/users`
* 请求方式：`GET`
* 内容类型：`query string`

请求参数：

<table><thead>
    <tr>
        <th>参数</th>
        <th className="docs__param-c1">是否必需</th>
        <th>含义</th>
    </tr>
</thead><tbody>
    <tr>
        <td>clientId</td>
        <td>是</td>
        <td>你的应用ID</td>
    </tr><tr>
        <td>clientSecret</td>
        <td>是</td>
        <td>你的应用Secret</td>
    </tr><tr>
        <td>current</td>
        <td>是</td>
        <td>分页参数，当前页数</td>
    </tr><tr>
        <td>pageSize</td>
        <td>是</td>
        <td>分页参数，每页条数，要 &lt;= 1000</td>
    </tr><tr>
        <td>keyword</td>
        <td>否</td>
        <td>搜索关键词，支持昵称、手机号、邮箱</td>
    </tr><tr>
        <td>orderBy</td>
        <td>否</td>
        <td>排序，可选值new（默认）、active，最近新增和最近活跃</td>
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
        <td>list</td>
        <td>数组，每个元素和单个查询接口返回的一样</td>
    </tr><tr>
        <td>total</td>
        <td>符合条件的用户总数</td>
    </tr>
</tbody></table>

请求示例：

```http
GET https://onlyid.net/api/open/users?clientId=98d44b4a3543db79&clientSecret=8d08fbbd89a547df8bda56eba12fac2e&current=1&pageSize=10&orderBy=new HTTP/1.1
```

请求成功，响应报文示例：

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
  "list": [
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
    },
    ...
  ],
  "total": 128
}
```

请求失败，响应报文示例：

```http
HTTP/1.1 403 Forbidden
Content-Type: application/json
{
    "error": "应用Secret错误，请检查"
}
```
