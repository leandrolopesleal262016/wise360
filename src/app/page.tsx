'use client'
import React from 'react';
import { Card } from "../components/ui/card";
import { Camera, Video, Radio, Menu, Home, Image, Phone, Mail, MapPin } from 'lucide-react';
import ThreeSixty from 'react-360-view';

const Website = () => {
  const tours = [
    { url: 'https://guias.cc/pinhapinhao', title: 'Nome do Tour 1', img: '/images/tour1.jpg' },
    { url: 'https://guias.cc/mobitec-curitiba', title: 'Nome do Tour 2', img: '/images/tour2.jpg' },
    { url: 'https://guias.cc/ironberg', title: 'Nome do Tour 3', img: '/images/tour3.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="bg-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">VirtualTours</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#home" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700">
                  <Home size={18} /> Início
                </a>
                <a href="#tours" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700">
                  <Radio size={18} /> Tours
                </a>
                <a href="#services" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700">
                  <Image size={18} /> Serviços
                </a>
                <a href="#contact" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700">
                  <Phone size={18} /> Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header id="home" className="bg-gradient-to-r from-orange-800 to-orange-300 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-4">Tours Virtuais & Serviços de Drone</h1>
          <p className="text-2xl text-gray-800">Soluções profissionais para sua empresa</p>
        </div>
      </header>

      <section id="services" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-row items-start gap-24">
            <div className="flex-1">
              <img 
                src="/images/drone-photo.jpg"
                alt="Drone Photography"
                className="rounded-lg shadow-lg w-[400px] h-[300px] object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-8 justify-center items-center h-full">
              <div className="w-full">
                <div className="flex items-center gap-4 mb-4">
                  <Camera size={32} className="text-blue-400" />
                  <h2 className="text-3xl font-bold">Captação de Imagens</h2>
                </div>
                <p className="text-gray-300 text-xl leading-relaxed">
                  Oferecemos serviços especializados de fotografia com drone para diversos 
                  setores, incluindo imobiliárias, eventos, escolas e shows. Nossa equipe 
                  utiliza equipamentos de última geração para capturar imagens únicas e 
                  impressionantes da sua propriedade ou evento.
                </p>
              </div>
              <div className="w-full">
                <div className="flex items-center gap-4 mb-4">
                  <Camera size={32} className="text-blue-400" />
                  <h2 className="text-3xl font-bold">Captação de Imagens</h2>
                </div>
                <p className="text-gray-300 text-xl leading-relaxed">
                  Oferecemos serviços especializados de fotografia com drone para diversos 
                  setores, incluindo imobiliárias, eventos, escolas e shows. Nossa equipe 
                  utiliza equipamentos de última geração para capturar imagens únicas e 
                  impressionantes da sua propriedade ou evento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 relative">
              <ThreeSixty
                amount={36}
                imagePath="/images/360-photo-{index}.jpg"
                spinReverse
                autoplay
                loop
              />
              <div className="absolute bottom-4 left-[45%] transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full text-white pointer-events-none text-center w-48">
                Arraste para visualizar 360°
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <Radio size={32} className="text-blue-400" />
                <h2 className="text-3xl font-bold">Criação do Tour Virtual</h2>
              </div>
              <p className="text-gray-300 text-xl leading-relaxed">
                Transformamos imagens em 360° em experiências imersivas. Nossa equipe 
                especializada cuida de todo o processo, desde a captação das imagens até 
                a publicação do tour virtual, garantindo uma navegação suave e intuitiva 
                para seus visitantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-8">
              <Video size={32} className="text-blue-400" />
              <h2 className="text-3xl font-bold">Gravação e Edição de Vídeos</h2>
            </div>
            <div className="w-full max-w-4xl mb-8">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/JYDfBXs7V7Y?autoplay=1&mute=1&loop=1&playlist=JYDfBXs7V7Y"
                  className="w-full h-full"
                  title="Video services"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="text-gray-300 text-xl leading-relaxed text-center max-w-3xl">
              Produzimos vídeos profissionais com drones, oferecendo uma perspectiva única 
              para seu projeto. Nossa equipe cuida de todo o processo de edição, 
              garantindo um resultado final de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      <section id="tours" className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Tours Virtuais</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {tours.map((tour, index) => (
            <Card key={index} className="w-[468px] bg-gray-800 border-gray-700">
              <div className="relative cursor-pointer" onClick={() => window.open(tour.url, '_blank')}>
                <img 
                  src={tour.img}
                  alt={tour.title}
                  className="w-full h-[312px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
                  <span className="font-semibold">Iniciar Tour Virtual</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-gray-100">{tour.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex items-center gap-4">
              <Phone size={24} className="text-blue-400" />
              <div>
                <p className="font-bold">Telefone</p>
                <a href="tel:+5541999999999" className="text-gray-300 hover:text-white">
                  (41) 99999-9999
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail size={24} className="text-blue-400" />
              <div>
                <p className="font-bold">Email</p>
                <a href="mailto:contato@wise360.com" className="text-gray-300 hover:text-white">
                  contato@wise360.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={24} className="text-blue-400" />
              <div>
                <p className="font-bold">Endereço</p>
                <p className="text-gray-300">Curitiba, PR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Tours Virtuais & Serviços de Drone. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Website;