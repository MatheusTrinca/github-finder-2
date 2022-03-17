import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="container flex flex-col h-screen justify-between bg-gray-700">
            <Navbar />
            <main className="w-full mx-auto px-3 pb-12 bg-gray-700">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
