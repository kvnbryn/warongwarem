import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Line, Text } from "components";

const Test = (props) => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
          <div className="header-row ">
            <Img className="h-[51px]" src="images/img_logo.svg" alt="Logo" />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-center md:ml-[0] ml-[107px] pt-0.5 w-[52%] md:w-full">
            <div className="flex flex-col gap-1.5 items-center justify-start w-[9%] sm:w-full">
              <Text
                className="common-pointer text-base text-red-400"
                size="txtOpenSansRomanRegular16Red400"
                onClick={() => navigate("/")}
              >
                Home
              </Text>
              <Line className="bg-red-400 h-px w-full" />
            </div>
            <div className="flex flex-col items-center justify-start ml-8">
              <Text
                className="common-pointer text-base text-gray-900_cc"
                size="txtOpenSansRomanRegular16Gray900cc"
                onClick={() => navigate("/menu")}
              >
                Menu
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start ml-8">

            </div>
            <div className="flex flex-col items-center justify-start ml-[31px]">
              <Text
                className="common-pointer text-base text-gray-900_cc"
                size="txtOpenSansRomanRegular16Gray900cc"
                onClick={() => navigate("/orderonline")}
              >
                Order online
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start ml-[27px]">
              <Text
                className="common-pointer text-base text-gray-900_cc"
                size="txtOpenSansRomanRegular16Gray900cc"
                onClick={() => navigate("/reservation")}
              >
                Reservation
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer flex h-[50px] sm:hidden items-center justify-center md:ml-[0] ml-[122px] w-[50px]"
            leftIcon={
              <Img
                className="h-6 sm:hidden m-[13px]"
                src="images/img_cart.svg"
                alt="cart"
              />
            }
            shape="circle"
            color="white_A700"
            variant="fill"
          >
            <div className="sm:hidden"></div>
          </Button>
          <Button
            className="common-pointer cursor-pointer font-poppins font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
            onClick={() => googleSignIn()}
            shape="round"
            color="red_400"
            size="sm"
            variant="fill"
          >
            Log in
          </Button>
        </div>
      </header>
    </>
  );
};

Test.defaultProps = {};

export default Test;
