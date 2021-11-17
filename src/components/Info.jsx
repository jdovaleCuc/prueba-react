import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Info = ({ data }) => {
    return (
        <Container>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Pais</th>
                        <th>Casos Confirmados</th>
                        <th>Continente</th>
                        <th>Poblacion</th>
                        <th>Area del Pais</th>
                        <th>Numero de muertes</th>
                        <th>Expectativa de vida</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.country}</td>
                        <td>{data.confirmed}</td>
                        <td>{data.continent}</td>
                        <td>{data.population}</td>
                        <td>{data.location}</td>
                        <td>{data.deaths}</td>
                        <td>{data.life_expectancy}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default Info;