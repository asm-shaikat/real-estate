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
      src: 'https://i.ibb.co.com/bWC80NT/2a65e333b3e450407ceb50e3653bf030-cc-ft-960.jpg',
      alt: 'Image 1',
      link: 'https://ibb.co.com/w0PxkpV',
    },
    {
      src: 'https://i.ibb.co.com/jzy0hnn/luxury-real-estate.jpg',
      alt: 'Image 2',
      link: 'https://ibb.co.com/0KC4qHH',
    },
    {
      src: 'https://i.ibb.co.com/8s3yw3t/What-are-real-estate-comps.jpg',
      alt: 'Image 3',
      link: 'https://ibb.co.com/54DQ3Dw',
    },
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
