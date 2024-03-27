import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LatestVideo(item) {
    const [videoId, setVideoId] = useState(null);
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    useEffect(() => {
        const getLatestVideo = async () => {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${item.item.url}&part=snippet,id&order=date&maxResults=1`
            );
            setVideoId(response.data.items[0].id.videoId);
        };

        getLatestVideo();
    }, []);

    return (
        <div>
            {videoId && (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )
            }
        </div >
    );
}

export default LatestVideo;