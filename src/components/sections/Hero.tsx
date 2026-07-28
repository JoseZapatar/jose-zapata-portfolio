"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
};

function AnimatedNumber({
  value,
  suffix = "",
}: AnimatedNumberProps) {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(motionValue, "change", (latestValue) => {
    setDisplayValue(Math.round(latestValue));
  });

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.9,
      delay: 0.65,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => {
      controls.stop();
    };
  }, [motionValue, value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothPointerX = useSpring(pointerX, {
    stiffness: 180,
    damping: 24,
    mass: 0.7,
  });

  const smoothPointerY = useSpring(pointerY, {
    stiffness: 180,
    damping: 24,
    mass: 0.7,
  });

  const rotateX = useTransform(smoothPointerY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothPointerX, [-0.5, 0.5], [-5, 5]);
  const cardX = useTransform(smoothPointerX, [-0.5, 0.5], [-4, 4]);
  const cardY = useTransform(smoothPointerY, [-0.5, 0.5], [-4, 4]);

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    const relativeX =
      (event.clientX - bounds.left) / bounds.width - 0.5;

    const relativeY =
      (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(relativeX);
    pointerY.set(relativeY);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const textItemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-6 pb-20 pt-28 lg:px-8"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.65, 1, 0.65],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-1 w-1 rounded-full bg-blue-300/60 shadow-[0_0_20px_rgba(147,197,253,0.7)]" />
        <div className="absolute right-[18%] top-[28%] h-1.5 w-1.5 rounded-full bg-cyan-300/40 shadow-[0_0_24px_rgba(103,232,249,0.5)]" />
        <div className="absolute bottom-[18%] left-[35%] h-1 w-1 rounded-full bg-violet-300/40 shadow-[0_0_20px_rgba(196,181,253,0.5)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={textItemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Disponible para oportunidades
          </motion.div>

          <motion.p
            variants={textItemVariants}
            className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-blue-400"
          >
            <Sparkles size={16} />
            Software Developer
          </motion.p>

          <motion.h1
            variants={textItemVariants}
            className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
          >
            Construyo aplicaciones web completas, seguras y
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent">
              {" "}
              escalables.
            </span>
          </motion.h1>

          <motion.p
            variants={textItemVariants}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-400"
          >
            Soy José Zapata, desarrollador de software enfocado en backend con{" "}
            <span className="whitespace-nowrap text-slate-300">
              ASP.NET Core
            </span>
            , SQL Server y React. Desarrollo soluciones desde la arquitectura
            de datos hasta la interfaz final.
          </motion.p>

          <motion.div
            variants={textItemVariants}
            className="mt-5 flex items-center gap-2 text-sm text-slate-500"
          >
            <MapPin size={16} />
            Nicaragua
          </motion.div>

          <motion.div
            variants={textItemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_14px_40px_rgba(37,99,235,0.28)]"
            >
              Ver proyectos

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://github.com/JoseZapatar"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_14px_40px_rgba(0,0,0,0.25)]"
            >
              <FaGithub
                size={17}
                className="transition-transform duration-300 group-hover:rotate-6"
              />

              Ver GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="relative mx-auto w-full max-w-sm"
          style={{
            perspective: 1200,
          }}
        >
          <motion.div
            className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.65, 0.95, 0.65],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            style={{
              rotateX,
              rotateY,
              x: cardX,
              y: cardY,
              transformStyle: "preserve-3d",
            }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-blue-950/30 backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] via-transparent to-blue-500/[0.04]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.13),transparent_45%)]" />

              <div
                className="relative flex h-full flex-col items-center justify-center px-8 text-center"
                style={{
                  transform: "translateZ(35px)",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-4xl font-semibold text-blue-300 shadow-[0_0_50px_rgba(59,130,246,0.12)]"
                >
                  JZ
                </motion.div>

                <p className="mt-6 text-xl font-semibold text-white">
                  José Zapata
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Backend & Full Stack Developer
                </p>

                <div className="mt-8 grid w-full grid-cols-2 gap-3">
                  <motion.div
                    whileHover={{
                      y: -3,
                      borderColor: "rgba(96, 165, 250, 0.3)",
                    }}
                    className="rounded-xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-lg font-semibold text-white">
                      <AnimatedNumber value={2} />
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Proyectos principales
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -3,
                      borderColor: "rgba(96, 165, 250, 0.3)",
                    }}
                    className="rounded-xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-lg font-semibold text-white">
                      <AnimatedNumber value={2} />
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Aplicaciones en vivo
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-5 left-1/2 h-10 w-[78%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-2xl"
            animate={{
              scaleX: [0.92, 1.04, 0.92],
              opacity: [0.45, 0.7, 0.45],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Ir a la sección sobre mí"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: [0, 7, 0],
        }}
        transition={{
          opacity: {
            duration: 0.5,
            delay: 1.2,
          },
          y: {
            duration: 1.8,
            delay: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 transition-colors hover:text-white lg:block"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}