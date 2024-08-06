import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 bg-white">
      <div class="relative" id="home">
        <div
          aria-hidden="true"
          class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 "
        >
          <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400"></div>
          <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
        </div>
        <div class="relative pt-36 ml-auto">
          <div class="lg:w-2/3 text-center mx-auto">
            <h1 class="text-gray-900  font-bold text-3xl md:text-5xl xl:text-6xl">
              Tu Solución de Confianza para el Cuidado de los que más
              <span class="text-primary "> amas.</span>
            </h1>
            <p class="mt-8 text-gray-700">
              En Cuidame, conectamos a familias con cuidadores profesionales y
              dedicados que proporcionan atención personalizada y de calidad
              para tus seres queridos. Ya sea para adultos mayores, niños o
              personas con necesidades especiales, estamos aquí para ayudarte a
              encontrar el cuidado perfecto.
            </p>
            <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                href="#"
                class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-base font-semibold text-white">
                  Solicitar Cuidador
                </span>
              </Link>
            </div>
            <div class="hidden py-8 mt-16 border-y border-gray-100  sm:flex justify-between gap-10">
              <div class="text-center">
                <h6 class="text-lg font-semibold text-gray-700 ">
                  El precio más bajo
                </h6>
                <p class="mt-2 text-gray-500 max-w-xs">
                  Tarifas competitivas para cuidado accesible y de calidad.
                </p>
              </div>
              <div class="text-center">
                <h6 class="text-lg font-semibold text-gray-700 ">
                  El más rápido del mercado
                </h6>
                <p class="mt-2 text-gray-500">
                  Conéctate con cuidadores en minutos, sin complicaciones.
                </p>
              </div>
              <div class="text-center">
                <h6 class="text-lg font-semibold text-gray-700 ">
                  El más querido
                </h6>
                <p class="mt-2 text-gray-500">
                  Nuestros clientes nos eligen por cuidadores dedicados y
                  profesionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative py-16">
        <div
          aria-hidden="true"
          class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40"
        >
          <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 "></div>
          <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 "></div>
        </div>
        <div class="relative">
          <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 class="text-center text-4xl font-bold text-gray-800 md:text-5xl">
              ¿Quieres ser cuidador?
            </h1>
            <p class="text-center text-xl text-gray-600 ">
              Únete a nuestra comunidad de cuidadores profesionales y encuentra
              oportunidades de trabajo flexibles y gratificantes.
            </p>
            <div class="flex flex-wrap justify-center gap-6">
              <Link
                href="#"
                class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-base font-semibold text-white ">
                  Regístrate
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
