import React from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Typography,Row,Col,Statistic} from 'antd';
import {useGetCryptosQuery} from '../services/cryptoApi';
import {Cryptocurrencies,News} from '../components';
import Loader from './Loader'
const {Title}=Typography;
const Homepage = () => {
  const {data,isFetching}=useGetCryptosQuery();
  const globalStats=data?.data?.stats;
   if(isFetching) return <Loader/>


  return (
    <>
    <Title level={2} className="heading">Global Crypto Status</Title>
    <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" values={millify(globalStats.total)}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" values={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total MarketCap" values={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total Cry" values={millify(globalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" values={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    <div className="home-heading-container">
          <Title level={2} className="home-title">Top 10 CryptoCurrencies in the world</Title>
          <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
          <Title level={2} className="home-title">Latest Crypto News</Title>
          <Title level={3} className="show-more"><Link to='/news'>Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}
export default Homepage