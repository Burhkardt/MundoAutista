import "./Home.css";
import React from "react";
import imagemtemp from "../../assets/imagemplaceholder.png";
import Imagem1 from "../../assets/Imagem 1.jpg";
import Imagem2 from "../../assets/Imagem 2.jpg";
import Imagem3 from "../../assets/Imagem 3.jpg";
export default function Home() {
  return (
    <body>
      <h1
        className="italico"
        style={{ backgroundColor: "white", fontFamily: "Times new Roman" }}
      >
        Transtorno do espectro autista (TEA)
      </h1>
      <div className="boximagem">
        <img src={Imagem1} className="imagens" alt="Temp" />
        <img src={Imagem2} className="imagens" alt="Temp" />
        <img src={Imagem3} className="imagens" alt="Temp" />
      </div>
      <h2 className="texto">
        <text>
          <p>
            O transtorno do espectro autista (TEA) é um distúrbio do
            neurodesenvolvimento caracterizado por desenvolvimento atípico,
            manifestações comportamentais, déficits na comunicação e na
            interação social, padrões de comportamentos repetitivos e
            estereotipados, podendo apresentar um repertório restrito de
            interesses e atividades.
          </p>

          <p>
            Sinais de alerta no neurodesenvolvimento da criança podem ser
            percebidos nos primeiros meses de vida, sendo o diagnóstico
            estabelecido por volta dos 2 a 3 anos de idade. A prevalência é
            maior no sexo masculino.
          </p>

          <p>
            A identificação de atrasos no desenvolvimento, o diagnóstico
            oportuno de TEA e encaminhamento para intervenções comportamentais e
            apoio educacional na idade mais precoce possível, pode levar a
            melhores resultados a longo prazo, considerando a neuroplasticidade
            cerebral.
          </p>

          <p>
            Ressalta-se que o tratamento oportuno com estimulação precoce deve
            ser preconizado em qualquer caso de suspeita de TEA ou
            desenvolvimento atípico da criança, independentemente de confirmação
            diagnóstica.
          </p>
          <p>
            "A etiologia do transtorno do espectro autista ainda permanece
            desconhecida. Evidências científicas apontam que não há uma causa
            única, mas sim a interação de fatores genéticos e ambientais. A
            interação entre esses fatores parecem estar relacionadas ao TEA,
            porém é importante ressaltar que “risco aumentado” não é o mesmo que
            causa fatores de risco ambientais. Os fatores ambientais podem
            aumentar ou diminuir o risco de TEA em pessoas geneticamente
            predispostas. Embora nenhum destes fatores pareça ter forte
            correlação com aumento e/ou diminuição dos riscos, a exposição a
            agentes químicos, deficiência de vitamina D e ácido fólico, uso de
            substâncias (como ácido valpróico) durante a gestação, prematuridade
            (com idade gestacional abaixo de 35 semanas), baixo peso ao nascer
            (&lt; 2.500 g), gestações múltiplas, infecção materna durante a
            gravidez e idade parental avançada são considerados fatores
            contribuintes para o desenvolvimento do TEA."
          </p>
        </text>
      </h2>
    </body>
  );
}
