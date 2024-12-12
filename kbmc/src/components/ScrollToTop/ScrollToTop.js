import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowPos = window.scrollY;
      const header = document.querySelector(".main-header");
      const scrollLink = document.querySelector(".scroll-top");

      if (windowPos >= 110) {
        if (header) header.classList.add("fixed-header");
        if (scrollLink) scrollLink.classList.add("open");
        setIsScrolled(true);
      } else {
        if (header) header.classList.remove("fixed-header");
        if (scrollLink) scrollLink.classList.remove("open");
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-top scroll-to-target ${isScrolled ? "open" : ""}`}
      data-target="html"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="flaticon-up-chevron"></i>
    </button>
  );
};

export default ScrollToTop;
