import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { LOG_IN_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const ButtonWrapper = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
`;

const LoginForm = () => {
  const [email, onChangeEmail] = useInput('');
  const { logInLoading } = useSelector(state => state.user);
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password }
    })
  }, [email, password]);

  return (
    <Form
      style={{
        marginTop: '20px',
        marginLeft: '20px',
        border: '1px solid grey',
        borderRadius: '5px!important',
      }}
      onFinish={onSubmitForm}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '1.5rem',
          color: 'white',
          background: '#006FFF',
        }}
      >
        Sign In
      </div>
      <div style={{ padding: '10px' }}>
        <label style={{ color: 'grey' }} htmlFor='user-email'>
          Email
        </label>
        <br />
        <Input
          name='user-email'
          type='email'
          value={email}
          onChange={onChangeEmail}
          required
        />
        <label style={{ color: 'grey' }} htmlFor='user-password'>
          Password
        </label>
        <br />
        <Input
          name='user-password'
          type='password'
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button  type='primary' htmlType='submit' loading={logInLoading}>
          로그인
        </Button>
        <Link href='/signup'>
          <a>
            <Button style={{ float: 'right' }}>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </Form>
  );
};

export default React.memo(LoginForm);
