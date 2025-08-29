import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const IMAGE_URL = "http://localhost:5173/welcome_logo.webP";

function WelcomeLogo() {
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
      src={image.image_url}
      alt={image.image_name}
      objectFit="cover"
      style={{ maxWidth: "32%", maxHeight: "30%" }}
    />
  );
}

export default WelcomeLogo;
