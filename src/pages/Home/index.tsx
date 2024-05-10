import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Home() {
    return <Container className="mt-4"></Container>;
}

export default Home;
