import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment.module.css";

import migrate from "../../../../public/migrate600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={migrate}
            alt="Image of a files leaving a computer"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Presentation Design and Development</p>
            <h2>PowerPoint Experts Consulting Services</h2>
            <p>
              When it comes to Microsoft PowerPoint, our Australia-wide,
              cross-industry consultants deliver a prompt, quality service with
              competitive pricing. Our Microsoft PowerPoint experts specialise
              in presentation templates, design, customisation, automation,
              integration, training and support.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;