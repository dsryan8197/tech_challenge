import React, {useState, useEffect} from 'react';
const axios = require('axios')
// import { Link } from 'react-router-dom'
// import { SideNavTabs } from '../components/SideNavTabs'
  
const Data: React.FC = () => {
  const [songs, setSongs] = useState('')
  const [temp, setTemp]= useState('')

  useEffect(() => {
    axios('https://iheartradiotechchallenge.s3.us-east-2.amazonaws.com/songData.json')
    .then((res:any)=> {
      console.log(res.data)
    })
    .catch((err:any)=> {
      console.log(err)
    })
  },[songs])


  return (
    <div className='dataDiv'>
      <h1>Data here</h1>
      <button onClick={()=>setTemp('hi')}>hi</button>
    </div>
  );
}


export default Data;


