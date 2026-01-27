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
            bottom-4 left-4       /* small offset from edges on mobile */
            sm:bottom-8 sm:right-8 sm:left-auto 
            z-50 
            w-12 h-12 
            rounded-full 
            bg-primary 
            text-primary-foreground 
            shadow-lg 
            hover:bg-primary/90 
            hover:scale-110 
            transition-all 
            duration-300 
            flex 
            items-center 
            justify-center
          "
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </>
  );
}
