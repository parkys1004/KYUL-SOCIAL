import React, { useEffect, useState } from 'react';

// ==========================================
//  [이벤트 팝업 관리 설정]
//  이 곳의 내용을 수정하여 팝업을 제어하세요.
// ==========================================
const EVENT_CONFIG = {
  // 1. 이벤트 활성화 여부 (false로 변경 시 팝업이 뜨지 않음)
  isActive: false,
  
  // 2. 이벤트 버전 ID 
  // (내용이 변경되었을 때 이 값을 'v2', 'v3' 등으로 바꾸면 
  //  기존에 '다시보지 않기'를 체크한 사람에게도 다시 팝업이 뜹니다)
  id: 'welcome_event_v1',
  
  // 3. '다시보지 않기' 클릭 시 숨길 기간 (일 단위)
  hideDays: 7,

  // 4. 팝업 내용 설정
  content: {
    headerTitle: 'WELCOME EVENT',
    badge: 'SPECIAL OFFER',
    titlePrefix: '처음 방문하시는 분',
    titleHighlight: '무료!',
    description: (
      <>
        이번 주에는 맛있는 <br/>
        <span className="font-bold text-orange-400">"고래사 어묵"</span><br/>
        나누어 먹으면서 소셜 즐겨요 ^^
      </>
    )
  }
};

const AnnouncementModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const STORAGE_KEY = `hide_popup_${EVENT_CONFIG.id}`;

  useEffect(() => {
    // 1. 이벤트가 비활성화 상태면 실행하지 않음
    if (!EVENT_CONFIG.isActive) return;

    // 2. 로컬 스토리지 체크
    const hideUntil = localStorage.getItem(STORAGE_KEY);
    const now = new Date().getTime();

    if (!hideUntil || now > parseInt(hideUntil)) {
      // UX를 위해 약간의 딜레이 후 등장
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [STORAGE_KEY]);

  // 외부(Footer 등)에서 '이벤트 다시보기' 클릭 시 팝업 호출
  useEffect(() => {
    const handleForceShow = () => {
      // isActive가 false여도 강제로 띄우고 싶다면 true로 설정하거나,
      // 현재 로직상 isActive가 false면 자동 팝업은 안뜨지만 
      // 버튼 클릭으로는 띄울 수 있게 할 수 있습니다. 
      // 여기서는 버튼 클릭 시 무조건 띄우도록 합니다.
      setIsOpen(true);
    };

    window.addEventListener('show-announcement-modal', handleForceShow);
    return () => window.removeEventListener('show-announcement-modal', handleForceShow);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDontShowAgain = () => {
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + EVENT_CONFIG.hideDays);
    localStorage.setItem(STORAGE_KEY, nextDate.getTime().toString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-brand-dark border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(229,9,20,0.3)] overflow-hidden transform transition-all duration-300 scale-100 animate-blob mx-auto">
        
        {/* Decorative Header */}
        <div className="h-28 sm:h-32 bg-gradient-to-br from-brand-red to-orange-600 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="text-center z-10">
                <i className="fas fa-gift text-4xl sm:text-5xl text-white mb-2 animate-bounce"></i>
                <h3 className="text-white font-black text-xl sm:text-2xl tracking-widest font-dodum">
                    {EVENT_CONFIG.content.headerTitle}
                </h3>
            </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 text-center bg-brand-dark">
            <div className="mb-5 sm:mb-6">
                <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 text-yellow-400 text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 border border-yellow-500/30">
                    {EVENT_CONFIG.content.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    <span className="text-brand-red">{EVENT_CONFIG.content.titlePrefix}</span><br />
                    <span className="text-3xl sm:text-4xl">{EVENT_CONFIG.content.titleHighlight}</span>
                </h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/5 mb-6 sm:mb-8">
                <p className="text-gray-200 leading-relaxed word-keep-all text-sm sm:text-base">
                    {EVENT_CONFIG.content.description}
                </p>
                <div className="mt-3 flex justify-center text-orange-400 gap-2 text-sm">
                    <i className="fas fa-utensils"></i>
                    <i className="fas fa-music"></i>
                    <i className="fas fa-heart"></i>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
                <button 
                    onClick={handleClose}
                    className="w-full py-3 sm:py-4 bg-brand-red hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-red-900/40 text-sm sm:text-base"
                >
                    확인했어요
                </button>
                <button 
                    onClick={handleDontShowAgain}
                    className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors py-2 flex items-center justify-center gap-2"
                >
                    <i className="far fa-check-circle"></i> {EVENT_CONFIG.hideDays}일간 보지 않기
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;