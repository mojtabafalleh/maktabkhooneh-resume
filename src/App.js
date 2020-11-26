import TitileAndSection from "./sections/TitileAndSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./component/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Snowfall from 'react-snowfall'

function App() {
  return (
    <main class="cover-container" role="main"  >
      <Snowfall   color="red" snowflakeCount={200} />
      <Navigation/>
      <TitileAndSection />
      <AboutSection />
      <SkillSection />
  
    </main>
  );
}

export default App;
