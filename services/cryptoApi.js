import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'd55e71412dmshf351bc01734760ap12f67djsndd508c914983',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com/coins';

const createRequest=(url)=>({
    url,headers:cryptoApiHeaders
});

export const cryptoApi=createApi({
    redurcerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`),
        }),
        getExchanges:builder.query({
            query:()=> createRequest(`/exchanges`),
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=> createRequest(`/coins/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            query:({coinId,timeperiod})=> createRequest(`/coins/${coinId}/history/${timeperiod}`),
        })
    })
})

export const{useGetCryptosQuery,useGetExchangesQuery,useruseGetCryptoDetailsQuery,useGetCryptoHistoryQuery}=cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       
//     }
//   }