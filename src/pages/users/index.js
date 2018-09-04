import React from 'react'
import { connect } from 'dva'
import styles from './index.module.css';
import MainLayout from '@components/MainLayout/MainLayout';
import UsersComponent from '@components/Users';

const Users = ({ users, location }) => (
  <MainLayout location={location}>
   <div className={styles.normal}>
        <UsersComponent />
      </div>
  </MainLayout>
)

export default connect(({ users }) => ({ users }))(Users)