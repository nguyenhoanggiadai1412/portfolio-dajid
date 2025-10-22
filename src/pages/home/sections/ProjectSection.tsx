import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProjectSection.css"; // 👈 import CSS thuần

const cards = [
  {
    id: 1,
    title: "Card 1",
    bg: "linear-gradient(to bottom right, #ec4899, #ef4444)", // hồng → đỏ
  },
  {
    id: 2,
    title: "Card 2",
    bg: "linear-gradient(to bottom right, #3b82f6, #06b6d4)", // xanh dương → cyan
  },
  {
    id: 3,
    title: "Card 3",
    bg: "linear-gradient(to bottom right, #22c55e, #84cc16)", // xanh lá → lime
  },
  {
    id: 4,
    title: "Card 4",
    bg: "linear-gradient(to bottom right, #3b82f6, #06b6d4)", // xanh lá → lime
  },
];

export default function ProjectSection() {
  const [index, setIndex] = useState(0);

  const rotateLeft = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  const rotateRight = () => setIndex((prev) => (prev + 1) % cards.length);

  const getPosition = (i: number) => {
    const diff = (i - index + cards.length) % cards.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <section className="container">
      <div className="carousel">
        {/* Nút trái */}
        <button className="arrow left" onClick={rotateLeft}>
          <ChevronLeft size={40} />
        </button>

        {/* Vùng hiển thị các thẻ */}
        <div className="carousel-container">
          {cards.map((card, i) => {
            const pos = getPosition(i);

            return (
              <motion.div
                key={card.id}
                className={`card ${pos}`}
                style={{ background: card.bg }}
                animate={
                  pos === "center"
                    ? { scale: 1.1, x: 0, rotateY: 0, zIndex: 3, opacity: 1 }
                    : pos === "left"
                    ? { scale: 0.8, x: -220, rotateY: 10, zIndex: 2, opacity: 0.6 }
                    : { scale: 0.8, x: 220, rotateY: -10, zIndex: 2, opacity: 0.6 }
                }
                transition={{ type: "spring", stiffness: 80 }}
              >
                {card.title}
              </motion.div>
            );
          })}
        </div>

        {/* Nút phải */}
        <button className="arrow right" onClick={rotateRight}>
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
}
