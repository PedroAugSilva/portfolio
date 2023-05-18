import { useRef } from "react";
import { Card } from "./Card";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { projects } from "../services/projects";

export const Projects = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleCarousel = (action: "back" | "skip") => {
    switch (action) {
      case "back":
        divRef.current!.scrollLeft -= divRef.current!.offsetWidth;
        break;
      case "skip":
        divRef.current!.scrollLeft += divRef.current!.offsetWidth;
        break;
    }
  };

  return (
    <div className="h-screen items-center  flex flex-col my-12 pt-10 w-full  overflow-hidden relative">
      <h1 className="text-5xl ">Projetos</h1>
      {projects.length > 0 && (
        <>
          <button
            className="absolute left-24 top-96 bg-zinc-900 p-3 rounded-full z-10 transition-all duration-100 active:scale-90"
            onClick={() => handleCarousel("back")}
          >
            <ArrowLeft size={24} />
          </button>

          <button
            className="absolute right-24 top-96 bg-zinc-900 p-3 rounded-full z-10 transition-all duration-100  active:scale-90 "
            onClick={() => handleCarousel("skip")}
          >
            <ArrowRight size={24} />
          </button>
        </>
      )}
      <div
        className="w-full flex h-max  py-5 flex-row items-center gap-5 overflow-x-auto overflow-y-hidden pl-24 relative scrollbar-none scroll-smooth"
        ref={divRef}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            technologies={project.technologies}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};
