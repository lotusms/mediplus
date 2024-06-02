import { useEffect, useState, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Slide from './Slide';
import slideone from '../../assets/images/banners/slider.jpg';
import slidetwo from '../../assets/images/banners/slider2.jpg';
import slidethree from '../../assets/images/banners/slider3.jpg';

const slides = [  
  {
    src: slideone,
    alt: 'slide1',
    heading: 'We Provide Medical Services That You Can Trust!',
    subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.',
    btntext: 'Learn More',
    link: '/about'
    
  },
  {
    src: slidetwo,
    alt: 'slide2',
    heading: 'We Provide Medical Services That You Can Trust!',
    subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.',
    btntext: 'Learn More',
    link: '/contact'
  },
  {
    src: slidethree,
    alt: 'slide3',
    heading: 'We Provide Medical Services That You Can Trust!',
    subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.',
    btntext: 'Learn More',
    link: '/private'
  }
]

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('');

  const prevSlide = () => {
    setAnimation('fade-out');
    setTimeout(() => {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : slides.length - 1);
      setAnimation('fade-in');
    }, 500);
  };

  const nextSlide = useCallback(() => {
    setAnimation('fade-out');
    setTimeout(() => {
      setCurrentIndex(currentIndex < slides.length - 1 ? currentIndex + 1 : 0);
      setAnimation('fade-in');
    }, 500);
  }, [currentIndex]);


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <div className="relative w-full overflow-hidden lg:h-[650px]">
      <div className={`flex transition-transform duration-500 ease-in-out h-full ${animation}`}>
        {slides.map((slide, index) => (
        <div key={index} className={`w-full shrink-0 h-full relative ${currentIndex === index ? 'block' : 'hidden'}`}>
          <Slide 
            src={slide.src}
            alt={slide.alt}
            heading={slide.heading}
            subheading={slide.subheading}
            btntext={slide.btntext}
            to={slide.link}  />
        </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-primary text-white p-3 rounded-full"
        onClick={prevSlide}>
        <ChevronLeftIcon className="size-6" />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-primary text-white p-3 rounded-full"
        onClick={nextSlide}>
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  )
}

export default Slider;