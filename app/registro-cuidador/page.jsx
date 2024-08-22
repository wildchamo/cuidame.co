"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function RegistroCuidador() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
          Registrar Cuidador
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Complete el formulario a continuación para unirse a nuestra comunidad
          de cuidadores profesionales.
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
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Teléfono de Contacto</label>
            <input
              {...register("phone", { required: "El teléfono es requerido" })}
              type="tel"
              placeholder="Ingrese su número de teléfono"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Horarios Disponibles</label>
            <input
              {...register("availableHours", {
                required: "Los horarios disponibles son requeridos",
              })}
              type="text"
              placeholder="Ingrese sus horarios disponibles (ej. 9am - 5pm)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.availableHours && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.availableHours.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Experiencia</label>
            <textarea
              {...register("experience", {
                required: "La experiencia es requerida",
              })}
              placeholder="Describa brevemente su experiencia en el cuidado"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            {errors.experience && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.experience.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-lg text-white ${
              isLoading ? "bg-gray-400" : "bg-primary hover:bg-primary-dark"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
          >
            {isLoading ? "Enviando..." : "Registrar Cuidador"}
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
