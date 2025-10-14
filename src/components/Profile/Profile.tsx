import character from "../../assets/img/character.png"
import ElectricBorder from "../Reactbits/ElectricBorder/ElectricBorder"
import ShinyText from "../Reactbits/ShinyText/ShinyText"
import flag from "../../assets/img/flag.png"
import styles from "./Profile.module.css"
import { FaCode,FaMusic,FaGamepad,FaBook, FaCoffee  } from "react-icons/fa";
function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.info}>
        <ElectricBorder
          color="#7df9ff"
          speed={0.2}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div>
            <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
             <div className={styles.infoTitle}>
              <ShinyText 
                text="Fresher" 
                disabled={false} 
                speed={3} 
                className='custom-class' 
              />
              <div>
                <img src={flag} alt="Vietnam is my life" />
              </div>
             </div>
             <div className={styles.infoFullname}>Nguyen Hoang Gia Dai</div>
             <div className={styles.infoDob}>20 - 5 - 2002</div>
             <div className={styles.infoMetrics}>
              <ul >
                <li>
                  3.34 <br/>
                  GPA
                </li>
                <li>
                  700+ <br/>
                  Toeic
                </li>
                <li>
                  20.7 <br />
                  BMI
                </li>
                <li>
                  04 <br />
                  Award
                </li>
              </ul>
             </div>
             <div className={styles.infoHobbies}>
              <ul>
                <li><FaCode/></li>
                <li><FaMusic/></li>
                <li><FaCoffee /></li>
                <li><FaGamepad/></li>
                <li><FaBook/></li>
              </ul>
             </div>
            </p>
          </div>
        </ElectricBorder>
      </div>
      <div className={styles.character}>
        <img src={character} alt="" />
      </div>
    </div>
  )
}

export default Profile
