"use client"
// npm run dev
import ImageButton from "@/components/ImageButton/ImageButton";
import ParagraphSize from "@/components/ParagraphSize/ParagraphSize";
import MakeSideBar from "@/components/SideBar/SideBar";
import TitleSize from "@/components/TitleSize/TitleSize";
// import PopUp from "@/components/PopUp/PopUp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
// import image1 from "../components/images/foto1.png"

export default function Home() {
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const router = useRouter();
  const isProduction = process.env.NODE_ENV === "production"
  console.log(router)
  // const [{/*isPopUpOpen*/}, setIsPopUpOpen] = React.useState<boolean>(false);

  return (
    <html lang="en">
      <body>
        <header className="bg-blue-900 flex flex-row justify-center">
          <p className="text-4xl text-white">Muestra Tu Sonrisa</p>
          {/* <Image src="tu-sonrisa.jpg" alt="Logo" width={150} height={150} /> */}
        </header>

        <div className="flex justify-between object-none relative pl-20">
          <div className="flex flex-col w-full">
            <br />

            <section>
              <TitleSize title="Consejos para el cuidado de tu higiene bucal" />
              <ParagraphSize
                paragraph="Te ofrecemos consejos para el cuidado de tu higiene
                bucodental, con especial énfasis en todo lo que
                puede hacer por ti un irrigador dental."/>
              {/* <ParagraphSize 
              paragraph=""//> */}
            </section>
            <br />

            <section>
              <div id="consejos" className="flex flex-col items-center">
                <div className="flex flex-direction: row" >
                  <div><ImageButton imageSrc={isProduction ? "images/foto1.png" : "/images/foto1.png"} alt="" href="https://tusonrisa.org/opinion-invisalign-vs-brackets/" setImageUrl={setImageUrl} /></div>
                  <div><ImageButton imageSrc={isProduction ? "images/foto2.png" : "/images/foto2.png"} alt="" href="https://tusonrisa.org/citricos-dientes/" setImageUrl={setImageUrl} /></div>
                </div>
                <div className="flex flex-direction: row">
                  <div><ImageButton imageSrc={isProduction ? "images/foto3.png" : "/images/foto3.png"} alt="" href="https://tusonrisa.org/enjuague-bucal-para-gingivitis/" setImageUrl={setImageUrl} /></div>
                  <div><ImageButton imageSrc={isProduction ? "images/foto4.png" : "/images/foto4.png"} alt="" href="https://tusonrisa.org/cepillar-lengua/" setImageUrl={setImageUrl} /></div>
                </div>
                <br />
                <div> {/* className="flex border border-zinc-600 w-100 h-100" */}
                  {imageUrl !== "" &&
                    <Image className="flex border border-zinc-600 w-100 h-100" src={imageUrl} alt="pruebita" width={10000} height={10000} />
                  }
                </div>
              </div>
            </section>
            <br />
            <div className="bg-gray-200">
              <br />
              <section>
                <TitleSize title="¿Qué es un irrigador dental?" />
                <ParagraphSize
                  paragraph="Un irrigador dental, o irrigador bucal, es un
                dispositivo para el hogar que emite un chorro
                de agua que pasa entre los dientes y encías,
                eliminando cualquier resto de comida, placa o
                bacterias."/>
                <br />

                <ParagraphSize
                  paragraph="Algunos modelos de irrigadores dentales vienen
                con diferentes boquillas y niveles de presión
                ajustables, lo que permite personalizar la
                experiencia de limpieza según las necesidades
                y sensibilidad de cada usuario."/>
              </section>
              <br />

              <section>
                <TitleSize title="Ventajas de usarlo" />
                <div className="flex justify-center p-5"><Image src={isProduction ? "images/Ventajas.png" : "/images/Ventajas.png"} alt="" width={380} height={380} /></div>
                <br />

                <ParagraphSize
                  paragraph="Según estudios recientes, la utilización regular
                de un irrigador bucal puede contribuir a la
                prevención de enfermedades como la gingivitis y
                la periodontitis, promoviendo unas encías más sanas
                y fuertes."/>
              </section>
              <br />
            </div>
            <br />

            <section>
              <TitleSize title="Noticias, guías y productos para mejorar tu salud bucodental" />
              <ParagraphSize
                paragraph="Navega por nuestras categorías, en ellas te ofrecemos
                información contrastada y de actualidad sobre salud bucodental:"/>
              <div className="flex flex-direction: row justify-center pt-5 pe-15">
                <div>
                  <button className="p-2"><a href="#consejos"><Image className=" hover:w-[150]" src={isProduction ? "images/Consejos.jpg" : "/images/Consejos.jpg"} alt="descripcion" width={100} height={100} /></a></button>
                  <p className="text-center hover:text-blue-500">Consejos</p>
                </div>

                <div>
                  <button className="p-2"><a href="#reseñas"><Image className=" hover:w-[150]" src={isProduction ? "images/reseñas.jpg" : "/images/reseñas.jpg"} alt="" width={100} height={100} /></a></button>
                  <p className="text-center hover:text-blue-500">Reseñas</p>
                </div>

                <div>
                  <button className="p-2"><a href="#guia"><Image className=" hover:w-[150]" src={isProduction ? "images/guias.jpg" : "/images/guias.jpg"} alt="" width={100} height={100} /></a></button>
                  <p className="text-center hover:text-blue-500">Guías</p>
                </div>
              </div>
            </section>
            <br />

            <section id="reseñas">
              <TitleSize title="Reseñas de irrigadores dentales" />
              <ParagraphSize
                paragraph="Aquí encontrarás análisis detallados, valoraciones de expertos y
                opiniones de usuarios, todo para ayudarte a elegir el irrigador
                perfecto que se ajuste a tus necesidades de salud bucodental."/>

            </section>
            <br />
            <div className="flex flex-col items-center bg-gray-300">
              <br />
              <div>
                <TitleSize title="¿Qué tipos de irrigadores existen?" />
                <ParagraphSize
                  paragraph="Para cubrir las diferentes necesidades , los fabricantes 
                  han creado tres grandes tipos de irrigadores: sobremesa (potentes), 
                  inalámbricos (más cómodos de usar), de viaje (ligeros)" />
                <br />
              </div>
              <div>
                <div className="flex flex-direction: row w-180 items-center">
                  <div >
                    <TitleSize title="De sobremesa" />
                    <ParagraphSize
                      paragraph="Se distinguen por su diseño estacionario y mayor capacidad 
                    de depósito de agua. Ofrecen múltiples ajustes de presión y boquillas 
                    intercambiables. Su tamaño y características los hacen ideales para un 
                    uso intensivo y personalizado en el hogar"/>
                  </div>
                  <div>
                    <Image src={isProduction ? "images/irrigador-de-sobremesa.jpg" : "/images/irrigador-de-sobremesa.jpg"} alt="Logo" width={1200} height={1200} />
                  </div>
                </div>
                <br />

                <div className="flex flex-direction: row w-180 items-center">
                  <div>
                    <Image src={isProduction ? "images/irrigadores-dentales-de-viaje.jpg" : "/images/Irrigadores-dentales-de-viaje.jpg"} alt="Logo" width={1500} height={1500} />
                  </div>
                  <div>
                    <TitleSize title="De viaje" />
                    <ParagraphSize
                      paragraph="Su diseño compacto y ligero los hace fáciles de transportar. 
                    A menudo funcionan con baterías y tienen depósitos de agua más pequeños, 
                    adecuados para el uso temporal fuera de casa. Aunque puedan tener menos 
                    ajustes de presión, su conveniencia y adaptabilidad los hacen esenciales 
                    para quienes viajan frecuentemente"/>
                  </div>
                </div>
                <br />

                <div className="flex flex-direction: row w-180 items-center">
                  <div>
                    <TitleSize title="Inalámbricos" />
                    <ParagraphSize
                      paragraph="No necesitan estar conectados a la red eléctrica, lo que los hace 
                    más versátiles y cómodos de usar. Funcionan con baterías recargables, y su 
                    diseño suele ser más compacto y ergonómico, permitiendo un fácil manejo. 
                    Aunque puedan tener un depósito de agua más pequeño, su libertad de movimiento 
                    los hace ideales para una higiene bucal moderna y eficiente"/>
                  </div>
                  <div>
                    <Image src={isProduction ? "images/irrigadores-inalambricos.jpg" : "/images/irrigadores-inalambricos.jpg"} alt="Logo" width={1500} height={1500} />
                  </div>
                </div>
              </div>
              <br />
            </div>
            <br />

            <section id="guia">
              <TitleSize title="Guias y tutoriales" />
              <ParagraphSize
                paragraph="Ideales tanto para principiantes como usuarios avanzados, estas
                guías paso a paso te ayudarán a mejorar tu salud bucodental de
                manera práctica y sencilla"/>
            </section>
            <br /> <br />
          </div>
          <MakeSideBar />
        </div>

        <footer>
          <p className="bg-black text-white text-center text-sm">2025 Tu Sonrisa. Todos los derechos reservados.</p>
        </footer>
        {/* <PopUp isOpen={isPopUpOpen} imageUrl={imageUrl} alt={"alt"} /> */}
      </body>
    </html>
  );
}
