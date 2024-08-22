"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SolicitarCuidador() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsloading] = useState(false);

  const onSubmit = async (data) => {
    setIsloading(true);
    console.log(data);
    setIsloading(false);
  };

  return (
    <>
      <div className="relative max-w-lg mx-auto p-6 bg-white rounded-lg mt-10">
        <div className="absolute inset-0 z-0">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
        </div>
        <div className="relative z-10 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">
            Solicitar Cuidador
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Complete el formulario a continuación para encontrar el cuidador
            perfecto para sus seres queridos.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700">Nombre</label>
              <input
                {...register("name", { required: "El nombre es requerido" })}
                type="text"
                placeholder="Ingrese su nombre completo"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1 ml-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Teléfono de Contacto</label>
              <input
                {...register("phone", { required: "El teléfono es requerido" })}
                type="tel"
                placeholder="Ingrese su número de teléfono"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1 ml-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Fecha</label>
              <input
                {...register("date", { required: "La fecha es requerida" })}
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.date && <p className="text-red-500 text-sm mt-1 ml-1">{errors.date.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Descripción del Servicio</label>
              <textarea
                {...register("description", { required: "La descripción es requerida" })}
                placeholder="Describa brevemente el tipo de cuidado que necesita"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm mt-1 ml-1">{errors.description.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-lg text-white ${
                isLoading ? "bg-gray-400" : "bg-primary hover:bg-primary-dark"
              } focus:outline-none focus:ring-2 focus:ring-primary`}
            >
              {isLoading ? "Enviando..." : "Solicitar Cuidador"}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-lg mx-auto mt-6 text-center text-gray-600">
        <p>
          Nos comprometemos a conectar a las familias con cuidadores
          profesionales y dedicados. Su información será tratada con la máxima
          confidencialidad.
        </p>
      </div>
    </>
  );
}