import { HStack } from "@chakra-ui/layout";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { authPageSeleted } from "../../atoms";
import { useRouter } from "next/router";
import { FingerPrintSVG } from "../../assets/HomePage";
import { LayoutProps } from "../../types";
import { isAuthenticated } from "../../atoms";
import { useToast } from "@chakra-ui/react";
import { createUser, userSignIn } from "../../lib/auth";

export default function AccountForms({ title }: LayoutProps) {
  const router = useRouter();
  const toast = useToast();
  const [userInput, setUserInput] = useState({ username: "", password: "" });

  // isAuthenticated: to redirect home page; authPageGlobal: to dynamically show and hide username input
  const [authPageGlobal, setAuthPageGlobal] = useRecoilState(authPageSeleted);
  const [isAuth, setIsAuth] = useRecoilState(isAuthenticated);
  const [mounted, setMounted] = useState(false);

  // only renders UI that uses the current theme when mounted ( fix hydration mismatch error )
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const arr = [1, 2, 3, 4];

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      let result;
      if (authPageGlobal === "Sign Up") {
        result = await createUser(userInput.username, userInput.password);
      } else if (authPageGlobal === "Sign In") {
        result = await userSignIn(userInput.password);
      }

      if (result) console.log("REQUEST SENT !");

      if (result?.message === "AUTHENTICATED") {
        setIsAuth(true);
        router.replace("/");
        setAuthPageGlobal("Sign In");
      } else if (result?.message === "USER NOT FOUND") {
        toast({
          title: "Account doesn't exist",
          description: "Create a new account now",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else if (result?.message === "ALREADY EXISTS") {
        toast({
          title: "Account already existed",
          description: "Use a different password",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log("ERROR ", error);
    }
    setUserInput({ username: "", password: "" });
  };

  return (
    <>
      {authPageGlobal === "Sign Up" && (
        <input
          value={userInput.username}
          onChange={(e) =>
            setUserInput((userInput) => ({
              ...userInput,
              username: e.target.value,
            }))
          }
          required
          name="Username"
          placeholder="Your name"
          className="border-2 border-headline dark:border-btn_dark bg-background dark:bg-background_dark rounded-lg p-4 m-5 w-full"
        />
      )}
      <HStack width="full" className="flex">
        <PinInput
          value={userInput.password}
          onChange={(e: any) =>
            setUserInput((userInput) => ({
              ...userInput,
              password: e,
            }))
          }
        >
          {arr.map((index) => (
            <PinInputField
              flex="1"
              border="main"
              bg="main"
              required
              name="Password"
              key={index}
              className="dark:text-white border-2 border-main dark:border-btn_dark"
            />
          ))}
        </PinInput>
      </HStack>
      <button
        type="submit"
        className="px-16 text-xl py-3 rounded-lg mt-8 desktop:mt-14 mb-5 desktop:mb-10 flex bg-svg text-white border-4 border-white hover:border-headline dark:border-background_dark dark:hover:border-btn_dark"
        onClick={submitHandler}
      >
        <span className="mr-2">{FingerPrintSVG}</span>
        {title}
      </button>
    </>
  );
}
