import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaidIcon from "@mui/icons-material/Paid";
import SearchJob from "components/search-job";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { getAllJob } from "service/job.service";
import { IJob, IJobFilter } from "utils/interface";
import "../Home/style.scss";
import FilterAppliedCV from "components/filter-applied-cv/FilterAppliedCv";
import { Link } from "react-router-dom";
import RouteConfig from "routes/Route";

function Recruitment() {
    const [jobs, setJobs] = useState([] as IJob[]);
    const [initJobs, setInitJobs] = useState([] as IJob[]);
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
            let favorite = data.filter((job: any) => job.favorite === true);
            setJobs(favorite);
            setInitJobs(favorite);
        };
        fetchJob();
    }, []);

    const handlerFilter = (filters: IJobFilter) => {
        let jobs = initJobs;
        if (filters.keyword !== "") {
            jobs = jobs.filter((job) => {
                return job.title.toLocaleLowerCase().includes(filters.keyword.toLocaleLowerCase());
            });
        }

        setJobs(jobs);
    };
    return (
        <Container className=" homepage-wrapper">
            <FilterAppliedCV onSubmit={handlerFilter}></FilterAppliedCV>
            {jobs.map((job, index) => {
                return (
                    <div
                        className="card-wrapper"
                        key={index}
                        onClick={() => {
                            window.open("chi-tiet-viec-lam/" + job.slug, "_blank");
                        }}
                    >
                        <div className="avatar">
                            <img src={job.image} alt={job.title} className="img" />
                        </div>
                        <div className="info-wrapper">
                            <div>
                                <div className="title">{job.title}</div>
                                <div className="company">{job.company.name}</div>
                            </div>
                            <div className="badge">
                                <div className="place">
                                    {job.places.map((place, index) => {
                                        if (index > 0) return `, ${place}`;
                                        return place;
                                    })}
                                </div>

                                {job.time && <div className="time">{job.time}</div>}
                            </div>
                        </div>
                        <div className="button-action">
                            <Button variant="danger">Chi tiết</Button>
                        </div>
                        <div className="salary">
                            <PaidIcon color="error" />{" "}
                            {job.salary.includes("Thoả thuận") ? job.salary : `${job.salary} triệu`}
                        </div>
                    </div>
                );
            })}
        </Container>
    );
}

export default Recruitment;
