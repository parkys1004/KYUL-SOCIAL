import React from 'react';

const Footer: React.FC = () => {
  const openAnnouncement = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('show-announcement-modal'));
  };

  return (
    <footer className="bg-black py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
           <i className="fas fa-music text-brand-red text-xl"></i>
           <p className="text-3xl font-dodum font-bold tracking-wider text-white">SUNDAY BACHATA</p>
        </div>
        
        <p className="text-gray-400 text-sm mb-8 leading-loose max-w-md mx-auto">
          Enjoy Salsa, Bachata, and ChaCha every Sunday.<br/>
          Dance, Drink, and Be Happy together.
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
            </a>
        </div>

        <p className="text-gray-700 text-xs tracking-widest uppercase mb-4">
          &copy; 2024 Sunday Bachata. All rights reserved.
        </p>

        {/* Event Management Trigger */}
        <button 
          onClick={openAnnouncement}
          className="text-[10px] text-gray-600 hover:text-brand-red transition-colors border-b border-gray-800 hover:border-brand-red pb-0.5"
        >
          이벤트 공지 다시보기
        </button>
      </div>
    </footer>
  );
};

export default Footer;