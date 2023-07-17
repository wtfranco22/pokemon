import styles from './Landing.module.css';

const Landing = ({ start }) => {
    const handleClick = () => {
        start(true)
    }
    return (
        <div className={styles.container}>
            <div className={styles.pokeball} onClick={handleClick}>
                <div className={styles.pokeball__button}>
                </div>
            </div>
            <span className={styles.btn_play} onClick={handleClick}>START</span>
        </div>
    );
};

export default Landing;
