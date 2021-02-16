import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <Head>
        <title>YonkesPlus - Login</title>
      </Head>
      {/* <div className="bg-white shadow-sm p-1">
        <Link href="/">
          <a className="text-center">
            <Image src="/logo.svg" height={47} width={160} alt="logo" />
          </a>
        </Link>
      </div> */}
      <main className="flex tracking-wide justify-center">
        <div className="flex flex-col">
          <div className="flex flex-col rounded-lg bg-white shadow-lg p-5 px-10 m-auto mb-5">
            <Link href="/">
              <a className="w-max self-center">
                <Image src="/logo.svg" height={47} width={160} alt="logo" />
              </a>
            </Link>
            <div className="flex flex-col my-4 mt-1">
              <input
                type="email"
                placeholder="Correo"
                className="focus:outline-none bordered-lg p-1.5 my-2 tracking-wide placeholder-gray-500 border-b sm:p-3 sm:my-1"
              />
              <input
                type="password"
                placeholder="Clave"
                className="focus:outline-none p-1.5 my-2 tracking-wide placeholder-gray-500 border-b sm:p-3 sm:my-1"
              />
            </div>
            <button
              type="submit"
              className="focus:outline-none text-white font-semibold rounded-lg bg-blue-500 shadow-md hover:bg-blue-600 tracking-wide p-1.5 sm:p-2"
            >
              Continuar
            </button>
            <span className="text-blue-500 my-4 text-center">
              ¿Has olvidado la contraseña?
            </span>
            <Link href="/register" className="my-8">
              <a className="text-green-500 text-center">Crear cuenta</a>
            </Link>
          </div>
          <button className="flex items-baseline focus:outline-none hover:bg-gray-100 rounded-lg bg-white shadow-lg p-2.5 my-2 pl-5">
            <Image
              src="/google-icon.svg"
              height={22}
              width={22}
              alt="google icon"
            />
            <span className="flex-1 self-center text-gray-900">
              Iniciar sesión con Google
            </span>
          </button>
          <button className="flex items-baseline focus:outline-none hover:bg-gray-100 rounded-lg bg-white shadow-lg p-2.5 my-2 pl-5">
            <Image
              src="/facebook-icon.svg"
              height={22}
              width={22}
              alt="google icon"
            />
            <span className="flex-1 self-center text-gray-900">
              Iniciar sesión con Facebook
            </span>
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

export default Login;
