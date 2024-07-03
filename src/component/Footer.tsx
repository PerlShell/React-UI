import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

type SocialButtonProps = {
  children: React.ReactNode;
  label: string;
  href: string;
};
const SocialButton = ({ children, label, href }: SocialButtonProps) => {
  return (
    <chakra.button
      bg={"blackAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={"gray.50"} color={"gray.700"} id={"footer"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© {new Date().getFullYear()} PerlShell. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Github"} href={"https://github.com/PerlShell"}>
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"YouTube"}
            href={"https://www.youtube.com/channel/UCxkCiJ16-EPqzzPvOloHdYQ"}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/muhaft_"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
