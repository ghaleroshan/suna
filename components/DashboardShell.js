import React, { forwardRef } from "react";
import {
  Flex,
  Icon,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Heading,
} from "@chakra-ui/core";
import { useAuth } from "@/lib/auth";

const DashboardShell = ({ children }) => {
  const onClick = () => {
    auth.signout();
  };

  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        p={4}
      >
        <Stack isInline>
          <Icon name="logo" width="64px" height="auto" />
          <Link>sites</Link>
          <Link>feedback</Link>
        </Stack>
        <Stack isInline justifyContent="space-between" alignItems="center">
          <Link href="/" passHref mr="6">
            <a onClick={onClick}> Log Out</a>
          </Link>
          <Avatar />
        </Stack>
      </Flex>
      <Flex backgroundColor="blackAlpha.50" p={8} height="100vh">
        <Flex
          maxWidth="800px"
          ml="auto"
          mr="auto"
          width="100%"
          direction="column"
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
