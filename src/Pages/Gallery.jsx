import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import FadeInUp from "@/components/FadeInUp";
import ScaleIn from "@/components/ScaleIn";

// Importing Images
import ch2 from "../assets/Imgs/CH-2.jpg";
import chDup from "../assets/Imgs/CH-DUP.jpg";
import ch3Dup from "../assets/Imgs/CH3-DUP.jpg";
import ch4Dup from "../assets/Imgs/CH4-DUP.jpg";
import chambre2 from "../assets/Imgs/CHAMBRE 2.jpg";
import chambre from "../assets/Imgs/CHAMBRE.jpg";
import escalierDup from "../assets/Imgs/ESCALIER DUP.jpg";
import espaceTv2 from "../assets/Imgs/ESPACE TV 2.jpg";
import kitchenette from "../assets/Imgs/KITCHENETTE.jpg";
import salon1 from "../assets/Imgs/SALON 1.jpg";
import salonDup from "../assets/Imgs/SALON DUP.jpg";
import salonSamKitch from "../assets/Imgs/SALON-SAM-KITCH.jpg";
import samDup from "../assets/Imgs/SAM-DUP.jpg";
import samSalon from "../assets/Imgs/SAM-SALON.jpg";
import sam from "../assets/Imgs/SAM.jpg";
import studioSalon from "../assets/Imgs/STUDIO SALON.jpg";
import chApp from "../assets/Imgs/ch-app.jpg";
import ch2App from "../assets/Imgs/ch2-app.jpg";
import A7409457 from "../assets/Imgs/A7409457.JPG";
import A7409460 from "../assets/Imgs/A7409460.JPG";
import A7409471 from "../assets/Imgs/A7409471.JPG";
import A7409473 from "../assets/Imgs/A7409473.JPG";
import A7409479 from "../assets/Imgs/A7409479.JPG";
import A7409482 from "../assets/Imgs/A7409482.JPG";
import A7409486 from "../assets/Imgs/A7409486.JPG";
import A7409489 from "../assets/Imgs/A7409489.JPG";
import A7409494 from "../assets/Imgs/A7409494.JPG";
import A7409497 from "../assets/Imgs/A7409497.JPG";
import A7409507 from "../assets/Imgs/A7409507.JPG";
import A7409515 from "../assets/Imgs/A7409515.JPG";
import A7409516 from "../assets/Imgs/A7409516.JPG";
import A7409518 from "../assets/Imgs/A7409518.JPG";
import A7409522 from "../assets/Imgs/A7409522.JPG";
import A7409535 from "../assets/Imgs/A7409535.JPG";
import A7409538 from "../assets/Imgs/A7409538.JPG";
import A7409545 from "../assets/Imgs/A7409545.JPG";
import A7409547 from "../assets/Imgs/A7409547.JPG";
import A7409553 from "../assets/Imgs/A7409553.JPG";
import A7409558 from "../assets/Imgs/A7409558.JPG";
import A7409560 from "../assets/Imgs/A7409560.JPG";
import A7409562 from "../assets/Imgs/A7409562.JPG";
import A7409563 from "../assets/Imgs/A7409563.JPG";
import A7409570 from "../assets/Imgs/A7409570.JPG";
import A7409574 from "../assets/Imgs/A7409574.JPG";
import A7409576 from "../assets/Imgs/A7409576.JPG";
import A7409578 from "../assets/Imgs/A7409578.JPG";
import A7409583 from "../assets/Imgs/A7409583.JPG";
import A7409585 from "../assets/Imgs/A7409585.JPG";
import A7409586 from "../assets/Imgs/A7409586.JPG";
import A7409590 from "../assets/Imgs/A7409590.JPG";
import A7409595 from "../assets/Imgs/A7409595.JPG";
import RUR04229 from "../assets/Imgs/RUR04229.jpg";
import RUR04328 from "../assets/Imgs/RUR04328.jpg";
import RUR04395 from "../assets/Imgs/RUR04395.jpg";
import PageTransition from "@/components/PageTransition";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  // const categories = [
  //   { id: "all", label: "Tous les Projets" },
  //   { id: "residences", label: "Résidences" },
  //   // { id: "business", label: "Business Center" }, // Commented out as we mostly have residential images for now
  // ];

  const galleryItems = [
    {
      id: 1,
      category: "residences",
      image: chambre,
    },
    {
      id: 2,
      category: "residences",
      image: chambre2,
    },
    {
      id: 3,
      category: "residences",
      image: chDup,
    },
    {
      id: 4,
      category: "residences",
      image: ch3Dup,
    },
    {
      id: 5,
      category: "residences",
      image: ch4Dup,
    },
    {
      id: 6,
      category: "residences",
      image: chApp,
    },
    {
      id: 7,
      category: "residences",
      image: ch2,
    },
    {
      id: 8,
      category: "residences",
      image: ch2App,
    },
    {
      id: 9,
      category: "residences",
      image: escalierDup,
    },
    {
      id: 10,
      category: "residences",
      image: espaceTv2,
    },
    {
      id: 11,
      category: "residences",
      image: kitchenette,
    },
    {
      id: 12,
      category: "residences",
      image: salon1,
    },
    {
      id: 13,
      category: "residences",
      image: salonDup,
    },
    {
      id: 14,
      category: "residences",
      image: salonSamKitch,
    },
    {
      id: 15,
      category: "residences",
      image: samDup,
    },
    {
      id: 16,
      category: "residences",
      image: samSalon,
    },
    {
      id: 17,
      category: "residences",
      image: sam,
    },
    {
      id: 18,
      category: "residences",
      image: studioSalon,
    },
    {
      id: 19,
      category: "residences",
      image: A7409457,
    },
    {
      id: 20,
      category: "residences",
      image: A7409460,
    },
    {
      id: 21,
      category: "residences",
      image: A7409471,
    },
    {
      id: 22,
      category: "residences",
      image: A7409473,
    },
    {
      id: 23,
      category: "residences",
      image: A7409479,
    },
    {
      id: 24,
      category: "residences",
      image: A7409482,
    },
    {
      id: 25,
      category: "residences",
      image: A7409486,
    },
    {
      id: 26,
      category: "residences",
      image: A7409489,
    },
    {
      id: 27,
      category: "residences",
      image: A7409494,
    },
    {
      id: 28,
      category: "residences",
      image: A7409497,
    },
    {
      id: 29,
      category: "residences",
      image: A7409507,
    },
    {
      id: 30,
      category: "residences",
      image: A7409515,
    },
    {
      id: 31,
      category: "residences",
      image: A7409516,
    },
    {
      id: 32,
      category: "residences",
      image: A7409518,
    },
    {
      id: 33,
      category: "residences",
      image: A7409522,
    },
    {
      id: 34,
      category: "residences",
      image: A7409535,
    },
    {
      id: 35,
      category: "residences",
      image: A7409538,
    },
    {
      id: 36,
      category: "residences",
      image: A7409545,
    },
    {
      id: 37,
      category: "residences",
      image: A7409547,
    },
    {
      id: 38,
      category: "residences",
      image: A7409553,
    },
    {
      id: 39,
      category: "residences",
      image: A7409558,
    },
    {
      id: 40,
      category: "residences",
      image: A7409560,
    },
    {
      id: 41,
      category: "residences",
      image: A7409562,
    },
    {
      id: 42,
      category: "residences",
      image: A7409563,
    },
    {
      id: 43,
      category: "residences",
      image: A7409570,
    },
    {
      id: 44,
      category: "residences",
      image: A7409574,
    },
    {
      id: 45,
      category: "residences",
      image: A7409576,
    },
    {
      id: 46,
      category: "residences",
      image: A7409578,
    },
    {
      id: 47,
      category: "residences",
      image: A7409583,
    },
    {
      id: 48,
      category: "residences",
      image: A7409585,
    },
    {
      id: 49,
      category: "residences",
      image: A7409586,
    },
    {
      id: 50,
      category: "residences",
      image: A7409590,
    },
    {
      id: 51,
      category: "residences",
      image: A7409591,
    },
    {
      id: 52,
      category: "residences",
      image: A7409595,
    },
    {
      id: 53,
      category: "residences",
      image: RUR04229,
    },
    {
      id: 54,
      category: "residences",
      image: RUR04328,
    },
    {
      id: 55,
      category: "residences",
      image: RUR04395,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    setTotalImages(filteredItems.length);
    setImagesLoaded(0);
  }, [filteredItems.length]);

  // Gallery is ready immediately with lazy loading
  const isLoading = false;

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id,
    );
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredItems.length
        : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <PageTransition className="min-h-screen py-20">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <FadeInUp className="text-center space-y-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary">
            Nos Projets en Images
            {/* <span className="text-transparent bg-clip-text bg-linear-to-r from-[#328a93] via-[#328a93] to-[#328a93]">
              Pictures
            </span> */}
          </h1>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Explorez notre portefeuille de résidences premium et d'espaces
            commerciaux à travers notre galerie interactive
          </p>
        </FadeInUp>

        {/* Category Filter */}
        {/* <FadeInUp
          delay={0.2}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 text-white hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </FadeInUp> */}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="relative w-12 h-12 mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
            </div>
            <p className="text-gray-400">
              Chargement de la galerie... {imagesLoaded}/{totalImages}
            </p>
          </div>
        )}

        {/* Gallery Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isLoading ? "opacity-50 pointer-events-none" : "opacity-100"}`}
        >
          {filteredItems.map((item, index) => (
            <ScaleIn
              key={item.id}
              delay={index * 0.05}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
              onClick={() => openLightbox(item)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`Gallery item ${item.id}`}
                onLoad={handleImageLoad}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
            </ScaleIn>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No images found in this category
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image container */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/50 border border-white/10">
            <img
              src={selectedImage.image}
              alt={`Gallery item ${selectedImage.id}`}
              loading="eager"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </PageTransition>
  );
}
