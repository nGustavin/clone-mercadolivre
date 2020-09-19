import React from 'react';
import HeaderLogo from '../../assets/headerLogo.png';
import {
  Container,
  CepArea,
  InputArea,
  Category,
  AccountOptions,
  CarIcon,
  ShoppingIcon,
  MapPin,
  Layout,
  SearchIcon,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Layout>
        <CepArea>
          <img src={HeaderLogo} alt="" />
          <MapPin />

          <h3>Enviar para</h3>
          <h1>Brasil 9236932</h1>
        </CepArea>

        <InputArea>
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais... "
          />
          <div>
            <SearchIcon />
          </div>
        </InputArea>
        <Category>
          <a href="#">Categorias</a>
          <a href="#">Ofertas do dia</a>
          <a href="#">Histórico</a>
          <a href="#"> Supermercado </a>
          <a href="#"> Lojas Oficiais </a>
          <a href="#"> Vender </a>
          <a href="#"> Contato </a>
        </Category>
        <AccountOptions>
          <div className="carpromo">
            <CarIcon />
            <h1>Financie seu próximo carro aqui</h1>
          </div>
          <div className="account_options">
            <a href="#"> Crie a sua conta </a>
            <a href="#"> Entre </a>
            <a href="#"> Compras </a>
            <ShoppingIcon />
          </div>
        </AccountOptions>
      </Layout>
    </Container>
  );
};

export default Header;
