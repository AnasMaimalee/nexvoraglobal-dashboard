import React from "react";
import { Button } from "/src/components/ui/card/button";
import { Card, CardContent } from "/src/components/ui/card/ui"
import { Star } from "lucide-react";

const Header = () => (
  <header className="w-full bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold text-indigo-600">Nexvora</h1>
      <nav className="space-x-6 text-gray-700 font-medium hidden md:block">
        <a href="#hero">Home</a>
        <a href="#mayafi">Mayafi</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <Button className="rounded-2xl">Shop</Button>
    </div>
  </header>
);

const Hero = () => (
  <section id="hero" className="bg-gradient-to-r from-indigo-50 to-purple-50">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center p-8">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover Premium Mayafi by Nexvora
        </h2>
        <p className="text-gray-600 text-lg">
          Comfort, durability and modern style — crafted for everyday life.
        </p>
        <Button className="rounded-2xl text-lg px-8 py-6">Explore Collection</Button>
      </div>
      <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" alt="hero" className="rounded-2xl shadow-xl w-full h-[420px] object-cover"/>
    </div>
  </section>
);

const MayafiSection = () => (
  <section id="mayafi" className="max-w-7xl mx-auto p-10 space-y-10">
    <h2 className="text-3xl font-bold text-center">Mayafi Collection</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
      ].map((img,i)=> (
        <Card key={i} className="rounded-2xl overflow-hidden hover:shadow-xl transition">
          <img src={img} className="h-64 w-full object-cover"/>
          <CardContent className="p-5 space-y-3">
            <h3 className="font-semibold text-xl">Mayafi Model {i+1}</h3>
            <p className="text-gray-600">Premium breathable material designed for daily wear.</p>
            <Button className="w-full">View</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-gray-50 py-14">
    <div className="max-w-5xl mx-auto text-center space-y-6 px-6">
      <h2 className="text-3xl font-bold">About Nexvora</h2>
      <p className="text-gray-600 text-lg">
        Nexvora is focused on delivering stylish and comfortable Mayafi products built with quality materials. We combine modern design with durability so your everyday wear feels premium.
      </p>
    </div>
  </section>
);

const Reviews = () => (
  <section className="max-w-7xl mx-auto p-10 space-y-10">
    <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {["Very comfortable","Quality is amazing","Will buy again"].map((txt,i)=>(
        <Card key={i} className="rounded-2xl p-6">
          <CardContent className="space-y-4">
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_,j)=>(<Star key={j} size={18}/>))}
            </div>
            <p className="text-gray-700">{txt}</p>
            <span className="text-sm text-gray-500">Verified Buyer</span>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="bg-indigo-600 text-white py-14">
    <div className="max-w-3xl mx-auto text-center space-y-6 px-6">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p>Questions about Mayafi? Our support team is ready to help you.</p>
      <Button variant="secondary" className="rounded-2xl text-lg px-8 py-6">Email Support</Button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-gray-400 text-center py-6">
    <p>© {new Date().getFullYear()} Nexvora. All rights reserved.</p>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans">
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
