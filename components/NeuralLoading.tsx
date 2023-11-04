import { Icons } from "./Icons"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useEffect } from "react"

export default function NeuralLoading() {
  const controls = useAnimation()
  useEffect(() => {
    controls.start({
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    })
  }, [controls])
  return (
    <>
      <Icons.neuralLoading className={"opacity-60 mx-auto"} />
      <motion.p
        className="text-center text-xl font-bold "
        animate={controls}
      >
        The image is being predicted please wait...
      </motion.p>
    </>
  )
}
