import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import { Button } from '../../style/Buttons'
import Vector from '../assets/vectorContact'
import { useTranslation } from 'react-i18next'

export default function Contacto() {
  const { t } = useTranslation()
  const text =
    '¡Hola! Estoy interesado/a en Tu Digital Web. ¿Info sobre páginas para realizar? Gracias.'
  return (
    <Container
      bg="white"
      height="95vh"
      align="center"
      justify="flex-end"
      radius="0 0 15% 15%"
      flex="column"
      id="Contacto"
    >
      <Container
        flex="column"
        gap="1rem"
        align="center"
        width="50%"
        margin="auto"
      >
        <Text size="2rem" weight="800" borderBottom="1px solid">
          {t('page.contact.title')}
        </Text>
        <Text width="65%">{t('page.contact.text')}</Text>
        <a
          href={`https://wa.me/+5491173674797?text=${text}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            color="black"
            bg="#FF6600"
            align="center"
            radius="3rem"
            padding="1rem 3rem"
          >
            {t('buttons.contact').toUpperCase()}
          </Button>
        </a>
        <Vector />
      </Container>
      <Container
        bg="black"
        justify="center"
        align="center "
        width="100%"
        height="5vh"
        padding=".5rem 0"
      >
        <Text color="white">DERECHOS RESERVADOS</Text>
      </Container>
    </Container>
  )
}
