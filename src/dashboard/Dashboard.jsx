import React from "react";
import DNavbar from "../components/dashboard-comp/DNavbar";
import Sidebar from "../components/dashboard-comp/Sidebar";
import DEvents from "../components/dashboard-comp/DEvents";
import DNotice from "../components/dashboard-comp/DNotice";
import DFooter from "../components/dashboard-comp/DFooter";
function Dashboard() {
  return (
    <div>
      <>
        <div>
          <div className="flex overflow-hidden bg-white pt-16">
            <Sidebar />
            <div
              className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-60"
            >
              <main>
                <div className="pt-6 px-4">
                  <div className="flex gap-4">
                    <DEvents />
                    <DNotice />
                  </div>
                </div>
              </main>
              <DFooter />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Dashboard;
