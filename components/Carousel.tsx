import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface SlideData {
  title: string;
  content: string;
  icon: React.ReactNode;
  bgClass: string;
}

export interface CarouselProps {
  slides: SlideData[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-stone-100 border border-stone-200 shadow-sm group">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-out h-64 md:h-80" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full flex flex-col items-center justify-center p-8 text-center relative">
            {/* Abstract Background Element */}
            <div className={`absolute inset-0 opacity-10 ${slide.bgClass}`}></div>
            
            <div className="relative z-10 max-w-lg">
              <div className="mx-auto mb-4 p-3 rounded-full bg-white shadow-sm w-fit text-stone-700">
                {slide.icon}
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">{slide.title}</h3>
              <p className="text-stone-600 leading-relaxed">{slide.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls - Only show on hover/focus for minimalism */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 z-20"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 z-20"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index ? 'bg-stone-800 w-6' : 'bg-stone-400 hover:bg-stone-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};