export const Navbar = () => {
  const navItems: string[] = ["Sobre mim", "Habilidades", "Projetos"];

  const handleScrollWindow = (index: number) => {
    window.scrollTo({
      top: (window.screen.height - 100 * index) * index,
      behavior: "smooth",
    });
  };

  return (
    <header className="w-screen h-14 items-center justify-center flex gap-10 flex-row fixed top-0 z-10 backdrop-blur-sm">
      {navItems.map((item, index) => (
        <span
          key={item}
          onClick={() => handleScrollWindow(index)}
          className="text-zinc-400 text-lg font-light hover:text-zinc-200 transition-all duration-300 cursor-pointer"
        >
          {item}
        </span>
      ))}
    </header>
  );
};
