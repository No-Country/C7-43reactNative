

export const getUser = () => {

    return new Promise((resolve, reject) => ( fetch('http://localhost:4000/api/v1/users',{
        headers:{Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1MTU4OTA0LCJleHAiOjE2Njc3NTA5MDR9.2lKoA1jOAgE4obnB3U2IXwl85ydXyUjOTj8izz7DNyg'}
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

 