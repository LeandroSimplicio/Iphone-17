import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo simples (opcional) */}
        <h1 className="text-xl font-bold">iPhone 17</h1>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#design" className="hover:text-gray-300">Design</a>
          <a href="#performace" className="hover:text-gray-300">Performance</a>
          <a href="#camera" className="hover:text-gray-300">Câmera</a>
          <a href="#colors" className="hover:text-gray-300">Cores</a>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">
            Comprar
          </button>
        </div>

        {/* Botão Hamburger Mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md p-6 flex flex-col gap-6 text-center">

          <a onClick={() => setOpen(false)} href="#design" className="hover:text-gray-300">
            Design
          </a>

          <a onClick={() => setOpen(false)} href="#performace" className="hover:text-gray-300">
            Performance
          </a>

          <a onClick={() => setOpen(false)} href="#camera" className="hover:text-gray-300">
            Câmera
          </a>

          <a onClick={() => setOpen(false)} href="#colors" className="hover:text-gray-300">
            Cores
          </a>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">
            Comprar
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
