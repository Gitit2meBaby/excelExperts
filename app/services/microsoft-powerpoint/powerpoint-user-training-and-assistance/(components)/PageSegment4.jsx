import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import eyes from "../../../public/eyes600x394.webp";

const PageSegment4 = () => {
  const checkItems = [
    "Task Specific Training",
    "Time and Cost Effective",
    "Onsite or Remote Access",
    "Group or Individual sessions",
    'We produce "How To" videos',
    "Highly experienced trainers",
  ];

  return (
    <div className="animate-wrapper">
      <div
        className={styles.pageSegment}
        style={{ margin: "6rem 0", scrollMarginTop: "150px" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Microsoft Powerpoint Training
            </h2>
          </div>

          <div className={styles.pointsGrid}>
            {checkItems.map((text, index) => (
              <div key={index} className={styles.point}>
                <div className={styles.tick}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={eyes}
              alt="person clicking a computer mouse"
              width={600}
              height={394}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
