import {createContext} from 'react';

const UserContext = createContext({userInfos: null, refreshUserInfos: () => null});

export default UserContext;
