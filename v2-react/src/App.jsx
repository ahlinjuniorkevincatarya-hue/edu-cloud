import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Sessions from "./pages/Sessions";
import Files from "./pages/Files";
import Alerts from "./pages/Alerts";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Workspace from "./pages/Workspace";

import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <Layout title="Home" showBack={false}>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/sessions"
        element={
          <Layout title="Sessions">
            <Sessions />
          </Layout>
        }
      />

      <Route
        path="/files"
        element={
          <Layout title="Files">
            <Files />
          </Layout>
        }
      />

      <Route
        path="/alerts"
        element={
          <Layout title="Alerts">
            <Alerts />
          </Layout>
        }
      />

      <Route
        path="/profile"
        element={
          <Layout title="Profile">
            <Profile />
          </Layout>
        }
      />

      <Route
        path="/settings"
        element={
          <Layout title="Settings">
            <Settings />
          </Layout>
        }
      />

      <Route
        path="/workspace"
        element={
          <Layout title="Workspace">
            <Workspace />
          </Layout>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default App;