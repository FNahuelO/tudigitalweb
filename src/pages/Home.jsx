import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import { Button } from '../../style/Buttons'
import Vector from '../assets/vectorPc'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  const text = t('page.home.msg')
  return (
    <Container bg="#E0D7D7" height="95vh" id="Inicio">
      <Container
        justify="space-evenly"
        align="center"
        radius="0 0 15% 15%"
        bg="linear-gradient(to bottom, #FEC430 10%, #FE833E)"
      >
        <Container flex="column" width="45%" gap="1rem" align="start">
          <Text size="3rem" weight="800">
            {t('name')}
          </Text>
          <Text size="1.5rem">{t('page.home.text')}</Text>
          <a
            href={`https://wa.me/+573137722292?text=${text}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button bg="black" color="white" padding="1rem 4rem" radius="3rem">
              {t('buttons.quote').toUpperCase()}
            </Button>
          </a>
        </Container>
        <Vector />
      </Container>
    </Container>
  )
}
