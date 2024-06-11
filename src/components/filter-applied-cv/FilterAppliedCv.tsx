import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import StarsIcon from "@mui/icons-material/Stars";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useState } from "react";
import { IJobFilter } from "utils/interface";
const FilterAppliedCV = ({ onSubmit }: { onSubmit: any }) => {
    const [keyword, setKeyword] = useState("");

    let filters: IJobFilter = {
        keyword: keyword,
        location: "",
        experience: "",
        salary: "",
    };
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
                    onChange={(e) => setKeyword(e.target.value)}
                    //     className="p-0"
                    placeholder="Tên công việc"
                />
                {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
            </FormControl>
            {/* <TextField
                color="error"
                id="outlined-select-place"
                placeholder="Trạng thái"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FilterAltOutlinedIcon />
                        </InputAdornment>
                    ),
                }}
                select
                style={{ minWidth: 220, background: "#fff" }}
                defaultValue="Trạng thái"
            >
                {["Đã ứng tuyển", "NTD đã xem hồ sơ", "Đồng ý phỏng vấn", "Từ chối"].map(
                    (option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ),
                )}
            </TextField> */}
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

export default FilterAppliedCV;
