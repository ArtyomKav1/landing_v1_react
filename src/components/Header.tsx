import { useRef, useState } from 'react';
import headerImage from '../assets/headerImage.png';
function Header() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const scroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <header className="relative h-screen w-screen overflow-x-hidden bg-black">
      <img
        src={headerImage}
        alt="Header background"
        className={`absolute inset-0 h-full w-full object-cover object-bottom transition-opacity duration-700 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          muted
          playsInline
          loop
          autoPlay
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`h-full w-full object-cover object-bottom transition-opacity duration-700 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source
            src="https://pravo.tech/documents/universe/bgvp9.webm"
            type="video/webm; codecs=vp9"
          />
          <source
            src="https://pravo.tech/documents/universe/bghevc.mp4"
            type="video/mp4; codecs=hvc1"
          />
          <source
            src="https://pravo.tech/documents/universe/bg.mp4"
            type="video/mp4; codecs=avc1"
          />
          Ваш браузер не поддерживает видео фон.
        </video>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-[48px]">
        <div className="flex flex-col items-center gap-[24px] px-[30px] 2xl:gap-[36px]">
          <h1 className="text-center text-[24px] leading-[32px] font-semibold text-white xl:text-[48px] xl:leading-[60px] 2xl:text-[72px] 2xl:leading-[90px]">
            Добро пожаловать <br /> во Вселенную ПравоТех
          </h1>

          <div className="flex flex-col gap-[16px] text-center text-[16px] leading-[24px] text-white xl:text-[18px] xl:leading-[26px] 2xl:text-[27px] 2xl:leading-[39px]">
            <h2>
              ПравоТех создал цифровую реальность, где работают технологии,
              <br className="max-sm:hidden" /> а юристы развивают творческий потенциал.
            </h2>
            <h2>
              Сделайте первый шаг в автоматизацию и узнайте,
              <br className="max-sm:hidden" /> как получать удовольствие от работы.
            </h2>
          </div>
        </div>

        <button
          onClick={scroll}
          className="h-[84px] w-[280px] cursor-pointer rounded-[12px] bg-[#FFBE3F] px-[24px] py-[15px] text-[16px] leading-[24px] text-[#0D0628] transition-all duration-300 hover:-translate-y-1 max-xl:h-[56px] max-xl:w-[200px] max-xl:text-[18px] max-xl:leading-[26px] xl:px-[40px] xl:py-[22.5px] xl:text-[27px] xl:leading-[39px]"
        >
          Начать
        </button>
      </div>
    </header>
  );
}

export default Header;
