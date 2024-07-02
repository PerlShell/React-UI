import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  useBreakpointValue,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaReact } from "react-icons/fa";

import COLOR from "../constant/color";

import AOS from "aos";
import "aos/dist/aos.css";

export type MobileNavItemProps = {
  label: string;
  children?: MobileNavItemProps[];
  href?: string;
};

AOS.init({
  startEvent: "load",
});

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box id="navbar">
      <Flex
        bg={"transparent"}
        color={COLOR.MAIN_COLOR}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Stack
          as={Link}
          href="/"
          p={2}
          spacing={1}
          direction={"row"}
          data-aos="fade-down"
          data-aos-delay={"100"}
        >
          <Icon
            className="react-logo"
            as={FaReact}
            fontSize={"3xl"}
            color={"blue.400"}
          />
          <Text
            className="logo"
            fontSize={"xl"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={COLOR.SECOND_COLOR}
          >
            Perl Shell
          </Text>
        </Stack>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "end" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "gray.800";
  const linkHoverColor = "gray.600";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          data-aos="fade-down"
          data-aos-delay={navItem.delay}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"white.600"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: MobileNavItemProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"gray.800"}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
    delay: "200",
  },
  {
    label: "About",
    href: "#about",
    delay: "300",
  },
  {
    label: "My Projects",
    href: "#projects",
    delay: "400",
  },
];
