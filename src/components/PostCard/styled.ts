import Img from 'gatsby-image';

import { styled, media } from 'styles/emotion';
import { Card } from 'components/Ui';

export const StyledCard = Card.withComponent('article');

export const PostCardWrapper = styled.article``;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 5px;
  border: ${({ theme }) =>
    theme.isDarkTheme ? `1px solid ${theme.color.border}` : 'none'};
  box-shadow: ${({ theme }) =>
    theme.isDarkTheme ? 'transparent' : theme.color.shadowLight};
`;

export const Image = styled(Img)`
  max-height: 329px;
  border-radius: 5px;
`;

export const Body = styled.div`
  a {
    position: relative;
    z-index: 1;
  }
`;

export const Title = styled.h3`
  margin: 0;
  line-height: 1.3;
  font-size: 2rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  color: ${({ theme }) => theme.color.font};

  ${media.greaterThan('medium')`
    font-size: 3rem;
    line-height: 1.12;
    letter-spacing: -0.022em;
  `}
`;

export const DateAndTime = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin: 4px 0 10px;
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.contentSans};
  font-size: 1.4rem;
`;

export const Subtitle = styled.p`
  margin: 0;
  line-height: 1.3;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.font.contentSans};
  color: ${({ theme }) => theme.color.fontLight};

  ${media.greaterThan('medium')`
    font-size: 2.2rem;
  `}
`;
