// import Hls from 'hls.js';
import YouTube from 'react-youtube';

const UniversalVideoPlayer = ({ video }) => {
  const videoRef = useRef(null);
  
  // useEffect(() => {
  //   if (!video || !video.source) return;

  //   let hls;
    
  //   if (video.source.type === 'hls' && Hls.isSupported()) {
  //     hls = new Hls();
  //     hls.loadSource(video.source.url);
  //     hls.attachMedia(videoRef.current);
  //   }

  //   return () => {
  //     if (hls) hls.destroy();
  //   };
  // }, [video]);

  const renderPlayer = () => {
    if (!video?.source) return <div>No video source available</div>;
    console.log(video.source ?? 'null')
    switch(video.source.type) {
      case 'youtube':
        return (
          <YouTube
            videoId={getYoutubeId(video.source.url)}
            opts={{
              playerVars: {
                autoplay: 0,
                controls: 1,
                modestbranding: 1
              }
            }}
          />
        );
      
      // case 'hls':
      //   return !Hls.isSupported() ? (
      //     <div>HLS is not supported in your browser</div>
      //   ) : (
      //     <video
      //       ref={videoRef}
      //       controls
      //       poster={video.thumbnails?.default}
      //     />
      //   );
      
      case 'uploaded':
        return (
          <video
            controls
            poster={video.thumbnails?.default}
          >
            <source
              src={`${API_BASE_URL}${video.source.url}`}
              type={`video/${video.source.meta.format || 'mp4'}`}
            />
          </video>
        );
      
      default:
        return (
                 <WebView
                  source={{ uri: FeaturedStream}}
                  allowsFullscreenVideo={true}
                  allowsInlineMediaPlayback={true}
                  mediaPlaybackRequiresUserAction={false}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  startInLoadingState={true}
                  renderLoading={() => <ActivityIndicator color="#937a23" />}
                  onError={(syntheticEvent) => {
                    const { nativeEvent } = syntheticEvent;
                    console.error('WebView error:', nativeEvent);
                  }}
                onReady={() => setReady(true)}
                  style={{width:width,height:VIDEO_HEIGHT,alignSelf: 'center' }}
                  scrollEnabled={false}
                /> 
        );
    }
  };

  return (
    <div className="universal-video-player">
      {renderPlayer()}
    </div>
  );
};

// Helper function to extract YouTube ID
function getYoutubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default UniversalVideoPlayer