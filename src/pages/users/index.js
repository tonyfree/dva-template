import React from 'react'
import { connect } from 'dva'

const Users = ({ users }) => (
  <div>
    <p>昵称：{users.name}</p>
    <p>年龄：{users.age}</p>
  </div>
)

export default connect(({ users }) => ({ users }))(Users)