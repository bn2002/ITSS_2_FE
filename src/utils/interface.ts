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
}

export interface ICompany {
    name: string;
    staffs: string;
    place: string;
}
