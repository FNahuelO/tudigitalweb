import { useTranslation } from 'react-i18next'
import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import Card from '../components/cards/Services'

export default function Services() {
  const { t } = useTranslation()

  const cardTexts = [
    {
      title: t('page.services.cards.design.title'),
      text: t('page.services.cards.design.text'),
      color: 'black',
    },
    {
      title: t('page.services.cards.seo.title'),
      text: t('page.services.cards.seo.text'),
      color: '#FEC430',
    },
    {
      title: t('page.services.cards.redesign.title'),
      text: t('page.services.cards.redesign.text'),
      color: '#B0E6EA',
    },
  ]

  return (
    <Container
      bg="#E0D7D7"
      height="99vh"
      align="center"
      gap="4rem"
      justify="flex-end"
      radius="0 0 15% 15%"
      flex="column"
      id="Servicios"
    >
      <Container flex="column" gap="1rem" align="center">
        <Text size="2rem" weight="800" borderBottom="1px solid">
          {t('page.services.title')}
        </Text>
        <Text>{t('page.services.text')}</Text>
      </Container>
      <Container width="80%" justify="space-around">
        {cardTexts.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </Container>
    </Container>
  )
}
