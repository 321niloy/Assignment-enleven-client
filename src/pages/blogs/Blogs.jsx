import React from 'react';
import useTitle from '../../usetitle/Usetitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div>
            <div className='text-5xl font-extrabold'><p>Blog</p></div>
            <div className='m-5 shadow-xl p-5 '>
                <h1 className='text-lg font-bold text-red-400'>What is an access token and refresh token? How do they work and where should we store them on the client-side??</h1>
                <p><span className='text-base font-bold'>Ans:</span>An access token is a credential that grants access to specific resources, while a refresh token is a long-lived    <br></br>
                    credential used to obtain a new access token when the current one expires. Access tokens are used for accessing <br></br>
                   resources, and refresh tokens are used to renew access tokens. Both tokens should be stored securely on the  <br></br>
                   client-side to prevent unauthorized access.</p>
            </div>
            <div >
                <h1 className='text-lg font-bold text-red-400'>Compare SQL and NoSQL databases??</h1>
                <p><span className='text-base font-bold'>Ans:</span>
SQL databases have a predefined structure, enforce strict data integrity constraints, and use SQL for querying. NoSQL databases offer     <br />
 flexibility in data structure, have dynamic schemas or no schemas at all, and use alternative query languages or APIs for data access.  <br />
 SQL databases are suitable for structured data with complex relationships, while NoSQL databases excel in handling unstructured or  <br />
 semi-structured data with scalability needs.</p>
            </div>
            <div className='m-5 shadow-xl p-5 '>
                <h1 className='text-lg font-bold text-red-400'>What is express js? What is Nest JS (google it)?</h1>
                <p><span className='text-base font-bold'>Ans:</span>Express.js is a minimal and flexible web application framework for Node.js, while Nest.js is a structured and <br />
                 opinionated framework built with TypeScript for building scalable server-side applications.</p>
            </div>

            <div className='m-5 shadow-xl p-5 '>
                <h1 className='text-lg font-bold text-red-400'>What is MongoDB aggregate and how does it work (google it)?</h1>
                <p><span className='text-base font-bold'>Ans:</span>
MongoDB's aggregation framework is a pipeline-based feature that enables advanced data processing and analysis within the database. It <br />
 operates through a sequence of stages, where each stage applies specific operations on the data. These stages use operators to filter, reshape, <br />
  group, sort, calculate, and aggregate data based on defined criteria. By combining these stages, the framework can perform complex data transformations <br />
   and generate desired output formats. It provides a powerful tool for performing sophisticated queries and aggregations directly within MongoDB.</p>
            </div>
        </div>
    );
};

export default Blogs;