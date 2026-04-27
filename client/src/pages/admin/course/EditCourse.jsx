import React from 'react'
import CourseTab  from './CourseTab'
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EditCourse = () => {
  return (
    <div className="flex-1 mt-10 p-6">
        <div className='flex items-center justify-between mb-5 '>
            <h1 className='font-bold text-2xl'>Add details information regarding course</h1>
            <Link to="lecture">
            <Button className ="hover:text-blue-500" variant="link">Go to lecturepage</Button>
            </Link>
      </div>
      <CourseTab/>
    </div>
  )
};

export default EditCourse;
