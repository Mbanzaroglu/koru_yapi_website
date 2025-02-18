"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  location: string;
  images: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white shadow-lg rounded-lg overflow-hidden mb-8"
    >
      {/* Image Section */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        {project.images.length > 1 ? (
          <Image
            src={project.images[currentImage]}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500"
          />
        ) : (
          <Image
            src={project.images[0]}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        )}

        {/* Proje Lokasyon Bilgisi */}
        <div className="absolute bottom-3 left-3 bg-gray-800 bg-opacity-50 text-gray-200 text-sm px-3 py-1 rounded-md">
          {project.location}
        </div>

        {/* Multiple Images için Next/Prev */}
        {project.images.length > 1 && (
          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-3">
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === 0 ? project.images.length - 1 : prev - 1
                )
              }
              className="text-white bg-black bg-opacity-50 px-2 py-1 rounded-full hover:bg-opacity-75 transition"
            >
              ◀
            </button>
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === project.images.length - 1 ? 0 : prev + 1
                )
              }
              className="text-white bg-black bg-opacity-50 px-2 py-1 rounded-full hover:bg-opacity-75 transition"
            >
              ▶
            </button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 bg-[#082e52] text-white">
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="text-gray-300 mt-2">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
