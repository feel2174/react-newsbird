import React from 'react';
import styled from 'styled-components';
import { Card, Tooltip } from 'antd';

const NewsItemBlock = styled(Card)`
  display: flex;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
  cursor: pointer;
  transition: transform 250ms ease-in;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  :hover {
    transform: scale(1.05);
  }

  & + & {
    margin-top: 1rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
      <Tooltip placement='rightTop' title='해당 기사 페이지로 이동합니다.'>
    <NewsItemBlock>
      {urlToImage && (
        <div className='thumbnail'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <img src={urlToImage} alt='thumbnail' />
          </a>
        </div>
      )}
      <div className='contents'>
        <h2>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
    </Tooltip>
  );
};

export default React.memo(NewsItem);
