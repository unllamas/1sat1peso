import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface CardProps {
  children: ReactNode;
}

const CardPrimitive = styled.div`
  width: 100%;

  padding: 12px;

  background-color: ${(props) => props.theme.colors.gray15};
`;

export function Card(props: CardProps) {
  const { children } = props;

  return <CardPrimitive {...props}>{children}</CardPrimitive>;
}
