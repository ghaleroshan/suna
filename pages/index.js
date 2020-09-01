import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { Button, Text, Heading } from "@chakra-ui/core";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const auth = useAuth();

  const handleClick = (e) => {
    auth.signinWithGoogle();
  };

  return (
    <>
      <main className={styles.main}>
        <Heading> Welcome to my world</Heading>

        {auth.user && auth.user ? (
          <>
            <Text> Current user : {auth.user ? auth.user.email : "none"}</Text>
            <img src="/logo_size.jpg" alt="Suna Logo" width="200px" />{" "}
            <Link href="/dashboard">
              <Button>Go to Dashboard</Button>
            </Link>
          </>
        ) : (
          <Button onClick={handleClick}>Sign IN with Google</Button>
        )}
      </main>
    </>
  );
}
