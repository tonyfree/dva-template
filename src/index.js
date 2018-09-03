import React from 'react'
import dva from 'dva'
import './index.css'
import App from './layouts/App'

const app = dva({
  initialState: {
    users: {
      list: [
        {
          "id": "990000198002183150",
          "name": "汤超",
          "address": "内蒙古自治区 通辽市 科尔沁左翼后旗",
          "email": "q.hmmvs@ssqxywit.co"
        },
        {
          "id": "420000197301312711",
          "name": "邱涛",
          "address": "陕西省 铜川市 其它区",
          "email": "c.fjvhtd@rvd.cq"
        },
        {
          "id": "630000199309052553",
          "name": "贺娟",
          "address": "河北省 秦皇岛市 山海关区",
          "email": "s.ihdvrpyi@qnmnql.nf"
        },
        {
          "id": "530000199706284784",
          "name": "邓艳",
          "address": "四川省 遂宁市 大英县",
          "email": "x.gyfhqtbu@nncicjn.kw"
        },
        {
          "id": "220000197301014637",
          "name": "蔡静",
          "address": "新疆维吾尔自治区 吐鲁番地区 托克逊县",
          "email": "f.humtu@rfttncgpy.mg"
        },
        {
          "id": "610000197605131536",
          "name": "侯秀兰",
          "address": "天津 天津市 滨海新区",
          "email": "o.rekumpz@ndigkj.ca"
        }
      ],
      total: 20,
      page: 1
    }
  }
})

app.model(require('./pages/users/model').default)

app.router(App)

app.start('#root')
