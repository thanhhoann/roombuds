import type { NextPage } from "next";
import SidebBarDarkModeBtn from "../../../components/UI/Sidebar/SideBarDarkModeBtn";
import AccountLayout from "../../../components/Account/AccountLayout";
import AccountBackgroundImage from "../../../components/Account/AccountBackgroundImage";
import AccountBodyWrapper from "../../../components/Account/AccountBodyWrapper";
import AccountHeaderTitle from "../../../components/Account/AccountHeaderTitle";
import AccountMainWrapper from "../../../components/Account/AccountMainWrapper";
import AccountPinInput from "../../../components/Account/AccountPinInput";
import AccountCTA from "../../../components/Account/AccountCTA";
import AccountBottom from "../../../components/Account/AccountBottom";
import { Input } from "@chakra-ui/input";

const SignUp: NextPage = () => {
  return (
    <>
      <AccountLayout title="Sign Up">
        <AccountBackgroundImage />

        <AccountBodyWrapper>
          <AccountHeaderTitle title="Sign Up To " />

          <AccountMainWrapper>
            <input
              placeholder="Your name"
              className="border-2 border-headline dark:border-btn_dark bg-background dark:bg-background_dark rounded-lg p-4 m-5 w-full"
            />
            <AccountPinInput />

            <AccountCTA title="Sign Up" />
            <AccountBottom
              title="Sign In"
              supportNavigation="Already have an account ? &nbsp;"
              page="Sign Up"
            />
            <SidebBarDarkModeBtn />
          </AccountMainWrapper>
        </AccountBodyWrapper>
      </AccountLayout>
    </>
  );
};

export default SignUp;
