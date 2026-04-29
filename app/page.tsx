'use client';

import React, { useEffect, useRef } from 'react';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const ArtisanCatering: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with data-scroll attribute
    const scrollElements = document.querySelectorAll('[data-scroll]');
    scrollElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="bg-white text-gray-800 flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
          <img 
            src="/logo.png" 
            alt="Artisan Catering" 
            className="h-16 w-auto object-contain" 
          />
          <nav className="flex items-center gap-4">
            <a href="#about" className="text-xs uppercase tracking-widest text-black hover:text-gray-500 transition duration-300">
              About Us
            </a>
            <a href="#gallery" className="text-xs uppercase tracking-widest text-black hover:text-gray-500 transition duration-300">
              Gallery
            </a>
            <a href="#contact" className="text-xs uppercase tracking-widest text-black hover:text-gray-500 transition duration-300">
              Enquire Now
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative h-[85vh] w-[95%] max-w-[1600px] mx-auto mt-4 overflow-hidden rounded-[50px] shadow-xl">
          <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            effect="fade"
            autoplay={{ delay: 5000 }}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="absolute inset-0 w-full h-full"
          >
            <SwiperSlide>
              <img src="/welcome.png" className="w-full h-full object-cover opacity-90" alt="Welcome 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/welcome2.png" className="w-full h-full object-cover opacity-90" alt="Welcome 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/welcome3.png" className="w-full h-full object-cover opacity-90" alt="Welcome 3" />
            </SwiperSlide>
          </Swiper>

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 z-10 pointer-events-none"></div>

          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-5xl md:text-8xl font-serif text-white mb-4 tracking-tight">
                Artisan Catering
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 italic font-light tracking-wide">
                Devon's finest just got a whole lot finer.
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/40 hover:bg-white/60 text-white hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
            aria-label="Previous slide"
          >
            ❮
          </button>
          <button
            ref={nextRef}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/40 hover:bg-white/60 text-white hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
            aria-label="Next slide"
          >
            ❯
          </button>
        </section>

        {/* About Section */}
        <section id="about" className="flex flex-col lg:flex-row items-center justify-center gap-16 bg-white py-24 px-6 md:px-12">
          <div className="w-full lg:w-1/3" data-scroll="slide-left">
            <div className="relative">
              <img 
                src="/chef1.jpg" 
                alt="Chef Jordan Hatfield"
                className="w-full h-[550px] object-cover shadow-xl rounded-[40px] border border-gray-100" 
              />
              <div className="absolute inset-4 border border-white/20 rounded-[30px] pointer-events-none"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2" data-scroll="slide-right">
            <header className="mb-8">
              <span className="text-xs uppercase tracking-[0.4em] text-gray-400 font-bold mb-3 block">The Maker</span>
              <h3 className="text-4xl font-serif text-gray-900 leading-tight">Jordan Hatfield</h3>
              <p className="text-gray-500 italic font-serif">Founder & Executive Chef</p>
            </header>

            <div className="space-y-6 text-gray-700 font-light leading-relaxed text-lg">
              <p>
                With over fifteen years in kitchens across the South West, Jordan has proven that with his dedication and skill, he can create exceptional dishes that bring joy to those who taste them.
              </p>
              <p>
                While he is a hands-on creator who spends his mornings working out why the front of house are... less than ideal, 
                he ensures every plate meets his rigorous standards. The kitchen is his sanctuary of precision.
              </p>
              <blockquote className="border-l-2 border-black pl-6 my-8 italic text-lg text-gray-900">
                "For me, it’s simple if you care about the craft!"
              </blockquote>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-scroll="fade-in">
              <h2 className="text-3xl font-serif text-gray-900 mb-4 tracking-widest uppercase">The Gallery</h2>
              <div className="w-16 h-px bg-black mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="md:col-span-2 md:row-span-2" data-scroll="scale-in">
                <img src="/food3.png" alt="Signature Dish" className="w-full h-full object-cover rounded-[50px] shadow-lg" />
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-6">
                <img src="/food1.png" className="w-full h-64 object-cover rounded-[30px] shadow-md" alt="Detail" data-scroll="fade-in" />
                <img src="/food2.png" className="w-full h-64 object-cover rounded-[30px] shadow-md" alt="Detail" data-scroll="fade-in" />
                <img src="/food4.png" className="w-full h-64 object-cover rounded-[30px] shadow-md" alt="Detail" data-scroll="fade-in" />
                <img src="/food5.png" className="w-full h-64 object-cover rounded-[30px] shadow-md" alt="Detail" data-scroll="fade-in" />
              </div>
            </div>
            <div className="text-center mt-16" data-scroll="fade-in">
              <a 
                href="https://instagram.com/artisancateringdevon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 border border-black text-[10px] uppercase tracking-[0.3em] text-black hover:bg-black hover:text-white transition duration-500 shadow-md"
              >
                Explore Our Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16" data-scroll="fade-in">
              <h2 className="text-4xl font-serif text-gray-900 mb-4 tracking-widest uppercase">Start the Conversation</h2>
              <p className="text-gray-500 italic font-light">Tell us about your event, and Jordan will be in touch.</p>
              <div className="w-16 h-px bg-black mx-auto mt-6"></div>
            </div>

            <form action="https://formspree.io/f/mojnwyda" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-8" data-scroll="fade-in">
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 ml-2">Client Name</label>
                <input type="text" name="name" required className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:outline-none focus:border-black transition" />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 ml-2">Email Address</label>
                <input type="email" name="email" required className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:outline-none focus:border-black transition" />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 ml-2">Phone Number</label>
                <input type="tel" name="phone" required className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:outline-none focus:border-black transition" />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 ml-2">Date of Event</label>
                <input type="date" name="event_date" required className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:outline-none focus:border-black transition text-gray-500" />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 ml-2">Number of Guests</label>
                <input type="number" name="guests" placeholder="e.g. 50" required className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:outline-none focus:border-black transition" />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 ml-2">Location of Venue</label>
                <input type="text" name="location" placeholder="Town or Venue Name" required className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-[20px] focus:outline-none focus:border-black transition" />
              </div>

              <div className="md:col-span-2 flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 ml-2">Additional Details</label>
                <textarea name="message" rows={4} placeholder="Tell us about the occasion..." className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-[30px] focus:outline-none focus:border-black transition resize-none"></textarea>
              </div>

              <div className="md:col-span-2 text-center mt-6">
                <button type="submit" className="px-12 py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-gray-800 transition duration-500 shadow-lg">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10" data-scroll="fade-in">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-serif mb-4">Artisan Catering</h3>
          <p className="text-gray-400 font-serif text-sm">
            &copy; 2020-present Artisan Catering. All rights reserved.
            <br />
            Developed by Joshua Hatfield.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArtisanCatering;