import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "antd";

interface Playlist {
  id: number;
  name: string;
}

const HomePage = () => {
  const navigate = useNavigate();

  const playlists: Playlist[] = [
    {
      id: 1,
      name: "Playlist 1",
    },
    {
      id: 2,
      name: "Playlist 2",
    },
    {
      id: 3,
      name: "Playlist 3",
    },
  ];

  const top50: Playlist[] = [
    {
        id: 4,
        name: "Playlist 4",
      },
      {
        id: 5,
        name: "Playlist 5",
      },
      {
        id: 6,
        name: "Playlist 6",
      },
  ];

  const randomGradient = () => {
    const angle = Math.round(Math.random() * 360);
    let color1;
    let color2;
    do {
      color1 = Math.floor(Math.random()*16777215).toString(16);
    } while (color1 === 'fff');
    do {
      color2 = Math.floor(Math.random()*16777215).toString(16);
    } while (color2 === 'fff');
    return `linear-gradient(${angle}deg, #${color1}, #${color2})`;
  };

  const renderPlaylistCard = (playlist: Playlist) => (
    <Col key={playlist.id} xs={24} sm={12} md={8} lg={6} xl={4}>
      <Card
        hoverable
        className="playlist-card"
        style={{background: randomGradient()}}
        onClick={() => navigate(`/playlist/${playlist.id}`)}
      >
        <div className="playlist-card-details">
          <div className="playlist-card-info">
            <div className="playlist-card-name">{playlist.name}</div>
          </div>
        </div>
      </Card>
    </Col>
  );

  const renderTop50Card = (playlist: Playlist) => (
    <Col key={playlist.id} xs={24} sm={12} md={8} lg={6} xl={4}>
      <Card
        hoverable
        className="playlist-card"
        style={{background: randomGradient()}}
        onClick={() => navigate(`/playlist/${playlist.id}`)}
      >
        <div className="playlist-card-details">
          <div className="playlist-card-info">
            <div className="playlist-card-name">{playlist.name}</div>
          </div>
        </div>
      </Card>
    </Col>
  );

  return (
    <>
      <div>
        <h2>Your playlists</h2>
        <Row gutter={[16, 16]}>
          {playlists.map(renderPlaylistCard)}
        </Row>

        <h2>Top 50</h2>
        <Row gutter={[16, 16]}>
          {top50.map(renderTop50Card)}
        </Row>
      </div>
    </>
  );
};

export default HomePage;
