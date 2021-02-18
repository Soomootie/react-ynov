import {createContext} from 'react';

const UserContext = createContext({userInfos: null, setUserInfos: () => null});

export default UserContext;
