import React from 'react'
import { connect } from 'dva'
import './index.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import UsersComponent from '../../components/Users';

const Users = ({ users, location }) => (
  <MainLayout location={location}>
   <div className="usersview-normal">
        <UsersComponent />
      </div>
  </MainLayout>
)

export default connect(({ users }) => ({ users }))(Users)