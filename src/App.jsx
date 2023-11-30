import Navbar from "./components/Navbar/navbar.jsx";
import Intro from "./components/Intro/intro.jsx"; 
import Skill from "./components/Skill/skill.jsx";
import Projects from "./components/Projects/project.jsx";
import ContactMe from "./components/ContactMe/contact.jsx";

import Footer from "./components/Footer/footer.jsx";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skill/>
        <Projects/>
        <ContactMe/>
        <Footer/>
    </div>
  );
}

export default App;          





