import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  const [open, setOpen] = useState(false); // navbar

  return (
    <div className="font-body">
      <Head>
        <title>YonkesPlus | Inicio</title>
      </Head>
      <div className="relative bg-white">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <a>
                    <Image src="/logo.svg" height={45} width={165} alt="logo" />
                  </a>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    id="main-menu"
                    aria-haspopup="true"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <Link href="#">
                <a className="tracking-wide font-medium text-gray-500 hover:text-gray-900">
                  Categorías
                </a>
              </Link>
              <Link href="#">
                <a className="tracking-wide font-medium text-gray-500 hover:text-gray-900">
                  Vehículo
                </a>
              </Link>
              <Link href="#">
                <a className="tracking-wide font-medium text-gray-500 hover:text-gray-900">
                  Mis compras
                </a>
              </Link>
              <Link href="#">
                <a className="tracking-wide font-medium text-gray-500 hover:text-gray-900">
                  Carrito
                </a>
              </Link>
              <Link href="/login">
                <a className="tracking-wide font-medium text-blue-600 hover:text-blue-500">
                  Ingresar
                </a>
              </Link>
            </div>
          </nav>
        </div>
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          {!open ? null : (
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div className="h-8 w-auto">
                  <Image height={45} width={160} src="/logo.svg" alt="" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <span className="sr-only">Close main menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                  <Link href="#">
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Categorías
                    </a>
                  </Link>
                  <Link href="#">
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Vehículo
                    </a>
                  </Link>
                  <Link href="#">
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Mis compras
                    </a>
                  </Link>
                  <Link href="#">
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Carrito
                    </a>
                  </Link>
                </div>
                <div role="none">
                  <Link href="/login">
                    <a
                      className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Ingresar
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <main className="mt-10 mx-auto max-w-1xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-5 lg:px-8 xl:mt-10 tracking-wide">
          <p>Hello world this is the content of the page</p>
        </main>
      </div>
    </div>
  );
};

export default Index;
