import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import { Card } from 'antd';

const NeswListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const GetNewsText = styled.div`
  position: absolute;
  font-size: 16px;
  top: 50%;
  left: 50%;
  margin: auto;
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.NEWS_API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <GetNewsText>오늘의 뉴스기사 데이터를 가져옵니다.</GetNewsText>;
  }
  if (!articles) {
    return null;
  }

  return (
    <NeswListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NeswListBlock>
  );
};

export default NewsList;
