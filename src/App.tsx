import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import BottomBar from "./components/BottomBar/BottomBar";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout App">
      <LeftMenu />
      <Content className="content">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/playlist" element={<PlaylistPage name="My Playlist" />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Content>
      <BottomBar />
    </Layout>
  );
}

export default App;
