"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";

import { fetchChildrenRequest } from "@/Redux/slice/childrenSlice";
import { setCurrentChild } from "@/Redux/slice/currentChildSlice";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import { setCurrentUserData } from "@/Redux/slice/currentuserslice";

import DeleteIcon from "@/Images/delete-icon.svg";
// import AddChild from "@/Images/AddChild.svg";
import Background from "@/components/miniComps/BackGround.jsx";

const Page = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [error, setError] = useState("");

  const { data: session, status, update } = useSession();

  const currentUserData = useSelector((state) => state?.currentUser?.data);
  const parentData = useSelector((state) => state?.parents?.data);
  const childrenData = useSelector((state) => state?.children?.data);

  const dispatch = useDispatch();

  const router = useRouter();

  const getPlans = async () => {
    try {
      const response = await axios.get("/pricing-plans");
      if (response?.data) setPlans(response.data); //change later after multiple plans have been added
    } catch (error) {
      if (error) setError(error.message);
    }
  };

  useEffect(() => {
    // console.log(currentUserData);

    getPlans();
  }, []);

  const createPaymentorder = async (data) => {
    let status;
    try {
      const res = await axios.post("/payments/create-order", {
        // phoneNumber: currentUserData?.phoneNumber,
        // planId: plans?.id,
        amount: data?.planPrice,
        currency: "INR",
        // "receipt": "rcptid_11",
        // "paymentCapture": "1"
      });
      const orderDetails = res?.data;
      console.log("orderDetails", orderDetails);

      dispatch(
        setCurrentUserData({
          orderId: orderDetails?.razorpayOrderId,
        }),
      );
      if (orderDetails?.razorpayOrderId) {
        router.push("/ordersummary");
      }
    } catch (error) {
      alert("Something went wrong");
    }
    return status;
  };

  const saveData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      parentId: session?.user?.parentDetails?.id || 12345,
      childName: formData.get("childName"),
      schoolId: formData.get("schoolName"),
      dateOfBirth: formData.get("date"),
      visitingCounsellor:
        formData.get("visitingCounsellor") === "on" ? true : false,
      anyMedicalHistory: formData.get("medicalHistory") === "on" ? true : false,
      medicalHistoryDescription: null,
      bloodGroup: "B+",
      ageGroup: "05-10",
      activePlanId: "plan-001",
      phoneNumber: currentUserData?.phoneNumber,
      grade: formData.get("grade"),
      planPrice: formData.get("plan"),
    };

    document.forms["childForm"].reset();
    dispatch(setCurrentChild(data));
    createPaymentorder(data);
  };
  // const postChildData = async () => {
  //   try {
  //     const data = {
  //       parentUserId: session?.user?.parentDetails?.id,
  //       childName: child.childName,
  //       schoolId: child.schoolName,
  //       dateOfBirth: child.date,
  //       visitingCounsellor: visitingCounsellor,
  //       anyMedicalHistory: medicalHistory,
  //       medicalHistoryDescription: null,
  //       bloodGroup: "B+",
  //       grade: child.grade,
  //     };
  //     // console.log("data to be sent", data);
  //     const res = await axios.post(
  //       `https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/create/child`,
  //       data
  //     );
  //     console.log("result", res);
  //     return res;
  //   } catch (error) {
  //     console.log(error);
  //     return error;
  //   }
  // };

  return (
    <div className="h-fit w-screen">
      <Background />
      {/* <Navbar1 parentName={currentUserData.name} /> */}
      <div className="flex flex-col items-center justify-center sm:block sm:items-start sm:justify-center">
        <div className="mt-24 flex flex-col items-center justify-center font-Nunito sm:mt-0">
          <h1 className="text-2xl font-bold text-[#2C3D68] sm:mt-28 sm:text-3xl">
            Add child&apos;s details
          </h1>
          <h6 className="font-Nunito text-sm font-normal text-gray-600">
            Please fill in the correct details
          </h6>
        </div>
        <div key={childrenData.length + 1}>
          <form
            name="childForm"
            onSubmit={(e) => saveData(e)}
            className="ssm:flex-row mt-5 flex flex-col items-center justify-center gap-2 sm:gap-12"
          >
            <div className="z-50 h-[569px] w-[353px] rounded-lg bg-[#FFF8F1] sm:h-[388px] sm:w-[562px]">
              <div className="z-50 flex h-14 w-full items-center justify-between rounded-se-lg rounded-ss-lg bg-[#F58720] px-5 sm:justify-between sm:px-5">
                <h1 className="font-Nunito text-xl font-bold text-white">
                  {childrenData.length + 1}. Child
                </h1>
                <DeleteIcon />
              </div>
              <div className="mt-3 flex flex-col gap-2 px-5 font-NunitoSans sm:mt-5 sm:flex-row sm:gap-6">
                <div className="flex flex-col sm:h-[75px] sm:w-[279px]">
                  <label htmlFor="" className="mb-2">
                    Child Name
                  </label>
                  <input
                    required
                    type="text"
                    id="childName"
                    name="childName"
                    defaultValue={currentUserData?.name}
                    // value={child.childName}
                    // onChange={(e) => handleChange("childName", e.target.value)}
                    placeholder="Enter full name"
                    className="rounded-md px-6 py-3 outline-none sm:border-2"
                  />
                </div>
                <div className="flex flex-col justify-between sm:h-[75px] sm:w-[230px]">
                  <label htmlFor="" className="">
                    Grade
                  </label>
                  <select
                    required
                    id="grade"
                    name="grade"
                    // value={child.grade}
                    // onChange={(e) => handleChange("grade", e.target.value)}
                    className="block h-[46px] w-full rounded-md bg-white px-6 py-2 outline-none sm:border-2"
                  >
                    <option value="" disabled hidden>
                      Select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-2 px-5 sm:mt-5 sm:flex-row sm:gap-6">
                <div className="flex flex-col sm:h-[75px] sm:w-[279px]">
                  <label htmlFor="" className="mb-2">
                    School Name
                  </label>
                  <input
                    required
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    // value={child.schoolName}
                    // onChange={(e) => handleChange("schoolName", e.target.value)}
                    placeholder="Enter full name"
                    className="rounded-md px-6 py-3 outline-none sm:border-2"
                  />
                </div>
                <div className="flex flex-col sm:h-[75px] sm:w-[230px]">
                  <label htmlFor="" className="mb-2">
                    DOB
                  </label>
                  <input
                    required
                    type="date"
                    id="date"
                    name="date"
                    // value={child.date}
                    // onChange={(e) => handleChange("date", e.target.value)}
                    className="rounded-md px-5 py-2 outline-none sm:border-2"
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-2 px-5 sm:mt-5 sm:flex-row sm:gap-6">
                <div className="flex h-[75px] w-full flex-col justify-center sm:w-[279px]">
                  <label htmlFor="">Choose Plan</label>
                  <select
                    required
                    id="plan"
                    name="plan"
                    // value={child.plan}
                    // onChange={(e) => handleChange("plan", e.target.value)}
                    className="mt-2 block rounded-md bg-white px-6 py-2 outline-none sm:w-[272px] sm:border-2"
                  >
                    <option value="" disabled hidden>
                      Select
                    </option>
                    {plans?.map((plan) => (
                      <option key={plan.id} value={plan?.price}>
                        {plan?.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2 flex h-[88px] flex-col gap-2 sm:mt-0 sm:w-[230px] sm:gap-4">
                  <div className="flex w-full justify-between gap-1 whitespace-nowrap">
                    <h4 className="text-sm">Visiting any counsellor:</h4>
                    <label
                      className="switch mb-2"
                      // onChange={(e) =>
                      //   handleChange("visitingCounsellor", e.target.value)
                      // }
                    >
                      <input type="checkbox" name="visitingCounsellor" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="flex w-full justify-between gap-6 whitespace-nowrap">
                    <h4 className="text-sm">Any Medical History</h4>
                    <label
                      className="switch"
                      // onChange={(e) =>
                      //   handleChange("medicalHistory", e.target.value)
                      // }
                    >
                      <input type="checkbox" name="medicalHistory" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-12 flex items-center justify-center gap-3">
              <button
                type="submit"
                className="backgroud-button z-50 h-[57px] w-fit rounded-full px-6 py-2.5 text-center font-Nunito text-lg font-extrabold text-white"
              >
                Save & Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
