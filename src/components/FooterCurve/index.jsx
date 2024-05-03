// 'use client'
// import React from 'react'
// import { useRef } from 'react';
// import { useScroll, useTransform, motion } from 'framer-motion';
// import styles from './style.module.scss';

// export default function FooterCurve() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"]
//   })

//   const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
//   const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
//   const height = useTransform(scrollYProgress, [0, 0.8], [30, 0])
//   return (
//     <>
//       <motion.div style={{ height }} className={styles.circleContainer}>
//         <div className={styles.circle}></div>
//       </motion.div>
//     </>
//   )
// }


// 'use client'
// import React from 'react'
// import { useRef } from 'react';
// import { useScroll, useTransform, motion } from 'framer-motion';
// import styles from './style.module.scss';

// export default function FooterCurve() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"]
//   })

//   // Increase the range of values to make the animation faster
//   const x1 = useTransform(scrollYProgress, [0, 1], [0, 500]) // Increased from 150
//   const x2 = useTransform(scrollYProgress, [0, 1], [0, -500]) // Increased from -150
//   const height = useTransform(scrollYProgress, [0, 0.8], [130, 0]) // Increased from 30
//   // const height = useTransform(scrollYProgress, [0, 0.8], [130, 0]) // Increased from 30

//   console.log("height", height);

//   return (
//     <>
//       <motion.div style={{ height }} className={styles.circleContainer}>
//         {/* Apply the x1 and x2 values to control horizontal position */}
//         <div className={styles.circle} style={{ x: x1 }}></div>
//         {/* Apply the x2 value to control horizontal position */}
//         <div className={styles.circle} style={{ x: x2 }}></div>
//       </motion.div>
//     </>
//   )
// }


'use client'
import React from 'react';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';

export default function FooterCurve() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Adjust the range and magnitude of the animations to work with different content sizes
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 300]); 
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -300]); 
  const height = useTransform(scrollYProgress, [0, .8], [19, 0]);

  return (
    <div ref={container}>
      <motion.div style={{ height }} className={styles.circleContainer}>
        {/* Apply the x1 and x2 values to control horizontal position */}
        <div className={styles.circle} style={{ x: x1 }}></div>
        <div className={styles.circle} style={{ x: x2 }}></div>
      </motion.div>
    </div>
  );
}
