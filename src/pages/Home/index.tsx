import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaidIcon from "@mui/icons-material/Paid";
import SearchJob from "components/search-job";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { getAllJob } from "service/job.service";
import { IJob } from "utils/interface";
import "./style.scss";
function Home() {
    const [jobs, setJobs] = useState([] as IJob[]);
    useEffect(() => {
        const fetchJob = async () => {
            const res = await getAllJob({});
            const data = await res;

            setJobs(data);
        };
        fetchJob();
    }, []);
    return (
        <Container className=" homepage-wrapper">
            <SearchJob />
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
                            <Button variant="danger">Ứng tuyển</Button>
                            <div className="save">
                                <FavoriteBorderIcon color="error" />
                            </div>
                        </div>
                        <div className="salary">
                            <PaidIcon color="error" /> {job.salary}
                        </div>
                    </div>
                );
            })}
        </Container>
    );
}

export default Home;
