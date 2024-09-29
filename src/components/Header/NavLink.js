import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const StyledLink = styled.a`
  overflow: hidden;

  position: relative;
  display: block;

  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;

  transform: translateY(var(--translate-y));
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference) {
    ${StyledLink}:hover & {
      transform: translateY(calc(var(--translate-y) * -100%));
      transition: transform 250ms;
    }
  }
`;

const MainText = styled(Text)`
  --translate-y: 0%;
  font-weight: ${WEIGHTS.normal};
`;

const HoverText = styled(Text)`
  --translate-y: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
`;

export const NavLink = ({ children, ...props }) => {
  return (
    <StyledLink {...props}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </StyledLink>
  );
};
