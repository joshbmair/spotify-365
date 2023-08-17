import { randomBytes } from "crypto";
import { useEffect, useState } from "react";

import { Button, Card } from "react-bootstrap";
import { BASE_URL, CLIENT_ID } from "@/lib/constants";
import { generateCodeChallenge } from "@/lib/authorization";

export default function WelcomeCard(): JSX.Element {
  const [authorizationUrl, setAuthorizationUrl] = useState<string>("");

  useEffect(() => {
    setAuthorizationUrl(generateAuthorizationUrl());
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Spotify 365</Card.Title>
        <Card.Text>
          Have you ever wanted to see your top artists, genres, and songs but
          had to wait until this year{"'"}s Spotify wrapped comes out? With
          Spotify 365, you can uses the to see the same results at any time on
          any day using the{" "}
          <a href="https://developer.spotify.com/documentation/web-api">
            Spotify API
          </a>
          .
        </Card.Text>
        <Button href={authorizationUrl}>Try it out</Button>
      </Card.Body>
    </Card>
  );
}

function generateAuthorizationUrl(): string {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: "user-top-read",
    redirect_uri: `${BASE_URL}/results`,
    state: randomBytes(16).toString("base64"),
    code_challenge_method: "S256",
    code_challenge: generateCodeChallenge(),
  });

  return `https://accounts.spotify.com/authorize?${params}`;
}
