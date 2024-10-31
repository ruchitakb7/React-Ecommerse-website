
import React from "react";
import { Container, Stack, Row, Col, Image, Button } from "react-bootstrap";


const Product= () => {
    const product = {
        name: "Sample Product",
        description: "This is a sample description of the product.",
        price: 120,
    };

    const productImages = [
        'https://via.placeholder.com/400x300?text=Image+1',
        'https://via.placeholder.com/400x300?text=Image+2',
        'https://via.placeholder.com/400x300?text=Image+3',
    ];

    const reviews = [
        { id: 1, text: "Great product!", rating: 5 },
        { id: 2, text: "Pretty good value for money.", rating: 4 },
    ];

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'
         style={{ padding: "20px" ,width:"100%"}}>
           
            <Stack gap={3} className="align-items-center text-center mb-5">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </Stack>

            <Stack gap={3} className="w-75 align-items-center justify-content-center " style={{marginLeft:"150px"}}>
                <h3><center>Product Images</center></h3>
                <Row>
                    {productImages.map((image, index) => (
                        <Col md={6} key={index} className="mb-3">
                            <Image src={image} alt={`Product Image ${index + 1}`} fluid />
                        </Col>
                    ))}
                </Row>
            </Stack>

        
            <Stack gap={3} style={{marginLeft:"200px"}} className="w-75 mt-5 align-items-center justify-content-center ">
                <h3>Reviews</h3>
                <Row>
                    <Col md={12}>
                        {reviews.map((review) => (
                            <div key={review.id} className="mb-3">
                                <p>{review.text}</p>
                                <p>Rating: {review.rating} ⭐</p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Stack>
            <Button>Add</Button>
        </Container>
    );
};

export default Product;
