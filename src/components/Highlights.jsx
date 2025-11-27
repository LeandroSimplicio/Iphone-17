


function Highlights() {


  const specs = [
    {
      value: "48MP",
      label: "Principal",
      extra: "Sensor quad-pixel com foco automático",
      color: "text-blue-600",
    },
    {
      value: "12MP",
      label: "Ultra Wide",
      extra: "Campo de visão de 120° com modo noturno",
      color: "text-orange-500",
    },
    {
      value: "12MP",
      label: "Telefoto 5x",
      extra: "Zoom óptico de 5x com estabilização",
      color: "text-blue-600",
    },
  ];

  return (
    <section className="bg-black py-20 px-6 w-full" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design revolucionário</h2>
          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para criar a melhor experiência.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="/img/titanium-design.jpg"
              alt="iphone-titanium"
            />
            <h3 className="font-bolt mb-2 text-3xl">Titânium Premium </h3>
            <p className="text-gray-300">
              Estrutura em titânio de grau aeroespacial. O smartphone mais forte
              do mundo.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="/img/ios-features.jpg"
              alt="ios 2025"
            />
            <h3 className="font-bolt mb-2 text-3xl">IOS 26</h3>
            <p className="text-gray-300">
              O sistema operacional mais avançado de todos os tempos.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performace">
          <h3 className="text-4xl font-bold mb-6 text-gradient">A18 PRO</h3>

          <p className="text-gray-300 mb-6 ">
            O chip mais poderesso de todos os tempos
          </p>
          <img
            className="w-full rounded-2xl mb-4"
            src="public/img/chip-a18-pro.jpg"
            alt="chip-a18-pro"
          />

          <ul className="space-y-3 text-gray-300">
            <li>CPU 20% mais rárpida</li>
            <li>GPU 25% mais eficiente</li>
            <li>Neural Engien com 16 núcleos </li>
            <li> Ray Tracing acelerado por hardware</li>
          </ul>
        </div>

        <div id="camera" className="text-center">
          <h3 className="text-4xl font-bold mb-10">
            Sistemas de câmera Pro avançado
          </h3>
          <div className="grid grid-cols-3 gap-6 mx-auto max-w-5xl">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="flex flex-col  items-center cursor-pointer bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <p className={`text-4xl font-bold mb-4 ${spec.color}`}>
                  {spec.value}
                </p>
                <h4 className="text-xl font-semibold text-gray-300 mb-2">{spec.label}</h4>
                <p className="text-sm text-gray-400 mt-2 text-center">{spec.extra}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
