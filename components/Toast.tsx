import React from 'react';

interface ToastProps {
  show: boolean;
  message: string;
}

const Toast: React.FC<ToastProps> = ({ show, message }) => {
  return (
    <div 
      className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center gap-3 border border-green-400/30 backdrop-blur-md">
        <i className="fas fa-check-circle text-xl animate-pulse"></i>
        <span className="font-bold tracking-wide">{message}</span>
      </div>
    </div>
  );
};

export default Toast;