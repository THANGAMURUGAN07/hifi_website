import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import aluminiumImage from '../assets/aluminiumpartitions_hero.avif';
import falseceilingImage from '../assets/falseceiling_hero.webp';
import interiorImage from '../assets/interior_hero.jpg';
import kitchenImage from '../assets/kitchen_hero.jpg';
import logoImage from '../assets/logo.jpg';
import poojaImage from '../assets/poojaroom_hero.jpg';
import tvImage from '../assets/tv_hero.jpg';
import walldecorImage from '../assets/walldecor_hero.jpg';
import wardrobeImage from '../assets/wardrope_hero.jpg';
import woodImage from '../assets/wood_hero.jpg';
import workspaceImage from '../assets/workspace_hero.jpg';
import pooja_categories from '../assets/poojaroom_categories.jpg';
import tv_categories from '../assets/tv_categories.jpg';
import aluminium_categories from '../assets/aluminium_categories.jpg';
import work_categories from '../assets/work_categories.jpg';
import interior1 from '../assets/interior1.jpg';
import interior2 from '../assets/interior2.jpg';
import interior3 from '../assets/interior3.jpg';
import interior4 from '../assets/interior4.jpg';
import interior5 from '../assets/interior5.jpg';
import interior6 from '../assets/interior6.jpg';
import interior7 from '../assets/interior7.jpg';
import interior8 from '../assets/interior8.jpg';
import kitchen1 from '../assets/kitchen1.jpg';
import kitchen2 from '../assets/kitchen2.jpg';
import kitchen3 from '../assets/kitchen3.jpg';
import kitchen4 from '../assets/kitchen4.jpg';
import kitchen5 from '../assets/kitchen5.jpg';
import kitchen6 from '../assets/kitchen6.jpg';
import kitchen7 from '../assets/kitchen7.jpg';
import kitchen8 from '../assets/kitchen8.jpg';
import pooja1 from '../assets/pooja1.jpg';
import pooja2 from '../assets/pooja2.jpg';
import pooja3 from '../assets/pooja3.jpg';
import pooja4 from '../assets/pooja4.jpg';
import pooja5 from '../assets/pooja5.avif';
import pooja6 from '../assets/pooja6.jpg';
import pooja7 from '../assets/pooja7.jpg';
import pooja8 from '../assets/pooja8.webp';
import tv1 from '../assets/tv1.jpg';
import tv2 from '../assets/tv2.jpg';
import tv3 from '../assets/tv3.jpg';
import tv4 from '../assets/tv4.jpg';
import tv5 from '../assets/tv5.jpg';
import tv6 from '../assets/tv6.jpg';
import tv7 from '../assets/tv7.jpg';
import tv8 from '../assets/tv8.jpg';
import wardrope1 from '../assets/wardrope1.jpg';
import wardrope2 from '../assets/wardrope2.jpg';
import wardrope3 from '../assets/wardrope3.jpg';
import wardrope4 from '../assets/wardrope4.jpg';
import wardrope5 from '../assets/wardrope5.jpg';
import wardrope6 from '../assets/wardrope6.avif';
import wardrope7 from '../assets/wardrope7.avif';
import wardrope8 from '../assets/wardrope8.jpg';
import ceiling1 from '../assets/ceiling1.webp';
import ceiling2 from '../assets/ceiling2.jpg';
import ceiling3 from '../assets/ceiling3.webp';
import ceiling4 from '../assets/ceiling4.jpg';
import ceiling5 from '../assets/ceiling5.jpg';
import ceiling6 from '../assets/ceiling6.webp';
import ceiling7 from '../assets/ceiling7.jpg';
import ceiling8 from '../assets/ceiling8.jpg';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';
import work4 from '../assets/work4.jpg';
import work5 from '../assets/work5.jpg';
import work6 from '../assets/work6.jpg';
import work7 from '../assets/work7.jpg';
import work8 from '../assets/work8.jpg';
import floor1 from '../assets/floor1.jpg';
import floor2 from '../assets/floor2.jpg';
import floor3 from '../assets/floor3.jpg';
import floor4 from '../assets/floor4.jpg';
import floor5 from '../assets/floor5.jpg';
import floor6 from '../assets/floor6.jpg';
import floor7 from '../assets/floor7.webp';
import floor8 from '../assets/floor8.avif';
import alu1 from '../assets/alu1.avif';
import alu2 from '../assets/alu2.jpg';
import alu3 from '../assets/alu3.jpg';
import alu4 from '../assets/alu4.jpg';
import alu5 from '../assets/alu5.jpg';
import alu6 from '../assets/alu6.jpg';
import alu7 from '../assets/alu7.jpg';
import alu8 from '../assets/alu8.jpg';
import wall1 from '../assets/wall1.jpg';
import wall2 from '../assets/wall2.jpg';
import wall3 from '../assets/wall3.jpg';
import wall4 from '../assets/wall4.jpg';
import wall5 from '../assets/wall5.jpg';
import wall6 from '../assets/wall6.jpg';
import wall7 from '../assets/wall7.jpg';
import wall8 from '../assets/wall8.jpg';

