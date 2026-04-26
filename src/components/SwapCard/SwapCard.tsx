import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { useState } from "react";
import styles from "./SwapCard.module.css";
import Card from "./Card";
import { Content } from "antd/es/layout/layout";
import character from "../../assets/img/logo_sgu.png";

const cards = [
  {
    id: 1,
    title: "TechWorldMap",
    bg: "linear-gradient(to bottom right, #06b6d4c8, #06b5d4c8)",
    content: <div>Geographic Visualization System</div>,
    logoSrc: character
  },
  {
    id: 2,
    title: "PaymentHub",
    bg: "linear-gradient(to bottom right, #06b6d4c8, #06b5d4c8)",
    content: <div>Real-time Payment Notification System</div>
  },
  {
    id: 3,
    title: "PostFinder ",
    bg: "linear-gradient(to bottom right, #06b6d4c8, #06b5d4c8)",
    content: <div>Postcode Lookup App</div>,
  },
  {
    id: 4,
    title: "FinMan",
    bg: "linear-gradient(to bottom right, #06b6d4c8, #06b5d4c8)",
    content: <div>Financial Management App</div>
  },
];

function SwapCard() {
  const [index, setIndex] = useState(0);

  const rotateLeft = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const rotateRight = () =>
    setIndex((prev) => (prev + 1) % cards.length);

  const getPosition = (i: number) => {
    const diff = (i - index + cards.length) % cards.length;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === cards.length - 1) return "left";
    return "hidden";
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={rotateLeft}
      >
        <ChevronLeft size={40} />
      </button>

      <div className={styles.carouselContainer}>
        {cards.map((card, i) => {
          const pos = getPosition(i);

          return (
            <motion.div
              key={card.id}
              className={`${styles.card} ${styles[pos]}`}
              style={{
                background: card.bg,
                pointerEvents: pos === "center" ? "auto" : "none",
              }}
              animate={
                pos === "center"
                  ? { scale: 1.1, x: 0, rotateY: 0, opacity: 1, zIndex: 3 }
                  : pos === "left"
                  ? { scale: 0.85, x: -220, rotateY: 10, opacity: 0.6, zIndex: 2 }
                  : pos === "right"
                  ? { scale: 0.85, x: 220, rotateY: -10, opacity: 0.6, zIndex: 2 }
                  : { scale: 0.6, opacity: 0, zIndex: 0 }
              }
              transition={{ type: "spring", stiffness: 90, damping: 15 }}
            >
              <Card title={card.title} description="" children={card.content} logoSrc={card.logoSrc}></Card>
              
            </motion.div>
          );
        })}
      </div>

      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={rotateRight}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}

export default SwapCard;
