import type { NextPage } from "next";
import SidebBarDarkModeBtn from "../components/UI/Sidebar/SideBarDarkModeBtn";
import AccountLayout from "../components/Account/AccountLayout";
import AccountBackgroundImage from "../components/Account/AccountBackgroundImage";
import AccountBodyWrapper from "../components/Account/AccountBodyWrapper";
import AccountHeaderTitle from "../components/Account/AccountHeaderTitle";
import AccountMainWrapper from "../components/Account/AccountMainWrapper";
import AccountPinInput from "../components/Account/AccountPinInput";
import AccountCTA from "../components/Account/AccountCTA";
import AccountBottom from "../components/Account/AccountBottom";

const Login: NextPage = () => {
  return (
    <>
      <AccountLayout title="Sign In">
        <AccountBackgroundImage />

        <AccountBodyWrapper>
          <AccountHeaderTitle title="Sign In To " />

          <AccountMainWrapper>
            <AccountPinInput />

            <AccountCTA title="Sign In" />
            <AccountBottom
              title="Sign Up"
              supportNavigation="Don't have an account ? "
              page="Sign In"
            />
            <SidebBarDarkModeBtn />
          </AccountMainWrapper>
        </AccountBodyWrapper>
      </AccountLayout>
    </>
  );
};

export default Login;
