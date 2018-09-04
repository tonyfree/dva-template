import React from 'react';
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import MainLayout from './MainLayout';  

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme 

describe('<MainLayout />', () => {
  it('测试 子组件 渲染', () => {
    const wrapper = shallow(
      <MainLayout location={{pathname:'/'}}>
        <div className="demo"></div>
      </MainLayout>
    ); 
    expect(wrapper.contains(<div className="demo" />)).toEqual(true)
  });


})