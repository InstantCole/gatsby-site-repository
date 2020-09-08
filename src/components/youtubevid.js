import React, { useEffect } from "react"
import PropTypes from "prop-types"
import youtubeStyles from "./youtubevid.module.scss"





const YoutubeVid = ({ id }) => {
    let player;
    let tabArray;

    tabArray = [2,3,4,1,3,4,5,3,4,3,1,3,4,2,3,1,3,4,4,3,2,3,4,];
    
    useEffect(() => {
        // On mount, check to see if the API script is already loaded
    
        if (!window.YT) { // If not, load the script asynchronously
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
    
          // onYouTubeIframeAPIReady will load the video after the script is loaded
          window.onYouTubeIframeAPIReady = loadVideo;
    
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
        } else { // If script is already there, load the video directly
          loadVideo();
        }
        
      });

      
    
      function loadVideo() {
        
        // the Player object is created uniquely based on the id in props
        player = new window.YT.Player(`youtube-player-${id}`, {
          videoId: id,
          playerVars: { 'autoplay': 0, 'controls': 0 },
          
          
        });
        console.log(player);
      };
    
      function fuckingPlayAlready () {
          player.playVideo();
          const iFrame = player.getIframe();
          console.log(iFrame);
      }

      function fuckingStopAlready(){
          player.pauseVideo();
      }



      

    return (
        <div>
          <div className={youtubeStyles.vidWrapper}>
            <div className={youtubeStyles.vidPlayer}>
            <div id={`youtube-player-${id}`}/></div>
          </div>

        <div className={youtubeStyles.controls}>
          <button onClick={fuckingPlayAlready}>Play</button>
          <button onClick={fuckingStopAlready}>Stop</button></div>
        
        <div className={youtubeStyles.tabContainer}>
          <div className={youtubeStyles.tabOn}></div>
          <div className={youtubeStyles.tabOff}></div>
          <div className={youtubeStyles.tabOff}></div>
          <div className={youtubeStyles.tabOff}></div>
        </div>
        </div>
        
    
    )
}

YoutubeVid.propTypes = {
    id: PropTypes.string
} 

YoutubeVid.defaultProps = {
    id: ``,
  }


export default YoutubeVid;