const heroSlides = [
  {
    title: "Modular Kitchen",
    description: "Design your dream kitchen with innovative storage and modern aesthetics.",
    image: kitchenImage,
  },
  {
    title: "False Ceiling",
    description: "Elegant and functional ceiling designs for every room.",
    image: falseceilingImage,
  },
  {
    title: "TV Units",
    description: "Stylish and practical TV units tailored to your living space.",
    image: tvImage,
  },
  {
    title: "Wardrobes",
    description: "Custom-designed wardrobes that maximize space and style.",
    image: wardrobeImage,
  },
  {
    title: "Interior Design",
    description: "Comprehensive interior solutions to transform your home.",
    image: interiorImage,
  },
  {
    title: "Pooja Room",
    description: "Sacred and serene spaces for spiritual connection.",
    image: poojaImage,
  },
  {
    title: "Wood Work",
    description: "Premium woodwork solutions for all your needs.",
    image: woodImage,
  },
  {
    title: "Wall Decor",
    description: "Artistic wall decor that adds charm and personality.",
    image: walldecorImage,
  },
  {
    title: "Workspace Design",
    description: "Smart workspace interiors that boost productivity.",
    image: workspaceImage,
  },
  {
    title: "Aluminium Partitions",
    description: "Durable and sleek aluminium partition solutions.",
    image: aluminiumImage,
  },
];

const categories = {
  residential: [
    {
      id: 'interior',
      name: 'Interior Design (Living & Bedroom)',
      image: 'https://images.unsplash.com/photo-1708113388262-17fdf0e21205?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'kitchen',
      name: 'Modular Kitchen',
      image:'https://media.istockphoto.com/id/1001069506/photo/yellow-modern-kitchen-interior-design-illustration.jpg?s=612x612&w=0&k=20&c=Jc_Uh-Ld2_mvvcsJQRyj-EY2BKzzGwIvek40dOAhnY8=',
    },
    {
      id: 'pooja',
      name: 'Pooja Unit',
      image: pooja_categories,
    },
    {
      id: 'tv',
      name: 'TV Unit',
      image: tv_categories,
    },
    {
      id: 'wardrobes',
      name: 'Wardrobes',
      image: 'https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/cashmere_wardrobe/WWRB4S4D2MH2CASHMEREPWF/1.jpg?tr=w-3840',
    },
    {
      id: 'ceiling',
      name: 'False Ceiling',
      image: 'https://i.pinimg.com/1200x/15/2e/25/152e25a42977e9d110ec0d686c5fab7f.jpg',
    },
  ],
  commercial: [
    {
      id: 'workspace',
      name: 'Work Space',
      image: work_categories,
    }, 
    {
      id: 'flooring',
      name: 'Wood Flooring',
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'partitions',
      name: 'Aluminium Partitions',
      image: aluminium_categories,
    },
    {
      id: 'wallpaper',
      name: 'Wallpaper & Decor',
      image: 'https://plus.unsplash.com/premium_photo-1705262413411-5e623427f90a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdhbGwlMjBkZXNpZ258ZW58MHwwfDB8fHww',
    },
  ],
};

