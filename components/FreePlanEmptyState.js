import React from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/core";
import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box
      backgroundColor="white"
      width="100%"
      borderRadius="4px"
      display="flex"
      flexDirection="column"
      justify="center"
      alignItems="center"
      p={8}
    >
      <Heading size="md" mb={2}>
        Get feedback for your sites fast
      </Heading>
      <Text mb={4}>Welcome stranger! Signup today to get your feedback</Text>
      <Button maxW="200px">Get Upgraded</Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
