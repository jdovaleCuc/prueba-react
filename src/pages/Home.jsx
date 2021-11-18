import React, { useState } from 'react';
import axios from 'axios';
import { Card, Container, Form, Button, Spinner } from 'react-bootstrap';
import Info from '../components/Info';
const API = "https://covid-api.mmediagroup.fr/v1/cases?country=";

const Home = () => {

    const [data, setData] = useState([])
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setData([]);
        setLoading(true)
        const response = await axios.get(`${API}${country}`)
        setData(response.data)
        setLoading(false);
    }

    const handleInput = (e) => {
        const text = e.target.value;
        const textCapitalized = text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
        setCountry(textCapitalized)
    }


    return (
        <Container className="pt-5">
            <Card >
                <Card.Header >
                    <Form onSubmit={handleSubmit}>
                        <Form.Label className="text-dark">INGRESA EL PAIS</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="EJ: Colombia"
                            name="country"
                            required
                            style={{border: 'solid' }}
                            onChange={(e) => handleInput(e)}
                        />
                        <Button
                            variant="primary"
                            type="submit"
                            className="pt-2"
                        >
                            Consultar
                        </Button>
                    </Form>
                </Card.Header>
                <Card.Body >
                    {data['All'] ?
                        <Info data={data['All']} />
                    :
                        <>
                            {loading ? 
                                <Spinner animation={'border'} role={'status'}>
                                    <span className={'visually-hidden'}>...loading</span>
                                </Spinner>
                            : 
                                <div>
                                    <h2>Ingrese un Pais Para ver su informacion</h2>
                                    <h2>O escribalo correctamente</h2>
                                    <h3 className="text-">Ejemplo: Germany</h3>
                                </div> 
                            }
                        </>
                    }
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;