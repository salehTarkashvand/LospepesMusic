import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// fetch("/api/charts/world",{method:"GET" , headers:{"content-type":"application/json"}})
//   .then((response) => response.json())
//   .then((response) => console.log(response));

  const BASE_URL = 'http://localhost:5173/';

  export const shazamCoreApi = createApi({
    reducerPath : 'shazamCoreApi',
    baseQuery : fetchBaseQuery({
        method:"GET",
        baseUrl:BASE_URL,
        prepareHeaders:(headers)=>{
            headers.get('content-type','application/json')
        return headers;
        },
    }),
    endpoints:(bulider)=>({
        getTopCharts:bulider.query({ query:()=>'api/charts' })

    })

  })

  export const {useGetTopChartsQuery} = shazamCoreApi;
