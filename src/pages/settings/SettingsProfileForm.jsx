import React, {useContext} from 'react';
import {UserContext} from "../../contexts";

const SettingsProfileForm = () => {
  const userContext = useContext(UserContext);

  return (
    <div>
      Name : {userContext.userInfos.email}
    </div>
  );
};

export default SettingsProfileForm;
