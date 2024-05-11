import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import StarsIcon from "@mui/icons-material/Stars";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
const SearchJob = () => {
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
                    //     className="p-0"
                    placeholder="Vị trí tuyển dụng"
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
                defaultValue="Tất cả địa điểm"
            >
                {["Tất cả địa điểm", "Hà Nội", "Hồ Chí Minh", "Đà Nẵng"].map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
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
                defaultValue="Tất cả kinh nghiệm"
            >
                {[
                    "Tất cả kinh nghiệm",
                    "Chưa có kinh nghiệm",
                    "Dưới 1 năm",
                    "1 năm",
                    "2 năm",
                    "3 năm",
                    "4 năm",
                    "5 năm",
                    "Trên 5 năm",
                ].map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
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
                defaultValue="Tất cả mức lương"
            >
                {[
                    "Tất cả mức lương",
                    "Dưới 10 triệu",
                    "10 - 15 triệu",
                    "15 - 20 triệu",
                    "20 - 25 triệu",
                    "25 - 30 triệu",
                    "30 - 50 triệu",
                    "Trên 50 triệu",
                    "Thỏa thuận",
                ].map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <Button variant="danger" style={{ height: 56, width: 140 }}>
                Tìm kiếm
            </Button>
        </div>
    );
};

export default SearchJob;
