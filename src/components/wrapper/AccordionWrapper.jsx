import { useRef } from "react";

const AccordionWrapper = ({ children, isOpen, duration = 500, className }) => {
  const heightRef = useRef(null);
  return (
    <div
      ref={heightRef}
      style={{
        height: isOpen ? `${heightRef.current?.scrollHeight}px` : "0px",
        transitionDuration: `${duration}ms`,
      }}
      className={`mb-4 transition-all delay-0 overflow-clip ${className}`}
    >
      {children}
    </div>
  );
};

export default AccordionWrapper;
