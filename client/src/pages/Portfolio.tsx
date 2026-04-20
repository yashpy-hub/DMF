import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Portfolio items using all available local photos
  const portfolioItems = [
    // Furniture Category
    { id: 1, category: "furniture", title: "Premium Sofa Set", image: "/photos/sofa set.jpeg" },
    { id: 2, category: "furniture", title: "Modern Leather Sofa", image: "/photos/sofa2.jpeg" },
    { id: 3, category: "furniture", title: "Luxury Grey Sofa", image: "/photos/sofa3.jpeg" },
    { id: 4, category: "furniture", title: "Contemporary Seating", image: "/photos/sofa set2].jpeg" },
    { id: 5, category: "furniture", title: "Elegant Dining Set", image: "/photos/daining.jpeg" },
    { id: 6, category: "furniture", title: "Classic Dining Table", image: "/photos/dining.jpeg" },
    { id: 7, category: "furniture", title: "Study Room Setup", image: "/photos/study room.jpeg" },
    { id: 8, category: "furniture", title: "Designer Bed Frame", image: "/photos/room.jpeg" },
    { id: 9, category: "furniture", title: "Master Bedroom Set", image: "/photos/room2.jpeg" },
    { id: 10, category: "furniture", title: "Luxury Suite Furniture", image: "/photos/room4.jpeg" },
    { id: 11, category: "furniture", title: "Sofa Collection A", image: "/photos/sofa-set.jpeg" },
    { id: 12, category: "furniture", title: "Sofa Collection B", image: "/photos/sofa-set2.jpeg" },

    // Interior Design Category
    { id: 21, category: "interior", title: "Grand Hall Design", image: "/photos/hall.jpeg" },
    { id: 22, category: "interior", title: "Spacious Living Area", image: "/photos/hall1.jpeg" },
    { id: 23, category: "interior", title: "Luxury Lounge", image: "/photos/hall3.jpeg" },
    { id: 24, category: "interior", title: "Modern Hallway", image: "/photos/hall4.jpeg" },
    { id: 25, category: "interior", title: "Premium Hall Interior", image: "/photos/hall7.jpeg" },
    { id: 26, category: "interior", title: "Contemporary Hall", image: "/photos/hall11.jpeg" },
    { id: 27, category: "interior", title: "Grand Entrance", image: "/photos/hall12.jpeg" },
    { id: 28, category: "interior", title: "Elegant Hall View", image: "/photos/hall13.jpeg" },
    { id: 29, category: "interior", title: "Unique Hall Concept", image: "/photos/jall10.jpeg" },
    { id: 30, category: "interior", title: "Modular Kitchen Elite", image: "/photos/Kitchen .jpeg" },
    { id: 31, category: "interior", title: "Modern Kitchen Design", image: "/photos/kitchen.jpeg" },
    { id: 32, category: "interior", title: "Premium Kitchen Space", image: "/photos/kitchen1.jpeg" },
    { id: 33, category: "interior", title: "Designer Kitchen", image: "/photos/Kitchen2.jpeg" },
    { id: 34, category: "interior", title: "Kitchen Workspace", image: "/photos/kitchen3.jpeg" },
    { id: 35, category: "interior", title: "Minimalist Kitchen", image: "/photos/Kitchen5.jpeg" },
    { id: 36, category: "interior", title: "Luxury Kitchen Setup", image: "/photos/kitchen6.jpeg" },
    { id: 37, category: "interior", title: "Kitchen Island View", image: "/photos/kitchen8.jpeg" },
    { id: 38, category: "interior", title: "Chef's Kitchen", image: "/photos/kithchen10.jpeg" },
    { id: 39, category: "interior", title: "Compact Kitchen", image: "/photos/ki12.jpeg" },
    { id: 40, category: "interior", title: "Designer Ceiling", image: "/photos/celling.jpeg" },
    { id: 41, category: "interior", title: "Bedroom Interior 1", image: "/photos/bed room 1.jpeg" },
    { id: 42, category: "interior", title: "Bedroom Interior 2", image: "/photos/bedroom11.jpeg" },
    { id: 43, category: "interior", title: "Bedroom Interior 3", image: "/photos/bedroom3.jpeg" },
    { id: 44, category: "interior", title: "Front Look Design", image: "/photos/frontlook.jpeg" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            Our Complete Portfolio
          </h1>
          <p className="text-center text-muted-foreground text-lg animate-fade-in-up stagger-1">
            Browse through our full collection of {portfolioItems.length} professional projects
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {[
              { value: "all", label: "All Projects" },
              { value: "furniture", label: "Furniture" },
              { value: "interior", label: "Interior Design" },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedCategory(filter.value)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === filter.value
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: (idx % 8) * 0.05 }}
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl shadow-md hover-lift"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                    <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 md:mb-2">
                      {item.category === "furniture" ? "Custom Furniture" : "Interior Design"}
                    </span>
                    <h3 className="text-white font-bold text-lg md:text-xl leading-tight">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
            Like What You See?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Let's discuss how we can bring this level of craftsmanship to your home.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-accent-foreground text-accent rounded-lg font-bold text-lg hover:shadow-2xl transition-all animate-fade-in-up stagger-2">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">DM Interiors & Furnitures</h2>
          <p className="opacity-75 mb-6">Premium Interior Design & Furniture Solutions in Udgir & Pune</p>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-sm opacity-50">&copy; 2026 DM Interiors and Furnitures. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
