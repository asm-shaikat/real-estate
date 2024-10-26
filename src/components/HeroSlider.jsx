import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HeroSlider = () => {
    const sliderImage = [
        {
          src: '/public/assets/imageSlider/image-2.jpg',
          alt: 'Image 2'  
        },
        {
          src: '/public/assets/imageSlider/image-1.jpg',
          alt: 'Image 1'
          
        },
        {
            src: '/public/assets/imageSlider/image-3.jpg',
            alt: 'Image 3'
        }
    ];

    return (
      <div className="w-full px-4 lg:px-0"> 
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}  
          slidesPerView={1} 
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="h-auto"
        >
          {sliderImage.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
              />
            </SwiperSlide>
          ))}    
        </Swiper>
      </div>
    );
};

export default HeroSlider;
