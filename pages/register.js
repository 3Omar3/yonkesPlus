import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
  const [active, setActive] = useState(false); // btn confirmar

  return (
    <>
      <Head>
        <title>YonkesPlus - Register</title>
      </Head>
      <main className="h-screen flex justify-center items-center tracking-wide">
        <div className="flex flex-col m-10">
          <Link href="#">
            <a className="text-sm text-blue-500 mb-5 self-end hover:text-blue-700">
              Crear una cuenta de empresa {">"}
            </a>
          </Link>
          <div className="rounded-lg bg-white shadow-lg p-10 max-w-xl pb-8 pt-6">
            <div className="text-center md:text-left">
              <Link href="/">
                <a className="flex-1 w-max self-center mb-2">
                  <Image src="/logo.svg" height={50} width={165} alt="logo" />
                </a>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row mt-5 md:space-x-8">
              <div className="mb-5 md:mb-0">
                <label className="flex text-gray-500 p-1">Nombre</label>
                <input
                  className="w-full text-gray-900 p-1 focus:outline-none border-b border-gray-300 focus:border-blue-400"
                  type="text"
                />
              </div>
              <div className="mb-5 md:mb-0">
                <label className="flex text-gray-500 p-1">Apellido</label>
                <input
                  className="w-full text-gray-900 p-1 focus:outline-none border-b border-gray-300 focus:border-blue-400"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 md:mt-8">
              <div className="mb-5 md:mb-0">
                <label className="flex text-gray-500 p-1">Email</label>
                <input className="input-label" type="email" />
              </div>
              <div className="mb-5 md:mb-0">
                <label className="flex text-gray-500 p-1">Clave</label>
                <input
                  className="w-full text-gray-900 p-1 focus:outline-none border-b border-gray-300 focus:border-blue-400"
                  type="password"
                />
              </div>
            </div>
            <label className="flex flex-row items-center mt-5 mb-5 md:mt-10">
              <input
                onClick={() => {
                  setActive(!active);
                }}
                type="checkbox"
                className="form-checkbox h-4 w-4 text-purple-600 cursor-pointer"
              />
              <span className="ml-2 text-gray-400 text-sm">
                Acepto los{" "}
                <a className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  Términos y Condiciones
                </a>
              </span>
            </label>
            <button
              onClick={() => {
                console.log("click button");
              }}
              type="submit"
              className={
                active
                  ? "focus:outline-none w-full text-white font-semibold rounded-lg bg-blue-500 shadow-md hover:bg-blue-600 tracking-wide p-1.5 sm:p-2"
                  : "focus:outline-none w-full text-gray-300 font-semibold rounded-lg bg-gray-100 tracking-wide p-1.5 sm:p-2 cursor-default"
              }
              disabled={active}
            >
              Continuar
            </button>
          </div>
        </div>
      </main>
      <style global jsx>{`
        body {
          background: #e5e7eb;
        }
      `}</style>
    </>
  );
};

export default Register;
