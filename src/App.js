import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wardrobe from "./pages/Wardrobe";
import DailyOutfitPage from "./pages/DailyOutfitPage";
import Main from "./pages/Main";
import "./index.css";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Settings from "./pages/Settings";
import useAppContext from "./context/useAppContext";

const SUPABASE_URL = "https://batugplthlrnlthcjmqg.supabase.co";
const supabase = createClient(SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

function App() {
  const { setSession } = useAppContext();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [setSession]);

  return (
    <Router>
      <Routes>
        {/* Main */}
        <Route path="/" element={<Main />} />
        {/* DailyOutfit Route */}
        <Route path="/daily" element={<DailyOutfitPage />} />
        {/* Wardrobe Route */}
        <Route path="/wardrobe" element={<Wardrobe />} />
        {/* Settings Route */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
