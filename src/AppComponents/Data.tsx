//imports
import React, {useState, useEffect} from 'react';
const axios = require('axios')
  

const Data: React.FC = () => {
  const [songInfo, setSongInfo] = useState([])

  //our "componentDidMount" hook -> stores API response in state
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

  //loop to populate Rows with song data (refactor to be more dry-> implement loop)
const createTable = (songInfo:any) => {
    let arr = []
    for (let i = 0; i < songInfo.length; i++) {
      arr.push(
          <tr key={i}>
            <td><span>{songInfo[i].song}</span></td>
            <td><span>{songInfo[i].artist}</span></td>
            <td><span>{songInfo[i].songReleaseDate}</span></td>
            <td><span>{songInfo[i].playCount}</span></td>
            <td><span>{songInfo[i].metricA}</span></td>
            <td><span>{songInfo[i].metricB}</span></td>
            <td><span>{songInfo[i].metricC}</span></td>
            <td><span>{songInfo[i].metricD}</span></td>
            <td><span>{songInfo[i].metricE}</span></td>
            <td><span>{songInfo[i].metricF}</span></td>
            <td><span>{songInfo[i].metricG}</span></td>
            <td><span>{songInfo[i].metricH}</span></td>
            <td><span>{songInfo[i].metricI}</span></td>
            <td><span>{songInfo[i].metricJ}</span></td>
            <td><span>{songInfo[i].metricK}</span></td>
            <td><span>{songInfo[i].metricL}</span></td>
            <td><span>{songInfo[i].metricM}</span></td>
            <td><span>{songInfo[i].metricN}</span></td>
            <td><span>{songInfo[i].metricO}</span></td>
            <td><span>{songInfo[i].metricP}</span></td>
          </tr>
      )
    }
    return arr
}
  //functions that take state and sort based on date/letter/number return updated state -> re-render DOM(incomplete)
const sortByDate = (songInfo:any) => {
} 

const sortAlphabetically = (songInfo:any) => {
}

 const sortNumerically = (sortInfo:any) => {

}
  // function to iterate over key/value pairs creating <btn> aka column headers 
const createHeader = (songInfo:any) => {
  let arr=[]
  for (let key in songInfo[0])
  if (key.includes("metric")) {
    arr.push(
      <button className="tableButton" onClick={(songInfo) => sortNumerically(songInfo)}>
        <th className="populatedDatath"><span className="populatedDataspan">{key}</span></th>
      </button>
    )
  }
  console.log(arr)
  return arr
}
  //renders the entire data table
  return (
    <div className='dataDiv'>
      <h1 className="popSongs">Popular songs!</h1>
    <div className="table">
    <table>
        <thead>
          <tr>
            <button className="tableButton" onClick={(songInfo) => sortAlphabetically(songInfo)}><th><span>Song</span></th></button>
            <button className="tableButton" onClick={(songInfo) => sortAlphabetically(songInfo)}><th><span>Artist</span></th></button>
            <button className="tableButton" onClick={(songInfo) => sortByDate(songInfo)}><th><span>Date</span></th></button>
            <button className="tableButton" onClick={(songInfo) => sortAlphabetically(songInfo)}><th><span>Count</span></th></button>
            {createHeader(songInfo)}
          </tr>
        </thead>
        <tbody>
           {createTable(songInfo)}
        </tbody>
      </table>
    </div>
    </div>
  );
}


export default Data;


