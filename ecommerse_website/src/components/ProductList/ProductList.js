import React, { Fragment, useContext, useState, useEffect,useCallback } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import "./ProductList.css";
import ContextApi from "../../store/ConetxtApi";

const productsArr = [
    {
        title: 'Rockstar',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Taal',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Dil Se Re',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Jodha Akbar',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
];

const ProductList = () => {
    const ctx = useContext(ContextApi);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retrying, setRetrying] = useState(false);
    const [retryInterval, setRetryInterval] = useState(null);

    const addProductInTheCart = (item) => {
        ctx.addItem({
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            price: +item.price,
            quantity: 1,
        });
    };

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://swapi.dev/api/people/1/');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setRetrying(false); 
            setError(null);
        } catch (error) {
            setError("Something went wrong... Retrying");
            setRetrying(true);
        } finally {
            setLoading(false);
        }
    },[]);

    const startRetry = useCallback(() => {
        setRetryInterval(setInterval(fetchProducts, 5000));
    },[]);

    const stopRetry = useCallback(() => {
        clearInterval(retryInterval);
        setRetryInterval(null);
        setRetrying(false);
    }, [retryInterval]);
    

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (retrying && !retryInterval) {
            startRetry();
        }
        return () => {
            if (retryInterval) clearInterval(retryInterval);
        };
    }, [retrying]);

    if (loading) return <div className="text-center">Loading...</div>;

    if (error) return (
        <div className="text-center">
            <p>{error}</p>
            {retrying && (
                <Button onClick={stopRetry} variant="danger" size="sm">
                    Cancel Retry
                </Button>
            )}
        </div>
    );

    return (
        <Fragment>
            <Container style={{ fontFamily: 'algerian, sans-serif', marginTop: '30px' }}>
                <p className="fw-bold fs-3 text-dark text-center mb-5">Music</p>
                <Row style={{ paddingLeft: "170px" }}>
                    {productsArr.map((product, index) => (
                        <Col md={6} key={index}>
                            <Card style={{ width: "300px" }} className="d-flex justify-content-center mb-5">
                                <Card.Footer className="text-center fw-bold fs-5">{product.title}</Card.Footer>
                                <Card.Body>
                                    <div className="image-container">
                                        <Card.Img src={product.imageUrl} className="image-zoom" alt={product.title} />
                                    </div>
                                </Card.Body>
                                <Card.Footer className="d-flex align-items-center justify-content-between ">
                                    <p className="lh-6 mb-0">${product.price.toFixed(2)}</p>
                                    <Button size="sm" className="ms-auto fw-bold"
                                        style={{ background: "rgb(38, 157, 204)", border: "none" }}
                                        onClick={() => addProductInTheCart({ ...product, id: index })}>
                                        Add To Cart
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    );
};

export default ProductList;
