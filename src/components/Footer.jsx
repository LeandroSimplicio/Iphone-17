function Footer() {
  const sections = [
    {
      title: "Comprar e Saber mais",
      link: [
        "Iphone 17 Pro",
        "Iphone 17 Pro Max",
        "Comparar Modelos",
        "Acessórios",
      ],
    },
    {
      title: "Especificações",
      link: ["Características técnicas", "Cameras", "Bateria", "Display"],
    },
    {
      title: "Apple",
      link: ["Sobre a Apple", "Newsroom", "Privacidade", "Carreiras"],
    },
  ];

  const buttonLinks = ["Política de Privacidade", "Termos de Uso", "Vendas"];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.link.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a className="hover:text-white cursor-pointer" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-md text-gray-300">© 2025 Apple Inc. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-gray-400">
              {buttonLinks.map((btnText, btnIndex) => (
                <a key={btnIndex} className=" hover:text-white" href="#">
                  {btnText}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 ">
            Site criar para fins educacionais.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
