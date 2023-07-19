import { useDispatch, useSelector } from 'react-redux';
import styles from './Msg.module.css';
import { setShowMsg } from '../../redux/actions';

const Msg = () => {
    const message = useSelector((state) => state.showMsg);
    const dispatch = useDispatch();
    const handleClick = () => { dispatch(setShowMsg({ show: false, msg: '' })); };
    return (
        <div className={styles.container}>
            <button type='button' onClick={handleClick} className={styles.btn_close}>close</button>
            <div className={styles.description}>
                <h3>Message</h3>
                <span className={styles.text}> {message.msg} </span>
            </div>
        </div>
    );
};
export default Msg;