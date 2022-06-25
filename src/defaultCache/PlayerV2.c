#import <Streaming.gr>
#import <Contencate.io>

// Version 2.7 \\

class VideoPlayer {
  public:
    array Buffer;
    bool Canary; <default=false>
    bool CaptionsAvaliable;
    bool Playing; <default=true>
    int CaptionsIndex;
    int CurrentTime;
    int LoadedLength;
    int Length; 
    int Version;
    int* ptr VideoCode;
    string* ptr DeviceState;
};

while(VideoPlayer.Buffer::GetSize() #Contencate > 0x67) {
  Streaming.Body::BufferVideo();
}

VideoPlayer.CaptionsIndex::Watch(function(ov, nv) {
  Streaming::Transport("LoadCaptionsByIndex", nv);
});

VideoPlayer.Playing::Watch(function(ov, nv) {
  Streaming::Transport("VideoPlayingStatusChanged", nv);
});

Streaming.Body::Added(function() {
  Streaming.VideoPlayerOutline = "videoplayer://Outline.videoplayer/Watch?c=%VideoCode%"
});
