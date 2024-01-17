import { useState, useEffect } from 'react'
import img1 from '../assets/image 1.png'
import img2 from '../assets/image 2.png'
import img3 from '../assets/image 3.png'
import img4 from '../assets/image 4.png'
import img5 from '../assets/image 5.png'
import { Container } from '../../style/Container'
import { Button } from '../../style/Buttons'
import { useTranslation } from 'react-i18next'

const CarouselComponent = () => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const images = [img1, img2, img3, img4, img5]
  const totalImages = images.length

  return (
    <Container width="100%" height="100%" position="relative">
      <Container
        transition="transform 1s ease"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              minWidth: '100%',
              maxHeight: '100%',
            }}
            alt={`Image ${index + 1}`}
          />
        ))}
      </Container>

      {/* Contenedor para el fondo negro */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro con opacidad
        }}
      >
        <a href={`#link-${currentIndex}`} style={{ textDecoration: 'none' }}>
          <Button
            padding="1rem 5rem"
            bg="rgba(255, 102, 0, 1)"
            color="black"
            border="none"
            cursor="pointer"
            radius="3rem"
            weight="800"
          >
            {t('buttons.more').toUpperCase()}
          </Button>
        </a>
      </div>
    </Container>
  )
}

export default CarouselComponent
