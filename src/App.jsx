import React, { useState } from "react";
import { Header, Footer, FooterCTA, MobileDrawer } from "./components";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  const navigate = (path) => {
    setCurrentPage(path);
    setIsDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onNavigate={navigate}
        currentPath={currentPage}
        onMenuClick={() => setIsDrawerOpen(true)}
      />
      
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onNavigate={navigate}
      />
      
      <main className="pt-16">
        <AppRoutes currentPath={currentPage} />
      </main>
      
      <Footer onNavigate={navigate} />
      <FooterCTA />
    </div>
  );
};

export default App;