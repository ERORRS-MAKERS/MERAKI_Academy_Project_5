import React, { Suspense } from 'react'
import DepartmentDashSection from '../Section/department/DepartmentDashSection'
import Loading from './Loading'
import ErrorPage from './ErrorPage'
import Section from '../Section'
import { useLoaderData, Await } from 'react-router-dom';
import DepartDashbord from '../Departmentdash/DepartDashbord'

export default function DepartmentDash() {
  const { results } = useLoaderData();
  console.log(results);
  return (
  
    
    <Section>
        <Suspense fallback={<Loading />}>
          <Await resolve={results} errorElement={<ErrorPage />}>
            {(results) => {
              return <DepartmentDashSection  data={results.data.result} />;
            }}
          </Await>
        </Suspense>
      </Section>
     
 
  )
}

