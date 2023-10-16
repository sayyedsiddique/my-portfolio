import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";


type slideImgObj = {
  sliderImg: string
}
type ImageSliderProps = {
  imageArr: slideImgObj[];
};
const ImageSlider: React.FC<ImageSliderProps> = ({ imageArr }) => {
  // console.log("imageArr... ", imageArr);

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {imageArr &&
        imageArr?.map((item) => {
          return (
            <SwiperSlide>
              <img src={item?.sliderImg} alt="" />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ImageSlider;
