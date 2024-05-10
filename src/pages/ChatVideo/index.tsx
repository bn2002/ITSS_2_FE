import { Button, Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import MessageIcon from '@mui/icons-material/Message';
import MicIcon from '@mui/icons-material/Mic';
import CallIcon from '@mui/icons-material/Call';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
function CallVideo() {
    return (
        <>
            <Row style={{ backgroundColor: '#4d6181', padding: '16px 0' }}>
                <Col md={8}>
                    <div className="d-flex flex-column align-items-center align-items-stretch">
                        <Image src="assets/img/video-call-6.png" fluid />
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Button
                                variant="secondary"
                                style={{ borderRadius: '50%', width: '50px', height: '50px' }}
                                className="me-2"
                            >
                                <MessageIcon />
                            </Button>
                            <Button
                                variant="secondary"
                                style={{ borderRadius: '50%', width: '50px', height: '50px' }}
                                className="me-2"
                            >
                                <MicIcon />
                            </Button>
                            <Button
                                variant="danger"
                                style={{ borderRadius: '50%', width: '70px', height: '70px' }}
                                className="me-2"
                            >
                                <CallIcon />
                            </Button>
                            <Button
                                variant="secondary"
                                style={{ borderRadius: '50%', width: '50px', height: '50px' }}
                                className="me-2"
                            >
                                <PresentToAllIcon />
                            </Button>
                            <Button
                                variant="secondary"
                                style={{ borderRadius: '50%', width: '50px', height: '50px' }}
                            >
                                <CameraAltIcon />
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column">
                        <Card>
                            <Card.Body>
                                <Card.Title>Người tham gia</Card.Title>
                                <Row>
                                    <Col md={4} className="d-flex flex-column align-items-center">
                                        <Image src="assets/img/user1.png" height={120} rounded />
                                        <span>Giám đốc</span>
                                    </Col>
                                    <Col md={4} className="d-flex flex-column align-items-center">
                                        <Image src="assets/img/user1.png" height={120} rounded />
                                        <span>Phó phòng</span>
                                    </Col>
                                    <Col md={4} className="d-flex flex-column align-items-center">
                                        <Image src="assets/img/user1.png" height={120} rounded />
                                        <span>HR</span>
                                    </Col>
                                    <Col
                                        md={4}
                                        className="d-flex flex-column align-items-center mt-4"
                                    >
                                        <Image src="assets/img/user1.png" height={120} rounded />
                                        <span>Chủ tịch</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="mt-4">
                            <Card.Body>
                                <Card.Title>Bạn</Card.Title>
                                <Row>
                                    <Col md={12} className="d-flex justify-content-center">
                                        <Image src="assets/img/video-call-5.png" fluid />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default CallVideo;
