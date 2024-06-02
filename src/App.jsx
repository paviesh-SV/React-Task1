import React from "react";
import './App.css'
import CardTemplate from "./components/card_templat.jsx";

function App() {
  let prop = [
    {
      plan: "FREE",
      cost: "$0",
      user: "Single User",
      isUser: true,
      storage: "50GB Storage",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      access: "Community Access",
      isAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: false,
      phoneSupport: "Dedicated phone support",
      isPhoneSupport: false,
      subDomain: "Free SubDomain",
      isSubDomain: false,
      statusReport: "Monthly Status Reports",
      isStatusReport: false,
    },
    {
      plan: "PLUS",
      cost: "$9",
      user: "5 User",
      isUser: true,
      storage: "50GB Storage",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      access: "Community Access",
      isAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: true,
      phoneSupport: "Dedicated phone support",
      isPhoneSupport: true,
      subDomain: "Free SubDomain",
      isSubDomain: true,
      statusReport: "Monthly Status Reports",
      isStatusReport: false,
    },
    {
      plan: "PRO",
      cost: "$49",
      user: "Unlimited User",
      isUser: true,
      storage: "50GB Storage",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      access: "Community Access",
      isAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: true,
      phoneSupport: "Dedicated phone support",
      isPhoneSupport: true,
      subDomain: "Free SubDomain",
      isSubDomain: true,
      statusReport: "Monthly Status Reports",
      isStatusReport: true,
    }
  ];  
  return(
    <>
      <section className="cost">
        <div className="container">
          <div className="row">
              {prop.map((i,j) => {
                return <CardTemplate prop={i} key={j} />;
              })}
          </div>
        </div>
      </section>

    </>
  )
}

export default App;
