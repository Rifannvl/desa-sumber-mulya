import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilDesaPage from "./pages/ProfilDesaPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import GovernmentPage from "./pages/GovernmentPage";
import EconomyPage from "./pages/EconomyPage";
import ESuratPage from "./pages/ESuratPage";
import PelaporanPage from "./pages/PelaporanPage";
import APBDesPage from "./pages/APBDesPage";
import UMKMPage from "./pages/UMKMPage";
import Navbar from "./components/organisms/Navbar";
// import Footer from "./components/organisms/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil-desa" element={<ProfilDesaPage />} />
            <Route path="/pemerintahan" element={<GovernmentPage />} />
            <Route path="/ekonomi" element={<EconomyPage />} />
            <Route path="/berita/:id" element={<NewsDetailPage />} />
            <Route path="/e-surat" element={<ESuratPage />} />
            <Route path="/pelaporan" element={<PelaporanPage />} />
            <Route path="/apbdes" element={<APBDesPage />} />
            <Route path="/umkm" element={<UMKMPage />} />
            {/* Tambahkan rute lain di sini */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
