import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const fadeInAnimation = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <div>
      <style>{fadeInAnimation}</style>
      <div style={bannerStyles}>
        <div style={textStyles}>
          <p style={messageStyles}>
            🍪 We use cookies to ensure you get the best experience on our
            website.{" "}
            <a href="/privacy-policy" style={linkStyles}>
              Learn more
            </a>
          </p>
        </div>
        <div style={buttonContainerStyles}>
          <button onClick={handleDecline} style={declineButtonStyles}>
            Decline
          </button>
          <button onClick={handleAccept} style={acceptButtonStyles}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

const bannerStyles = {
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#ffffff",
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "1rem 1.5rem",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: "1000",
  maxWidth: "600px",
  width: "90%",
  animation: "fadeIn 0.5s ease-in-out",
};

const textStyles = {
  flex: 1,
  marginRight: "1rem",
};

const messageStyles = {
  margin: "0",
  fontSize: "0.95rem",
  lineHeight: "1.5",
  color: "#333",
};

const linkStyles = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "bold",
};

const buttonContainerStyles = {
  display: "flex",
  gap: "0.5rem",
};

const acceptButtonStyles = {
  padding: "0.5rem 1.2rem",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  fontSize: "0.9rem",
  fontWeight: "bold",
  transition: "background 0.3s ease",
};

const declineButtonStyles = {
  padding: "0.5rem 1.2rem",
  background: "#f8f9fa",
  color: "#333",
  border: "1px solid #ddd",
  borderRadius: "20px",
  cursor: "pointer",
  fontSize: "0.9rem",
  fontWeight: "bold",
  transition: "background 0.3s ease",
};

export default CookieConsent;
