import React from 'react';

const KakaoFloatingBtn: React.FC = () => {
  return (
    <a
      href="https://invite.kakao.com/tc/uWDt8fzmWN"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="카카오톡 오픈채팅 참여하기"
    >
      {/* Tooltip (Visible on hover on larger screens) */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
        <div className="bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap relative">
          오픈채팅 참여하기
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white/90 rotate-45"></div>
        </div>
      </div>
      
      {/* Button */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FEE500] rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(254,229,0,0.3)] hover:shadow-[0_6px_20px_rgba(254,229,0,0.5)] hover:scale-110 transition-all duration-300 relative overflow-hidden border border-[#FEE500]">
        <i className="fas fa-comment text-[#371D1E] text-xl sm:text-2xl pt-0.5"></i>
      </div>
    </a>
  );
};

export default KakaoFloatingBtn;