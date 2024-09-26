"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../public/icons/utilities/lotus-icon.svg";
import conteudos from "../public/icons/nav/conteudos.svg";
import galeria from "../public/icons/nav/galeria.svg";
import perfil from "../public/icons/nav/Ativo/profile.svg";
import laranja from "../public/icons/nav/nav-laranja.png";
import config from "../public/icons/utilities/settings-white.svg";
import edit from "../public/icons/utilities/edit-pencil-orange.svg";
import verif from "../public/icons/profile-information/verificado.png";
import logout from "../public/icons/nav/Ativo/logout.png";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="font-ABeeZee bg-white font-inter min-h-screen p-8 flex gap-8 overflow-hidden">
      {/* DIV ESQUERDA (MENU) */}
      <div className="flex flex-col items-start w-1/5 fixed left-0 pl-8 h-full">
        <div className="inline-flex items-center mb-4">
          <Image src={logo} alt="logo" className="w-24 h-16" />
          <h1 className="text-pink-3 text-lg font-medium ml-2">Lotus</h1>
        </div>

        <button className="w-full text-left text-gray-3">
          <div className="flex items-center p-4 gap-2">
            <Image src={conteudos} alt="Conteúdos" className="w-9 h-11" />
            <h1 className="text-gray-3 font-medium">Conteúdos</h1>
          </div>
        </button>

        <button className="w-full text-left">
          <div className="flex items-center p-4 gap-2">
            <Image src={galeria} alt="Galeria" className="w-9 h-16" />
            <h1 className="text-gray-3 font-medium">Galeria</h1>
          </div>
        </button>

        <button className="w-full text-left">
          <div className="flex items-center p-4 gap-2">
            <Image src={perfil} alt="Perfil" className="w-9 h-16" />
            <h1 className="text-gray-3 font-medium">Perfil</h1>
          </div>
        </button>

        {/* Botão de Logout no canto inferior esquerdo */}
        <button className="absolute bottom-8 left-4">
          <div className="flex items-center">
            <Image src={logout} alt="Logout" />
          </div>
        </button>
      </div>

      {/* DIV CINZA (Conteúdo Principal) */}
      <div className="bg-gray-1 flex-grow h-screen w-[80%] rounded-3xl ml-[20%] p-8 relative">
        {/* Nav Laranja no topo */}
        <div className="absolute top-0 left-0 w-full">
          <Image src={laranja} alt="Nav Laranja" className="w-full h-32 lg:h-24" />

          {/* Botão Configuração */}
          <button>
            <Image
              src={config}
              alt="Configurações"
              className="absolute right-16 top-2 w-9 h-16"
            />
          </button>

          {/* Botão Editar */}
          <button>
            <Image
              src={edit}
              alt="Editar"
              className="absolute right-4 top-2 w-10 h-10 rounded-full"
            />
          </button>
        </div>

        {/* Input de Imagem e Nome */}
        <div className="flex items-center gap-4 relative" style={{ top: "0px" }}>
          {/* Input de Imagem no canto esquerdo - Aumentado */}
          <div className="relative">
            <div className="bg-white lg:h-72 w-72 opacity-100 rounded-full flex items-center justify-center">
              <div className="absolute top- left-6 z-20 h-60 w-60 lg:h-60 lg:w-60 shadow-lg rounded-full flex items-center justify-center">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Perfil"
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <span>Edite</span>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer h-52 w-52"
                />
              </div>
            </div>
          </div>

          {/* Nome, Verificação e Especialização */}
          <div className="flex flex-col gap-2 mt-10">
            <div className="flex gap-5 items-center">
              <h1 className="text-[40px] text-gray-4 font-ABeeZee z-40 font-thin">
                Vitória Castro
              </h1>
              <Image src={verif} alt="verificado doula" className="size-9 content-center" />
            </div>

            <div>
              <h1 className="text-[15px] text-gray-3 font-semibold">Especialização em:</h1>

              {/* Cards de especialização */}
              <div className="flex gap-4 mt-4 text-gray-4">
                <div className="bg-white shadow-md rounded-full p-4 h-12 flex items-center justify-center">
                  <span>Consultoria em aleitamento materno</span>
                </div>
                <div className="bg-white shadow-md rounded-full p-4 h-12 flex items-center justify-center">
                  <span>Doula de parto</span>
                </div>
                <div className="bg-white shadow-md rounded-full p-4 h-12 flex items-center justify-center">
                  <span>Doula do luto</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo principal lado a lado */}
        <div className="flex mt-20">
          {/* Seção Doula a 5 anos */}
          <div className="flex-1">
            <h1 className="text-gray-3 text-[23px] font-ABeeZee">
              Doula a 5 anos
            </h1>
            <h1 className="text-xl break-words max-w-xl mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting.
            </h1>
          </div>

          <div className="flex-1">
            <h1 className="text-gray-3 text-[23px] font-ABeeZee">
              Conteúdos publicados:
            </h1>

            {/* Cards de Conteúdos Publicados */}
            <div className="mt-4 space-y-4">
              <div className="flex items-center cursor-pointer border-l-8 border-pink-2 p-4 hover:bg-gray-200" onClick={() => {/* Redirecionar para conteúdo 1 */}}>
                <span className="flex-grow text-left">Conteúdo 1</span>
              </div>
              <div className="flex items-center cursor-pointer border-l-8 border-pink-2 p-4 hover:bg-gray-200" onClick={() => {/* Redirecionar para conteúdo 2 */}}>
                <span className="flex-grow text-left">Conteúdo 2</span>
              </div>
              <div className="flex items-center cursor-pointer border-l-8 border-pink-2 p-4 hover:bg-gray-200" onClick={() => {/* Redirecionar para conteúdo 3 */}}>
                <span className="flex-grow text-left">Conteúdo 3</span>
              </div>
              {/* Adicione mais cards conforme necessário */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
