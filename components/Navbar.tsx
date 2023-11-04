"use client"
import { motion } from "framer-motion"
import { Icons } from "./Icons"
export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div>
        <Icons.logo />
      </div>
      <ul className="nav-list flex space-x-5 ml-auto mr-2">
        <motion.li
          className="nav-item"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          initial={false}
        >
          <a href="#">Features</a>
        </motion.li>
        <motion.li
          className="nav-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#">Know More</a>
        </motion.li>
        <motion.li
          className="nav-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#">About us</a>
        </motion.li>
      </ul>
    </motion.nav>
  )
}
