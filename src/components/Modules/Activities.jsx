import { useState, useEffect } from "react";

import Varroww from "@/assets/varroww.svg";
import Lock from "@/assets/lock.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Print from "../miniComps/Print";
import Free from "@/assets/free.gif";
import Image from "next/image";

const Activities = ({ modules, hidden, colours }) => {
  const [moduleId, setModuleId] = useState(null);
  console.log(colours);

  // const [submodules, setSubmodules] = useState([]);
  const router = useRouter();

  const getSubModules = (id) => {
    setModuleId(id);
    // console.log(modules[id]?.subModules);

    // if (id) setSubmodules(modules[id]?.subModules);
  };

  return (
    <div className={hidden + " sm:grow"}>
      <h4 className={`h4 pb-4 text-left uppercase text-black`}> Modules</h4>
      <div
        style={{ background: colours?.innerSubjectDivColor }}
        className={`animate-fade-in flex rounded-[10px] sm:w-[min(632px,100%)]`}
      >
        {modules && !!modules?.length ? (
          <ol className="body1_b flex h-[500px] w-full cursor-pointer list-decimal flex-col gap-4 overflow-y-auto p-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`${
                  module?.moduleId === "2c90c92e91b3466a0191b347c9820000"
                    ? "text-primary"
                    : "text-grey_2"
                } flex flex-col gap-2`}
              >
                <button
                  onClick={() =>
                    getSubModules(
                      module?.moduleId !== "2c90c92e91b3466a0191b347c9820000"
                        ? null
                        : index,
                    )
                  }
                  className={`flex w-full items-center rounded-2xl bg-white px-4 py-2 text-primary disabled:text-grey_2 md:gap-2`}
                  disabled={
                    module?.moduleId !== "2c90c92e91b3466a0191b347c9820000"
                  }
                >
                  {module?.moduleId !== "2c90c92e91b3466a0191b347c9820000" && (
                    <Lock className="mr-2 min-w-10 max-w-10 max-sm:min-w-7 max-sm:max-w-7" />
                  )}
                  <li className="list-inside pr-2 text-left">
                    {module.moduleName}
                  </li>
                  {module?.moduleId === "2c90c92e91b3466a0191b347c9820000" && (
                    <>
                      <Image
                        src={Free}
                        alt="free"
                        width={40}
                        height={40}
                        className="mx-auto"
                      />
                      <Varroww
                        className={`mr-1 w-2 transition-all sm:w-4 md:mr-4 ${index === moduleId ? "rotate-90" : "rotate-180"}`}
                      />
                    </>
                  )}
                </button>

                {index === moduleId && (
                  <ol className="flex list-decimal flex-col items-end justify-end gap-5">
                    {/* <Print data={module?.subModules} /> */}
                    {module?.subModules?.map((subModule, index) => (
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
        ) : (
          <span className="rw-full ounded-2xl block h-full bg-primary/20" />
        )}
      </div>
    </div>
  );
};

export default Activities;
