import { motion, useMotionValue, useTransform } from "motion/react";
import type { Dispatch, SetStateAction } from "react";

type CardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type CardAnimationProps = {
  cards: CardProps[];
  setCardData: Dispatch<SetStateAction<CardProps[]>>;
  id: number;
  title: string;
  description: string;
  image: string;
};

export const CardAnimation = ({
  cards,
  id,
  image,
  setCardData,
}: CardAnimationProps) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCardData((prev) => {
        const newCards = [...prev];
        const swipedCard = newCards.pop();
        if (swipedCard) newCards.unshift(swipedCard);
        return newCards;
      });
    }
  };

  return (
    <motion.article
      className="row-start-1 col-start-1 w-full h-72 bg-cover bg-center bg-no-repeat rounded-xl pointer-events-auto origin-bottom relative"
      style={{
        x,
        rotate,
        opacity,
        backgroundImage: `url(${image})`,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.3}
      onDragEnd={handleDragEnd}
    />
  );
};