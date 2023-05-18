import avatar from "../assets/avatar-pedro.png";
import { motion, Variants } from "framer-motion";
import { LinkedinLogo, GithubLogo } from "phosphor-react";
import * as Hover from "@radix-ui/react-hover-card";

export const AbouteMe = () => {
  const container: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="flex items-center justify-between flex-row p-14 relative h-screen w-full max-w-[1600px]  ">
      <motion.div
        className="items-start flex flex-col  w-1/2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-7xl font-extralight text-zinc-100"
          variants={item}
        >
          Pedro Augusto
        </motion.h1>
        <motion.h2
          className="text-5xl font-extralight text-zinc-400"
          variants={item}
        >
          Souza da Silva
        </motion.h2>
        <motion.span
          className="font-extralight text-lg border border-zinc-300 text-zinc-300 rounded-full px-4 mt-5"
          variants={item}
        >
          Desenvolvedor Full-Stack
        </motion.span>

        <motion.p
          className="w-full h-auto mt-10 font-extralight font-firacode"
          variants={item}
        >
          Olá!! Eu sou o Pedro, atualmente estudo na Etec (Escola Técnica
          Estadual de São Paulo) no curso de Desenvolvimento de Sistema.
          <br /> Minha Paixão pela programação veio quando eu tive minhas
          primeiras aulas de Programação Web, desde então eu sempre procuro
          evoluir minhas habilidades na programação e tudo aquilo que vou
          aprendendo eu gosto de representar em projetos. <br /> Descobri que eu
          sou capaz de tudo quando eu fiz o meu primeiro projeto, aquele que a
          gente nunca esquece hahaha, nele eu fiz o clone do Spotify, foi
          especificamente aí onde eu quis estudar programação de fato, hoje em
          dia eu estou estudando React, React Native e Node, mas eu pretendo
          migrar para outras linguagens como por exemplo, Java e PHP.
        </motion.p>
      </motion.div>
      <motion.div
        className=" w-1/2 items-center justify-center flex flex-col"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={avatar}
          alt=""
          className=" w-72 h-auto"
          variants={item}
        />
        <motion.div
          className="w-max h-max flex flex-row items-center gap-5 mt-5"
          variants={item}
        >
          <Hover.Root openDelay={200} closeDelay={100}>
            <Hover.Trigger>
              <a
                href="https://www.linkedin.com/in/pedro-s-76b0b6220/"
                target="_blank"
              >
                <LinkedinLogo
                  size={42}
                  className="transition-all duration-500 hover:text-blue-600"
                />
              </a>
            </Hover.Trigger>
            <Hover.Portal>
              <Hover.Content className="bg-zinc-900 px-2 rounded-md">
                <Hover.Arrow className="fill-zinc-900 mb-2" />
                <span className="text-lg  text-zinc-300">Linkedin</span>
              </Hover.Content>
            </Hover.Portal>
          </Hover.Root>

          <Hover.Root openDelay={200} closeDelay={100}>
            <Hover.Trigger>
              <a href="https://github.com/PedroAugSilva" target="_blank">
                <GithubLogo
                  size={42}
                  className="transition-all duration-500 hover:text-blue-600"
                />
              </a>
            </Hover.Trigger>
            <Hover.Portal>
              <Hover.Content className="bg-zinc-900 px-2 rounded-md">
                <Hover.Arrow className="fill-zinc-900 mb-2" />
                <span className="text-lg  text-zinc-300">GitHub</span>
              </Hover.Content>
            </Hover.Portal>
          </Hover.Root>
        </motion.div>
      </motion.div>
      <div className="absolute w-full flex-1 inset-0 -z-10 items-end justify-center flex flex-col px-28 max-w-[1600px]">
        <div className="items-center justify-center flex flex-row rotate-[20deg]">
          <div className="w-64 h-40 bg-fuchsia-800 rounded-full blur-3xl " />
          <div className="w-64 h-40 bg-blue-800 rounded-full blur-3xl " />
        </div>
      </div>
    </section>
  );
};
