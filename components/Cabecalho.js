import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/filmes">Movies</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Filmes" id="basic-nav-dropdown">
              <Link className='dropdown-item' href="/filmes">Populares</Link>
              <Link className='dropdown-item' href="/filmes/lancamentos">Lançamentos</Link>
              <Link className='dropdown-item' href="/filmes/cartaz">Em Cartaz</Link>
              <Link className='dropdown-item' href="/filmes/top">Top Rated</Link>
            </NavDropdown>
            <NavDropdown title="Séries" id="basic-nav-dropdown">
              <Link className='dropdown-item' href="/series">Populares</Link>
              <Link className='dropdown-item' href="/series/cartaz">No ar</Link>
              <Link className='dropdown-item' href="/series/lancamentos">Estreiantes</Link>
              <Link className='dropdown-item' href="/series/top">Top Rated</Link>
            </NavDropdown>
            <Link className='nav-link' href="/atores">Atores</Link>
            <Link className='nav-link' href="/generos">Gêneros</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho