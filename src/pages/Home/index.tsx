import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaidIcon from "@mui/icons-material/Paid";
import SearchJob from "components/search-job";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getAllJob } from "service/job.service";
import { IJob, IJobFilter } from "utils/interface";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./style.scss";
function Home() {
    const [initJob, setInitJob] = useState([] as IJob[]);
    const [jobs, setJobs] = useState([] as IJob[]);
    useEffect(() => {
        const fetchJob = async () => {
            const res = await getAllJob({});
            const data = await res;
            setInitJob(data);
            setJobs(data);
        };
        fetchJob();
    }, []);

    const handlerFilter = (filters: IJobFilter) => {
        console.log(filters);
        let jobs = initJob;
        if (filters.keyword !== "") {
            jobs = jobs.filter((job) => {
                return job.title.toLocaleLowerCase().includes(filters.keyword.toLocaleLowerCase());
            });
        }

        if (filters.experience !== "all") {
            if (filters.experience === ">5") {
                jobs = jobs.filter((job) => {
                    let jobExperience = 0;
                    try {
                        jobExperience = parseInt(job.experience);
                    } catch (error) {}

                    return jobExperience > 5;
                });
            } else {
                jobs = jobs.filter((job) => {
                    let jobExperience = 0;
                    let experience = 0;
                    try {
                        jobExperience = parseInt(job.experience);
                        experience = parseInt(filters.experience);
                    } catch (error) {}

                    return jobExperience === experience;
                });
            }
        }

        if (filters.location !== "all") {
            jobs = jobs.filter((job) => {
                let locations = job.places.map((place) => place.toLocaleLowerCase());
                return locations.includes(filters.location.toLocaleLowerCase());
            });
        }

        if (filters.salary !== "all") {
            if (filters.salary === "thoa_thuan") {
                jobs = jobs.filter((job) => {
                    return job.salary.toLocaleLowerCase().includes("thoả thuận");
                });
            } else {
                let max = 0;
                let min = 0;
                try {
                    let filterSalary = filters.salary.split("-");
                    min = parseFloat(filterSalary[0]);
                    max = parseFloat(filterSalary[1]);
                } catch (error) {}
                jobs = jobs.filter((job) => {
                    try {
                        let jobSalary = parseFloat(job.salary);
                        return jobSalary >= min && jobSalary <= max;
                    } catch (error) {
                        return false;
                    }
                });
            }
        }

        setJobs(jobs);
    };
    return (
        <Container className="homepage-wrapper ">
            <SearchJob onSubmit={handlerFilter} />
            <Row xs={2}>
                {jobs.map((job, index) => {
                    return (
                        <Col className=" d-flex justify-content-center">
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
                                    <div className="save">
                                        {job.favorite === true ? (
                                            <FavoriteIcon color="error" />
                                        ) : (
                                            <FavoriteBorderIcon color="error" />
                                        )}
                                    </div>
                                </div>
                                <div className="salary">
                                    <PaidIcon color="error" />{" "}
                                    {job.salary.includes("Thoả thuận")
                                        ? job.salary
                                        : `${job.salary} triệu`}
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Home;
