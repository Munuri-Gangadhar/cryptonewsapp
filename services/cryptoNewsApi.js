import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'd55e71412dmshf351bc01734760ap12f67djsndd508c914983',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com/news/trendingtopics';

const createRequest=(url)=>({
    url,headers:cryptoNewsHeaders
});

export const cryptoNewsApi=createApi({
    redurcerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshers=Day&count=${count}`),
        })
    })
})

export const{useGetCryptoNewsQuery}=cryptoNewsApi;









const options = {
    method: 'GET',
    url: '',
    params: {
      textFormat: 'Raw',
      safeSearch: 'Off'
    },
    headers: {

    }
  };