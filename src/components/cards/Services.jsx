import React from 'react'
import { Container } from '../../../style/Container'
import { Text } from '../../../style/Text'
import ManoCard from '../../assets/vectorMano'
import mano from '../../assets/hand_mobile.png'
import { useTranslation } from 'react-i18next'

export default function Services({ color, title, text }) {
  const { t } = useTranslation()
  const currentColor =
    title === t('page.services.cards.design.title') ? 'white' : 'black'

  return (
    <Container
      width="20rem"
      height="40rem"
      bg="transaparent"
      flex="column"
      justify="flex-end"
      align="center"
      position="relative"
    >
      <Container
        flex="column"
        align="center"
        gap="1rem"
        position="absolute"
        top="0"
        justify="space-around"
        bg={color}
        padding="1.5rem"
        radius="2rem"
        index="3"
        height="25rem"
      >
        <Text
          weight="800"
          size="1.5rem"
          color={currentColor}
          borderBottom={`1px solid ${currentColor}`}
        >
          {title}
        </Text>
        <Text color={currentColor} align="start">
          {text}
        </Text>
        <ManoCard />
      </Container>
      <img src={mano} style={{ zIndex: '1' }} />
    </Container>
  )
}
