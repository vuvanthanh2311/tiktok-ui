import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <ul>
                <li>
                    <Link to={'/'}> Home page</Link>
                </li>
                <li>
                    <Link to={'/following'}> Following page</Link>
                </li>
                <li>
                    <Link to={'/upload'}> Upload page</Link>
                </li>
                <li>
                    <Link to={'/error'}> Error page</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
