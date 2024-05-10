import { Button, Col, Row, Spinner, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function SubmitCV() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ứng tuyển
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Ứng tuyển{' '}
                        <span className="text-danger">Lập Trình Viên (.NET) Đi Làm Ngay</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <p style={{ fontSize: '20px' }} className="d-flex align-items-center">
                                <FolderSharedIcon htmlColor="red" className="me-2" />
                                Nhập thông tin để ứng tuyển
                            </p>
                            <div className="d-flex flex-column align-items-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <CloudUploadIcon className="me-2" fontSize="large" />
                                    <span>Tải lên CV từ máy tính, chọn hoặc kéo thả</span>
                                </div>
                                <span className="text-secondary" style={{ fontSize: '14px' }}>
                                    Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5MB
                                </span>
                                <Button variant="success" className="mt-2" size="sm">
                                    Chọn CV
                                </Button>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className="d-flex justify-content-between">
                                <p className="text-success">
                                    Vui lòng nhập đầy đủ thông tin chi tiết:
                                </p>
                                <p className="text-danger">(*) Thông tin bắt buộc.</p>
                            </div>

                            <Form>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group controlId="name">
                                            <Form.Label>Họ và tên *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Nhập họ và tên"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col md={6}>
                                        <Form.Group controlId="name">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Địa chỉ email"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="name">
                                            <Form.Label>Số điện thoại *</Form.Label>
                                            <Form.Control type="text" placeholder="Số điện thoại" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div>
                            <p style={{ fontSize: '20px' }} className="d-flex align-items-center">
                                <FolderSharedIcon htmlColor="red" className="me-2" />
                                Thư giới thiệu
                            </p>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <p className="text-secondary" style={{ fontSize: '14px' }}>
                                    Một thư giới thiệu ngắn gọn, chỉn chu sẽ giúp bạn trở nên chuyên
                                    nghiệp và gây ấn tượng hơn với nhà tuyển dụng.
                                </p>
                            </div>

                            <Form>
                                <Row>
                                    <Col md={12}>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu) và nêu rõ mong muốn, lý do bạn muốn ứng tuyển cho vị trí này."
                                            style={{ height: '100px' }}
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" style={{ flex: '1' }} onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="danger" style={{ flex: '1' }} onClick={handleClose}>
                        Nộp hồ sơ
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SubmitCV;
