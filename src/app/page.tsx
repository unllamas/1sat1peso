"use client";

import {
  Button,
  Container,
  Heading,
  Flex,
  Text,
  Divider,
  Icon,
} from "@lawallet/ui";
import GitHubCorners from "@uiw/react-github-corners";

import { appTheme } from "@/config";

import { Progress } from "@/app/components/Progress";
import { Prices } from "@/app/components/Prices";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { PricesProvider } from "@/context/PricesContext";

export default function Home() {
  return (
    <PricesProvider>
      <div>
        {/* <GitHubCorners
          position='right'
          bgColor={appTheme.colors.white}
          color={appTheme.colors.background}
          href='https://github.com/uiwjs/react-github-corners'
        /> */}
      </div>
      <Flex flex={1} align="center">
        <Container size="small">
          <Header />
          <Prices />
        </Container>
      </Flex>
      <Footer />
    </PricesProvider>
  );
}