const galleryItems = [
  { id: 1, category: 'interior', image: interior1 },
  { id: 2, category: 'interior', image: interior2 },
  { id: 3, category: 'interior', image: interior3 },
  { id: 4, category: 'interior', image: interior4 },
  { id: 5, category: 'interior', image: interior5 },
  { id: 6, category: 'interior', image: interior6 },
  { id: 7, category: 'interior', image: interior7 },
  { id: 8, category: 'interior', image: interior8 },
  { id: 9, category: 'kitchen', image: kitchen1 },
  { id: 10, category: 'kitchen', image: kitchen2 },
  { id: 11, category: 'kitchen', image: kitchen3 },
  { id: 12, category: 'kitchen', image: kitchen4 },
  { id: 13, category: 'kitchen', image: kitchen5 },
  { id: 14, category: 'kitchen', image: kitchen6 },
  { id: 15, category: 'kitchen', image: kitchen7 },
  { id: 16, category: 'kitchen', image: kitchen8 },
  { id: 17, category: 'pooja', image: pooja1 },
  { id: 18, category: 'pooja', image: pooja2 },
  { id: 19, category: 'pooja', image: pooja3 },
  { id: 20, category: 'pooja', image: pooja4 },
  { id: 21, category: 'pooja', image: pooja5 },
  { id: 22, category: 'pooja', image: pooja6 },
  { id: 23, category: 'pooja', image: pooja7 },
  { id: 24, category: 'pooja', image: pooja8 },
  { id: 25, category: 'tv', image: tv1 },
  { id: 26, category: 'tv', image: tv2 },
  { id: 27, category: 'tv', image: tv3 },
  { id: 28, category: 'tv', image: tv4 },
  { id: 29, category: 'tv', image: tv5 },
  { id: 30, category: 'tv', image: tv6 },
  { id: 31, category: 'tv', image: tv7 },
  { id: 32, category: 'tv', image: tv8 },
  { id: 33, category: 'wardrobes', image: wardrope1 },
  { id: 34, category: 'wardrobes', image: wardrope2 },
  { id: 35, category: 'wardrobes', image: wardrope3 },
  { id: 36, category: 'wardrobes', image: wardrope4 },
  { id: 37, category: 'wardrobes', image: wardrope5 },
  { id: 38, category: 'wardrobes', image: wardrope6 },
  { id: 39, category: 'wardrobes', image: wardrope7 },
  { id: 40, category: 'wardrobes', image: wardrope8 },
  { id: 41, category: 'ceiling', image: ceiling1 },
  { id: 42, category: 'ceiling', image: ceiling2 },
  { id: 43, category: 'ceiling', image: ceiling3 },
  { id: 44, category: 'ceiling', image: ceiling4 },
  { id: 45, category: 'ceiling', image: ceiling5 },
  { id: 46, category: 'ceiling', image: ceiling6 },
  { id: 47, category: 'ceiling', image: ceiling7 },
  { id: 48, category: 'ceiling', image: ceiling8 },
  { id: 49, category: 'workspace', image: work1 },
  { id: 50, category: 'workspace', image: work2 },
  { id: 51, category: 'workspace', image: work3 },
  { id: 52, category: 'workspace', image: work4 },
  { id: 53, category: 'workspace', image: work5 },
  { id: 54, category: 'workspace', image: work6 },
  { id: 55, category: 'workspace', image: work7 },
  { id: 56, category: 'workspace', image: work8 },
  { id: 57, category: 'flooring', image: floor1 },
  { id: 58, category: 'flooring', image: floor2 },
  { id: 59, category: 'flooring', image: floor3 },
  { id: 60, category: 'flooring', image: floor4 },
  { id: 61, category: 'flooring', image: floor5 },
  { id: 62, category: 'flooring', image: floor6 },
  { id: 63, category: 'flooring', image: floor7 },
  { id: 64, category: 'flooring', image: floor8 },
  { id: 65, category: 'partitions', image: alu1 },
  { id: 66, category: 'partitions', image: alu2 },
  { id: 67, category: 'partitions', image: alu3 },
  { id: 68, category: 'partitions', image: alu4 },
  { id: 69, category: 'partitions', image: alu5 },
  { id: 70, category: 'partitions', image: alu6 },
  { id: 71, category: 'partitions', image: alu7 },
  { id: 72, category: 'partitions', image: alu8 },
  { id: 73, category: 'wallpaper', image: wall1 },
  { id: 74, category: 'wallpaper', image: wall2 },
  { id: 75, category: 'wallpaper', image: wall3 },
  { id: 76, category: 'wallpaper', image: wall4 },
  { id: 77, category: 'wallpaper', image: wall5 },
  { id: 78, category: 'wallpaper', image: wall6 },
  { id: 79, category: 'wallpaper', image: wall7 },
  { id: 80, category: 'wallpaper', image: wall8 },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(16);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage(prev => (prev !== null ? (prev + 1) % filteredItems.length : null));
  const prevImage = () => setSelectedImage(prev => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[75vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedCategory(slide.category);
              galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'} cursor-pointer`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-fill object-center" />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h1>
              <p className="text-lg md:text-xl max-w-2xl">{slide.caption}</p>
            </div>
          </div>
        ))}
        <button onClick={() => setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20">
          <ChevronLeft size={32} />
        </button>
        <button onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20">
          <ChevronRight size={32} />
        </button>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Category Section */}
      <section className="py-12 bg-surface border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Browse by Category</h2>
          <div className="flex flex-col gap-16">
            {Object.entries(categories).map(([sectionTitle, cats]) => (
              <div key={sectionTitle}>
                <h3 className="text-2xl font-semibold mb-6 capitalize text-center">{sectionTitle} Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {cats.map(cat => (
                    <div
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group"
                    >
                      <div className="relative h-64">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center px-4">
                          <span className="text-xl font-semibold">{cat.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={galleryRef} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img src={item.image} alt="Gallery" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
          {visibleCount < filteredItems.length && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleCount(prev => prev + 16)}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && filteredItems[selectedImage] && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-full p-4">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <X className="w-8 h-8" />
            </button>
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10">
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="text-center">
              <img
                src={filteredItems[selectedImage].image}
                alt="Preview"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
