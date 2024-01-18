import { Container } from '../../style/Container'
import { Button } from '../../style/Buttons'
import { Text } from '../../style/Text'
import { useTranslation } from 'react-i18next'
import es from '../assets/spain.svg'
import en from '../assets/gb.svg'

export default function Nav() {
  const { t, i18n } = useTranslation()

  const labels = [
    t('page.home.title'),
    t('page.services.title'),
    t('page.prices.title'),
    t('page.us.title'),
    t('page.portfolio.title'),
  ]

  const cambiarIdioma = (idioma) => {
    i18n.changeLanguage(idioma)
  }

  const text =
    '¡Hola! Estoy interesado/a en Tu Digital Web. ¿Info sobre páginas para realizar? Gracias.'

  return (
    <Container
      bg="black"
      height="5vh"
      padding="1rem 0"
      justify="space-around"
      align="center"
      position="fixed"
      index="999"
      width="100%"
    >
      <Text width="10%" color="rgba(255, 102, 0, 1)" size="2rem" weight="800">
        TDW
      </Text>
      <Container width="30%" align="center" justify="space-evenly">
        {labels.map((item, idx) => (
          <a href={`#${item}`} key={idx} style={{ textDecoration: 'none' }}>
            <Text key={idx} color="white">
              {item}
            </Text>
          </a>
        ))}
      </Container>
      <a
        href={`https://wa.me/+573137722292?text=${text}`}
        target="_blank"
        rel="noreferrer"
      >
        <Button
          color="black"
          bg="#FF6600"
          align="center"
          radius="3rem"
          padding=".75rem 3rem"
        >
          {t('buttons.contact').toUpperCase()}
        </Button>
      </a>
      <Container gap="1.5rem">
        <Button
          border="none"
          bg="none"
          padding="0"
          cursor="pointer"
          onClick={() => cambiarIdioma('es')}
        >
          <img width="40" height="40" src={es} />
        </Button>
        <Button
          border="none"
          padding="0"
          cursor="pointer"
          bg="none"
          onClick={() => cambiarIdioma('en')}
        >
          <img width="40" height="40" src={en} />
        </Button>
      </Container>
    </Container>
  )
}
