"use client";

import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const IMAGE_URL = "http://localhost:5173/welcome_image.webP";

function WelcomeImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/images?url=${encodeURIComponent(
            IMAGE_URL
          )}`
        );
        if (response.ok) {
          const data = await response.json();
          setImage(data);
        } else {
          console.error("Erro ao buscar imagem:", response.status);
          setImage(null);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
        setImage(null);
      }
    };
    fetchImage();
  }, []);

  if (!image) return null;

  return (
    <Image
      className="rounded-b-sm"
      src={image.image_url}
      alt={image.image_name}
      objectFit="cover"
      width="100%"
      height="100%"
    />
  );
}

export default WelcomeImage;
