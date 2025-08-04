import img25 from './assets/25.png';
import img26 from './assets/26.png';
import img27 from './assets/27.png';
import mobileAppGif from './assets/mobile-app-development.gif';

const images = [img25, img26, img27];

const SlidingCards = () => {
  return (
    <div className="flex justify-center items-center relative">
      <div className="relative flex justify-center items-center">
        {/* Mobile background centered */}
        <img
          src={mobileAppGif}
          alt="Mobile background"
          className="w-full h-full object-cover rounded-3xl shadow-lg"
        />
        {/* Overlay Images */}
        {/* 1st image in upper black space */}
        <img
          src={images[0]}
          alt="Profile"
          className="absolute left-1/2 top-8 transform -translate-x-1/2 w-20 h-20 object-contain rounded-2xl shadow-2xl z-10"
        />
        {/* 2nd image to the left, aligned with top */}
        <img
          src={images[1]}
          alt="Profile"
          className="absolute left-[-70px] top-8 w-20 h-20 object-contain rounded-2xl shadow-2xl z-10"
        />
        {/* 3rd image to the right, aligned with top */}
        <img
          src={images[2]}
          alt="Profile"
          className="absolute right-[-70px] top-8 w-20 h-20 object-contain rounded-2xl shadow-2xl z-10"
        />
      </div>
    </div>
  );
};

export default SlidingCards;
