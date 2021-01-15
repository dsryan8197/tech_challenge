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
            <td>{songInfo[i].song}</td>
            <td>{songInfo[i].artist}</td>
            <td>{songInfo[i].songReleaseDate}</td>
            <td>{songInfo[i].playCount}</td>
            <td>{songInfo[i].metricA}</td>
            <td>{songInfo[i].metricB}</td>
            <td>{songInfo[i].metricC}</td>
            <td>{songInfo[i].metricD}</td>
            <td>{songInfo[i].metricE}</td>
            <td>{songInfo[i].metricF}</td>
            <td>{songInfo[i].metricG}</td>
            <td>{songInfo[i].metricH}</td>
            <td>{songInfo[i].metricI}</td>
            <td>{songInfo[i].metricJ}</td>
            <td>{songInfo[i].metricK}</td>
            <td>{songInfo[i].metricL}</td>
            <td>{songInfo[i].metricM}</td>
            <td>{songInfo[i].metricN}</td>
            <td>{songInfo[i].metricO}</td>
            <td>{songInfo[i].metricP}</td>
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
            <div className="divdiv">
            <button className="tableButton" onClick={(songInfo) => sortAlphabetically(songInfo)}><th><span>Song</span></th></button>
            <button className="tableButton" onClick={(songInfo) => sortAlphabetically(songInfo)}><th><span>Artist</span></th></button>
            <button className="tableButton" onClick={(songInfo) => sortByDate(songInfo)}><th><span>Date</span></th></button>
            <button className="tableButton" onClick={(songInfo) => sortAlphabetically(songInfo)}><th><span>Count</span></th></button>
            {createHeader(songInfo)}
            </div>
          </tr>
        </thead>
        <tbody>
          <td>
             {createTable(songInfo)}
          </td>
           {createTable(songInfo)}
        </tbody>
      </table>
    </div>
    </div>
  );
}


export default Data;


