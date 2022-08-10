import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAmerica,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import { Wrapper as AccountItemWrapper } from '../../../AccountItem';
import Button from '../../../Buttons';
import Menu from '../../../Popper/Menu';
import MenuItem from '../../../Popper/Menu/MenuItem';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica}></FontAwesomeIcon>,
        title: 'Tieng Viet',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Phan Hoi va Tro Giup',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Phim tat tren bam phim',
    },
];
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
                    <Button type={'text'}>Đăng Ky</Button>
                    <Button type={'primary'} rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Đăng Nhập
                    </Button>

                    <Menu items={MENU_ITEM}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
