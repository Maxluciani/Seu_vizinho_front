import React from 'react'
import { StyledLogo } from './styles'
import seuvizinho from '/assets/004.jpg'

const Logo = () => (
  <StyledLogo
    title="Seu vizinho"
    alt="Seu vizinho"
    src={seuvizinho}
  />
)

export default Logo