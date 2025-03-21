"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Information Science and Engineering</span>, I decided to pursue my
        passion for programming. I enrolled in Java Full Stack Developer course and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        My favorite part of programming is the
        problem-solving aspect. I love figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Java, Spring Boot, React.js, SQL
        </span>
        . I am also familiar with Python. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        When I'm not coding, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium"> stock trading and forex trading</span>. I'm also
        interested in cooking.
      </p>
    </motion.section>
  );
}
