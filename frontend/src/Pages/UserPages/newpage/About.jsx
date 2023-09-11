import axios from "axios"
import { useState } from "react"


const About = () => {
  const [data,setdata] = useState([])
  const fetchApi = async () =>{
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setdata(response.data)
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <h1>About page</h1>
      <button onClick={fetchApi}>add</button>
      {data.map((obj)=>{
        return(
          <div key={obj.name}>{obj.name}</div>
        )
      })}
    </div>
  )
}

export default About
