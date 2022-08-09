import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './accountItem.module.scss';

const cx = classNames.bind(styles);

function Wrapper() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/73d49133f75d9f15dbcba6c99b395686~c5_300x300.webp?x-expires=1660226400&x-signature=dtBJA18wpJU44bZnq8vfod0wguY%3D"
                alt="avatar"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Vũ Văn Thành</span>
                    <FontAwesomeIcon className={cx('user-check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>vuvanthanh2311</span>
            </div>
        </div>
    );
}

export default Wrapper;
