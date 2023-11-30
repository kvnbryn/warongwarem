import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const timeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const partysizeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReservationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              className="h-[51px] w-[12%]"
              src="images/img_logo.svg"
              alt="Logo"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-base text-gray-900_a2"
                  size="txtOpenSansRomanRegular16"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/aboutus")}
                >
                  About us
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/orderonline")}
                >
                  Order online
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[27px] w-[16%] sm:w-full">
                <Text
                  className="text-base text-red-400"
                  size="txtOpenSansRomanRegular16Red400"
                >
                  Reservation
                </Text>
                <Line className="bg-red-400 h-px w-[53%]" />
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                
              </div>
            </div>
            <Button
              className="cursor-pointer flex h-[50px] items-center justify-center md:ml-[0] ml-[122px] w-[50px]"
              leftIcon={
                <Img
                  className="h-6 m-[13px]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              }
              shape="circle"
              color="white_A700"
              variant="fill"
            ></Button>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
              shape="round"
              color="red_400"
              size="sm"
              variant="fill"
            >
              Log in
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="h-[657px] md:h-auto object-cover rounded-[20px]"
              src="images/img_rectangle150.png"
              alt="Rectangle150"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="md:text-5xl text-[70px] text-gray-900"
                size="txtOpenSansRomanBold70"
              >
                Book a table
              </Text>
              <div className="flex flex-col font-poppins gap-10 items-center justify-start mt-[60px] w-full">
                <SelectBox
                  className="border border-gray-400 border-solid text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="date"
                  options={dateOptionsList}
                  isSearchable={false}
                  placeholder="Date"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                />
                <SelectBox
                  className="border border-gray-400 border-solid text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="time"
                  options={timeOptionsList}
                  isSearchable={false}
                  placeholder="Time"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                />
                <SelectBox
                  className="border border-gray-400 border-solid text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="partysize"
                  options={partysizeOptionsList}
                  isSearchable={false}
                  placeholder="Party size"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                />
              </div>
              <Button
                className="common-pointer cursor-pointer font-poppins font-semibold min-w-[475px] sm:min-w-full mt-10 rounded-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                onClick={() => navigate("/enterdetailsreservation")}
                color="red_400"
                size="xl"
                variant="fill"
              >
                Book now
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ReservationPage;
