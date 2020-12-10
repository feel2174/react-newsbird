import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { GithubOutlined, InstagramOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Tooltip } from 'antd';
import wrapper from '../store/configureStore';

const HeaderTextFont = styled.div`
  color: white;
  font-weight: bold;
  font-size: 32px;
  padding: 20px;
`;
const Header = styled.header`
  margin: 0px 100px 0px 100px;
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #006fff;
`;

const Atag = styled.a`
  color: black;
  margin-left: 10px;
  float: right;
`;

const NewsBird = ({ Component }) => {
  return (
    <>
      <Header>
        <HeaderTextFont>
          NewsBird
          <Tooltip title='깃허브로 이동합니다.'>
            <Atag
              href='https://github.com/feel2174'
              target='_blank'
              rel='noreferrer noopener'
            >
              <GithubOutlined style={{ color: 'white' }} />
            </Atag>
          </Tooltip>
          <Tooltip title='인스타그램으로 이동합니다.'>
            <Atag
              href='https://www.instagram.com/lord_0814/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <InstagramOutlined style={{ color: 'white' }} />
            </Atag>
          </Tooltip>
        </HeaderTextFont>
      </Header>
      <Component />
    </>
  );
};

NewsBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(NewsBird);
