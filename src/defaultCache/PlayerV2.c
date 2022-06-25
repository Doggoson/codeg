#import <Streaming.gr>

class VideoPlayer {
  public:
    bool Playing;
    int* ptr VideoCode;
    int CaptionsIndex;
    int CurrentTime;
    int Length; 
};

VideoPlayer.Playing::Watch(function(ov, nv) {
  Streaming::Transport("VideoPlayingStatusChanged", nv);
});

Streaming.Body::Added(function() {
  Streaming.VideoPlayerOutline = "videoplayer://Outline.videoplayer"
});
