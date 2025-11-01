import { useEffect, useRef, useState } from 'react';

type MainItem = {
  img1: string;
  img2: string;
  imgV: string;
  video_link: string;

  text1_main: string;
  text1_sub: string;
  text1_sub_col: string;

  text2_1: string;
  text2_2: string;
  text2_1_col: string;
};

function MainItem(props: MainItem) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!isPlaying) {
      video.play();
      setIsPlaying(true);
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  const handlePlayButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = e.currentTarget.parentElement?.querySelector('video');
    if (video) {
      video.play();
      setIsPlaying(true);
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  return (
    <>
      <section className="flex flex-col items-center p-[20px] lg:gap-[120px]">
        <div className="flex h-[700px] w-full flex-col md:w-[2400px] md:flex-row">
          <div className="relative h-[658px] flex-1">
            <img
              className="absolute right-[80px] bottom-[120px] z-10 h-[248px] w-[372px] md:right-[0px] md:h-[480px] md:w-[720px] lg:bottom-[-120px] lg:h-[800px] lg:w-[1200px]"
              src={props.img1}
              alt=""
            />

            <div className="absolute top-[200px] right-[-85px] z-10 flex w-[432px] flex-col gap-[8px] md:top-[100px] md:right-[-120px] lg:right-[0px] 2xl:gap-[12px]">
              <p className="text-[72px] leading-[72px] text-[#51B0E8] 2xl:text-[108px] 2xl:leading-[108px]">
                {props.text1_main}
              </p>
              <p className="t2xl:text-[27px] leading-[26px] text-white xl:text-[18px] 2xl:leading-[39px]">
                {props.text1_sub}
                <br />
                <span className="text-[#51B0E8]">{props.text1_sub_col}</span>
              </p>
            </div>
          </div>

          <div className="relative h-[658px] flex-1">
            <img
              className="absolute top-[-40px] right-[-100px] z-10 h-[248px] w-[372px] md:top-0 md:left-[-80px] md:h-[480px] md:w-[720px] lg:h-[800px] lg:w-[1200px]"
              src={props.img2}
              alt=""
            />
            <div className="leading-[24px absolute bottom-[20px] left-[0px] z-10 flex w-[332px] flex-col gap-[16px] rounded-[8px] border border-[#FFBE3F] p-[28px] text-[16px] text-white md:w-[360px] xl:text-[18px] xl:leading-[26px] 2xl:w-[582px] 2xl:gap-[24px] 2xl:p-[40px] 2xl:text-[27px] 2xl:leading-[39px]">
              <p>
                {props.text2_1} <span className="text-[#FFBE3F]">{props.text2_2}</span>
              </p>
              <p>{props.text2_1_col}</p>
            </div>
          </div>
        </div>

        <div className="relative md:w-[696px] lg:w-[936px] 2xl:w-[1192px]">
          <video
            ref={videoRef}
            src={props.video_link}
            className="h-full w-full cursor-pointer"
            controls={isPlaying}
            onClick={handleVideoClick}
          />

          {!isPlaying && (
            <div
              className="absolute inset-0 flex cursor-pointer items-center justify-center bg-cover bg-center"
              onClick={handlePlayButtonClick}
            >
              <img src={props.imgV} alt="" className="absolute inset-0 z-10" />
              <div className="bg-opacity-30 absolute inset-0 bg-black"></div>
              <div className="bg-opacity-90 relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 md:h-24 md:w-24 lg:h-28 lg:w-28">
                <div className="ml-2 h-0 w-0 border-t-[16px] border-b-[16px] border-l-[28px] border-t-transparent border-b-transparent border-l-black md:border-t-[20px] md:border-b-[20px] md:border-l-[35px] lg:border-t-[24px] lg:border-b-[24px] lg:border-l-[42px]"></div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default MainItem;
