import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import AppLayout from '../components/Layout';
import NewsList from '../components/NewsList';

const Index = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => {
    console.log(category);
    setCategory(category);
  }, []);
  return (
    <div>
      <Head>
        <title>NewsBird</title>
      </Head>
      <AppLayout category={category} onSelect={onSelect}>
        <NewsList category={category} />
      </AppLayout>
    </div>
  );
};
export default Index;
