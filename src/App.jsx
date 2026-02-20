import React, { useState, useEffect } from "react";
import { Button } from "/src/components/ui/button";
import { Card, CardContent } from "/src/components/ui/card.jsx";
import { Star, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

// ── Hero Carousel Images (from /public/) ─────────────────────────
const heroImages = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"];

// ── Products (from /public/) ─────────────────────────────────────
const mayafiProducts = [
  {
    img: "/5.jpeg",
    name: "Mayafi Everyday Abaya",
    desc: "Light chiffon • Breathable • Timeless",
    price: "₹4,999",
  },
  {
    img: "/6.jpeg",
    name: "Luxury Jallabiya Thobe",
    desc: "Premium blend • Embroidered",
    price: "₹6,799",
  },
  {
    img: "/7.jpeg",
    name: "Nexvora Comfort Shoes",
    desc: "Ergonomic • Modest • All-day wear",
    price: "₹3,299",
  },
  {
    img: "/8.jpeg",
    name: "Mayafi Evening Drape",
    desc: "Flowing silhouette • Subtle luxury",
    price: "₹5,499",
  },
];

// ── Carousel Component ───────────────────────────────────────────
const Carousel = ({ images, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % images.length), interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[480px] md:h-[620px] overflow-hidden rounded-3xl shadow-2xl group">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Hero slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-between px-5 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
          className="p-4 bg-black/40 backdrop-blur rounded-full hover:bg-black/60 transition"
        >
          <ChevronLeft size={28} className="text-white" />
        </button>
        <button
          onClick={() => setCurrent((p) => (p + 1) % images.length)}
          className="p-4 bg-black/40 backdrop-blur rounded-full hover:bg-black/60 transition"
        >
          <ChevronRight size={28} className="text-white" />
        </button>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ── Header with Hamburger ────────────────────────────────────────
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Mayafi", "About", "Reviews", "Contact"];

  return (
    <header className="w-full bg-white/95 backdrop-blur-lg border-b sticky top-0 z-50 shadow-sm border-indigo-400/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Nexvora
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 font-medium hover:text-indigo-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <Button className="bg-indigo-600 hover:bg-indigo-700 px-8">Shop Now</Button>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-6" : "max-h-0 py-0"
        } bg-white border-b shadow-lg`}
      >
        <nav className="flex flex-col items-center space-y-6 text-lg font-medium text-gray-800">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 px-10 py-3"
            onClick={() => setIsOpen(false)}
          >
            Shop Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

// The rest of the components remain the same (Hero, ProductCard, MayafiSection, About, Reviews, Contact, Footer)
// Only the image arrays at the top were changed

// ── Hero ─────────────────────────────────────────────────────────
const Hero = () => (
  <section id="hero" className="relative bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-32 md:pb-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            Premium Mayafi Wear
          </h2>
          <p className="text-xl text-gray-700">
            Timeless modesty meets modern elegance. Discover luxurious comfort crafted for every moment.
          </p>
          <div className="flex flex-wrap gap-5">
            <Button className="text-lg px-10 py-6 shadow-xl">Explore Collection</Button>
            <Button
              variant="outline"
              className="text-lg px-10 py-6 border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50"
            >
              Shop Jallabiya
            </Button>
          </div>
        </div>
        <Carousel images={heroImages} />
      </div>
    </div>
  </section>
);

// ── Product Card ─────────────────────────────────────────────────
const ProductCard = ({ product }) => (
  <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-200 rounded-2xl group">
    <div className="relative">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        New
      </div>
    </div>
    <CardContent className="p-6 space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.desc}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-indigo-700">{product.price}</span>
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>
      </div>
      <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
        Add to Cart
      </Button>
    </CardContent>
  </Card>
);

// ── Mayafi Section ───────────────────────────────────────────────
const MayafiSection = () => (
  <section id="mayafi" className="max-w-7xl mx-auto px-6 py-24 bg-gradient-to-b from-white to-gray-50">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-16">
      Mayafi Collection
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {mayafiProducts.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  </section>
);
// ── About ────────────────────────────────────────────────────────
const About = () => (
  <section id="about" className="bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 py-24">
    <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-800">Crafted with Intention</h2>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Nexvora blends premium fabrics, thoughtful design, and timeless modesty — so every piece feels luxurious, comfortable, and truly yours.
      </p>
    </div>
  </section>
);

// ── Reviews ──────────────────────────────────────────────────────
const Reviews = () => {
  const reviews = [
    { text: "Incredibly soft and elegant — feels like luxury every day.", name: "Aisha M." },
    { text: "Best jallabiya I’ve ever owned. Perfect fit & quality.", name: "Rahim K." },
    { text: "Finally — modest shoes that are stylish and comfortable all day!", name: "Fatima S." },
  ];

  return (
    <section id="reviews" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">Loved by Our Community</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <Card key={i} className="p-8 shadow-xl rounded-2xl border border-gray-100 hover:shadow-2xl transition">
            <CardContent className="space-y-6">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, j) => <Star key={j} size={22} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 text-lg italic">“{r.text}”</p>
              <div className="text-sm font-semibold text-gray-600">{r.name} • Verified Buyer</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

// ── Contact & Footer ─────────────────────────────────────────────
const Contact = () => (
  <section id="contact" className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24">
    <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold">Let’s Connect</h2>
      <p className="text-xl opacity-90">Questions about sizing, fabric, or custom pieces? We're here for you.</p>
      <Button className="hover:cursor-pointer text-indigo-700 hover:bg-gray-100 text-lg px-12 py-7 shadow-xl">
        Email Support →
      </Button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
    <p>© {new Date().getFullYear()} Nexvora. Crafted with care in India. All rights reserved.</p>
  </footer>
);
// ── Main App ─────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <MayafiSection />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}