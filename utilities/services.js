export const getBussines = () => {

    return new Promise((resolve, reject) => ( fetch('https://unlimited-app.herokuapp.com/api/v1/empresas',{
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1MTU4OTA0LCJleHAiOjE2Njc3NTA5MDR9.2lKoA1jOAgE4obnB3U2IXwl85ydXyUjOTj8izz7DNyg'
        }
    })
        .then(res => res.json())
        .then((result)=> {
                
                    return resolve (result)  
            },
            (error)=> {
                console.log(error)
            },
        )
    ))

}



export const getUser = () => {
    return new Promise((resolve, reject) => ( fetch('https://unlimited-app.herokuapp.com/api/v1/users/12',{
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1MTU4OTA0LCJleHAiOjE2Njc3NTA5MDR9.2lKoA1jOAgE4obnB3U2IXwl85ydXyUjOTj8izz7DNyg'
        }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          return resolve(result);
        },
        (error) => {
          console.log(error);
        }
      )
  ))
};


export const postUser = () => {
  return new Promise((resolve, reject) =>
    fetch("https://unlimited-app.herokuapp.com/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1OTgxNDA0LCJleHAiOjE2Njg1NzM0MDR9.BDBaCes5Ge2S5WcW0o5bHTx0nsJHaFWo2U3Q5tqdtrQ",
      },
      body: JSON.stringify(usuario),
    })
      .then((res) => res.json())
      .then(
        (result) => {
    
          return resolve(result);
        },
        (error) => {
          console.log(error);
        }
      )
  )
};


export const getOffer = () => {

  return new Promise((resolve, reject) => ( fetch('https://unlimited-app.herokuapp.com/api/v1/ofertas',{
      headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1MTU4OTA0LCJleHAiOjE2Njc3NTA5MDR9.2lKoA1jOAgE4obnB3U2IXwl85ydXyUjOTj8izz7DNyg'
      }
  })
      .then(res => res.json())
      .then((result)=> {
                  return resolve (result)  
          },
          (error)=> {
              console.log(error)
          },
      )
  ))

}


