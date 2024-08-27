import { useState, useEffect } from "react";

import Varroww from "@/assets/varroww.svg";
import Lock from "@/assets/lock.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Print from "../miniComps/Print";

const Activities = ({ modules, hidden, colours }) => {
  // console.log(modules);

  const [moduleId, setModuleId] = useState(null);

  // const [submodules, setSubmodules] = useState([]);
  const router = useRouter();

  const getSubModules = (id) => {
    setModuleId(id);
    // console.log(modules[id]?.subModules);

    // if (id) setSubmodules(modules[id]?.subModules);
  };

  return (
    <div className={hidden + " grow"}>
      <h4 className={`h4 pb-4 text-left uppercase text-black`}> Modules</h4>
      <div
        style={{ backgroundColor: colours?.innerSubjectDivColor }}
        className={`animate-fade-in flex h-[500px] overflow-y-auto rounded-[10px] p-4 pt-10 max-sm:h-[min(100%,500px)] sm:w-[min(632px,100%)]`}
      >
        {modules && !!modules?.length ? (
          <ol className="body1_b flex w-full cursor-pointer list-decimal flex-col gap-4 rounded-2xl">
            {modules.map((module, index) => (
              <div
                onClick={() => getSubModules(index === moduleId ? null : index)}
                key={index}
                className={`${!module?.free ? "text-primary" : "text-grey_2"} flex flex-col gap-5`}
              >
                <div className="flex w-full items-center gap-2 rounded-2xl bg-white px-4">
                  {module?.free && <Lock />}
                  <li className={`ml-8 py-4 pr-2`}>{module.moduleName}</li>
                  <Varroww
                    className={`ml-auto mr-4 w-4 transition-all ${index === moduleId ? "rotate-90" : "rotate-180"}`}
                  />
                </div>
                {index === moduleId && (
                  <ol className="flex list-decimal flex-col items-end justify-end gap-5">
                    <Print data={module?.subModules} />
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
