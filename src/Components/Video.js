
import React from 'react';
//created Video function so that video can run in the background.
const Video = (setState) => {
    
       

        setState = {
            videoURL: "https://player.vimeo.com/external/214483247.hd.mp4?s=845782a0a9c1ea97a6f476e521f2df794d24e9e1&amp;profile_id=172&amp;oauth2_token_id=57447761&amp;download=1"
        }
    

    
        return (
            <video id="background-video" loop autoPlay muted>
                <source src={setState.videoURL} type="video/mp4" />
                <source src={setState.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    
    };

export default Video;