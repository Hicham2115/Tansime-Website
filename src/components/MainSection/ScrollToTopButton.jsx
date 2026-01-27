import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="
            fixed 
            bottom-4 sm:bottom-8 
            right-4 sm:right-8 
            z-50 
            rounded-full 
            w-10 h-10 sm:w-12 sm:h-12 
            bg-primary 
            text-primary-foreground 
            shadow-lg 
            hover:bg-primary/90 
            hover:scale-110 
            transition-all 
            duration-300 
            animate-fade-in-up
          "
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      )}
    </>
  );
}
