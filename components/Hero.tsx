import HeroLogo from "../public/hero.png"
import Image from "next/image"
import { motion } from "framer-motion"
import RedirectButton from "./Button"
import { getQuotes } from "@/lib/randomQuotes"
export default function Hero({ buttonProps }: {
  buttonProps: () => void
}) {
  const { quote, quoteAuthor } = getQuotes();
  return (
    <section
      className="hero flex"
    >
      <Image src={HeroLogo} alt="Hero Logo" className="px-10" />
      <div className="w-fit space-y-3 items-center">
        <motion.h1
          className="text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 to-orange-500"
          initial={{
            backgroundPosition: "left",
          }}
          animate={{
            backgroundPosition: "200%", // Use a large value to create a shining effect
            transition: {
              repeat: Infinity,
              duration: 3, // Adjust the duration as needed
              ease: "easeOut",
            },
          }}
        >
          Bhutanese Mushroom Names Identifier
        </motion.h1>
        <h1 className="text-2xl font-bold indent-2 tracking-widest">
          འབྲུག་གི་ཤ་མུ་ གྱི་མིང་ངོ་རྟགས།
        </h1>
        <div className="flex justify-end">
          <h3 className="mr-2 font-bold">
            With
          </h3>
          <p className="text-2xl font-bold text-blue-500">G</p>
          <p className="text-2xl font-bold text-red-500">o</p>
          <p className="text-2xl font-bold text-yellow-500">o</p>
          <p className="text-2xl font-bold text-blue-500">g</p>
          <p className="text-2xl font-bold text-green-500" > L</p >
          <p className="text-2xl font-bold text-red-500" > e</p >
          <p className="text-2xl">Net</p>
        </div>
        <RedirectButton buttonProps={buttonProps} />
        <div className="p-2 space-y-2">
          <p className="text-2xl w-[500px]">&ldquo;&nbsp;{quote}&nbsp;&ldquo;</p>
          <div className="flex justify-end">
            <p className="ml-auto italic justify-end">-{quoteAuthor}</p>
          </div>
        </div>
      </div>
    </section >
  )
}
