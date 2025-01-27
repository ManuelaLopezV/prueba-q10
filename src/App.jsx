import { HelmetProvider } from "react-helmet-async";
import Head from "./components/layout/Head";
import Header from "./components/layout/Header";
import PartnersPage from "./pages/PartnersPage";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <HelmetProvider>
      <Head />
      <Header />
      <PartnersPage />
      <Footer />
    </HelmetProvider>
  );
}

export default App;
