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
  image: slideImgObj[];
};
const ImageSlider: React.FC<ImageSliderProps> = ({ image }) => {
  console.log("image... ", image);

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {image &&
        image?.map((item) => {
          return (
            <SwiperSlide>
              <img src={item?.sliderImg} alt="" />
            </SwiperSlide>
          );
        })}
      {/* <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image6} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image7} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image8} alt="" /></SwiperSlide> */}
    </Swiper>
  );
};

export default ImageSlider;
