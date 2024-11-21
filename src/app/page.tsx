import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomePage from "./components/mainContent/HomePage";


export default function Home() {
  return (
    <div className="main-content-wrapper">
      <Header/>
      <main className="mainContent">
       <HomePage/>
      </main>
      <Footer/>
    </div>
  );
}
