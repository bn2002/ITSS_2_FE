import { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import Header from "../Components/Header";
interface DefaultLayoutProps {
    children?: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div>
            <Header />
            <Container fluid style={{ minHeight: 600, marginTop: 64, background: "#f4f5f5" }}>
                {children}
            </Container>
            {/* <Footer /> */}
        </div>
    );
}

export default DefaultLayout;
