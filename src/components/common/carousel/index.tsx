import { ArrowLeft, ArrowRight, Circle } from "lucide-react";
import React, { useCallback } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


interface ComponentProps {
  children?: React.ReactNode;
  interval?: number;
}
export const Carousel: React.FC<ComponentProps> = ({
  children,
  interval = 3,
}) => {
  const [index, setIndex] = React.useState(0);
  const childrenCount = React.Children.count(children);
  const handleLeft = () => {
    if (index === 0) {
      return setIndex(childrenCount - 1);
    }
    setIndex(index - 1);
  };
  const handleRight = useCallback(() => {
    if (index === childrenCount - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  }, [index, childrenCount]);

  React.useEffect(() => {
    const triggerInterval = setInterval(handleRight, interval * 2000);
    return () => {
      clearInterval(triggerInterval);
    };
  });

  return (
    <div className="relative h-[208px] lg:h-[468px]">
      {React.Children.map(children, (child, i) => {
        if (index === i) {
          return child;
        }
      })}
      <button
        className="absolute top-0 bottom-0 left-0 z-50 ml-2 text-white cursor-pointer"
        onClick={() => handleLeft()}
      >
        <ArrowLeft className="h-6" />
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 mr-2 z-50  cursor-pointer text-white"
        onClick={() => handleRight()}
      >
        <ArrowRight className="h-6" />
      </button>
      <div className="absolute bottom-0 flex justify-center w-full mb-2">
        {[...Array(childrenCount)].map((_, i) => (
          <button
            onClick={() => setIndex(i)}
            key={i}
            className="z-50 mx-1 cursor-pointer"
          >
            {i === index ? (
              <Circle fill="white" className="h-4 text-transparent md:h-5 text-blue-1100" />
            ) : (
              <Circle className="h-3 text-white md:h-4" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
