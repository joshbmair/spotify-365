import { Button, Card } from "react-bootstrap";

import styles from "./welcome-card.module.css";

export default function WelcomeCard(): JSX.Element {
  return (
    <div className={styles.content}>
      <Card>
        <Card.Body>
          <Card.Title>Spotify 365</Card.Title>
          <Card.Text>
            Have you ever wanted to see your top artists, genres, and songs but
            had to wait until this year's Spotify wrapped comes out? With
            Spotify 365, you can uses the to see the same results at any time on
            any day using the{" "}
            <a href="https://developer.spotify.com/documentation/web-api">
              Spotify API
            </a>
            .
          </Card.Text>
          <Button href="/results">Try it out</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
