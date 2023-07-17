import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import bc from '../../css/style.css'
function Breadcrumb(){
  const location = useLocation();

  // Split the pathname into an array of path segments
  const pathNames = location.pathname.split('/').filter((pathname) => pathname !== '');

  return (
    <div className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="breadcrumb-list">
              <h1>{pathNames}</h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  <span className="divider">|</span>
                </li>

                {pathNames.map((segment, index) => (
                  <li key={segment}>
                    <li to={`/${pathNames.slice(0, index + 1).join('/')}`}>{segment}</li>
                    {index !== pathNames.length - 1 && (
                      <span className="divider">|</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;