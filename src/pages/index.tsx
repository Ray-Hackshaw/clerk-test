import { OrganizationSwitcher, UserProfile } from "@clerk/nextjs";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <OrganizationSwitcher hidePersonal />
      <UserProfile />
    </>
  );
};

export default Home;
