import fruitVideo from "../../assets/fruitVideo.mp4";

function Video() {
  return (
    <div>
      <video
        src="fruitVideo.mp4"
        type="video/mp4"
        controls
        autoplay
        loop
        muted
        width="80%"
        height="380"
      />
    </div>
  );
}

export default Video;
