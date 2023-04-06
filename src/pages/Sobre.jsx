import React from "react";
import { useParams } from "react-router-dom";




export const Sobre = () => { 
  const { name } = useParams()
    return (
      <div>
        { name !== 'Maris' ? <Redirect to="/" /> : null }
        <h1>
          Sobre {name} (Brincadeirinha, testando só)</h1>
        <p>
          Porque nós o usamos?
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).

        </p>

      </div>


    )
}