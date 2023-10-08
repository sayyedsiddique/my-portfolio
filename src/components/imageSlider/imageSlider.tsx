import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import image1 from "../../assets/projectImgs/blueBillImgs/dashboard.jpg"
import image2 from "../../assets/projectImgs/blueBillImgs/storeDetailsPage.jpg"
import image3 from "../../assets/projectImgs/blueBillImgs/billPage.jpg"
import image4 from "../../assets/projectImgs/blueBillImgs/addProduct.jpg"
import image5 from "../../assets/projectImgs/blueBillImgs/productListPage.jpg"
import image6 from "../../assets/projectImgs/blueBillImgs/onlineOrder.jpg"
import image7 from "../../assets/projectImgs/blueBillImgs/orderDetailsPage.jpg"
import image8 from "../../assets/projectImgs/blueBillImgs/arabicMode.jpg"

const ImageSlider: React.FC = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image6} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image7} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image8} alt="" /></SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
