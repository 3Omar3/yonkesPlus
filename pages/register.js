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
        <div className="flex flex-col rounded-lg bg-white shadow-lg p-10 max-w-xl pb-8">
          <Link href="/">
            <a className="w-max self-center">
              <Image src="/logo.svg" height={65} width={220} alt="logo" />
            </a>
          </Link>
          <div className="flex flex-col md:flex-row mt-5 md:space-x-8">
            <div>
              <label className="text-gray-600 p-1">Nombre</label>
              <input
                className="text-gray-900 p-1 focus:outline-none border-b border-gray-300 focus:border-blue-400 mt-2"
                type="text"
              />
            </div>
            <div>
              <label className="text-gray-600 p-1">Apellido</label>
              <input
                className="text-gray-900 p-1 focus:outline-none border-b border-gray-300 focus:border-blue-400 mt-2"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5 md:space-x-8">
            <div>
              <label className="text-gray-600 p-1">Email</label>
              <input
                className="text-gray-900 p-1 focus:outline-none border-b border-gray-300 focus:border-blue-400 mt-2"
                type="text"
              />
            </div>
            <div>
              <label className="text-gray-600 p-1">Clave</label>
              <input
                className="text-gray-900 p-1 focus:outline-none border-b border-gray-300 focus:border-blue-400 mt-2"
                type="text"
              />
            </div>
          </div>
          <label className="flex flex-row items-center mt-5 mb-5">
            <input
              onClick={() => {
                setActive(!active);
              }}
              type="checkbox"
              className="form-checkbox h-4 w-4 text-purple-600 cursor-pointer"
            />
            <span className="ml-2 text-gray-400 text-sm">
              Acepto los <a className="text-blue-500">Términos y Condiciones</a>
            </span>
          </label>
          <button
            onClick={() => {
              console.log("click button");
            }}
            type="submit"
            className={
              active
                ? "focus:outline-none text-white font-semibold rounded-lg bg-blue-500 shadow-md hover:bg-blue-600 tracking-wide p-1.5 sm:p-2"
                : "focus:outline-none text-gray-300 font-semibold rounded-lg bg-gray-100 tracking-wide p-1.5 sm:p-2 cursor-default"
            }
            disabled={active}
          >
            Continuar
          </button>
        </div>
      </main>
      <style jsx global>{`
        body {
          background: #f0f2f5;
        }
      `}</style>
    </>
  );
};

export default Register;
