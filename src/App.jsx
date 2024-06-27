import styles from "./style";
import { Navbar, Hero, TrustedClients, TopFeatures, FeaturedFunctions, Testimonials, Questions, Subscribe, Footer } from 
"./components";


const App = () => (
  <div className="bg-secondary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-secondary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <TrustedClients /> 
      </div>
    </div>

    <div className={`bg-secondary  ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <TopFeatures /> 
      </div>
    </div>

    <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <FeaturedFunctions />
      </div>
    </div>

    <div className={`bg-secondary  ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>
    </div>

    <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Questions />
      <Subscribe /> 
      <Footer />
      </div>
    </div>
  </div>

);

export default App
