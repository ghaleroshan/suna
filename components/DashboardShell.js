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
import AddSiteModal from "./AddSiteModal";

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  const { user } = auth;
  const onClick = () => {
    auth.signout();
  };

  return (
    <Flex flexDirection="column" height="100vh">
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
          <Link href="/" mr="6">
            <Button onClick={onClick} variant="ghost">
              Log Out
            </Button>
          </Link>
          {!user ? "" : <Avatar src={user.photoUrl} />}
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
            <BreadcrumbItem display="flex" justifyContent="space-between">
              <BreadcrumbLink>sites</BreadcrumbLink>
              <AddSiteModal> Add Site</AddSiteModal>
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
