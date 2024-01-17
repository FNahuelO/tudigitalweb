import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Vector from '../assets/vectorNosotros'
import { useTranslation } from 'react-i18next'

export default function Nosotros() {
  const { t } = useTranslation()
  const dataText = [
    t('page.us.choose.list.experience'),
    t('page.us.choose.list.personality'),
    t('page.us.choose.list.passion'),
  ]
  return (
    <Container
      bg="white"
      flex="column"
      height="95vh"
      align="center"
      justify="flex-end"
      radius="0 0 15% 15%"
      id="Nosotros"
    >
      <Text size="2rem" weight="800" borderBottom="1px solid">
        {t('page.us.title')}
      </Text>
      <Container justify="flex-end" align="center">
        <Container flex="column" width="40%" gap="1rem" align="start">
          <Text size="1rem">
            <Text size="1.5rem" weight="700">
              {t('name')}
            </Text>
            {t('page.us.text')}
          </Text>
          <Container flex="column">
            <Text
              size="2rem"
              weight="700"
              borderBottom="1px solid"
              width="max-content"
            >
              {t('page.us.choose.title')}
            </Text>
            <ul style={{ padding: '0 1rem' }}>
              {dataText.map((item, idx) => (
                <li key={idx} style={{ color: 'black' }}>
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </Container>
        <Vector />
      </Container>
    </Container>
  )
}
