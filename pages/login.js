import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Lottie from "react-lottie";

// animation
import user from "../public/animations/user-laptop.json";
// components
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";

// api
import { loginEmail, loginGoogle, loginFacebook } from "../firebase/client";

const Login = () => {
  const [loading, setLoading] = useState(false); // loading state
  const [loginFailed, setLoginFailed] = useState(false); // error message

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: user,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleEmail = async (e) => {
    try {
      e.preventDefault(); // prevent reload

      setLoading(true);
      const res = await loginEmail(
        e.target.txtEmail.value,
        e.target.txtPassword.value
      );
      setLoading(false);
    } catch (err) {
      setLoginFailed(true);
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    const res = await loginGoogle();
    console.log(res);
  };

  const handleFacebook = async () => {
    const res = await loginFacebook();
    console.log(res);
  };

  return (
    <>
      <Head>
        <title>YonkesPlus - Login</title>
      </Head>
      <Loading loading={loading} />
      <main className="h-screen flex justify-center items-center tracking-wide  bg-gray-200">
        <div className="flex-1 max-w-sm m-10">
          <div className="flex flex-col rounded-lg bg-white shadow-lg p-5 px-10 mb-5">
            <Link href="/">
              <a className="w-max self-center">
                <Image src="/logo.svg" height={50} width={165} alt="logo" />
              </a>
            </Link>
            <ErrorMessage
              visible={loginFailed}
              error={"Email o clave incorrecto"}
            />
            <form onSubmit={handleEmail}>
              <div className="flex flex-col my-4 mt-2">
                <input
                  type="email"
                  placeholder="Correo"
                  name="txtEmail"
                  className="focus:outline-none bordered-lg p-1.5 my-2 tracking-wide placeholder-gray-500 border-b sm:p-3 sm:my-1"
                  required
                />
                <input
                  type="password"
                  placeholder="Clave"
                  name="txtPassword"
                  className="focus:outline-none p-1.5 my-2 tracking-wide placeholder-gray-500 border-b sm:p-3 sm:my-1"
                  required
                />
              </div>
              <button
                type="submit"
                className="focus:outline-none mt-2 w-full text-white font-semibold rounded-lg bg-blue-500 shadow-md hover:bg-blue-600 tracking-wide p-1.5 sm:p-2"
              >
                Continuar
              </button>
            </form>
            <span className="text-blue-500 my-4 text-center hover:text-blue-700 cursor-pointer">
              ¿Has olvidado la contraseña?
            </span>
            <Link href="/register" className="my-8">
              <a className="text-green-500 text-center">Crear cuenta</a>
            </Link>
          </div>
          <button
            onClick={handleGoogle}
            className="flex w-full items-baseline focus:outline-none hover:bg-gray-100 rounded-lg bg-white shadow-lg p-2.5 my-5 pl-5"
          >
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
          <button
            onClick={handleFacebook}
            className="flex w-full items-baseline focus:outline-none hover:bg-gray-100 rounded-lg bg-white shadow-lg p-2.5 my-2 pl-5"
          >
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
        <div className="absolute left-0 bottom-0">
          <Lottie
            options={defaultOptions}
            height={329}
            width={500}
            className="select-none"
            isStopped={false}
            isPaused={false}
          />
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

export default Login;
