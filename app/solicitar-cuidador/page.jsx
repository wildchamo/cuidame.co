"use client";

import { useForm, SubmitHandler } from "react-hook-form";
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
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
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
              {...register("telefono", { required: "El teléfono es requerido" })}
              type="tel"
              placeholder="Ingrese su número de teléfono"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.telefono && <p className="text-red-500 text-sm mt-1 ml-1">{errors.telefono.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Fecha</label>
            <input
              {...register("fecha", { required: "La fecha es requerida" })}
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.fecha && <p className="text-red-500 text-sm mt-1 ml-1">{errors.fecha.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">
              Descripción del Servicio
            </label>
            <textarea
              {...register("descripcion", { required: "La descripción es requerida" })}
              placeholder="Describa brevemente el tipo de cuidado que necesita"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            {errors.descripcion && <p className="text-red-500 text-sm mt-1 ml-1">{errors.descripcion.message}</p>}
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