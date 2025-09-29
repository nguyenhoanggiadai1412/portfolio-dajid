import MagicBento from "../../../components/Reactbits/MagicBento/MagicBento"

function AboutSection() {
    return (
      <section className="container">
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </section>
    )
}

export default AboutSection
