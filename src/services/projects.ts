interface IProject {
  name: string;
  technologies: string[];
  description: string;
}

export const projects: IProject[] = [
  {
    name: "Notepad App",
    technologies: ["ReactJS", "NodeJS", "styled-conponents"],
    description:
      "Esse foi meu um dos meus primeiros projetos iniciando com react e para mim o mais importante, ele é um bloco de notas onde o usuário cria sua conta e salva suas anotações",
  },
];
