import styles from './Landing.module.css';

const LandingPage = ({ start }) => {
    const handleClick = () => {
        start(true);
    };
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button onClick={handleClick} className={styles.link}> START </button>
            </div>
        </div>
    );
};
export default LandingPage;