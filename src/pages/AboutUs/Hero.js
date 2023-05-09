import styles from './AboutUs.module.scss';
function Hero(props) {
  return (
    <>
      <div className={styles.fullPage}>
        <div className={props.cName}>
          <img src={props.heroImg} alt="heroImage"></img>
        </div>

        <div className={styles.background}>
          <div className={styles.whyDreamyFarm}>
            <h1>Why Dreamy Farm</h1>
            <p>
              The current food supply chain is costly, inefficient, and
              wasteful. Fruits and vegetables' nutrients can easily be lost
              after pickup.<br></br>The goal of Dreamy Farm is to make delicious
              food easily accessible to all Vietnamese. We offer a simple
              complement or alternative to conventional distribution methods.
              Here, you have access to high quality food and the ability to
              enjoy deliveries on your schedule, with no upfront fees, or large
              time commitments. Eating sustainably should be a no brainer!
            </p>
          </div>

          <div className={styles.whatSetsUsApart}>
            <h1>What Sets Us Apart</h1>
            <p>
              Local sourcing - Network of 10+ farms within the South and the
              North of Vietnam<br></br>
              Grocery Variety - 100+ unique products and recipes bundle<br></br>
              Quality & Freshness — Same-day logistics<br></br>
              Sustainability-focused — Regenerative and organic farms;
              compostable packaging
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export { Hero };
