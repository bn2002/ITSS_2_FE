import APIConfig from "utils/APIConfig";
import { POST } from "utils/url";

export const getAllJob = (params: { skip?: number; limit?: number }) => {
    return POST({
        url: APIConfig.GET_ALL_JOBS,
        params: params,
    }).then((data: any) => {
        return data;
    });
};

export const getJobInfo = (params: { slug: string }) => {
    return POST({
        url: APIConfig.GET_JOB_INFO,
        params: params,
    }).then((data: any) => {
        return data;
    });
};

export const changeJobInfoApi = (params: { _id: string; newDetail: any }) => {
    return POST({
        url: APIConfig.CHANGE_JOB_INFO,
        params: params,
    }).then((data: any) => {
        return data;
    });
};
