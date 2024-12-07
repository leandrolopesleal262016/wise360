'use client'
import React, { useEffect, useRef } from 'react';
import { Card } from "../components/ui/card";
import { Camera, Video, Radio, Menu, Home, Image, Phone, Film, Eye, Aperture, PanelTop, Gem, Star, Sparkles, Zap, Medal, Globe } from 'lucide-react';
import { Mail, MapPin } from 'lucide-react';

const Panorama = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const loadPannellum = async () => {
      const pannellum = await import('pannellum-react/es/elements/Pannellum');
      if (viewerRef.current) {
        pannellum.viewer(viewerRef.current, {
          type: 'equirectangular',
          panorama: '/images/360-photo.jpg',
          autoLoad: true,
          autoRotate: 1,
          compass: false,
          showZoomCtrl: false,
          showFullscreenCtrl: false,
          minHfov: 100,
          maxHfov: 100
        });
      }
    };
    loadPannellum();
  }, []);

  return (
    <div className="relative">
      <div ref={viewerRef} style={{ width: '705px', height: '400px' }} />
      <div className="absolute bottom-4 left-[47%] transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full text-white pointer-events-none text-center w-50">
        Arraste para visualizar 360°
      </div>
    </div>
  );
};

const Website = () => {
  const tours = [
    { url: 'https://guias.cc/pinhapinhao', title: 'Pousadas', img: '/images/tour1.jpg' },
    { url: 'https://guias.cc/mobitec-curitiba', title: 'Empresas', img: '/images/tour2.jpg' },
    { url: 'https://guias.cc/ironberg', title: 'Academias', img: '/images/tour3.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="bg-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Wise360</span>
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

      <header id="home" className="bg-gradient-to-r from-orange-900 to-orange-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-4">Experiência Imersiva com Tours Virtuais</h1>
          <p className="text-2xl text-gray-200">Permita que seus clientes acessem locais através de um site ou Google Street View</p>
        </div>
      </header>
      
      <section id="services" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-row items-start gap-24">
            <div className="flex-1">
              <img 
                src="/images/captacao.jpg"
                alt="Captacao"
                className="rounded-lg shadow-lg w-[700px] h-[900px] object-cover"
              />
            </div>
            
            <div className="flex-1 flex flex-col gap-8 justify-center items-center h-full">
              <div className="w-full">
                <div className="flex items-center gap-4 mb-4">
                  <Camera size={32} className="text-blue-400" />
                  <h2 className="text-3xl font-bold">Captação de Imagens</h2>
                </div>
                <p className="text-gray-300 text-lg">
                  "Oferecemos serviços profissionais especializados em fotografia de alta qualidade, 
                  utilizando câmeras de captura 360° para uma experiência imersiva e drones para coberturas aéreas, 
                  ideais para ambientes amplos e projetos que demandam perspectivas únicas e impactantes."
                </p>
              </div>
              <p><br></br></p>
              <p><br></br></p>
              <div className="w-full">
                <div className="flex items-center gap-4 mb-4">
                  <Sparkles size={32} className="text-blue-400" />
                  <h2 className="text-3xl font-bold">Criação de Tour Virtual</h2>
                </div>            
                <p className="text-gray-300 text-lg">
                  Transformamos imagens em 360° em experiências imersivas. 
                  Nossa equipe especializada cuida de todo o processo, desde a captação das imagens 
                  até a publicação do tour virtual, garantindo uma navegação suave e intuitiva para seus visitantes.
                  Depois de pronto o tour virtual pode ser disponibilizado através de um site ou no endereço do 
                  comércio ou empresa através do Google Street View.
                </p>
              </div>
              <p><br></br></p>
              <p><br></br></p>
              <div className="w-full">
                <div className="flex items-center gap-4 mb-4">
                  <Globe size={32} className="text-blue-400" />
                  <h2 className="text-3xl font-bold">Navegação Totalmente Interativa</h2>
                </div>            
                <p className="text-gray-300 text-lg">
                  O Tour Virtual oferece uma experiência imersiva e totalmente interativa,
                  com recursos como narrações de áudio, vídeos integrados, links interativos 
                  que direcionam para páginas externas ou endereços específicos, 
                  e ícones personalizados para destacar pontos de interesse.
                  Além disso, permite a inclusão de hotspots interativos com informações adicionais,
                  navegação fluida entre diferentes ambientes e suporte para visualização em realidade
                  virtual (VR), proporcionando uma exploração única e envolvente de espaços culturais,
                  turísticos, comerciais ou educacionais.
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
              <Panorama />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <Camera size={32} className="text-blue-400" />
                <h2 className="text-3xl font-bold">Fotos 360°</h2>
              </div>
              <p className="text-gray-300 text-lg">
                Fotos 360° são imagens panorâmicas capturadas em todas as direções ao redor de um ponto central,
                proporcionando uma visão completa e imersiva do ambiente. 
                Essas imagens permitem que o espectador explore o cenário em diferentes ângulos, 
                como se estivesse fisicamente presente no local, ao rotacionar a imagem em dispositivos móveis, 
                computadores ou através de dispositivos de realidade virtual (VR).
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold">Produção de Vídeos para o seu negócio</h2>
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
            <p className="text-gray-300 text-lg text-center max-w-3xl">
              Produzimos vídeos profissionais utilizando drones, capturando imagens aéreas 
              que proporcionam uma perspectiva única e impactante para o seu projeto.
              Nossa equipe especializada cuida de todo o processo, desde a captura até, edição e entrega,
              garantindo um resultado final de qualidade com atenção aos mínimos detalhes
            </p>
          </div>
        </div>
      </section>

      <section id="tours" className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Exemplos de Tour Virtual</h2>
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
                  (14) 99909-6128
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail size={24} className="text-blue-400" />
              <div>
                <p className="font-bold">Email</p>
                <a href="mailto:contato@wise360.com" className="text-gray-300 hover:text-white">
                  leandro.wisemadness@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={24} className="text-blue-400" />
              <div>
                <p className="font-bold">Endereço</p>
                <p className="text-gray-300">Bauru, SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Wise360 Tour Virtual. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Website;