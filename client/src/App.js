import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "./components/axios";
import Video from "./components/Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const response = await axios.get("api/videos/v2");
      setVideos(response.data);

      return response;
    }
    fetchVideos();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, messages, shares, likes }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              messages={messages}
              shares={shares}
              likes={likes}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
