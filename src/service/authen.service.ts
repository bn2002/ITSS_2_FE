import APIConfig from 'utils/APIConfig';
import Config from 'utils/Config';
import { POST } from 'utils/url';

export const loginApi = ({
    firstName,
    lastName,
    password,
    email,
}: {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}) => {
    return POST({
        url: APIConfig.SIGNUP,
        params: {
            firstName,
            lastName,
            password,
            email,
            role: Config.USER_ROLE_MEMBER,
        },
    }).then((data: any) => {
        return data;
    });
};
