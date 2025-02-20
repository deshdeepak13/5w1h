import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

const Home = lazy(() => import('./pages/Home'));
const Hero = lazy(() => import('./pages/Hero'));
const Loser = lazy(() => import('./pages/Loser'));
// const CategoryPage = lazy(() => import('./pages/CategoryPage'));
// const EventPage = lazy(() => import('./pages/EventPage'));
// const ArticlePage = lazy(() => import('./pages/ArticlePage'));

// const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <div className="flex">
            {/* <Sidebar /> */}
            <main className="flex-1 p-6">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/hero" element={<Hero />} />
                  <Route path="/loser" element={<Loser />} />
                  <Route path="/:category" element={<Home />} /> {/* Category-based routing */}
                  {/* <Route path="/category/:categoryId" element={<CategoryPage />} /> */}
                  {/* <Route path="/event/:eventId" element={<EventPage />} /> */}
                  {/* <Route path="/article/:articleId" element={<ArticlePage />} /> */}
                </Routes>
              </Suspense>
            </main>
          </div>
        </div>
      </Router>
    // </QueryClientProvider>
  );
}

export default App;
