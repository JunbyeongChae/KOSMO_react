import axios from "axios";
import { useEffect, useState } from "react";
import YoutubeList from "./components/YoutubeList";

const YoutubeApp = () => {
  console.log('YoutubeApp Start');
  const [videos, setVideos] = useState([]);
  const [params, setParams] = useState({
    part : 'snippet',
    chart : 'mostPopular',
    maxResults : 25,
    key : 'AIzaSyCWU2V-R-yjCOI1rREd1FTmhVm1bXSmZik'
  });
  useEffect(() => {
    console.log("useEffect");
    axios.get('https://www.googleapis.com/youtube/v3/videos?', {params})
      .then(result => {
        setVideos(result.data.items);
      }).catch(error => {
        console.log(error)
      })
  },[]);
  console.log(videos)
  return (
    <>  
      <YoutubeList videos={videos}/>
    </>
  );
}

export default YoutubeApp;
