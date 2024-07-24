import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ title }) {
  const [urlSegments, setUrlSegments] = useState([]);
  useEffect(() => {
    const pathSegments = window.location.pathname
      .split('/')
      .filter(segment => segment !== '');
    setUrlSegments(pathSegments);
  }, []);
  return (
    <div className="container">
      <ol className="breadcrumb text-capitalize">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {urlSegments.map((segment, index) => (
          <li key={index} className="breadcrumb-item">
            {index < urlSegments.length - 1 ? (
              <a href={`/${urlSegments.slice(0, index + 1).join('/')}`}>
                {segment}
              </a>
            ) : (
              <span>{segment}</span>
            )}
          </li>
        ))}
      </ol>
      <div className="cs_height_18" />
      <h1 className="cs_fs_72 mb-0">{title}</h1>
    </div>
  );
}
