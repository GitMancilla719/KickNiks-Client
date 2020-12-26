import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import c1 from '../../assets/carousel1.jpg'
import c2 from '../../assets/carousel2.jpg'
import c3 from '../../assets/carousel3.jpg'
import { makeStyles } from '@material-ui/core'

const CarouselStyle = makeStyles((theme) => ({
  container: {
    width: '85%',
    margin: '0.5rem auto',
  },
  carouselItem: {
    transitionDuration: '1s',
    width: '100%',
    height: 'auto',
  },
  carouselImage: {
    width: '100%',
  },
}))

const LandingPage = () => {
  const cls = CarouselStyle()
  const imgArr = [c1, c2, c3]

  return (
    <div className={cls.container}>
      <Carousel interval={2500} indicators={false} controls={false}>
        {imgArr.map((crImage, index) => (
          <Carousel.Item key={index} className={cls.carouselItem}>
            <img
              className={cls.carouselImage}
              key={crImage}
              src={crImage}
              alt="carousel image"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default LandingPage
