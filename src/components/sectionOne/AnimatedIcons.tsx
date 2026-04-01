import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "motion/react";
import { getPolarCoordinates } from "../../utils/spinningCalculations";
import { itemIcons } from "../../utils/itemIcons";

export const AnimatedIcons = () => {
  return (
    <div className=" flex justify-center overflow-hidden p-4 ">
      <motion.div
        className="rounded-full aspect-square relative p-5"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 10,
        }}
      >
        <motion.div
          className="h-full max-w-60 md:max-w-72 w-full lg:max-w-96 lg:p-8 p-3 drop-shadow-[0px_0px_7px] drop-shadow-accent"
          animate={{
            rotate: -360,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 10,
          }}
        >
          <DotLottieReact
            src="/avatar.lottie"
            loop
            autoplay
            className=""
          />
        </motion.div>
        {itemIcons.map((Icon, i) => {
          const coords = getPolarCoordinates(i, itemIcons.length, 50);

          return (
            <motion.div
              key={i}
              className="absolute  rounded-full -translate-x-1/2 -translate-y-1/2 grid place-content-center "
              style={coords}
              animate={{
                rotate: -360,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 10,
              }}
            >
              <Icon className="size-6  text-textPrimary" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
