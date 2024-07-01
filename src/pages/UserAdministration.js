import { Fragment } from "react";

import { PageTitle } from "../components/PageTitle";

import { GetListOfUsers } from "../components/GetListOfUsers";

const UserAdministration = () => {
  return (
    <Fragment>
      <PageTitle text="User admin" />
      <GetListOfUsers />
    </Fragment>
  );
};

UserAdministration.displayName = "UserAdministration";

export default UserAdministration;
