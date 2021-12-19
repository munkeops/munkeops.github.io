import React from 'react';


function Slideshow({data}) {

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === data.colors.length - 1 ? 0 : prevIndex + 1
          ),
        data.delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {data.colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              // style={{ backgroundColor }}
              style={{"background-image": `url(${backgroundColor})`}}
            ></div>
            
          ))}
        </div>
  
        <div className="slideshowDots">
          {data.colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

export default Slideshow