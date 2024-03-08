'use client';

import Image from 'next/image';
import { Heading, Flex, Divider, Text } from '@lawallet/ui';

import { appTheme } from '@/config';

import { Progress } from '../Progress';

import { HeaderPrimitive, Background } from './style';

export default function Header() {
  return (
    <HeaderPrimitive>
      <Background>
        <Image src='/map.webp' alt='map' width={2103} height={1248} />
      </Background>
      <Heading align='center'>1SAT = 1PESO</Heading>
      <Flex gap={8}>
        <Progress value={69} />
        <Text isBold>$0,69</Text>
      </Flex>
      <Divider y={12} />
      <Text align='center' color={appTheme.colors.gray50}>
        1 BTC = 100.000.000 SAT
      </Text>
      <Divider y={16} />
    </HeaderPrimitive>
  );
}
