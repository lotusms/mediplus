import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Slide = ({ src, alt, heading, subheading, btntext, to }) => {
  return (
    <div className="relative w-full shrink-0 flex">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center 
        w-full 
        items-center 
        text-center 
        px-[80px]
        sm:w-1/2
        sm:items-start
        sm:text-left 
        sm:px-0
        sm:ps-12
        sm:ms-8">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-dark">{heading}</h2>
        <div className="my-2 sm:my-6 text-[12px] md:text-sm text-dark dark:text-dark">{subheading}</div>
        <div className="mt-4">
          <Link to={to} className="px-12 py-3.5 bg-primary text-primarytext hover:bg-primaryhover focus-visible:outline-primary rounded-sm text-sm font-semibold focus-visible:outline focus-visible:outline-2 shadow-sm focus-visible:outline-offset-2">{btntext}</Link>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  btntext: PropTypes.string,
  to: PropTypes.string
};

export default Slide;