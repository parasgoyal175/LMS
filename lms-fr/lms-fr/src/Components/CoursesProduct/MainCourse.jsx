import  { useEffect, useState } from 'react';
import MainCard from './MainCard';
import CoursesData from '../../data/CoursesData'
import axios from 'axios';

const MainCourse = () => {
    const [data,setData]=useState();
    useEffect(()=>{
        const fetch=async()=>{
            await axios.get('http://localhost:3001/courses')
            .then((res)=>{setData(res.data.courses)});
        };
        fetch();
    },[])
    console.log(data);
    return (
        <div>
            <div className='w-full bg-[#E9F8F3B2] py-10 md:pl-[50px] pl-[25px]'>
                <div className='md:max-w-[1480px]  max-w-ful m-auto mx-6 max-w-[600px] h-[1480px]'>
                    <h1 className='text-3xl py-3 font-bold '>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
                    {/* <p className='text-[#6D737A]'>Various version have evolved over the years, sometimes by accident.</p> */}
                    <div className='flex flex-row flex-wrap md:max-w-[1480px] max-w-[680px] justify-items-auto py-8 h-[900px] justify-around'>
                        {data?(data && data.map((courses,i)=>(
                        <div key={i} className='md:mr-8 mr-4 '>
                            <MainCard courses={courses} />
                        </div>))
                        ):
                        (<div className=''>Loading...</div>)}
                    {/* {CoursesData.map((course, i) => (
                        <div key={i} className='md:mr-8 mr-4 '>
                            <MainCard course={course} />
                        </div>))
                    } */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCourse;