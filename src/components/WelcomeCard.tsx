import { Card } from "react-bootstrap";

export default function WelcomeCard(): JSX.Element {
  return (
    <Card>
      <Card.Title>Welcome to Spotify 365</Card.Title>
      <Card.Subtitle>
        Learn about your top artists, genres, and more
      </Card.Subtitle>
      <Card.Body>
        <Card.Text>
          Spotify 365 is a platform that you can connect your Spotify account to
          gain a better insight into your listening habits.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
