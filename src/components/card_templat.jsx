import React from "react";

function CardTemplate({ prop }) {
    return (
        <div className="col-lg-4 col-4">
            <div className="card mb-4 mb-lg-10 rounded-4">
                <div className="card-body">
                    <h4 className="card-title text-opac">
                        {prop.plan}
                    </h4>
                    <h5 className="card-cost">
                        {prop.cost}/month
                    </h5> <hr></hr>

                    <ul className="fa-ul">
                        <li className={prop.isUser ? "" : "text-opac"}>
                            <span className="fa-li">
                                <i className={prop.isUser ? "fa-solid fa-check" : "fas fa-x"}></i>
                            </span>
                            {prop.user}
                        </li>

                        <li className={prop.isStorage ? "" : "text-opac"}>
                            <span className="fa-li">
                                <i className={prop.isStorage ? "fa-solid fa-check" : "fas fa-x"}></i>
                            </span>
                            {prop.storage}
                        </li>

                        <li className={prop.isPublicProjects ? "" : "text-opac"}>
                            <span className="fa-li">
                                <i className={prop.isPublicProjects ? "fa-solid fa-check" : "fas fa-x"}></i>
                            </span>
                            {prop.publicProjects}
                        </li>

                        <li className={prop.isAccess ? "" : "text-opac"}>
                            <span className="fa-li">
                                <i className={prop.isAccess ? "fa-solid fa-check" : "fas fa-x"}></i>
                            </span>
                            {prop.access}
                        </li>

                        <li className={prop.isPrivateProjects ? "" : "text-opac"}>
                            <span className="fa-li">
                                <i className={prop.isPrivateProjects ? "fa-solid fa-check" : "fas fa-x"}></i>
                            </span>
                            {prop.privateProjects}
                        </li>

                        <li className={prop.isPhoneSupport ? "" : "text-opac"}>
                            <span className="fa-li">
                                <i className={prop.isPhoneSupport ? "fa-solid fa-check" : "fas fa-x"}></i>
                            </span>
                            {prop.phoneSupport}
                        </li>

                        <li className={prop.isSubDomain ? "" : "text-opac"}>
                            <span className="fa-li">
                                <i className={prop.isSubDomain ? "fa-solid fa-check" : "fas fa-x"}></i>
                            </span>
                            {prop.subDomain}
                        </li>

                        <li className={prop.isStatusReport ? "" : "text-opac"}>
                            <span className="fa-li">
                                <i className={prop.isStatusReport ? "fa-solid fa-check" : "fas fa-x"}></i>
                            </span>
                            {prop.statusReport}
                        </li>

                    </ul>

                    <div className="d-grid button-border">
                        <a href="#" role="button" className="btn btn-primary btn-lg rounded-pill">
                            BUTTON
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardTemplate