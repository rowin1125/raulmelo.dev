import { styled, media } from 'styles/emotion';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  margin-bottom: 3rem;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;

export const ImageWrapper = styled.div`
  max-width: 8rem;
  margin-bottom: 2rem;

  ${media.greaterThan('medium')`
    max-width: 12.8rem;
    margin-left: 4rem;
    margin-bottom: 0;
  `}
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 100%;
`;

export const AuthorDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

export const AuthorName = styled.h1`
  letter-spacing: -0.93px;
  font-size: 2.2rem;
  font-family: ${({ theme }) => theme.font.contentSans};
  font-weight: 600;

  ${media.greaterThan('medium')`
    flex-direction: row;
    font-size: 3.2rem;
  `}
`;

export const AuthorSynopsis = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
  line-height: 24px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.contentSans};
`;

export const SocialWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-top: 2rem;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.color.fontLight};
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 1.6rem;

  &:not(:last-child):after {
    content: '·';
    color: inherit;
    position: absolute;
    right: -0.8rem;
  }

  svg {
    color: inherit;
  }
`;
