import { useState } from "react";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import Test from "./components/Test";
import Navigation from "./components/Navigation";
import Chat from './components/Chat';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  return (

  <div>
    <Routes>
              {/* The ':username' part is the dynamic parameter */}
              <Route path="/" element={<Chat />} />
              <Route path="/:chatName" element={<Chat />} />
              </Routes>
  </div>
  );
}
