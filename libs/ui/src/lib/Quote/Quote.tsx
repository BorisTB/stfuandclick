import React from 'react'

import styled from '@emotion/styled'

export interface QuoteProps {
  author: string
  title?: string
}

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-style: italic;

  figcaption {
    text-align: right;
  }
`

export const Quote: React.FC<QuoteProps> = ({
  children,
  author,
  title,
  ...props
}) => {
  return (
    <StyledFigure {...props}>
      <blockquote>{children}</blockquote>
      <figcaption>
        &mdash; {author}
        {title && `, ${(<cite>{title}</cite>)}`}{' '}
      </figcaption>
    </StyledFigure>
  )
}

export default Quote
