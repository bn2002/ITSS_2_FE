/* eslint-disable jsx-a11y/anchor-is-valid */

import ButtonAuth from 'components/ButtonAuth/buttonAuth';
import MenuUser from 'components/MenuUser';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'redux/store';
import RouteConfig from 'routes/Route';
import Config from 'utils/Config';
import './styles.scss';

function Header() {
    const userInfo = useSelector((state: RootState) => state.userInfoState);
    return (
        <div className="header-wrapper">
            <nav
                className="navbar navbar-expand"
                style={{ backgroundColor: 'var(--primary)', padding: 8, height: 64 }}
            >
                <div className={'center justify-content-between w-100 flex-nowrap'}>
                    <div className="d-flex text-light gap-2">
                        <Link
                            className="navbar-brand text-light"
                            to={
                                userInfo.role === Config.USER_ROLE_ADMIN
                                    ? RouteConfig.HOME
                                    : RouteConfig.HOME
                            }
                        >
                            Quang Đạt
                        </Link>
                    </div>

                    <div className="" id="">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li>{userInfo?.email ? <MenuUser /> : <ButtonAuth />}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
