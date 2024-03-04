import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('/api/users', (resolver) => {
    return HttpResponse.json([
      {
        id: 1 , 
        name:"saleh",

      },
      {
        id: 2 , 
        name:"hamed",

      },
      {
        id: 3 , 
        name:"baba",

      },
      {
        id: 4 , 
        name:"maman",

      }
    ])
  }),
]