import React from 'react';
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Users from './index';  

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme 

describe('<Users />', () => {
  it('测试 Table参数是否正确', () => {
    const list = [
      {
        "id": "36000020020920656X",
        "name": "萧娟",
        "address": "广东省 肇庆市 广宁县",
        "email": "c.bgenot@gtcrospmg.edu"
      },
      {
        "id": "530000200611156179",
        "name": "廖洋",
        "address": "内蒙古自治区 乌兰察布市 卓资县",
        "email": "b.wyork@uvrgfxxrso.ca"
      }
    ]
    const wrapper = shallow(
      <Users.WrappedComponent list={list} />
    ); 
    expect(wrapper.find('Table').props().dataSource).toEqual(list)
  });
})