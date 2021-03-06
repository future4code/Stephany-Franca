import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'

const DivCentral = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

class Etapa2 extends React.Component {
    render(){
      return (<DivCentral>
          <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
  
          <PerguntaAberta pergunta={"5. Qual curso?"} />
  
          <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
  
          <Botao onClick= {this.props.clica}>Próxima Etapa</Botao>
  
          </DivCentral>
        );
    }
      
  }
  
  export default Etapa2;