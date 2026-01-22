import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect simulation */}
      <div 
        className="absolute inset-0 z-0 bg-cover transform scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(20, 20, 20, 1)), url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FE4vHA%2FdJMcagxvS7u%2FAAAAAAAAAAAAAAAAAAAAAItIuiS8AJkvQyAD2XDXVnHIVSGh2MiLYDpmp_7YlzL8%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXdE5sLSp58J7wvqjbjMjAyuvhBs%253D')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 15%'
        }}
      ></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>

      <div 
        ref={ref}
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="inline-flex items-center gap-2 py-1 px-3 sm:px-4 rounded-full bg-brand-red/10 text-white border border-brand-red/30 text-xs sm:text-sm font-bold mb-6 sm:mb-8 backdrop-blur-md animate-pulse-slow">
          <i className="fas fa-calendar-check text-brand-red"></i>
          EVERY SUNDAY NIGHT
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6 leading-tight font-dodum tracking-tight drop-shadow-2xl">
          살사인들의<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">
            썬데이 결소셜
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 font-light max-w-2xl mx-auto leading-relaxed break-keep">
          매주 일요일, <span className="text-white font-bold">살사·바차타·차차</span>로<br className="hidden md:block"/> 한 주의 마무리를 뜨겁게 장식하세요.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto px-4 sm:px-0">
          <a href="#schedule" className="group relative px-8 py-4 bg-brand-red text-white font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(229,9,20,0.4)] transition-transform hover:scale-105 w-full sm:w-auto flex justify-center items-center">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center gap-2">
              스케줄 확인하기 <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </span>
          </a>
          <a href="#location" className="px-8 py-4 bg-white/5 border border-white/20 hover:bg-white hover:text-brand-dark text-white font-bold rounded-full transition-all backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto">
            오시는 길
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </header>
  );
};

export default Hero;