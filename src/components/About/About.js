import "./About.css";
import { View, Viewport } from "react";
export default function About() {
  return (
    <view>
      <div className="container">
        <h1>Nossos objetivos</h1>
        <p>
          Nossa proposta e ajudar com a comunicação entre a criança com o
          responsável sendo o mais leve possível através de imagens. Quem somos:
          Somos uma startup que visa mostrar aos pais ou responsáveis, um pouco
          deste mundo em que muitas crianças vivem e não conseguem se expressar
          e através de imagens, ela passa a se comunicar melhor e indicar o que
          sente ou quer.
        </p>
      </div>
      <div className="container">
        <h2>Descubra o que seu filho precisa, mesmo sem palavras.</h2>
        <p>
          Sabemos que muitas crianças autistas têm dificuldades para expressar
          suas necessidades de maneira clara, e isso pode gerar frustrações
          tanto para elas quanto para os pais. Pensando nisso, estamos
          desenvolvendo um aplicativo inovador que serve como um meio prático e
          acessível para facilitar essa comunicação, trazendo mais claro para o
          dia a dia e permitindo uma interação mais fluida e eficaz entre a
          criança e os pais. Com apenas alguns toques em ícones na tela, seu
          filho pode informar o que está sentindo ou o que precisa. Ao final do
          dia, você terá acesso a um relatório completo, mostrando quais foram
          as necessidades mais frequentes, permitindo que você preste atenção em
          determinado momento certo.
        </p>
      </div>
      <div className="container">
        <h2>Como o aplicativo pode ajudar?</h2>
        <p>
          Nosso aplicativo utiliza uma interface visual e intuitiva, projetada
          especificamente para crianças com autismo. Ele oferece uma série de
          ícones que representam diferentes necessidades e emoções, permitindo
          que uma criança, ao clicar neles, possa se comunicar rapidamente o que
          está sentindo ou precisando. Isso é especialmente útil em situações
          onde a fala ou o uso de palavras não é uma opção viável para uma
          criança. Os ícones são específicos com imagens claras e simples,
          representando necessidades básicas como "fome", "sede", "sono",
          "brincar", "tristeza" e "felicidade", entre outros. Cada ícone é fácil
          de ser identificado e selecionado, garantindo que a criança possa se
          comunicar de forma intuitiva, sem precisar de assistência constante.
        </p>
      </div>
      <div className="container">
        <h2>Vantagens</h2>
        <li>Interface intuitiva</li>
        <li>Relatórios diários</li>
        <li>Apoio constante</li>
      </div>
    </view>
  );
}
