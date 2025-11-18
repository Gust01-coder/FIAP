import Accordion from "react-bootstrap/Accordion";

const GlobalAccordion = ({ lista }) => {
  const componentsList = lista.map((item, index) => (
    <Accordion.Item eventKey={index.toString()} key={index}>
      <Accordion.Header>{item.header}</Accordion.Header>
      <Accordion.Body>{item.bodyText}</Accordion.Body>
    </Accordion.Item>
  ));

  return (
    <div className="col-md-7 mx-auto">
      <Accordion defaultActiveKey="0">{componentsList}</Accordion>
    </div>
  );
};

export default GlobalAccordion;
