/* eslint-disable jsx-a11y/anchor-is-valid */

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "redux/store";
import RouteConfig from "routes/Route";
import Config from "utils/Config";
import "./styles.scss";
import { Button } from "react-bootstrap";

function Header() {
    const userInfo = useSelector((state: RootState) => state.userInfoState);
    return (
        <div className="header-wrapper">
            <nav
                className="navbar navbar-expand"
                style={{ backgroundColor: "var(--primary)", padding: 8, height: 64 }}
            >
                <div className={"center justify-content-between w-100 flex-nowrap"}>
                    <div className="d-flex text-light gap-2">
                        <Link
                            className="navbar-brand text-light"
                            to={
                                userInfo.role === Config.USER_ROLE_ADMIN
                                    ? RouteConfig.HOME
                                    : RouteConfig.HOME
                            }
                        >
                            <img
                                src="/logo_desktop.png"
                                style={{ height: 64, objectFit: "cover" }}
                                alt="logo"
                            />
                        </Link>
                    </div>

                    <Button variant="warning">Công việc yêu thích</Button>
                </div>
            </nav>
        </div>
    );
}

export default Header;
