import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Building2, Home } from "lucide-react";

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

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residences", label: "Residences" },
    // { id: "business", label: "Business Center" }, // Commented out as we mostly have residential images for now
  ];

  const galleryItems = [
    {
      id: 1,
      category: "residences",
      title: "Master Bedroom",
      description: "Elegant and spacious master bedroom",
      image: chambre,
    },
    {
      id: 2,
      category: "residences",
      title: "Modern Bedroom",
      description: "Contemporary bedroom design",
      image: chambre2,
    },
    {
      id: 3,
      category: "residences",
      title: "Duplex Bedroom 1",
      description: "Upper floor bedroom in duplex",
      image: chDup,
    },
    {
      id: 4,
      category: "residences",
      title: "Duplex Bedroom 2",
      description: "Guest bedroom in duplex",
      image: ch3Dup,
    },
    {
      id: 5,
      category: "residences",
      title: "Duplex Bedroom 3",
      description: "Comfortable living space",
      image: ch4Dup,
    },
    {
      id: 6,
      category: "residences",
      title: "Apartment Bedroom",
      description: "Cozy apartment bedroom",
      image: chApp,
    },
    {
      id: 7,
      category: "residences",
      title: "Secondary Bedroom",
      description: "Well-lit secondary bedroom",
      image: ch2,
    },
    {
      id: 8,
      category: "residences",
      title: "Apartment Bedroom 2",
      description: "Modern apartment sleeping area",
      image: ch2App,
    },
    {
      id: 9,
      category: "residences",
      title: "Duplex Stairs",
      description: "Elegant staircase design",
      image: escalierDup,
    },
    {
      id: 10,
      category: "residences",
      title: "TV Lounge",
      description: "Relaxing entertainment area",
      image: espaceTv2,
    },
    {
      id: 11,
      category: "residences",
      title: "Kitchenette",
      description: "Functional and stylish kitchenette",
      image: kitchenette,
    },
    {
      id: 12,
      category: "residences",
      title: "Living Room",
      description: "Spacious main living area",
      image: salon1,
    },
    {
      id: 13,
      category: "residences",
      title: "Duplex Salon",
      description: "Grand salon in duplex",
      image: salonDup,
    },
    {
      id: 14,
      category: "residences",
      title: "Open Plan Living",
      description: "Integrated salon, dining, and kitchen",
      image: salonSamKitch,
    },
    {
      id: 15,
      category: "residences",
      title: "Duplex Dining",
      description: "Dining area in duplex",
      image: samDup,
    },
    {
      id: 16,
      category: "residences",
      title: "Dining & Salon",
      description: "Seamless flow between dining and living",
      image: samSalon,
    },
    {
      id: 17,
      category: "residences",
      title: "Dining Room",
      description: "Formal dining space",
      image: sam,
    },
    {
      id: 18,
      category: "residences",
      title: "Studio Salon",
      description: "Efficient studio living area",
      image: studioSalon,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredItems.length
        : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-black">
            Our Projects in{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d9ac6f] via-[#d9ac6f] to-[#d9ac6f]">
              Pictures
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our portfolio of premium residences and business spaces
            through our interactive gallery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-card border border-border hover:border-primary/50 text-white hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
              onClick={() => openLightbox(item)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-xs font-medium text-white">
                {categories.find((c) => c.id === item.category)?.label}
              </div>
            </div>
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
          <div className="max-w-5xl w-full">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/50 border border-white/10">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>

            {/* Image info */}
            <div className="mt-6 text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
