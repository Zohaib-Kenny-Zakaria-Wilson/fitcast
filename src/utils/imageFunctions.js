// src/utils/imageFunctions.js

import * as bodyPix from "@tensorflow-models/body-pix";
import "@tensorflow/tfjs";
import ColorThief from "colorthief";
import chroma from "chroma-js";

export const compressImage = (imageURL) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageURL;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const compressedImageURL = canvas.toDataURL("image/png", 0.8); // Adjust quality as needed
      resolve(compressedImageURL);
    };
    img.onerror = () => {
      resolve(imageURL); // Fallback to original image if compression fails
    };
  });
};

export const removeBackground = async (imageURL) => {
  try {
    const net = await bodyPix.load();
    const img = new Image();
    img.src = imageURL;
    await new Promise((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = (err) => reject(err);
    });

    const segmentation = await net.segmentPerson(img, {
      internalResolution: "high",
      segmentationThreshold: 0.7,
    });

    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0, img.width, img.height);
    const imageData = ctx.getImageData(0, 0, img.width, img.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
      const isPerson = segmentation.data[i / 4];
      if (!isPerson) {
        imageData.data[i + 3] = 0;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    const bgRemovedImageURL = canvas.toDataURL();
    return bgRemovedImageURL;
  } catch (error) {
    console.error("Error removing background:", error);
    return imageURL; // Fallback to original image if background removal fails
  }
};

export const extractDominantColor = (imageURL, setItem) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageURL;
    img.onload = () => {
      if (img.width === 0 || img.height === 0) {
        setItem((prevItem) => ({
          ...prevItem,
          dominantColor: "#F0F0F0",
          contrastColor: "#000000",
        }));
        resolve();
        return;
      }

      const colorThief = new ColorThief();
      try {
        const dominantColor = colorThief.getColor(img);
        if (dominantColor && dominantColor.length >= 3) {
          const dominantChromaColor = chroma(dominantColor);
          const contrastingColor =
            dominantChromaColor.luminance() > 0.5
              ? dominantChromaColor.darken(3)
              : dominantChromaColor.brighten(3);

          setItem((prevItem) => ({
            ...prevItem,
            dominantColor: `rgb(${dominantColor.join(",")})`,
            contrastColor: contrastingColor.hex(),
          }));
        } else {
          setItem((prevItem) => ({
            ...prevItem,
            dominantColor: "#F0F0F0",
            contrastColor: "#000000",
          }));
        }
        resolve();
      } catch (error) {
        setItem((prevItem) => ({
          ...prevItem,
          dominantColor: "#F0F0F0",
          contrastColor: "#000000",
        }));
        resolve();
      }
    };
    img.onerror = () => {
      setItem((prevItem) => ({
        ...prevItem,
        dominantColor: "#F0F0F0",
        contrastColor: "#000000",
      }));
      resolve();
    };
  });
};
