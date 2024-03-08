'use client';

import { styled } from 'styled-components';

export const FooterPrimitive = styled.footer`
  display: flex;
  align-items: center;
  min-height: 150px;

  padding: 24px 0;

  background-color: ${(props) => props.theme.colors.gray15};

  @media screen and (min-width: 961px) {
    justify-content: center;
  }

  button {
    min-width: 50px;
  }

  .box {
    flex: 1;

    > div {
      flex-direction: column;
      align-items: center;

      @media screen and (min-width: 961px) {
        flex-direction: row;
      }
    }
  }

  .social {
    display: flex;
    gap: 4px;
  }
`;
