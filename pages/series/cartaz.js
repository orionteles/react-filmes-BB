import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const cartaz = (props) => {
    return (
        <Pagina titulo="Séries No Ar">

            <Row md={4}>
                {props.filmes.map(item => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <p>Lançamento: {item.release_date}</p>
                                <p>Nota: {item.vote_average}</p>
                                <Link className='btn btn-danger' href={'/tv/' + item.id}>Detalhes</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Pagina>
    )
}

export default cartaz

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/tv/on_the_air?language=pt-BR')
    const filmes = resultado.data.results

    return {
        props: { filmes },
    }
}