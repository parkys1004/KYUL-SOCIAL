import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Schedule from './components/Schedule';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import AnnouncementModal from './components/AnnouncementModal';
import KakaoFloatingBtn from './components/KakaoFloatingBtn';

const App: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleCopyAccount = () => {
    const accountNumber = "112-2227-5770-19";
    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(accountNumber).then(() => {
        triggerToast();
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = accountNumber;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        triggerToast();
      } catch (err) {
        console.error('Copy failed', err);
        alert("계좌번호 복사에 실패했습니다. 직접 입력해주세요.");
      }
      document.body.removeChild(textArea);
    }
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Schedule onCopy={handleCopyAccount} />
        <LocationContact />
      </main>
      <Footer />
      <Toast show={showToast} message="계좌번호가 복사되었습니다!" />
      <AnnouncementModal />
      <KakaoFloatingBtn />
    </div>
  );
};

export default App;