import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, primary, children, onClick, ...passProp }) {
    let Comp = 'button';
    const classes = cx('wrapper');

    const props = {
        onClick,
        ...passProp,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    }
    if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
