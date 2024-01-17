import styled from 'styled-components'

export const Text = styled.span`
  font-family: 'Syne', sans-serif;
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  display: ${({ display }) => display || null};
  color: ${({ color }) => color || 'black'};
  background: ${({ bg }) => bg || null};
  border: ${({ border }) => border || null};
  border-radius: ${({ radius }) => radius || null};
  align-items: ${({ alignItems }) => alignItems || null};
  font-size: ${({ size }) => size || null};
  transform: ${({ transform }) => transform || null};
  font-weight: ${({ weight }) => weight || null};
  line-height: ${({ line }) => line || null};
  padding: ${({ padding }) => padding || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  box-shadow: ${({ shadow }) => shadow || null};
  cursor: ${({ cursor }) => cursor || null};
  gap: ${({ gap }) => gap || null};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ align }) => align || null};
  text-decoration: ${({ decoration }) => decoration || null};
  letter-spacing: ${({ spacing }) => spacing || null};
  word-wrap: ${({ wrap }) => wrap || null};
  opacity: ${({ opacity }) => opacity || null};
`

export const Hr = styled.hr`
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  color: ${({ color }) => color || 'black'};
  font-size: ${({ size }) => size || null};
  border: ${({ border }) => border || null};
  margin: ${({ margin }) => margin || null};
  transform: ${({ transform }) => transform || null};
`
