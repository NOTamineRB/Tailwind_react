import {features} from "../constant";
import styles,{layout} from '../style';
import Button from './Button';


const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Yiu do the buisiness
            <br className="sm:block hidden" />we'll handle the money 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card , you can improve your financial
          life by building credit , But with hundreds od credit Card
          on the market
        </p>
        <Button styles="mt-10"/>
      </div>
    </section>
  )
};

export default Business;
