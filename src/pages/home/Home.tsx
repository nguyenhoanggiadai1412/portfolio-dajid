
import IntroSection from "./sections/IntroSection"
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";
interface HomeProps {
  index: number;
}
function Home(homeprops: HomeProps) {
  const sections = [
    <IntroSection key={0}></IntroSection>,
    <AboutSection key={1}></AboutSection>,
    <ContactSection key={2}></ContactSection>,
    <ProjectSection key={3}></ProjectSection>,
  ]
  return (
      // <div className={`${styles.homeContainer} grid container `}>
      <div>
        {sections[homeprops.index]}
      </div>
      // </div>
  )
}

export default Home
