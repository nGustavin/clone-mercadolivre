import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra Garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto esperado ou seu dinheiro de volta
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper augue
      eget rhoncus tincidunt. Proin tincidunt purus eu porttitor consectetur.
      Phasellus pellentesque elit nec enim interdum varius. Integer congue
      tellus quis lorem condimentum malesuada. Curabitur vel nisl id mauris
      ultricies condimentum nec tempor mauris. Praesent lobortis tempor nibh, ac
      hendrerit metus viverra id. Fusce laoreet et eros ac pulvinar. Aliquam
      blandit metus velit.
      <br />
      <br />
      Itens Inclusos : <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper augue
      eget rhoncus tincidunt. Proin tincidunt purus eu porttitor consectetur.
      Phasellus pellentesque elit nec enim interdum varius. Integer congue
      tellus quis lorem condimentum malesuada. Curabitur vel nisl id mauris
      ultricies condimentum nec tempor mauris. Praesent lobortis tempor nibh, ac
      hendrerit metus viverra id. Fusce laoreet et eros ac pulvinar. Aliquam
      blandit metus velit. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Duis semper augue eget rhoncus tincidunt. Proin tincidunt purus eu
      porttitor consectetur. Phasellus pellentesque elit nec enim interdum
      varius. Integer congue tellus quis lorem condimentum malesuada. Curabitur
      vel nisl id mauris ultricies condimentum nec tempor mauris. Praesent
      lobortis tempor nibh, ac hendrerit metus viverra id. Fusce laoreet et eros
      ac pulvinar. Aliquam blandit metus velit.
    </p>
  </Description>
);

export default Product;
