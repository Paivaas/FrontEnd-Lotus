"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from 'sweetalert2';


// Import das imagens 
import LotusIcon from "../../public/icons/utilities/lotus-icon.svg";
import EmailIcon from "../../public/icons/profile-information/grey/email.svg"
import KeyIcon from "../../public/icons/profile-information/grey/key.svg"
import ArrowIcon from "../../public/icons/utilities/arrow-white.svg"

export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Alerts (invalidEmail, successLogin)
  const invalidEmail = () => {
    Swal.fire({
      title: "Email ou senha incorretos",
      icon: "error",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const successLogin = () => {
    Swal.fire({
      icon: "success",
      title: "Bem vindo-a Lotus!",
      showConfirmButton: false,
      timer: 1500
    });
  };


  // Validacao e tratativas de erro
  const validacaoLogin = (e) => {
    e.preventDefault();
    setError(""); 

    if (email == "" || password == "" || !email.includes('@') || !email.includes('.com')) {
      console.log("Por favor, preencha todos os campos.");
      invalidEmail()
      return;
    }else{
      console.log("Login realizado com sucesso");
      successLogin()
    }
  };
  
  return (
    
    <div className="flex w-screen h-screen max-xl:p-16 max-sm:p-8">

      <div className="h-full w-2/3 flex flex-col justify-center items-center gap-20 max-xl:w-full">

        <div className="flex flex-col gap-14">
          
          <div className="flex flex-col gap-4 pb-10">
            <Image className="w-[15%]" alt="Lotus Icon" src={LotusIcon}></Image>

            <h1 className="text-gray-3 text-5xl">Login Lótus</h1>
            <h2 className="text-gray-3">Ainda não possui uma conta? <span className="hover:text-pink-2 cursor-pointer transition duration-150 ease-in-out">Clique aqui</span> </h2>
          </div>

          {/* Campos para entrada de valor */}

          <form className="flex flex-col gap-4 w-[40vw] font-ABeeZee max-xl:w-full">

            <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4">
                <Image className="w-[5%] max-sm:w-50%]" alt="Email Icon" src={EmailIcon}></Image>
                <input type="email" placeholder="Seu email" className="w-full" onChange={(e) => setEmail(e.target.value)}
                aria-label="Seu email"
                required/>
              </div>

              <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4">
                <Image className="w-[5%] max-sm:w-[5%]" alt="Key Icon" src={KeyIcon}></Image>
                <input type="password" placeholder="Sua Senha" className="w-full" onChange={(e) => setPassword(e.target.value)}aria-label="Sua Senha"
                required/>
              </div>

              <p className="text-pink-3 hover:text-pink-2  hover:cursor-pointer transition duration-150 ease-in-out">Esqueceu sua senha?</p>

          </form>

          <button onClick={validacaoLogin} className="duration-300 bg-gradient-to-r from-pink-3 to-orange-3 w-40 p-4 px-6 items-center justify-between rounded-full text-white flex hover:cursor-pointer hover:scale-95">
            
            <p className="text-xl">Entrar</p>
            <Image className="w-[20%]" alt="Arrow Icon" src={ArrowIcon}></Image>
            
          </button>

        </div>


      </div>


      <div className="h-full w-1/3 max-xl:w-0 max-xl:hidden">

        <div className="w-full h-1/3 bg-red-degrade-1 flex align-top justify-end"></div>
        <div className="w-full h-1/3 bg-red-degrade-2"></div>
        <div className="w-full h-1/3 bg-red-degrade-3"></div>

      </div>
      
    </div>
  );
}

