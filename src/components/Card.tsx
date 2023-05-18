import image from "../assets/notepad.png";

interface IProps {
  name: string;
  technologies: string[];
  description: string;
}

export const Card = ({ name, technologies, description }: IProps) => {
  return (
    <div className=" rounded-xl p-6 w-96  flex flex-col items-start  transition-all duration-500 hover:scale-105  cursor-pointer group  ">
      <figure className="w-80 h-80 rounded-lg overflow-hidden">
        <img
          src={image}
          alt="port"
          className="w-full h-full rounded-lg object-cover duration-1000 group-hover:scale-125  "
        />
      </figure>
      <h1 className="text-2xl mt-2 w-full text-zinc-400 text-left border-b border-zinc-400 pb-1">
        {name}
      </h1>
      <div className="items-center flex flex-row gap-2 mt-3 flex-wrap ">
        {technologies.map((item, index) => (
          <span
            key={index}
            className="border border-zinc-400 text-zinc-400 px-2 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="text-zinc-400 mt-2">
        <p>{description}</p>
      </div>
    </div>
  );
};
