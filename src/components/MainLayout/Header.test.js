import React from 'react';
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header';  

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme 

describe('<Header />', () => {
  it('测试 焦点路由参数是否正确', () => {
    const pathname = '/error'
    const wrapper = shallow(
      <Header location={{pathname}} />
    ); 
    expect(wrapper.find('Menu').props().selectedKeys).toEqual([pathname]); 
  });


  it('测试MenuItem组件数量是否正确', () => {
    const wrapper = shallow(
      <Header location={{pathname:'/'}} />
    ); 
    expect(wrapper.find('MenuItem').length).toBe(4); 
  });

})