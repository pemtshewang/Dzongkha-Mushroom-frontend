import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useAnimationControls } from 'framer-motion';
import { Icons } from './Icons';

const ImageUploadPortal = ({ buttonProps, loadingProps }: {
  buttonProps: (file: File) => void,
  loadingProps: boolean
}) => {
  const [files, setFiles] = useState([]);
  const animationControls = useAnimationControls();
  const controls = useAnimation();

  const handleFileChange = (event: {
    target: {
      files: any;
    };
  }) => {
    setFiles(event?.target?.files);
  };

  // Image Detail Component
  const DetailImage = ({ img }: {
    img: File
  }) => {
    return (
      <motion.div
        animate={controls}
        initial={{ visibility: "hidden" }}
        className="flex flex-col  border-2 w-full border-dotted mx-auto"
      >
        Image
      </motion.div>
    )
  }
  // Image Component Detail Ends

  return (
    <>
      <DetailImage img={files[0]} />
      <motion.div
        animate={animationControls}
        initial={{ opacity: 1 }}
        className={`flex flex-col items-center justify-center   mx-auto`}
      >

        <button
          className='btn btn-primary ml-auto hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed'
          onClick={() => {
            buttonProps(files[0]);
          }}
          //disable the button if there is no image
          disabled={files.length < 1}
        >
          Check
        </button>
        {
          files.length > 0 && (
            <div className="space-y-2 mx-auto">
              <div className='flex'>
                <h2 className='text-xl text-bold'>The image has been uploaded</h2>
              </div>
              {
                loadingProps ? (
                  <div className="relative w-1/2 h-1/2 mx-auto border overflow-hidden">
                    <img
                      src={URL.createObjectURL(files[0])}
                      alt="uploaded image"
                      className="object-cover w-full h-full"
                    />
                    <div className={`absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-green-400 to-transparent animate-scanning-line ${loadingProps ? 'animate-paused' : ''}`}></div>
                  </div>
                ) : (
                  <img
                    src={URL.createObjectURL(files[0])}
                    alt="uploaded image"
                    className="w-1/2 h-1/2 border mx-auto"
                  />
                )
              }
            </div>
          )
        }
        {
          files.length < 1 && (
            <div className="border p-2 mt-2 min-w-[250px]">
              <Icons.image />
              <Icons.arrowdown className={"w-10 h-10 font-bold fill-red-600 mx-auto animate-bounce opacity-70"} />
              <p className='text-md font-bold text-center text-gray-500'>
                Upload your image or Drag your image here
              </p>
            </div>
          )
        }
        <div className='p-5'>
          < input
            type="file"
            className="hidden"
            id="file-input"
            onChange={handleFileChange}
          />
          <label
            htmlFor='file-input'
            className="cursor-pointer  p-2 rounded-md btn btn-primary hover:bg-green-600"
          >
            {
              files.length > 0 ? (
                "Change image"
              ) : "Upload image"
            }
          </label>
        </div>
      </motion.div >
    </>
  );
};

export default ImageUploadPortal;
