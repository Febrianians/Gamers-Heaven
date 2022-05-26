import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { ref, onValue } from "firebase/database";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const GameList = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    onValue(
      ref(db, "games"),
      (snapshot) => {
        const newGames = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          //   console.log(childKey, childData);
          newGames.push({
            key: childKey,
            name: childData.name,
            game_url: childData.game_url,
            description: childData.description,
          });
        });
        setGameList(newGames);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  return (
    <Container>
      <Link
        className="btn btn-primary btn-lg mb-2"
        role="button"
        to="/games/add"
      >
        Tambah
      </Link>
      <Row>
        {gameList &&
          gameList.map((game) => {
            return (
              <Col key={game.key} sm="6">
                <Card body>
                  <CardTitle tag="h5">{game.name}</CardTitle>
                  <CardText>{game.description}</CardText>
                  <Link
                    role="button"
                    className="btn btn-secondary"
                    to={game.game_url ? game.game_url : "/games"}
                  >
                    More..
                  </Link>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default GameList;
