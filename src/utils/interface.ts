export interface IJob {
    _id: string;
    title: string;
    slug: string;
    image: string;
    company: ICompany;
    salary: string;
    places: string[];
    place_full: string;
    experience: string;
    deadline: string;
    descriptions: string[];
    requirements: string[];
    benefits: string[];
    time: string;
    general_info: string[];
    ratings: number[];
    my_rate: number;
    favorite: boolean;
}

export interface ICompany {
    name: string;
    staffs: string;
    place: string;
}

export interface IJobFilter {
    keyword: string;
    location: string;
    experience: string;
    salary: string;
}

export interface IFilterOption {
    key: string;
    value: string;
}
