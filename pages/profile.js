import React from 'react';
import Head from 'next/head'
import AppLayout from '../components/Layout';

const Profile = (props) =>{
    return (
        <>
          <Head>
            <meta charSet="utf-8" />
            <title>내 프로필 | NodeBird</title>
          </Head>
         <AppLayout>            
            팔로잉 팔로워
          </AppLayout>
        </>
      );
}

export default Profile;