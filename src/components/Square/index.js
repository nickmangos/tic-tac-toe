import React from 'react'
import styled from 'styled-components'
import { isUndefined } from 'ramda-adjunct'

const StyledSquare = styled.div`
  border-color: hsla(0, 0%, 0%, 0.2);
  border-style: solid;
  border-width: 0 ${({ index }) => (index % 3 === 2 ? 0 : '2px')}
    ${({ index }) => (index < 6 ? '2px' : 0)} 0;
  color: ${({ player }) => (player === 'x' ? '#888' : '#777')};
  cursor: ${({ onClick }) => (isUndefined(onClick) ? 'default' : 'pointer')}
  font-size: 14vh;
  font-weight: bold;
  line-height: 22vh;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.defaultName = 'StyledSquare'

export default function Square ({ handleClick, index, player }) {
  return isUndefined(player) ? (
    <StyledSquare index={index} onClick={handleClick} />
  ) : (
    <StyledSquare index={index} player={player}>
      {player}
    </StyledSquare>
  )
}
