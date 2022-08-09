import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import { Wrapper as AccountItemWrapper } from '../../../AccountItem';
import Button from '../../../Buttons';

const cx = classNames.bind(styles);

function Header() {
    const [result, setResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setResult([]);
        }, 1000);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok" />
                <Tippy
                    interactive
                    visible={result.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                ket qua tim kiem
                                <div className={cx('search-account')}>
                                    <div className={cx('search-account--title')}>Tài Khoản</div>
                                    <AccountItemWrapper />
                                    <AccountItemWrapper />
                                    <AccountItemWrapper />
                                    <AccountItemWrapper />
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" name="search" placeholder="Tìm kiếm tài khoản và video" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <span className={cx('search-line')} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button to={'/'} target="_blank">
                        Đăng Nhập
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
