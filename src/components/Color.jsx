import { useState } from "react";

function Color() {
  const colors = [
    {
      id: "blue",
      name: "Titânio Azul",
      image: "/public/img/iphone-blue.jpg",
      colorClass: "bg-blue-500",
    },
    {
      id: "silver",
      name: "Titânio Natural",
      image: "/public/img/iphone-silver.jpg",
      colorClass: "bg-gray-300",
    },
    {
      id: "orange",
      name: "Titânio Laranja",
      image: "/public/img/iphone-orange.jpg",
      colorClass: "bg-orange-500",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("blue");

  const models = [
    {
      name: "Pro Max",
      screen: "6.9 polegadas",
      storage: "256GB, 512GB ou 1TB",
      bateria: "33h de vídeo",
      weight: "221g",
    },
    {
      name: "Pro",
      screen: "6.3 polegadas",
      storage: "128GB, 256GB ou 512GB",
      bateria: "29h de vídeo",
      weight: "199g",
    },
  ];

  return (
    <section id="colors" className="bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb:text-6xl font-bold mb-4">
            Escolha sua cor
          </h2>
          <p className="text-xl text-gray-400">
            Quatro acabamentos em titânio lindos
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center min-h-[500px]">
              <img
                src={colors.find((color) => color.id === selectedColor).image}
                alt="Imagem do Iphone 17"
                className="max-w-full max-h-[600px] mx-auto"
              />
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                <h3 className="text-2xl font-semibold">
                  {colors.find((color) => color.id === selectedColor).name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className="{`relative transition-all duration-300 cursor-pointer p-2 rounded-full hover:scale-110 focus:outline-none`}"
            >
              <div
                className={`w-16 h-16 border-4 rounded-full ${
                  color.colorClass
                } ${
                  selectedColor === color.id
                    ? "border-white "
                    : "border-gray-600"
                }`}
              ></div>
            </button>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-4xl font-bold mb-3">{model.name}</h3>
                    <ul className="text-gray-300 space-y-2">
                    <li className="text-gray-400 mb-4"><strong>Tela:</strong> {model.screen}</li>
                    <li><strong>Armazenamento:</strong> {model.storage}</li>
                    <li><strong>Bateria:</strong> {model.bateria}</li>
                    <li><strong>Peso:</strong> {model.weight}</li>
                </ul>
            </div>
          ))}
        </div>


        <div className="text-center mt-16">
            <button className="bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-8 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">Compre agora á partir de R$ 9.999</button>
            <p>Ou em até 12x sem juros</p>
        </div>


      </div>
    </section>
  );
}

export default Color;
