"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Possessing advanced proficiency as a{" "}
        <span className="italic">software developer</span>, specializing in{" "}
        <span className="font-bold">html, css and JavaScript</span>. Supporting
        the creation of dynamic and interactive applications. Having hands-on
        experience working with{" "}
        <span className="font-bold">Figma</span> powerful design tool.
      </p>
    </motion.section>
  );
}
