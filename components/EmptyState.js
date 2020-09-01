import React from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/core";
import AddSiteModal from "./AddSiteModal";

const EmptyState = () => (
  <Box
    backgroundColor="white"
    width="100%"
    borderRadius="4px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    p={8}
  >
    <Heading size="md" mb={2}>
      You haven't added any sites{" "}
    </Heading>
    <Text mb={4}>Let's get started</Text>
    <AddSiteModal />
  </Box>
);

export default EmptyState;
