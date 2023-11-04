"use client"
import ImageUploadPortal from "@/components/ImageUploadForm";
import { Icons } from "@/components/Icons";
import SkeletonLoadingPage from "@/components/Loading";
import NeuralLoading from "@/components/NeuralLoading";
import MushroomList from "@/components/static";
import { useState, useEffect } from "react";
import { getData } from "@/lib/util";
import { motion } from "framer-motion";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [fetchData, setFetching] = useState(false);
  const [detail, setDetail] = useState({
    name: "",
    dzongkhaName: "",
    scientificName: "",
    edible: "",
    description: "",
  });
  const [englishName, setEnglishName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (file: File) => {
    setImageUrl(URL.createObjectURL(file));
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch("https://pemtshewang.pythonanywhere.com/detector/", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
        cache: "no-store",
      });
      const data = await response.json();
      setEnglishName(data.prediction.toLowerCase());
      getMushroomName();
    } catch (err) {
      console.log(err);
    }
  }

  function getMushroomName() {
    setLoading(false);
    setFetching(true);
    getData({ name: englishName }).then((res) => {
      setDetail(res);
      setFetching(false);
    });
  }

  return (
    <div className="grid grid-cols-2">
      <div className="px-5">
        <div className="header flex">
          <h1 className="text-2xl font-bold">Input</h1>
          <div className="tooltip" data-tip="Image should be inserted into this section">
            <p><Icons.question className="w-9 h-9" /></p>
          </div>
        </div>
        <ImageUploadPortal buttonProps={handleSubmit} />
      </div>
      <div>
        <div className="header flex">
          <h1 className="text-2xl font-bold">Prediction</h1>
          <div className="tooltip" data-tip="Predicted Image">
            <p><Icons.question className="w-9 h-9" /></p>
          </div>
        </div>
        <div className="p-5">
          {loading ? (
            <NeuralLoading />
          ) : fetchData ? (
            <SkeletonLoadingPage />
          ) : detail.name ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              className="flex flex-col items-center justify-center"
            >
              <div className="space-y-5">
                <img
                  src={imageUrl}
                  alt="uploaded image"
                  className="w-[150px] h-[150px] border mx-auto rounded-full"
                />
                <h2 className="text-xl font-bold text-center">{detail.name}</h2>
                <div className="flex space-x-2 items-center">
                  <p className="w-[150px]">Dzongkha Name:</p>
                  <p className="font-bold text-yellow-500 tracking-widest text-2xl">
                    {detail.dzongkhaName}
                  </p>
                </div>
                <div className="flex space-x-2 items-center">
                  <p className="w-[150px]">Scientific Name:</p>
                  <p className="font-bold text-2xl">{detail.scientificName}</p>
                </div>
                <div className="flex space-x-2 items-center">
                  <p className="w-[150px]">Edible:</p>
                  <p className="font-bold text-2xl">{detail.edible}</p>
                </div>
                <div className="flex space-x-2">
                  <p className="min-w-[150px]">Description:</p>
                  <p className="font-bold">{detail.description}</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <MushroomList />
          )}
        </div>
      </div>
    </div>
  );
}
