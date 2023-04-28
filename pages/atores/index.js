import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const index = (props) => {
    return (
        <Pagina titulo="Atores Populares">

            <Row md={6}>
                {props.filmes.map(item => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.profile_path} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Link className='btn btn-danger' href={'/atores/' + item.id}>Detalhes</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/person/popular?language=pt-BR')
    const filmes = resultado.data.results

    return {
        props: { filmes },
    }
}