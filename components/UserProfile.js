import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
  const { logOutLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Card
      style={{ marginTop: '20px', marginLeft: '20px', padding: '5px' }}
      actions={[
        <div key='twit'>
          <Link href='/'>
            <a>Tweet</a>
          </Link>
          <br />-
        </div>,
        <div key='follwings'>
          <Link href='/profile'>
            <a>Following</a>
          </Link>
          <br />-
        </div>,
        <div key='followers'>
          <Link href='/profile'>
            <a>Follower</a>
          </Link>
          <br />-
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>가</Avatar>} title='뉴스보러 왔늬?' />
      <Button onClick={onLogOut} loading={logOutLoading} shape='round'>
        로그아웃
      </Button>
    </Card>
  );
};

export default React.memo(UserProfile);
