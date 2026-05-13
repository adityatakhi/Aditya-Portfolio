import HomePage from './pages/Home'
import Cursor from './components/Cursor'
import Footer from './pages/Footer'
import Landing from './pages/Landing'

export default function Home() {
  return (
    <>
      <Cursor />
      <HomePage /> 
      <Landing />
      <Footer />
    </>
  );
}