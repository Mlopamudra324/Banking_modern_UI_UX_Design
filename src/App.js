// It is react application named BANK_MODERN_APP using react and for stylinG I used Tailwind CSS..
// for refernces I used One week Wonder webiste

import styles from "./style";
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* This is Navbar section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* This is Hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* This is conatins all other basic sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
