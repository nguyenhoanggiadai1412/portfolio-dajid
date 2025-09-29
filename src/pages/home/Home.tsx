
import IntroSection from "./sections/IntroSection"
import AboutSection from "./sections/AboutSection";
interface HomeProps {
  index: number;
}
function Home(homeprops: HomeProps) {
  const sections = [
    <IntroSection key={0}></IntroSection>,
    <AboutSection key={1}></AboutSection>
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
