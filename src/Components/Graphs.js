import React from "react";
import { Container, Image } from "react-bootstrap";

const Graphs = ({ data }) => {
  return (
    <>
      <Container className="my-5">
        <h2 className="my-2">Statistics</h2>
        <Image src={data.img_src} className="img-fluid mb-5 mt-4"></Image>
        {data.img_src1 && (
          <Image src={data.img_src1} className="img-fluid my-5"></Image>
        )}
      </Container>
    </>
  );
};

export default Graphs;
