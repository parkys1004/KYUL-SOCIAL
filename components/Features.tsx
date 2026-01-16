import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FeatureCard = ({ icon, title, desc, delay, gradient }: { icon: string; title: string; desc: string; delay: string; gradient: string }) => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div 
      ref={ref}
      className={`glass-card p-6 sm:p-10 rounded-3xl text-center group hover:-translate-y-4 transition-all duration-500 border border-white/5 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${gradient} rounded-2xl rotate-3 group-hover:rotate-12 transition-transform duration-500 flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl`}>
        <i className={`fas ${icon} text-2xl sm:text-3xl text-white`}></i>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-dodum group-hover:text-brand-red transition-colors">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors break-keep">
        {desc}
      </p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-brand-dark relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-dodum">Why KYUL SOCIAL?</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-brand-red to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard 
            icon="fa-glass-cheers"
            title="포트럭 파티 (Potluck)"
            desc="자유롭게 주류나 먹거리를 지참하여 즐길 수 있는 편안한 분위기! 간단한 주류와 핑거푸드는 기본 제공됩니다."
            gradient="from-orange-500 to-red-600"
            delay="0ms"
          />
          <FeatureCard 
            icon="fa-record-vinyl"
            title="DJ 도베르만"
            desc="살사, 바차타, 차차 최고의 선곡! 댄서들의 심장을 뛰게 하는 DJ 도베르만의 음악과 함께하세요."
            gradient="from-red-600 to-purple-600"
            delay="200ms"
          />
          <FeatureCard 
            icon="fa-users"
            title="바차타 연데"
            desc="소셜 전 16:30부터 18:00까지! 자유롭게 연습하고 교류하는 바차타 연데가 진행됩니다."
            gradient="from-purple-500 to-indigo-600"
            delay="400ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;