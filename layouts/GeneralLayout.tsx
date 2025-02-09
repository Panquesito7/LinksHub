import React, { ReactNode } from "react";
import { SideNavbar } from "../components/SideNavbar";

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <SideNavbar />
      <div className="bg-gray-100 dark:bg-[#101623] transition-all ease-in duration-300 mx-auto mt-20 min-h-[calc(100vh-80px)] md:pb-8 lg:ml-20 lg:mt-0 lg:min-h-screen lg:pl-[290px]">
        {children}
      </div>
    </section>
  );
};

export default GeneralLayout;
