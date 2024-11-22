import AboutMe from "@/features/about-me/AboutMe";
import Skills from "@/features/skills/Skills";
import Header from "@features/header/Header";

function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />

      <p style={{marginTop : "10rem" , textAlign : "center"}}>Projects soon...</p>
    </div>
  );
}

export default Home