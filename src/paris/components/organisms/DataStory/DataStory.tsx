import { Eyebrow } from '../../atoms/Eyebrow';
import { FigureBreakout } from '../../molecules/FigureBreakout';
import { FindingScrolly } from '../../molecules/FindingScrolly';
import { findings } from '../../../data/findings';
import styles from './DataStory.module.css';

export function DataStory() {
  return (
    <section className={styles.section} aria-labelledby="data-h">
      <div className={styles.intro}>
        <Eyebrow>The data story</Eyebrow>
        <h2 id="data-h" className={styles.h}>
          Did the policy actually work?
        </h2>
        <p className={styles.method}>
          To find out, I scraped Lime&rsquo;s public GBFS feed every two hours
          from 13 to 17 March 2023: 28 snapshots, more than 350,000 records of
          where scooters sat parked across Paris. Then I tested three of the
          city&rsquo;s own spatial rules against the data.
        </p>
      </div>

      <div className={styles.methodFigure}>
        <FigureBreakout
          src="/figures/methodology.jpg"
          alt="Method diagram: collect the GBFS feed, store each vehicle-status snapshot, then analyze and visualize the data."
          caption="The method: collect Lime&rsquo;s GBFS feed, store each vehicle-status snapshot, then analyze and visualize."
          source="Own illustration"
        />
      </div>

      <div className={styles.findings}>
        {findings.map((f) => (
          <FindingScrolly key={f.id} finding={f} />
        ))}
      </div>
    </section>
  );
}
