import React, { useState, useEffect } from "react";
import { Button } from "/src/components/ui/button";
import { Card, CardContent } from "/src/components/ui/card.jsx";
import { Star, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { MessageCircle, Instagram, Facebook, PhoneCall, Mail } from "lucide-react";

// ── Hero Carousel Images (from /public/) ─────────────────────────
const heroImages = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg", "/5.jpeg", "/6.jpeg", "7.jpeg", "/8.jpeg"];

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
    {
    img: "/9.jpeg",
    name: "Mayafi Everyday Abaya",
    desc: "Light chiffon • Breathable • Timeless",
    price: "₹4,999",
  },
  {
    img: "/10.jpeg",
    name: "Luxury Jallabiya Thobe",
    desc: "Premium blend • Embroidered",
    price: "₹6,799",
  },
  {
    img: "/11.jpeg",
    name: "Nexvora Comfort Shoes",
    desc: "Ergonomic • Modest • All-day wear",
    price: "₹3,299",
  },
  {
    img: "/12.jpeg",
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
    <header className="w-full bg-white/95 backdrop-blur-lg border-b sticky top-0 z-50 shadow-sm border-indigo-400">
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

const Contact = () => {
  const contactInfo = {
    whatsapp: "https://wa.me/2348123442014?text=Hello%20Nexvora%20team%21%20I%20have%20a%20question...",
    instagram: "https://instagram.com/nexvora_global",
    facebook: "https://facebook.com/nexvora",
    phone: "tel:+2348123442014",
    email: "mailto:support@nexvora.com?subject=Inquiry%20from%20Nexvora%20website&body=Hi%20team,%0A%0AI%20would%20like%20to%20know%20more%20about...%0A%0AThanks!",
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Let’s Connect</h2>

        <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
          Got questions about sizing, fabrics, custom orders, shipping, or anything else? Reach us anytime — we're here for you!
        </p>

        {/* Contact Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 pt-8 max-w-5xl mx-auto">
          {/* WhatsApp */}
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="p-5 bg-white/15 backdrop-blur-sm rounded-2xl transition-all group-hover:bg-green-500/30 group-hover:scale-110">
              <MessageCircle size={40} className="text-white group-hover:text-green-300 transition-colors" />
            </div>
            <span className="text-sm font-medium opacity-90 group-hover:opacity-100">WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="p-5 bg-white/15 backdrop-blur-sm rounded-2xl transition-all group-hover:bg-pink-500/30 group-hover:scale-110">
              <Instagram size={40} className="text-white group-hover:text-pink-300 transition-colors" />
            </div>
            <span className="text-sm font-medium opacity-90 group-hover:opacity-100">Instagram</span>
          </a>

          {/* Facebook */}
          <a
            href={contactInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="p-5 bg-white/15 backdrop-blur-sm rounded-2xl transition-all group-hover:bg-blue-500/30 group-hover:scale-110">
              <Facebook size={40} className="text-white group-hover:text-blue-300 transition-colors" />
            </div>
            <span className="text-sm font-medium opacity-90 group-hover:opacity-100">Facebook</span>
          </a>

          {/* Phone */}
          <a
            href={contactInfo.phone}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="p-5 bg-white/15 backdrop-blur-sm rounded-2xl transition-all group-hover:bg-emerald-500/30 group-hover:scale-110">
              <PhoneCall size={40} className="text-white group-hover:text-emerald-300 transition-colors" />
            </div>
            <span className="text-sm font-medium opacity-90 group-hover:opacity-100">Call Us</span>
          </a>

          {/* Email */}
          <a
            href={contactInfo.email}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="p-5 bg-white/15 backdrop-blur-sm rounded-2xl transition-all group-hover:bg-amber-500/30 group-hover:scale-110">
              <Mail size={40} className="text-white group-hover:text-amber-300 transition-colors" />
            </div>
            <span className="text-sm font-medium opacity-90 group-hover:opacity-100">Email</span>
          </a>
        </div>
        
      </div>
    </section>
  );
};
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