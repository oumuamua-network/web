1.amoebe数据获取(GET)

Request
* 描述: 查询amoebe数据
* Method: **GET**
* URL: `/amoebe`
* 参数: 无

<font color="#DC143C">Response:</font>
* Body
```
{
  "msg": "ok",
  "code": 200,
  "data": {
    "achievement": {
      "total": {
        "task": 1000000,
        "completed": 10009,
      },
      "group": [{
        name: "海王小组",
        children: [{
          name: "同事A",
          "completed": 1009,
        }, {
          name: "同事B",
          "completed": 109,
        }]
      }, {
        name: "海王大组",
        children: [{
          name: "同事A",
          "completed": 1009,
        }, {
          name: "同事B",
          "completed": 109,
        }]
      }],
      customer: {
        cooperation: 123,
        no_ooperation: 12,
        sendSMSNum: 123123123,
        unSMSNum: 12312
      }
    }
  }
}
```

2.获取单个同事详情信息(GET)

Request
* 描述: 获取单个同事业绩详情
* Method: **GET**
* URL: `/amoebe/user`
* 参数: 

    |是否必选|参数|类型|参数示例|参数解析|
    |:-|:-:|:-:|:-:|-:|
    |必选|name|string|小明|同事名字|

<font color="#DC143C">Response:</font>
* Body
  ```
    {
      "msg": "ok",
      "code": 200,
      "data": {
        "total_achievement": 234112412,
        "totalSMSsendNum": 13132,
      }
    }
  ```


