import type { NextPage } from "next";
import SidebBarDarkModeBtn from "../../../components/UI/Sidebar/SideBarDarkModeBtn";
import AccountLayout from "../../../components/Account/AccountLayout";
import AccountBackgroundImage from "../../../components/Account/AccountBackgroundImage";
import AccountBodyWrapper from "../../../components/Account/AccountBodyWrapper";
import AccountHeaderTitle from "../../../components/Account/AccountHeaderTitle";
import AccountMainWrapper from "../../../components/Account/AccountMainWrapper";
import AccountBottom from "../../../components/Account/AccountBottom";
import AccountForms from "../../../components/Account/AccountForms";

const Login: NextPage = () => {
  return (
    <>
      <AccountLayout title="Sign In">
        <AccountBackgroundImage />

        <AccountBodyWrapper>
          <AccountHeaderTitle title="Sign In To " />

          <AccountMainWrapper>
            <AccountForms title="Sign In" />

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
