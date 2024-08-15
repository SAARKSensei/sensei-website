import { useState, useEffect } from "react";

import Varroww from "@/assets/varroww.svg";
import Lock from "@/assets/lock.svg";
import { activityData } from "@/utils/data";
import { useRouter } from "next/navigation";
import { getSubColour } from "@/utils/logic";
import axios from "axios";
import Link from "next/link";

const Activities = ({ modules }) => {
  const [moduleId, setModuleId] = useState(null);

  const [submodules, setSubmodules] = useState([]);
  const router = useRouter();

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  const colours = getSubColour(modules[0]?.subject?.subjectName);
  const getSubModules = async (id) => {
    const res = await axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}submodules/filter?moduleRef=${id}`,
      )
      .catch((err) => console.log(err));
    console.log("submodules", res?.data);
    if (res?.data) setSubmodules(res.data);
  };
  useEffect(() => {
    if (moduleId) getSubModules(moduleId);
    else setSubmodules([]);
  }, [moduleId]);
  // const options = [
  //   { label: "All", value: "all" },
  //   { label: "New", value: "new" },
  //   { label: "Completed", value: "completed" },
  //   { label: "Incomplete", value: "incomplete" },
  //   { label: "Upcoming", value: "upcoming" },
  // ];

  // const inSchoolActivities = activityData[0];
  // const afterSchoolActivities = activityData[1];
  // const modules = [
  //   {
  //     title: "In School Activities",
  //     free: true,
  //     subModules: [
  //       {
  //         title: "Self Identity",
  //         data: inSchoolActivities[0],
  //       },
  //       {
  //         title: "Strengths And Challenges",
  //         data: inSchoolActivities[1],
  //       },
  //       {
  //         title: "My Body And Emotions",
  //         data: inSchoolActivities[2],
  //       },
  //       {
  //         title: "Strengths And Challenges",
  //         data: inSchoolActivities[3],
  //       },
  //     ],
  //   },
  //   {
  //     title: "After School Activities",
  //     free: false,
  //     subModules: [
  //       {
  //         title: "My Favourite Things",
  //         data: afterSchoolActivities[0],
  //       },
  //       {
  //         title: "My Proud Moments And Rest",
  //         data: afterSchoolActivities[1],
  //       },
  //       {
  //         title: "My Proud Moments And Rest",
  //         data: afterSchoolActivities[2],
  //       },
  //       {
  //         title: "My Proud Moments And Rest",
  //         data: afterSchoolActivities[3],
  //       },
  //     ],
  //   },
  // ];
  return (
    <>
      <div>
        <h4 className="h4 pb-4 text-left uppercase text-black"> Modules</h4>
        <div
          style={{ backgroundColor: colours?.innerSubjectDivColor }}
          className={`animate-fade-in flex h-[500px] w-[min(632px,90vw)] overflow-y-auto rounded-[10px] p-4 pt-10`}
        >
          <ol className="body1_b flex w-full cursor-pointer list-decimal flex-col gap-4 rounded-2xl">
            {modules.map((module, index) => (
              <div
                onClick={() =>
                  setModuleId(
                    module?.moduleId === moduleId ? null : module?.moduleId,
                  )
                }
                key={index}
                className={`${!module?.free ? "text-primary" : "text-grey_2"} flex flex-col gap-5`}
              >
                <div className="flex w-full items-center gap-2 rounded-2xl bg-white px-4">
                  {module?.free && <Lock />}
                  <li className={`ml-8 py-4 pr-2`}>{module.moduleName}</li>
                  <Varroww
                    className={`ml-auto mr-4 w-4 transition-all ${module.moduleId === moduleId ? "rotate-90" : "rotate-180"}`}
                  />
                </div>
                {module.moduleId === moduleId && (
                  <ol className="flex list-decimal flex-col items-end justify-end gap-5">
                    {submodules.map((subModule, index) => (
                      <Link
                        href={`/funactivity/${subModule.subModuleId}`}
                        key={index}
                        className="flex w-[80%] min-w-max items-center justify-between gap-2 rounded-2xl bg-white p-4 pl-12"
                      >
                        <li className="pr-2 text-primary">
                          {subModule.subModuleName}
                        </li>
                      </Link>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Activities;
