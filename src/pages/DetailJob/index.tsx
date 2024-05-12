import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SubmitCV from "pages/SubmitCV";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getJobInfo } from "service/job.service";
import { IJob } from "utils/interface";
import "./style.scss";
function DetailJob() {
    const { slug } = useParams();

    const [job, setJob] = useState({} as IJob);
    const [showSubmitCV, setShowSubmitCV] = useState(false);
    useEffect(() => {
        const fetchJob = async () => {
            if (slug) {
                const res = await getJobInfo({ slug });
                const data = await res;

                setJob(data);
            }
        };
        slug && fetchJob();
    }, []);
    return (
        <Container className=" detailjob-wrapper">
            <div className="left-column">
                <div className="job-info job-column-item">
                    <div className="job-title">{job.title}</div>

                    <div className="list-info">
                        <div className="item-icon-detail">
                            <div className="icon">
                                <AttachMoneyIcon />
                            </div>
                            <div>
                                <div className="item-title">Mức lương</div>
                                <div className="item-detail">{job.salary}</div>
                            </div>
                        </div>
                        <div className="item-icon-detail">
                            <div className="icon">
                                <LocationOnIcon />
                            </div>
                            <div>
                                <div className="item-title">Địa điểm</div>
                                <div className="item-detail">
                                    {job?.places?.map((place, index) => {
                                        if (index > 0) return `, ${place}`;
                                        return place;
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="item-icon-detail">
                            <div className="icon">
                                <HourglassFullIcon />
                            </div>
                            <div>
                                <div className="item-title">Kinh nghiệm</div>
                                <div className="item-detail">{job.experience}</div>
                            </div>
                        </div>
                    </div>

                    <div className="job-deadline">
                        <AccessTimeFilledIcon fontSize="small" />
                        <div>Hạn nộp hồ sơ: {job.deadline}</div>
                    </div>

                    <div className="action">
                        <Button
                            variant="danger"
                            className="btn-apply"
                            onClick={() => {
                                setShowSubmitCV(true);
                            }}
                        >
                            Ứng tuyển ngay <SendIcon fontSize="small" className="send-icon" />
                        </Button>
                        <div className="save">
                            <FavoriteBorderIcon color="error" /> Lưu tin
                        </div>
                    </div>
                </div>

                <div className="details-wrapper job-column-item">
                    <div className="details-title">Chi tiết tin tuyển dụng</div>

                    {job?.descriptions?.length ? (
                        <div className="details-item">
                            <div className="title">Mô tả công việc</div>
                            <ul>
                                {job?.descriptions?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <></>
                    )}
                    {job?.requirements?.length ? (
                        <div className="details-item">
                            <div className="title">Yêu cầu ứng viên</div>
                            <ul>
                                {job?.requirements?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <></>
                    )}
                    {job?.benefits?.length ? (
                        <div className="details-item">
                            <div className="title">Quyền lợi</div>
                            <ul>
                                {job?.benefits?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <></>
                    )}

                    <div className="details-item">
                        <div className="title">Địa điểm làm việc</div>
                        <div className="text">{job.place_full}</div>
                    </div>
                    <div className="details-item">
                        <div className="title">Thời gian làm việc</div>
                        <ul>
                            <li>
                                <div>{job.time}</div>
                            </li>
                        </ul>
                    </div>

                    <div className="details-item">
                        <div className="title">Cách thức ứng tuyển</div>
                        <div>
                            Ứng viên nộp hồ sơ trực tuyến bằng cách bấm <b>Ứng tuyển</b> ngay dưới
                            đây.
                        </div>
                        <div className="action">
                            <Button
                                variant="danger"
                                className="btn-apply"
                                onClick={() => {
                                    setShowSubmitCV(true);
                                }}
                            >
                                Ứng tuyển ngay
                            </Button>
                            <div className="save">
                                <FavoriteBorderIcon color="error" /> Lưu tin
                            </div>
                        </div>
                    </div>
                    <div className="details-item">
                        <div className="title mt-3">Đánh giá công việc</div>
                        <img src="/rating.png" alt="rating" style={{ width: "100%" }} />
                    </div>
                </div>
            </div>

            <div className="right-column">
                <div className="company-info job-column-item">
                    <div className="header">
                        <div className="avatar">
                            <img src={job.image} alt={job.title} className="img" />
                        </div>
                        <div className="company-name">{job?.company?.name}</div>
                    </div>
                    <div className="items">
                        <div className="left-item">
                            <PeopleAltIcon /> Quy mô:
                        </div>
                        <div className="detail">{job.company?.staffs}</div>
                    </div>
                    <div className="items">
                        <div className="left-item">
                            <LocationOnIcon /> Địa điểm:
                        </div>
                        <div className="detail">{job.company?.place}</div>
                    </div>
                </div>

                <div className="general-info job-column-item">
                    <div className="header">Thông tin chung</div>
                    {job.general_info?.length && (
                        <div className="info">
                            <div className="item-icon-detail">
                                <div className="icon">
                                    <WorkspacePremiumIcon />
                                </div>
                                <div>
                                    <div className="item-title">Cấp bậc</div>
                                    <div className="item-detail">{job.general_info[0]}</div>
                                </div>
                            </div>
                            <div className="item-icon-detail">
                                <div className="icon">
                                    <HourglassFullIcon />
                                </div>
                                <div>
                                    <div className="item-title">Kinh nghiệm</div>
                                    <div className="item-detail">{job.general_info[1]}</div>
                                </div>
                            </div>
                            <div className="item-icon-detail">
                                <div className="icon">
                                    <PeopleAltIcon />
                                </div>
                                <div>
                                    <div className="item-title">Số lượng tuyển</div>
                                    <div className="item-detail">{job.general_info[2]}</div>
                                </div>
                            </div>
                            <div className="item-icon-detail">
                                <div className="icon">
                                    <BusinessCenterIcon />
                                </div>
                                <div>
                                    <div className="item-title">Hình thức làm việc</div>
                                    <div className="item-detail">{job.general_info[3]}</div>
                                </div>
                            </div>
                            <div className="item-icon-detail">
                                <div className="icon">
                                    <PersonIcon />
                                </div>
                                <div>
                                    <div className="item-title">Giới tính</div>
                                    <div className="item-detail">{job.general_info[4]}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <SubmitCV show={showSubmitCV} setShow={setShowSubmitCV} title={job?.title} />
        </Container>
    );
}

export default DetailJob;
