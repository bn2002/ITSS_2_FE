import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import StarsIcon from "@mui/icons-material/Stars";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { IFilterOption, IJobFilter } from "utils/interface";
const SearchJob = ({ onSubmit }: { onSubmit: any }) => {
    let [keyword, setKeyword] = useState("");
    let [location, setLocation] = useState("all");
    let [experience, setExperience] = useState("all");
    let [salary, setSalary] = useState("all");

    let filters: IJobFilter = {
        keyword: keyword,
        location: location,
        experience: experience,
        salary: salary,
    };

    let locationFilter: IFilterOption[] = [
        {
            key: "Tất cả địa điểm",
            value: "all",
        },
        {
            key: "Hà Nội",
            value: "Hà Nội",
        },
        {
            key: "Hồ Chí Minh",
            value: "Hồ Chí Minh",
        },
        {
            key: "Đà Nẵng",
            value: "Đà Nẵng",
        },
    ];

    let experienceFilter: IFilterOption[] = [
        {
            key: "Tất cả kinh nghiệm",
            value: "all",
        },
        {
            key: "Chưa có kinh nghiệm",
            value: "0",
        },
        {
            key: "1 năm",
            value: "1",
        },
        {
            key: "2 năm",
            value: "2",
        },
        {
            key: "3 năm",
            value: "3",
        },
        {
            key: "4 năm",
            value: "4",
        },
        {
            key: "5 năm",
            value: "5",
        },
        {
            key: "Trên 5 năm",
            value: ">5",
        },
    ];

    let salaryFilter: IFilterOption[] = [
        {
            key: "Tất cả mức lương",
            value: "all",
        },
        {
            key: "Thỏa thuận",
            value: "thoa_thuan",
        },
        {
            key: "Dưới 10 triệu",
            value: "0-10",
        },
        {
            key: "10 - 20 triệu",
            value: "10-20",
        },
        {
            key: "20 - 30 triệu",
            value: "20-30",
        },
        {
            key: "30 - 50 triệu",
            value: "30-50",
        },
        {
            key: "Trên 50 triệu",
            value: "50-100",
        },
    ];

    return (
        <div className="search-job-wrapper center gap-2 mb-3">
            <FormControl
                sx={{ m: 1, minWidth: 350, background: "#fff" }}
                variant="outlined"
                color="error"
            >
                <OutlinedInput
                    id="outlined-adornment-weight"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        "aria-label": "weight",
                    }}
                    onChange={(event) => setKeyword(event.target.value)}
                    //     className="p-0"
                    placeholder="Từ khóa"
                />
                {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
            </FormControl>
            <TextField
                color="error"
                id="outlined-select-place"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LocationOnIcon />
                        </InputAdornment>
                    ),
                }}
                select
                style={{ minWidth: 220, background: "#fff" }}
                defaultValue="all"
                onChange={(event) => setLocation(event.target.value)}
            >
                {locationFilter.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                        {option.key}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                color="error"
                id="outlined-select-currency"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <StarsIcon />
                        </InputAdornment>
                    ),
                }}
                select
                style={{ minWidth: 234, background: "#fff" }}
                defaultValue="all"
                onChange={(event) => setExperience(event.target.value)}
            >
                {experienceFilter.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                        {option.key}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                color="error"
                id="outlined-select-salary"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <StarsIcon />
                        </InputAdornment>
                    ),
                }}
                select
                style={{ minWidth: 220, background: "#fff" }}
                defaultValue="all"
                onChange={(event) => setSalary(event.target.value)}
            >
                {salaryFilter.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                        {option.key}
                    </MenuItem>
                ))}
            </TextField>

            <Button
                variant="danger"
                style={{ height: 56, width: 140 }}
                onClick={() => {
                    onSubmit(filters);
                }}
            >
                Tìm kiếm
            </Button>
        </div>
    );
};

export default SearchJob;
