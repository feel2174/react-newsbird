import React, { useState, useCallback } from 'react';
import { Col, Row } from 'antd';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import Categories from './Categories';
import { useSelector } from 'react-redux';

const AppLayout = ({ children, category, onSelect }) => {
  const { me } = useSelector((state) => state.user);
  console.log(me);
  
  return (
    <div>
      <Row gutter={32} style={{ justifyContent: 'center' }}>
        <Col xs={24} md={5}>
          {me ? <UserProfile /> : <LoginForm /> }
        </Col>
        <Col
          xs={24}
          md={20}
          xxl={12}
          style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
        >
          {children}
        </Col>
        <Col xs={24} md={3}>
          <Categories category={category} onSelect={onSelect} />
          <a
            href='https://zucca.tistory.com'
            target='_blank'
            rel='noreferrer noopener'
            style={{
              bottom: '0',
              right: '0',
              position: 'fixed',
              padding: '20px',
            }}
          >
            Made by devZucca
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
