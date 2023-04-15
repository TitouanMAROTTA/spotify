import React from "react";
import { Table } from "antd";
import songs from "../../static/data.json";
import "./PlaylistPage.css";

type Song = {
  title: string;
  artist: string;
  year: number;
  genre: string;
  popularity: number;
  duration: number;
};

type PlaylistProps = {
  name: string;
};

const Playlist: React.FC<PlaylistProps> = ({ name }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Artist",
      dataIndex: "artist",
      key: "artist",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Popularity",
      dataIndex: "popularity",
      key: "popularity",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
  ];

  const songData = songs.map((song: Song) => {
    return {
      title: song.title,
      artist: song.artist,
      year: song.year,
      genre: song.genre,
      popularity: song.popularity,
      duration: song.duration,
      key: song.title,
    };
  });

  return (
    <div>
      <h1>{name}</h1>
      <Table columns={columns} dataSource={songData} />
    </div>
  );
};

export default Playlist;
