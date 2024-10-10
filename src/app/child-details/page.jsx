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

  const [childFormDetails, setChildFormDetails] = useState({
    childName: "",
    grade: "",
    schoolId: "",
    dateOfBirth: "",
    activePlanId: "",
    visitingCounsellor: false,
    anyMedicalHistory: false,
  })

  const [planPrice, setPlanPrice] = useState("");

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
    getPlans();
  }, []);

  useEffect(() => {
    setPlanPrice(plans.filter(item => item.id === childFormDetails.activePlanId)[0]?.price)
  }, [childFormDetails.activePlanId, plans])

  const handleChange = (e) => {
    const { name, checked, value, type } = e.target;
    setChildFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const createPaymentorder = async (data) => {
    let status;
    try {
      const res = await axios.post("/payments/create-order", {
        amount: data.planPrice,
        currency: "INR",
        receipt: `${data.childName + " " + plans.filter(item => item.price === data.planPrice)[0].name}`,
      });
      status = res?.status;
      const orderDetails = res?.data;

      dispatch(
        setCurrentUserData({
          orderId: orderDetails?.razorpayOrderId,
          parentId: parentData?.id,
        }),
      );
      if (orderDetails?.id) {
        postChildData(data)
        dispatch(setCurrentChild(data));
        setChildFormDetails({})
        router.push("/ordersummary");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const saveData = async (e) => {
    e.preventDefault();
    const data = {
      parentId: parentData?.id,
      childName: childFormDetails.childName,
      schoolId: childFormDetails.schoolId,
      dateOfBirth: childFormDetails.dateOfBirth,
      visitingCounsellor: childFormDetails.visitingCounsellor,
      anyMedicalHistory: childFormDetails.anyMedicalHistory,
      medicalHistoryDescription: null,
      bloodGroup: "B+",
      ageGroup: "05-10",
      activePlanId: childFormDetails.activePlanId,
      phoneNumber: parentData?.phone,
      grade: childFormDetails.grade,
      planPrice: planPrice,
    };
    createPaymentorder(data);
  };

  const postChildData = async (childData) => {
    try {
      const data = {
        parentId: parentData?.id,
        childName: childData.childName,
        schoolId: childData.schoolId,
        grade: childData.grade,
        dateOfBirth: childData.dateOfBirth,
        visitingCounsellor: childData.visitingCounsellor,
        anyMedicalHistory: childData.anyMedicalHistory,
        bloodGroup: childData?.bloodGroup,
        ageGroup: childData?.ageGroup,
        activePlanId: childData.activePlanId,
        phoneNumber: Number(childData?.phoneNumber),
      };
      const res = await axios.post(
        `/child-users`,
        data
      );
      console.log("result", res);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

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
                    value={childFormDetails.childName}
                    onChange={handleChange}
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
                    value={childFormDetails.grade}
                    onChange={handleChange}
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
                    name="schoolId"
                    value={childFormDetails.schoolId}
                    onChange={handleChange}
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
                    name="dateOfBirth"
                    value={childFormDetails.dateOfBirth}
                    onChange={handleChange}
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
                    name="activePlanId"
                    value={childFormDetails.activePlanId}
                    onChange={handleChange}
                    className="mt-2 block rounded-md bg-white px-6 py-2 outline-none sm:w-[272px] sm:border-2"
                  >
                    <option value="" disabled hidden>
                      Select
                    </option>
                    {plans?.map((plan) => (
                      <option key={plan.id} value={plan?.id}>
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
                    >
                      <input
                        type="checkbox"
                        checked={childFormDetails.visitingCounsellor}
                        onChange={handleChange}
                        name="visitingCounsellor"
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="flex w-full justify-between gap-6 whitespace-nowrap">
                    <h4 className="text-sm">Any Medical History</h4>
                    <label
                      className="switch"
                    >
                      <input
                        type="checkbox"
                        checked={childFormDetails.anyMedicalHistory}
                        onChange={handleChange}
                        name="anyMedicalHistory"
                      />
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
