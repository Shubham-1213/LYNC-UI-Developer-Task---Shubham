import React, { useState, useEffect } from 'react';
import "../styles/components/_navbar.scss";
import navbarEffect from "../assets/navbar-effect.png";
import navbarEffect2 from "../assets/navbar-effect-2.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  }

  const scrollToTop = () => {
    console.log("Scroll to top clicked"); // Debug log
    if ('scrollBehavior' in document.documentElement.style) {
      // Smooth scroll for modern browsers
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Fallback for older browsers
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='outer-container'>
      <div className="navbar-container">
        <img src={navbarEffect} alt="navbar-effect" />
      </div>
      <div className="navbar-effect-2">
        <img src={navbarEffect2} alt="navbar-effect-2" />
      </div>
      <div className={`main-container ${isSticky ? 'sticky' : ''}`}>
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <svg
          width="39"
          height="26"
          viewBox="0 0 39 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={scrollToTop}
          style={{ cursor: 'pointer' }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.8942 14.2727C23.2618 20.025 18.3936 24.4999 12.4818 24.4999C6.1406 24.4999 1 19.3512 1 12.9999C1 6.6487 6.1406 1.5 12.4818 1.5C15.5119 1.5 18.2678 2.67556 20.3197 4.59617H16.8442V5.56185C15.5649 4.80748 14.0738 4.3748 12.4818 4.3748C7.72585 4.3748 3.8704 8.23632 3.8704 12.9998C3.8704 17.7632 7.72585 21.6247 12.4818 21.6247C16.8059 21.6247 20.3857 18.4325 21 14.2727H23.8942Z"
            fill="white"
          />
          <path
            d="M23.8942 14.2727L24.4834 14.3374L24.5557 13.6799H23.8942V14.2727ZM20.3197 4.59617V5.18896H21.8205L20.7248 4.16338L20.3197 4.59617ZM16.8442 4.59617V4.00338H16.2515V4.59617H16.8442ZM16.8442 5.56185L16.5432 6.07248L17.437 6.59954V5.56185H16.8442ZM21 14.2727V13.6799H20.4884L20.4136 14.1861L21 14.2727ZM12.4818 25.0927C18.7 25.0927 23.8185 20.3862 24.4834 14.3374L23.3049 14.2079C22.7052 19.6638 18.0872 23.9071 12.4818 23.9071V25.0927ZM0.407211 12.9999C0.407211 19.6777 5.81233 25.0927 12.4818 25.0927V23.9071C6.46886 23.9071 1.59279 19.0247 1.59279 12.9999H0.407211ZM12.4818 0.907211C5.81233 0.907211 0.407211 6.32219 0.407211 12.9999H1.59279C1.59279 6.97521 6.46886 2.09279 12.4818 2.09279V0.907211ZM20.7248 4.16338C18.5675 2.14414 15.6683 0.907211 12.4818 0.907211V2.09279C15.3555 2.09279 17.9681 3.20699 19.9146 5.02895L20.7248 4.16338ZM16.8442 5.18896H20.3197V4.00338H16.8442V5.18896ZM17.437 5.56185V4.59617H16.2515V5.56185H17.437ZM17.1453 5.05121C15.7773 4.24456 14.1826 3.78201 12.4818 3.78201V4.96759C13.965 4.96759 15.3525 5.37041 16.5432 6.07248L17.1453 5.05121ZM12.4818 3.78201C7.39758 3.78201 3.27761 7.90982 3.27761 12.9998H4.46319C4.46319 8.56283 8.05411 4.96759 12.4818 4.96759V3.78201ZM3.27761 12.9998C3.27761 18.0897 7.39758 22.2175 12.4818 22.2175V21.0319C8.05411 21.0319 4.46319 17.4367 4.46319 12.9998H3.27761ZM12.4818 22.2175C17.1049 22.2175 20.9299 18.805 21.5865 14.3593L20.4136 14.1861C19.8414 18.0601 16.507 21.0319 12.4818 21.0319V22.2175ZM23.8942 13.6799H21V14.8655H23.8942V13.6799Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.3225 22.629C22.1271 23.8121 24.2846 24.5 26.6024 24.5C32.9437 24.5 38.0843 19.3513 38.0843 13.0001C38.0843 6.64881 32.9437 1.50011 26.6024 1.50011C20.2612 1.50011 15.1206 6.64881 15.1206 13.0001C15.1206 13.0373 15.1208 13.0744 15.1211 13.1116L17.9918 13.1116C17.9914 13.0745 17.9911 13.0374 17.9911 13.0002C17.9911 8.23681 21.8466 4.37528 26.6025 4.37528C31.3584 4.37528 35.2139 8.23681 35.2139 13.0002C35.2139 17.7637 31.3584 21.6252 26.6025 21.6252C24.1259 21.6252 21.8934 20.578 20.3225 18.9017V22.629Z"
            fill="white"
          />
          <path
            d="M20.3225 22.629H19.7297V22.9492L19.9975 23.1247L20.3225 22.629ZM15.1211 13.1116L14.5284 13.1172L14.534 13.7044H15.1211V13.1116ZM17.9918 13.1116V13.7044H18.5921L18.5846 13.1041L17.9918 13.1116ZM20.3225 18.9017L20.755 18.4963L19.7297 17.4022V18.9017H20.3225ZM19.9975 23.1247C21.8957 24.3692 24.1656 25.0928 26.6024 25.0928V23.9072C24.4036 23.9072 22.3585 23.255 20.6475 22.1332L19.9975 23.1247ZM26.6024 25.0928C33.272 25.0928 38.6771 19.6778 38.6771 13.0001H37.4915C37.4915 19.0248 32.6154 23.9072 26.6024 23.9072V25.0928ZM38.6771 13.0001C38.6771 6.3223 33.272 0.907319 26.6024 0.907319V2.0929C32.6154 2.0929 37.4915 6.97532 37.4915 13.0001H38.6771ZM26.6024 0.907319C19.9329 0.907319 14.5278 6.3223 14.5278 13.0001H15.7134C15.7134 6.97532 20.5895 2.0929 26.6024 2.0929V0.907319ZM14.5278 13.0001C14.5278 13.0391 14.528 13.0782 14.5284 13.1172L15.7139 13.106C15.7136 13.0707 15.7134 13.0354 15.7134 13.0001H14.5278ZM15.1211 13.7044L17.9918 13.7044V12.5188L15.1211 12.5188V13.7044ZM17.3983 13.0002C17.3983 13.0399 17.3986 13.0795 17.3991 13.1191L18.5846 13.1041C18.5841 13.0695 18.5839 13.0349 18.5839 13.0002H17.3983ZM26.6025 3.7825C21.5183 3.7825 17.3983 7.9103 17.3983 13.0002H18.5839C18.5839 8.56332 22.1748 4.96807 26.6025 4.96807V3.7825ZM35.8067 13.0002C35.8067 7.9103 31.6867 3.7825 26.6025 3.7825V4.96807C31.0302 4.96807 34.6211 8.56332 34.6211 13.0002H35.8067ZM26.6025 22.218C31.6867 22.218 35.8067 18.0902 35.8067 13.0002H34.6211C34.6211 17.4372 31.0302 21.0324 26.6025 21.0324V22.218ZM19.8899 19.307C21.5682 21.0979 23.9551 22.218 26.6025 22.218V21.0324C24.2967 21.0324 22.2187 20.0582 20.755 18.4963L19.8899 19.307ZM19.7297 18.9017V22.629H20.9153V18.9017H19.7297Z"
            fill="white"
          />
        </svg>
        <div className={`link-container ${menuOpen ? "open" : ""}`}>
          <div className="page">Home</div>
          <div className="page">Documentation</div>
          <div className="page">Blogs</div>
          <div className="page">LYNC Portal</div>
          <div className="page">Request Demo</div>
          <div className={`page ${menuOpen ? "open" : "close"}`} onClick={handleClose}>Close</div>
        </div>
        <div className="button-container">
          <div className="button">Get Started</div>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5L13.3536 4.64645L13.7071 5L13.3536 5.35355L13 5ZM1 5.5C0.723858 5.5 0.5 5.27614 0.5 5C0.5 4.72386 0.723858 4.5 1 4.5V5.5ZM9.35355 0.646447L13.3536 4.64645L12.6464 5.35355L8.64645 1.35355L9.35355 0.646447ZM13.3536 5.35355L9.35355 9.35355L8.64645 8.64645L12.6464 4.64645L13.3536 5.35355ZM13 5.5H1V4.5H13V5.5Z" fill="#0E0D0D"/>
          </svg>
        </div>
      </div>
    </div>
  );
}