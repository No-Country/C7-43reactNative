export const getBussines = () => {

    return new Promise((resolve, reject) => ( fetch('http://192.168.0.98:4000/api/v1/empresas',{
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1MTU4OTA0LCJleHAiOjE2Njc3NTA5MDR9.2lKoA1jOAgE4obnB3U2IXwl85ydXyUjOTj8izz7DNyg'
        }
    })
        .then(res => res.json())
        .then((result)=> {
                    console.log(result)
                    return resolve (result)  
            },
            (error)=> {
                console.log(error)
            },
        )
    ))

}






export const getUser = () => {

    return new Promise((resolve, reject) => ( fetch('http://192.168.0.98:4000/api/v1/users',{
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1MTU4OTA0LCJleHAiOjE2Njc3NTA5MDR9.2lKoA1jOAgE4obnB3U2IXwl85ydXyUjOTj8izz7DNyg'
        }
    })
        .then(res => res.json())
        .then((result)=> {
                    console.log(result)
                    return resolve (result)  
            },
            (error)=> {
                console.log(error)
            },
        )
    ))
}



// let clientWidth = document.getElementById('containerProfile').clientWidth;
// let clientHeight = document.getElementById('containerProfile').clientHeight;
// console.log(clientWidth, "largo", clientHeight, "ancho")


