"use client";
import React, { useEffect } from "react";
// import axios from "axios";
const Print = ({ data, Id }) => {
  //   const getParentsDataAPI = async () => {
  //     const digitalActivities = await axios
  //       .get(
  //         `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}digitalActivities/filter?activityRef=${Id}`,
  //       )
  //       .catch((err) => null);
  //     console.log(digitalActivities?.data);
  //   };
  useEffect(() => {
    // getParentsDataAPI();
    console.log(data);
  }, [data]);
  return <></>;
};

export default Print;
