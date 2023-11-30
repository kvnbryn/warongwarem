import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              className="h-[51px] w-[12%] opacity-50"
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
              <div className="flex flex-col gap-1.5 items-start justify-start ml-8 sm:ml-[0] w-[9%] sm:w-full">
                <Text
                  className="text-base text-red-400"
                  size="txtOpenSansRomanRegular16Red400"
                >
                  Menu
                </Text>
                <Line className="bg-red-400 h-px w-full" />
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[29px]">
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
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/reservation")}
                >
                  Reservation
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </Text>
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
          <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Our Popular Menu
            </Text>
            <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-between rounded-[16px] w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                  shape="round"
                  color="red_400"
                  size="lg"
                  variant="fill"
                >
                  All catagory
                </Button>
                <Button
                  className="cursor-pointer min-w-[192px] text-center text-xl"
                  shape="round"
                  color="gray_400_63"
                  size="lg"
                  variant="fill"
                >
                  Dinner
                </Button>
                <Button
                  className="cursor-pointer min-w-[192px] text-center text-xl"
                  shape="round"
                  color="gray_400_63"
                  size="lg"
                  variant="fill"
                >
                  Lunch
                </Button>
                <Button
                  className="cursor-pointer min-w-[192px] text-center text-xl"
                  shape="round"
                  color="gray_400_63"
                  size="lg"
                  variant="fill"
                >
                  Dessert
                </Button>
                <Button
                  className="cursor-pointer min-w-[192px] text-center text-xl"
                  shape="round"
                  color="gray_400_63"
                  size="lg"
                  variant="fill"
                >
                  Drink
                </Button>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
                  <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem41084.png"
                        alt="PngItem41084"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-[17px] w-full">
                        <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Spaghetti
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            onClick={() => navigate("/checkout")}
                            color="red_400"
                            size="md"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem1447549.png"
                        alt="PngItem1447549"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Gnocchi
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            onClick={() => navigate("/checkout")}
                            color="red_400"
                            size="md"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngegg.png"
                        alt="pngegg"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Rovioli
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            onClick={() => navigate("/checkout")}
                            color="red_400"
                            size="md"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[95%]"
                        src="images/img_pngwing.png"
                        alt="pngwing"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-[15px] w-full">
                        <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Penne Alla Vodak
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            onClick={() => navigate("/checkout")}
                            color="red_400"
                            size="md"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem5290903.png"
                        alt="PngItem5290903"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Risoto
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            onClick={() => navigate("/checkout")}
                            color="red_400"
                            size="md"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngwing_270X270.png"
                        alt="pngwing One"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 w-full">
                        <div className="flex flex-col gap-[18px] items-center justify-start mt-4 w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Splitza Signature
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            onClick={() => navigate("/checkout")}
                            color="red_400"
                            size="md"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-inter gap-2.5 items-center justify-center w-1/5 md:w-full">
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_arrowleft_black_900.svg"
                    alt="arrowleft"
                  />
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[78%]">
                    <Button
                      className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                      color="gray_900"
                      size="xs"
                      variant="fill"
                    >
                      1
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                      color="gray_200"
                      size="xs"
                      variant="fill"
                    >
                      2
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                      color="gray_200"
                      size="xs"
                      variant="fill"
                    >
                      3
                    </Button>
                    <Button
                      className="flex h-[35px] items-center justify-center rounded w-[35px]"
                      color="gray_200"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </Button>
                  </div>
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default MenuPage;
