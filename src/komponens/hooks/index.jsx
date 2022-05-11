import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
export default function FetchHooks() {
  const [beritas, setBerita] = useState([]);
  
  const [error, seterror] = useState(true);
  useEffect(() => {
    // fetch('https://newsapi.org/v2/everything?q=all&from=2022-04-15&sortBy=popularity&apiKey=9c2510131de24d47a20d9f258085ac19')
    // .then(response => response.json())
    // .then(data =>setBerita([data.articles]))
    AxiosData();
  }, []);
  const AxiosData = async (value) => {
    let Response = await axios.get(
      `https://newsapi.org/v2/everything?q=${value}&from=2022-04-15&sortBy=popularity&apiKey=9c2510131de24d47a20d9f258085ac19`
    );
    if (!Response) {
      seterror(true);
    } else {
      seterror(false);
      console.log(Response.data.articles);
      setBerita(Response.data.articles);
    }
  };
  // const SearchData = (value) => {
  //   SetsearchTerm(value);

  //   if (searchTerm !== "") {
  //     const FilterData = beritas.filter((item) => {
  //       return Object.values(item)
  //         .join("")
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //     });
  //     setSearchResult(FilterData);
  //   } else {
  //     setSearchResult(beritas);
  //   }
  // };
  // const Search = ({label,type,placeholder})=>{
  //     return(
  //     <Form.Group className="mb-3">
  //         <Form.Label>{label}</Form.Label>
  //         <Form.Control type={type} placeholder={placeholder} />
  //     </Form.Group>
  //     )}

  // const Cards = ({title,text,image,link})=>{
  //     <Col sm ={4}>
  //     <Card style={{ width: '18rem' }}>
  //         <Card.Img variant="top" src={image} />
  //         <Card.Body>
  //             <Card.Title>{title}</Card.Title>
  //             <Card.Text>
  //             {text}
  //             </Card.Text>
  //             <a href ={link} className='btn btn-primary'>Go somewhere</a>
  //         </Card.Body>
  //     </Card>
  //     </Col>
  // }

  return (
    <div>
      <Container>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tugas HOOKS</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search Country"
            onChange={(e) => AxiosData(e.target.value)}
          />
        </Form.Group>
        <Row>
          {error ? (
            <div className="alert alert-danger">Tidak Ada Response Data</div>
          ): (
            beritas.map((a) => (
              <Col sm={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={a.urlToImage} />
                  <Card.Body>
                    <Card.Title>{a.title}</Card.Title>
                    <Card.Text>{a.description}</Card.Text>
                    <a href={a.url} className="btn btn-primary">
                      Go somewhere
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
          {}
        </Row>
      </Container>
    </div>
  );
  // let [dogImage, setDogImage] = useState(null)
  //  // 3. Create out useEffect function
  //  useEffect(() => {

  //     fetch("https://dog.ceo/api/breeds/image/random")
  //     .then(response => response.json())
  //         // 4. Setting *dogImage* to the image url that we received from the response above
  //     .then(data => setDogImage(data.message))
  //   },[])

  //   return (
  //     <div className="App">
  //         {/* 5. Using *dogImage as* the *src* for our image*/}
  //     {dogImage && <img src={dogImage}></img>}
  //     </div>
  //   );
}
