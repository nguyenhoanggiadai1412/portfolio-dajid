
import IntroSection from "./sections/IntroSection"
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";
import ExperienceSection from "./sections/ExperienceSection";
interface HomeProps {
  index: number;
}
function Home(homeprops: HomeProps) {
  const sections = [
    <IntroSection key={0}></IntroSection>,
    <AboutSection key={1}></AboutSection>,
    <ProjectSection key={2}></ProjectSection>,
    <ExperienceSection key={3}></ExperienceSection>
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
