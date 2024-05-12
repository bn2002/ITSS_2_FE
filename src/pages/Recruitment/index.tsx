import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaidIcon from "@mui/icons-material/Paid";
import SearchJob from "components/search-job";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { getAllJob } from "service/job.service";
import { IJob } from "utils/interface";
import "../Home/style.scss";
import FilterAppliedCV from "components/filter-applied-cv/FilterAppliedCv";
import { Link } from "react-router-dom";
import RouteConfig from "routes/Route";

function Recruitment() {
    const [jobs, setJobs] = useState([] as IJob[]);
    const state = ["applied", "viewed", "accept_interview", "reject"];
    const styleState: { [key: string]: string } = {
        applied: "secondary",
        viewed: "warning",
        accept_interview: "success",
        reject: "danger",
    };
    const title: { [key: string]: string } = {
        applied: "Đã ứng tuyển",
        viewed: "NTD đã xem hồ sơ",
        accept_interview: "Đồng ý phỏng vấn",
        reject: "Từ chối",
    };
    useEffect(() => {
        const fetchJob = async () => {
            const res = await getAllJob({});
            const data = await res;
            setJobs(data.slice(0, 5));
        };
        fetchJob();
    }, []);
    return (
        <Container className=" homepage-wrapper">
            <FilterAppliedCV></FilterAppliedCV>
            {jobs.map((job, index) => {
                let status: string = state[index % state.length];
                let classState = styleState[status];
                let titleState = title[status];

                return (
                    <div className="card-wrapper" key={index}>
                        <div className="avatar">
                            <img src={job.image} alt={job.title} className="img" />
                        </div>
                        <div className="info-wrapper">
                            <div>
                                <div className="title">{job.title}</div>
                                <div className="company">{job.company.name}</div>
                            </div>
                            <div className="badge">
                                <Button
                                    size="sm"
                                    style={{ minWidth: "200px" }}
                                    variant={classState}
                                >
                                    {titleState}
                                </Button>
                                {/* {job.time && <div className="time">{job.time}</div>} */}
                            </div>
                        </div>
                        <div className="button-action">
                            {status === "accept_interview" && (
                                <Link to={RouteConfig.CALLVIDEO}>
                                    <Button variant="danger">Gọi Video</Button>
                                </Link>
                            )}
                        </div>
                    </div>
                );
            })}
        </Container>
    );
}

export default Recruitment;
