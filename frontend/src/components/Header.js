import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} >
        <img
          className="d-block w-100"
          src="https://static01.nyt.com/images/2015/10/24/opinion/24manguel/24manguel-superJumbo.jpg"
          alt="First slide"
          style={{height:'400px'}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} >
        <img
          className="d-block w-100"
          src="https://cdn.firstcry.com/education/2022/03/07110617/700225975.jpg"
          alt="Second slide"
          style={{height:'400px'}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} >
        <img
          className="d-block w-100"
          src="https://www.ucl.ac.uk/students/sites/students/files/library_1_800x500.jpg          "
          alt="Third slide"
          style={{height:'400px'}}

        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
