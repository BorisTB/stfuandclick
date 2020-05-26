import React from 'react'

import styled from '@emotion/styled'

export interface QuoteProps {
  author: string
  title?: string
}

const StyledFigure = styled.div`
  font-style: italic;
`

export const Quote: React.FC<QuoteProps> = ({ children, author, title }) => {
  return (
    <StyledFigure>
      <blockquote>{children}</blockquote>
      <figcaption>
        &mdash; {author}
        {title && `, ${(<cite>{title}</cite>)}`}{' '}
      </figcaption>
    </StyledFigure>
  )
}

export default Quote
