import BlurText from "../../../components/Reactbits/BlurText/BlurText"
import GradientText from "../../../components/Reactbits/GradientText/GradientText"
import ProfileCard from "../../../components/Reactbits/ProfileCard/ProfileCard"
import TextType from "../../../components/Reactbits/TextType/TextType"
import Avatar from "../../../assets/img/img-avatar.png"
import styles from "../Home.module.css"
import GlassIcons from "../../../components/Reactbits/GlassIcons/GlassIcons"
import { SOCIAL_ITEMS } from "../../../constants/socialItems"
function IntroSection() {

    return (
        <section className={`${styles.aboutContainer} grid container `} id="about">
          <div className={styles.aboutInformation}>
            <h1>
              <BlurText
                text="Nguyen Hoang Gia Dai"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl"
              />
            </h1>
            <h3 className={styles.aboutRole}>
              <GradientText 
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                className="custom-class"
                showBorder={true}>
                Fullstack Developer  
              </GradientText>
            </h3>
            <TextType 
              text={["Hi, I’m a developer passionate about creating efficient and user-friendly applications. Always eager to learn and improve, I strive to build high-quality software solutions."]}
              typingSpeed={10}
              pauseDuration={1500}
              showCursor={true}
              textColors={["var(--title-color)"]}
              cursorCharacter="|"
            />
            <div>
              <GlassIcons items={SOCIAL_ITEMS} className="custom-class"/>
            </div>
          </div>
          <div className={styles.aboutCard}>
            <ProfileCard
              name="DaJid G. Nguyen"
              title="Software Engineer"
              handle="dajid"
              status="Online"
              contactText="Contact Me"
              avatarUrl= {Avatar}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </section>
    )
}

export default IntroSection
