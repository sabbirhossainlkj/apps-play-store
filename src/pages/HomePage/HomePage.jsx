import React from 'react';
import Banner from '../../componets/shared/homepage/Banner';
import Stats from '../../componets/shared/homepage/Stats';
import Trendingapps from '../../componets/shared/homepage/Trendingapps';

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <Stats></Stats>
            <Trendingapps></Trendingapps>
        </>
    );
};

export default HomePage;