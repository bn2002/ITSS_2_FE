import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RouteConfig from "routes/Route";
function SubmitCV({ show, setShow, title }: { show: boolean; setShow: Function; title: string }) {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={true} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Ứng tuyển <span className="text-danger">{title}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <p style={{ fontSize: "20px" }} className="d-flex align-items-center">
                                <FolderSharedIcon htmlColor="red" className="me-2" />
                                Nhập thông tin để ứng tuyển
                            </p>
                            <div className="d-flex flex-column align-items-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <CloudUploadIcon className="me-2" fontSize="large" />
                                    <span>Tải lên CV từ máy tính, chọn hoặc kéo thả</span>
                                </div>
                                <span className="text-secondary" style={{ fontSize: "14px" }}>
                                    Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5MB
                                </span>
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
                            <p style={{ fontSize: "20px" }} className="d-flex align-items-center">
                                <FolderSharedIcon htmlColor="red" className="me-2" />
                                Thư giới thiệu
                            </p>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <p className="text-secondary" style={{ fontSize: "14px" }}>
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
                                            style={{ height: "100px" }}
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" style={{ flex: "1" }} onClick={handleClose}>
                        Hủy
                    </Button>
                    <Link to={`${RouteConfig.APPLIED_JOBS}`} style={{ flex: "1" }}>
                        <Button
                            variant="danger"
                            onClick={handleClose}
                            style={{ width: "100%" }}
                            className="d-block"
                        >
                            Nộp hồ sơ
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SubmitCV;
