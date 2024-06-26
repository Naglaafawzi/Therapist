import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className='d-flex justify-content-center align-items-center'
            style={{ height: "68vh", width: "100%" }}>
            <div className="text-center">
                <h1 className="text-danger display-1 mt-5 fw">Page Not Found 404</h1>
                <h4 className="lead fw-bold">Sorry, this page was not found.</h4>
                <h4 className="lead fw-bold">You can go back to <Link className="text-primary" to="/">Home</Link>.</h4>
            </div>
        </div>
    );
}

export default PageNotFound;