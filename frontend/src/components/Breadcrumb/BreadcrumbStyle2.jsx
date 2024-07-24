import React, { useEffect, useState } from 'react';
import Spacing from '../Spacing';
import { Link } from 'react-router-dom';

export default function BreadcrumbStyle2() {
  const [urlSegments, setUrlSegments] = useState([]);
  useEffect(() => {
    const pathSegments = window.location.pathname
      .split('/')
      .filter(segment => segment !== '');
    setUrlSegments(pathSegments);
  }, []);
  return (
    <>
      <Spacing md="170" />
      <div className="cs_page_heading">
        <div className="container">
          <div className="cs_page_heading_in">
            <ol className="breadcrumb text-capitalize">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              {urlSegments.map((segment, index) => (
                <li key={index} className="breadcrumb-item">
                  {index < urlSegments.length - 1 ? (
                    <Link to={`/${urlSegments.slice(0, index + 1).join('/')}`}>
                      {segment}
                    </Link>
                  ) : (
                    <span>{segment}</span>
                  )}
                </li>
              ))}
            </ol>
            <form action="#" className="cs_search_form">
              <input type="text" placeholder="Search Doctors" />
              <button className="cs_search_btn">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.07914 0C3.62682 0 0 3.62558 0 8.07641C0 12.5272 3.62682 16.1599 8.07914 16.1599C9.98086 16.1599 11.7299 15.4936 13.1122 14.3875L16.4775 17.7498C16.6473 17.9126 16.8741 18.0024 17.1094 18C17.3446 17.9975 17.5695 17.9032 17.736 17.737C17.9025 17.5708 17.9972 17.3461 17.9999 17.111C18.0027 16.8758 17.9132 16.6489 17.7506 16.4789L14.3853 13.1148C15.4928 11.7308 16.16 9.97968 16.16 8.07641C16.16 3.62558 12.5315 0 8.07914 0ZM8.07914 1.79517C11.561 1.79517 14.3625 4.59577 14.3625 8.07641C14.3625 11.557 11.561 14.3647 8.07914 14.3647C4.59732 14.3647 1.79575 11.557 1.79575 8.07641C1.79575 4.59577 4.59732 1.79517 8.07914 1.79517Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
