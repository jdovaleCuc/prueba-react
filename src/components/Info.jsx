import React from 'react';
import { Table } from 'react-bootstrap';

const Info = ({ data }) => {
    return (
        <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
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
                    <td>{data.confirmed}</td>
                    <td>{data.continent}</td>
                    <td>{data.population}</td>
                    <td>{data.location}</td>
                    <td>{data.deaths}</td>
                    <td>{data.life_expectancy}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default Info;