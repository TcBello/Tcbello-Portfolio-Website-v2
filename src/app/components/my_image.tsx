"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MyPicture from "@/assets/images/mypicture.png";
import { Fragment } from "react";

export const MyImageLargeScreen = () => {
  return (
    <motion.div
      className="max-lg:hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={MyPicture}
        alt={"My Picture"}
        // className="w-[23rem] h-[37.125rem] max-lg:hidden"
        className="w-[30rem] h-[40rem] max-lg:hidden"
        priority
      />
    </motion.div>
  );
};

export const MyImageSmallScreen = () => {
  return (
    <motion.div
      className="lg:hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={MyPicture}
        alt={"My Picture"}
        priority
        className="w-80 h-auto sm:w-[30rem] sm:h-[40rem] lg:hidden max-md:mt-4"
      />
    </motion.div>
  );
};
