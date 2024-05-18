import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'//used to load data faster with APIs

function Github() {
    const data = useLoaderData()//this is a state
    // const [data, setData] = useState([])              //This will load the data after clicking of navlink like home about
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

//To load data in more optimizes way
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
