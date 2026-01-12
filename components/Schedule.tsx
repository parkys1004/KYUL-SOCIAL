import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScheduleProps {
  onCopy: () => void;
}

const Schedule: React.FC<ScheduleProps> = ({ onCopy }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="schedule" className="py-32 bg-brand-gray relative overflow-hidden scroll-mt-24">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div 
          ref={ref}
          className={`bg-brand-dark/60 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-2xl transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Time Schedule */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-10 flex items-center text-white">
                <i className="far fa-clock text-brand-red mr-4 text-4xl"></i> 
                <span className="font-dodum tracking-wide">TIME TABLE</span>
              </h2>
              <div className="space-y-12 relative pl-4">
                {/* Timeline line */}
                <div className="absolute left-[34px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-red to-transparent"></div>

                {/* Item 1 */}
                <div className="flex gap-8 relative group">
                  <div className="w-16 h-16 bg-brand-dark border-4 border-brand-red rounded-full flex items-center justify-center shrink-0 z-10 font-black text-sm shadow-[0_0_15px_rgba(229,9,20,0.4)] group-hover:scale-110 transition-transform duration-300">
                    16:30
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl flex-1 border border-white/5 group-hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-bold text-brand-red mb-2">바차타 연데</h3>
                    <p className="text-gray-300 font-medium">16:30 ~ 18:00</p>
                    <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                      <i className="fas fa-map-pin"></i> 맘보 바차타홀
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-8 relative group">
                  <div className="w-16 h-16 bg-brand-dark border-4 border-white rounded-full flex items-center justify-center shrink-0 z-10 font-black text-sm group-hover:scale-110 transition-transform duration-300">
                    18:00
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl flex-1 border border-white/5 group-hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-2">KYUL SOCIAL START</h3>
                    <p className="text-gray-300 font-medium">18:00 ~ 21:00</p>
                    <p className="text-sm text-gray-500 mt-2">즐거운 소셜 타임 (살사, 바차타, 차차)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Pricing & Info */}
            <div id="info" className="flex-1 scroll-mt-28">
              <div className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-8 border border-white/10 h-full flex flex-col justify-between hover:border-brand-red/30 transition-colors duration-500">
                <div>
                  <h2 className="text-2xl font-bold mb-8 flex items-center">
                    <i className="fas fa-ticket-alt text-brand-red mr-4 text-3xl"></i> 
                    <span className="font-dodum">입장 안내</span>
                  </h2>
                  
                  <div className="mb-10 p-6 bg-brand-dark/50 rounded-2xl border border-white/5 text-center">
                    <p className="text-xs text-brand-red font-bold uppercase tracking-[0.3em] mb-2">Entrance Fee</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-black text-white">10,000</span>
                      <span className="text-2xl text-gray-400 font-bold">원</span>
                    </div>
                  </div>

                  <div className="space-y-5 mb-10">
                    {[
                      "자유로운 음주와 댄스 가능",
                      "간단한 주류 및 핑거푸드 제공",
                      "포트럭 형식 (외부 음식/주류 반입 환영)"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span className="text-gray-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 relative overflow-hidden group cursor-pointer" onClick={onCopy}>
                  <div className="absolute inset-0 bg-brand-red/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-brand-red font-bold flex items-center gap-2">
                        <i className="fas fa-star animate-spin-slow"></i> 입금 계좌 (밤 12시까지)
                      </span>
                      <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded group-hover:bg-brand-red transition-colors">
                        <i className="far fa-copy mr-1"></i> CLICK TO COPY
                      </span>
                    </div>
                    <p className="text-xl md:text-2xl font-mono font-bold text-white mb-1 tracking-wider">112-2227-5770-19</p>
                    <p className="text-sm text-gray-400">부산은행 (예금주: 이경훈)</p>
                  </div>
                </div>
                <p className="text-sm text-white font-bold mt-4 text-center tracking-wide flex items-center justify-center gap-2">
                  <i className="fas fa-comment"></i> * 카카오톡 입금도 가능합니다.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;