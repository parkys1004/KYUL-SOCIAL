import React, { useEffect, useState } from 'react';

const AnnouncementModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user has opted to hide the modal
    const hideUntil = localStorage.getItem('hide_welcome_modal_v1');
    const now = new Date().getTime();

    if (!hideUntil || now > parseInt(hideUntil)) {
      // Add a small delay for better UX (fade in)
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDontShowAgain = () => {
    // Hide for 7 days
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    localStorage.setItem('hide_welcome_modal_v1', nextWeek.getTime().toString());
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
                <h3 className="text-white font-black text-xl sm:text-2xl tracking-widest font-dodum">WELCOME EVENT</h3>
            </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 text-center bg-brand-dark">
            <div className="mb-5 sm:mb-6">
                <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 text-yellow-400 text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 border border-yellow-500/30">
                    SPECIAL OFFER
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    <span className="text-brand-red">처음 방문하시는 분</span><br />
                    <span className="text-3xl sm:text-4xl">무료!</span>
                </h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/5 mb-6 sm:mb-8">
                <p className="text-gray-200 leading-relaxed word-keep-all text-sm sm:text-base">
                    이번 주에는 맛있는 <br/>
                    <span className="font-bold text-orange-400">"고래사 어묵"</span><br/>
                    나누어 먹으면서 소셜 즐겨요 ^^
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
                    <i className="far fa-check-circle"></i> 다시보지 않기
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;