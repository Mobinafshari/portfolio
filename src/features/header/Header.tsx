import bgImage from "@assets/bg.webp"
import "./header.scss"
import Navbar from "@features/navbar/Navbar"

function Header() {
  return (
    <header>
      <Navbar />

      <section className="header">
        <div className="header-title">
          <h1 className="header-title_heading">Hi there , I'm Mobin.</h1>
          <h2 className="header-title_sub-heading">Frontend developer</h2>
        </div>
        <img src={bgImage} alt="bg-image" className="header-image" />
      </section>
    </header>
  );
}

export default Header