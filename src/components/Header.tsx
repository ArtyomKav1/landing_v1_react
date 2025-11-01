import { useEffect, useRef } from 'react';


function Header() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const START_TIME = 18;
  const END_TIME = 23.5;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      video.currentTime = START_TIME;
      video.play();
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= END_TIME) {
        video.currentTime = START_TIME;
        video.play();
      }
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className="relative h-screen w-screen overflow-x-hidden bg-black">
        <div className="verflow-hidden absolute inset-0">
          <video
            ref={videoRef}
            src="https://pravo.tech/documents/universe/1.mp4"
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-[48px]">
          <div className="flex flex-col items-center gap-[24px] 2xl:gap-[36px]">
            <h1 className="text-center text-[24px] leading-[32px] font-semibold text-white xl:text-[48px] xl:leading-[60px] 2xl:text-[72px] 2xl:leading-[90px]">
              Добро пожаловать <br /> во Вселенную ПравоТех
            </h1>
            <div className="flex flex-col gap-[8px] text-center text-[16px] leading-[24px] text-white xl:gap-[12px] xl:text-[18px] xl:leading-[26px] 2xl:gap-[16px] 2xl:text-[27px] 2xl:leading-[39px]">
              <h2>
                ПравоТех создал цифровую реальность, где работают технологии,
                <br /> а юристы развивают творческий потенциал.
              </h2>
              <h2>
                Сделайте первый шаг в автоматизацию и узнайте,
                <br /> как получать удовольствие от работы.
              </h2>
            </div>
          </div>
          <button
            onClick={scroll}
            className="rounded-[12px] bg-[#FFBE3F] px-[24px] py-[15px] text-[16px] leading-[24px] text-[#0D0628] transition-all duration-300 hover:-translate-y-1 xl:px-[40px] xl:py-[22.5px] xl:text-[27px] xl:leading-[39px] cursor-pointer"
          >
            Начать
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
