import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Container,
  Icon,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";

import { BsGithub, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

import ParticleCustom from "./ParticleCustom";
import Navbar from "./Navbar";
import TypedJS from "../utils/TypedJS";
import person from "../images/person.webp";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  startEvent: "load",
  once: true,
});

export default function Hero() {
  return (
    <Container
      maxW={{ lg: "4xl", xl: "6xl", "2xl": "7xl" }}
      minH={"100vh"}
      mx={"auto"}
      overflow={"hidden"}
    >
      <Navbar />
      <ParticleCustom />
      <Stack
        margin={0}
        py={{ base: "0", md: "20" }}
        px={{ lg: "38", xl: "30" }}
        mx={"auto"}
        maxW={"5xl"}
        minH={"80vh"}
        direction={{ base: "column", lg: "row" }}
      >
        <Flex
          flex={2}
          align={"center"}
          justify={"center"}
          alignItems={"center"}
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={{ base: "xl", lg: "full" }}
            px={{ base: "5" }}
          >
            <Heading fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}>
              <Text
                color={"gray.700"}
                as={"span"}
                position={"relative"}
                data-aos="fade-down"
                data-aos-delay={"600"}
              >
                Hello There 👋
              </Text>
              <br />
              <Text
                color={"blue.400"}
                as={"span"}
                data-aos="fade-down"
                data-aos-delay={"800"}
              >
                I'm <span style={{ color: "tomato" }}>Hafidz</span> Al-Ghifari.
              </Text>{" "}
            </Heading>
            <Text
              fontSize={"xl"}
              color={"gray.700"}
              data-aos="zoom-in"
              data-aos-delay={"1000"}
            >
              <TypedJS
                loop={true}
                strings={[
                  'I\'m <span style="color: black">Frontend</span> Developer.',
                  'I\'m <span style="color: red">Backend</span> Developer.',
                  'I\'m <span style="color: green">Fullstack</span> Developer.',
                  'I\'m <span style="color: gray">Unity</span> Engineer.',
                ]}
              />
            </Text>
            <Stack direction={{ base: "column", lg: "row" }}>
              <Button
                data-aos="fade-up"
                data-aos-delay={"1200"}
                as={Link}
                marginTop={{ lg: "16" }}
                px={"1.65rem"}
                fontSize={"sm"}
                rounded={"full"}
                href={"#footer"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Let's get in touch
              </Button>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              {SOCIAL_MEDIA.map((item, i) => (
                <Flex
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                  as={Link}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                  bgColor={"blue.400"}
                  borderRadius={"lg"}
                  p={1.5}
                  href={item.href}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  isExternal
                >
                  <Icon as={item.icon} fontSize={"1.3rem"} color={"white"} />
                </Flex>
              ))}
            </Stack>
          </Stack>
        </Flex>
        <Flex
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
          h={"auto"}
        >
          <Box
            data-aos="zoom-in"
            data-aos-delay={"1700"}
            className="shape"
            boxShadow={"8px 8px 30px 10px rgb(144 205 244 / 48%)"}
            w={{ base: "180px", sm: "280px", "2xl": "320px" }}
            h={{ base: "180px", sm: "280px", "2xl": "320px" }}
          >
            <Box
              data-aos="zoom-in"
              data-aos-delay={"1900"}
              className="shape2"
              boxShadow={"8px 8px 30px 10px rgb(66 153 225 / 48%)"}
              w={{ base: "180px", sm: "280px", "2xl": "320px" }}
              h={{ base: "180px", sm: "280px", "2xl": "320px" }}
            />
          </Box>
          <Image
            draggable={false}
            data-aos="zoom-in"
            data-aos-delay={"2100"}
            className={"person"}
            position={"absolute"}
            src={person}
            alt="Person Image"
            w={{ base: "160px", sm: "260px", "2xl": "280px" }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

const SOCIAL_MEDIA = [
  {
    icon: BsGithub,
    href: "https://www.github.com/PerlShell",
    delay: "1300",
  },
  {
    icon: BsInstagram,
    href: "https://www.instagram.com/muhaft_",
    delay: "1400",
  },
  {
    icon: BsTiktok,
    href: "https://www.tiktok.com/@itsukiovt",
    delay: "1500",
  },
  {
    icon: BsYoutube,
    href: "https://www.youtube.com/channel/UCxkCiJ16-EPqzzPvOloHdYQ",
    delay: "1600",
  },
];
