import * as React from "react";
import {
  Button,
  Container,
  Html,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import twConfig from "../tailwind.config";

export default function Welcome() {
  return (
    <Html>
      <Tailwind config={twConfig}>
        <Container>
          <Row>
            <Text className="text-3xl font-semibold">Welcome to Acme!</Text>
            <Text>
              We're glad you're with us! You can now access your account by
              clicking the login button below.
            </Text>
            <Row className="flex items-baseline gap-x-4">
              <Text>You'll need this:</Text>
              <Text className="font-bold">123456789</Text>
            </Row>
            <Text>
              This is your EIN number. You will need this to access personal
              pages on the site. Don't worry if you forget it. You can always
              request an email containing it when you are prompted to use it.
            </Text>

            <Button
              href="https://example.com"
              className="bg-brand px-3 py-2 font-medium leading-4 text-white text-center w-full"
            >
              Login
            </Button>
          </Row>
        </Container>
      </Tailwind>
    </Html>
  );
}
