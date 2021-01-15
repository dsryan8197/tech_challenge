import React, {useState, useEffect} from 'react';
const axios = require('axios')
// import { Link } from 'react-router-dom'
// import { SideNavTabs } from '../components/SideNavTabs'
  
const Data: React.FC = () => {
  const [songInfo, setSongInfo] = useState([])

  useEffect(() => {
    axios('https://iheartradiotechchallenge.s3.us-east-2.amazonaws.com/songData.json')
    .then((res:any)=> {
      setSongInfo(res.data)
      console.log(songInfo)
    })
    .catch((err:any)=> {
      console.log(err)
    })
  }, [])

  const createTable = (songInfo:any) => {
    let arr = []
    for (let i = 0; i < songInfo.length; i++) {
      arr.push(
          <tr key={i}>
            <td>{songInfo[i].song}</td>
            <td>{songInfo[i].artist}</td>
            <td>{songInfo[i].songReleaseDate}</td>
            <td>{songInfo[i].playCount}</td>
          </tr>
      )
    }
    console.log(arr)
    return arr
  }

  return (
    <div className='dataDiv'>
      <h1>Data here</h1>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Date</th>
            <th>Play setCount</th>
          </tr>
        </thead>
        <tbody>
           {createTable(songInfo)}
        </tbody>
      </table>
    </div>
  );
}


export default Data;


