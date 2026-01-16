import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LocationContact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="location" className="py-20 sm:py-32 bg-brand-dark scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-20 font-dodum">오시는 길 & 문의</h2>
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Map Placeholer */}
          <div className="h-80 sm:h-96 bg-gray-800 rounded-[2rem] overflow-hidden relative group shadow-2xl border border-white/5">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596522354195-e8448ea165dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-red rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-red-900/50 animate-bounce">
                <i className="fas fa-map-marker-alt text-3xl sm:text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 font-dodum">맘보 바차타홀</h3>
              <p className="text-gray-300 mt-2 text-base sm:text-lg">부산 부산진구 동천로 4</p>
              
              <a 
                href="https://naver.me/Gia4OUNu" 
                target="_blank" 
                rel="noreferrer"
                className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-white text-brand-dark font-bold rounded-full transform hover:scale-105 hover:bg-brand-red hover:text-white transition-all shadow-lg flex items-center gap-2 text-sm sm:text-base"
              >
                <i className="fas fa-map"></i> 지도 앱에서 보기
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div id="contact" className="flex flex-col justify-center min-h-[320px] sm:h-96 bg-white/5 p-6 sm:p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors scroll-mt-28">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-left flex items-center gap-3">
              <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-brand-red rounded-full"></span> CONTACT US
            </h3>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red border border-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shrink-0">
                  <i className="fas fa-phone-alt text-lg sm:text-2xl"></i>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-gray-400 font-bold mb-1">문의 (결)</p>
                  <a href="tel:010-3563-7749" className="text-xl sm:text-2xl font-black hover:text-brand-red transition-colors tracking-wide">010-3563-7749</a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <i className="fas fa-university text-lg sm:text-2xl"></i>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-gray-400 font-bold mb-1">입금 문의 (이경훈)</p>
                  <p className="text-base sm:text-xl font-bold break-all sm:break-normal">부산 112-2227-5770-19</p>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-6 sm:pt-8 flex gap-3 sm:gap-4">
              <a href="tel:01035637749" className="flex-1 py-3 sm:py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 text-center text-sm sm:text-base">
                <i className="fas fa-phone mr-2"></i> 전화
              </a>
              <a href="sms:01035637749" className="flex-1 py-3 sm:py-4 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-colors shadow-lg text-center text-sm sm:text-base">
                <i className="fas fa-comment mr-2"></i> 문자
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;