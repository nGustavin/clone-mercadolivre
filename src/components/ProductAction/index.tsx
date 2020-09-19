import React from 'react';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>
      <Row>
        <h1>Gatinho assustado novo</h1>
        <HeartIcon />
      </Row>

      <DispatchTag> Enviando normalmente </DispatchTag>
      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">99</span>
          <span className="cents">99</span>
        </PriceRow>
        <InstallmentsInfo>em 3x de R$ 33,33</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque Disponível</StockStatus>

      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete Grátis</span>
          <span className="details">Benefício Lorem Ipsom</span>
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>Receba o produto que esta esperando ou seu dinheiro de volta</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
