import { useState } from "react";
import Slider, { Settings } from "react-slick";
import { CaretRight, CaretLeft, IconProps } from "phosphor-react";
import { technologies } from "../services/technologies";
import * as Hover from "@radix-ui/react-hover-card";
import color from "tailwindcss/colors";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Skills = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "350px",
    swipe: true,
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (_, next) => setSliderIndex(next),
    responsive: [
      {
        breakpoint: 368,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1126,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1226,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
    ],
  };

  const skills: string[] = [
    "Habilidade de desenvolver com diversas formas de estilização",
    "Criação de componentes performaticos e acessíveis",
    "Sites com acessiblidade e responsividade",
    "Desenvolvimento multiplataforma",
    "Criação de animações",
    "Grande conhecimento e experiência de consumo de API's",
    "Manipulação de Banco de Dados com MySql e MongoDB",
    "Conhecimento e experiência na metodologia scrum",
  ];

  const iconSettings: IconProps = {
    color: color.zinc[200],
    size: 42,
  };

  return (
    <section className="w-screen px-14 h-max items-center flex flex-col">
      <h1 className="text-5xl text-zinc-300 mt-10 pb-1 mb-10">Habilidades</h1>
      <Slider
        {...settings}
        className="w-full max-w-[1600px] h-max"
        nextArrow={<CaretRight {...iconSettings} />}
        prevArrow={<CaretLeft {...iconSettings} />}
      >
        {skills.map((skill, index) => (
          <div
            className={clsx(
              "grid place-items-center transition-all duration-500 bg-gradient-to-br  p-1 rounded-3xl",
              {
                "scale-[.8] shadow-gradient-md from-blue-950 via-fuchsia-950 to-fuchsia-950 ":
                  sliderIndex === index,
                "scale-50 shadow-none bg-transparent": sliderIndex !== index,
              }
            )}
          >
            <div
              key={skill}
              className="h-52 transition-all duration-500 flex items-center justify-center rounded-lg "
            >
              <div className="items-center justify-center flex h-full w-full bg-black rounded-3xl px-5">
                <span className="text-zinc-300 text-4xl text-center ">
                  {skill}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* <h1 className="mt-10 text-xl ">Tecnologias</h1> */}
      <div className="w-full h-max items-center flex flex-row justify-center gap-20 mt-10 ">
        {technologies.map((technologie, index) => {
          const { name, icon } = technologie;
          return (
            <>
              <Hover.Root openDelay={200} closeDelay={100} key={index}>
                <Hover.Trigger>{icon}</Hover.Trigger>
                <Hover.Portal>
                  <Hover.Content className="bg-zinc-900 px-2 rounded-md">
                    <Hover.Arrow className="fill-zinc-900 mb-2" />
                    <h1>{name}</h1>
                  </Hover.Content>
                </Hover.Portal>
              </Hover.Root>
            </>
          );
        })}
      </div>
    </section>
  );
};
