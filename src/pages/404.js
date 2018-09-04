import React from 'react';
import { Icon } from 'antd';
import MainLayout from '@components/MainLayout/MainLayout';
import styles from './404.module.css';

const Error = ({ location }) => (
  <MainLayout location={location}>
    <div className={styles.error}>
      <Icon type="frown-o" style={{ fontSize: '48px', marginBottom: '16px' }} />
      <h1>404 Not Found</h1>
    </div>
  </MainLayout>
);

export default Error;
