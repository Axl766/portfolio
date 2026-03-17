import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "motion/react";
import { getPolarCoordinates } from "../../utils/spinningCalculations";
import { itemIcons } from "../../utils/itemIcons";

export const AnimatedIcons = () => {
  return (
    <div className=" flex justify-center   z-50 p-5 sm:p-20">
      <motion.div
        className="rounded-full aspect-square relative "
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
          className="w-full h-full"
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
            src="https://lottie.host/2ae53fbc-b58e-4dc0-8037-341a6bea6485/onw8pprzjw.lottie"
            loop
            autoplay
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
              <Icon className="size-8 text-white " />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
