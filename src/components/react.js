import{Col,Image,Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function React(){
    return(
        <>
        <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://imgd.aeplcdn.com/1280x720/n/bw/models/colors/keeway-select-model-glossy-grey-1661846900373.gif" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
        </>
    );

}
export default React;