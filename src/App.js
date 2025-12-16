import React from 'react';
import './App.css';

const App = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:nasser@albuhairaalarabia.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+966558764446';
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <div className="logo-circle">
            <div className="logo-inner">
              <span className="logo-text">ALBUHAIRA</span>
              <span className="logo-subtext">ALARABIA</span>
            </div>
          </div>
          <h1 className="logo-title">ALBUHAIRA ALARABIA</h1>
        </div>
      </header>

      <main className="main-content">
        <div className="deletion-container">
          <div className="title-section">
            <h2 className="page-title">Account Deletion Request</h2>
            <div className="title-line"></div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.375 2.25a4.125 4.125 0 100 8.25 4.125 4.125 0 000-8.25zM10.375 12a7.125 7.125 0 00-7.124 7.247.75.75 0 00.363.63 13.067 13.067 0 006.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 00.364-.63l.001-.12v-.002A7.125 7.125 0 0010.375 12zM16 9.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z" />
                </svg>
              </div>
              <h3 className="card-title">Request Account Deletion</h3>
            </div>

            <div className="card-content">
              <p className="description">
                Users can request deletion of their account and associated personal data by contacting the app support team.
              </p>
              
              <div className="instructions">
                <p className="instruction-text">
                  Please send a deletion request including the registered phone number to:
                </p>
                
                <div className="contact-email" onClick={handleEmailClick}>
                  <div className="email-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <span className="email-address">nasser@albuhairaalarabia.com</span>
                </div>
              </div>
              
              <div className="processing-info">
                <div className="time-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="processing-text">Requests are processed within 30 days.</p>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h3 className="contact-title">Contact Information</h3>
            <div className="contact-cards">
              <div className="contact-card" onClick={handleEmailClick}>
                <div className="contact-card-icon email">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h4>Email</h4>
                  <p>nasser@albuhairaalarabia.com</p>
                </div>
              </div>
              
              <div className="contact-card" onClick={handlePhoneClick}>
                <div className="contact-card-icon phone">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h4>Phone</h4>
                  <p>+966 558764446</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} ALBUHAIRA ALARABIA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;