import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2017-2020'} 
                        title={'Inspector'}
                        subTitle={' Department of civil registration of Shavat district of Kharezm region'}
                        text={'Registration of births, marriages, divorces and deaths. Restore act records. Editing, correcting and supplementing act records'} 
                    />
                    <ResumeItem 
                        year={'2021'} 
                        title={'Frontend'}
                        subTitle={'ECMA'}
                        text={'ECMA (Enterprise Commercial Modern Applications) is an information technology company. Internet Application, Software Development'} 
                    />
                    
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2014 - 2017'} 
                        title={'College'}
                        subTitle={'2nd Tashkent Law College'}
                        text={'Lawyer'} 
                    />
                    <ResumeItem 
                        year={'2020'} 
                        title={'Frontent Development'}
                        subTitle={'PDP Academy'}
                        text={'Frontent and React development '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume

// import React from "react";

// const Resume = React.forwardRef((props, ref) => {
//   const value = {
//     basicDetails: {
//       firstName: "John ",
//       lastName: "Doe",
//       jobTitle: "Software Engineer",
//       email: "test@test.com",
//       phoneNumber: "(912) 555-4321",
//       website: "hjasfjhdashjds@adsa.com",
//       location: "Texas, USA"
//     },
//     careerProfile: {
//       profileDesc:
//         "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory."
//     },
//     skills: [
//       {
//         skillName: "HTML",
//         skillLevel: "2"
//       },
//       {
//         skillName: "CSS",
//         skillLevel: "4"
//       },
//       {
//         skillName: "JS",
//         skillLevel: "3"
//       }
//     ],
//     companyDetails: [
//       {
//         companyName: "LMN",
//         designation: "Software Engineer",
//         empStartDate: "04/2018",
//         empEndDate: "02/2019",
//         employmentDetail:
//           "<p>Responsible for building websites and web based applications and to coordinate with team.</p>\n"
//       }
//     ],
//     education: [
//       {
//         qualification: "BE",
//         institution: "XYZ",
//         eduStartDate: "04/2016",
//         eduEndDate: "04/2020",
//         educationDetail: "<p>Specialization in Civil Engineering</p>\n"
//       },
//       {
//         qualification: "HSC",
//         institution: "ABC",
//         educationDetail: "<p>Higher Secondary Education</p>\n",
//         eduStartDate: "04/2014",
//         eduEndDate: "03/2016"
//       }
//     ]
//   };

//   return (
//     <div className="bg-gray-200 p-6" ref={ref}>
//       <div className="a4-screen-sized">
//         <div className="aspect-ratio-box shadow-lg rounded-lg overflow-hidden">
//           <div className="aspect-ratio-box-inside border border-gray-200 rounded-lg overflow-hidden">
//             <div className="w-full object-cover object-center p-5 bg-gray-100">
//               <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 uppercase">
//                 {value.basicDetails.firstName} {value.basicDetails.lastName}
//               </h1>
//               <p
//                 className="leading-relaxed mb-3"
//                 style={{ color: "rgb(255, 179, 62)" }}
//               >
//                 {" "}
//                 {value.basicDetails.jobTitle}{" "}
//               </p>
//             </div>
//             <div className="flex flex-wrap w-full p-5">
//               <div className="w-2/3">
//                 <h2 className="text-md bold title-font text-gray-500 tracking-widest">
//                   Work
//                 </h2>
//                 {value.companyDetails.map((workItem, index) => (
//                   <div className="flex flex-wrap">
//                     <div className="w-1/2">
//                       <p className="leading-relaxed mb-4 text-md">
//                         {" "}
//                         {workItem.designation}
//                       </p>
//                       <p className="leading-relaxed mb-4 text-sm uppercase">
//                         {" "}
//                         {workItem.companyName}
//                       </p>
//                     </div>
//                     <div className="w-1/2">
//                       <p className="leading-relaxed mb-4 text-md">
//                         {workItem.empStartDate} - {workItem.empEndDate}
//                       </p>
//                     </div>
//                     <div
//                       className="leading-relaxed mb-4 text-sm"
//                       dangerouslySetInnerHTML={{
//                         __html: workItem.employmentDetail
//                       }}
//                     ></div>
//                   </div>
//                 ))}
//                 <h2 className="text-md bold title-font text-gray-500 tracking-widest">
//                   Education
//                 </h2>
//                 {value.education.map((workItem, index) => (
//                   <div className="flex flex-wrap">
//                     <div className="w-1/2">
//                       <p className="leading-relaxed mb-4 text-md">
//                         {" "}
//                         {workItem.qualification}
//                       </p>
//                       <p className="leading-relaxed mb-4 text-sm uppercase">
//                         {" "}
//                         {workItem.institution}
//                       </p>
//                     </div>
//                     <div className="w-1/2">
//                       <p className="leading-relaxed mb-4 text-md">
//                         {workItem.eduStartDate} - {workItem.eduEndDate}
//                       </p>
//                     </div>
//                     <div
//                       className="leading-relaxed mb-4 text-sm"
//                       dangerouslySetInnerHTML={{
//                         __html: workItem.educationDetail
//                       }}
//                     ></div>
//                   </div>
//                 ))}
//               </div>
//               <div className="w-1/3 px-5">
//                 <h2 className="text-md bold title-font text-gray-500 tracking-widest mb-4">
//                   Contact
//                 </h2>
//                 <p className="leading-relaxed mb-2 text-sm">
//                   {value.basicDetails.email}
//                 </p>
//                 <p className="leading-relaxed mb-2 text-sm">
//                   {value.basicDetails.phoneNumber}
//                 </p>
//                 <p className="leading-relaxed mb-2 text-sm">
//                   {value.basicDetails.website}
//                 </p>
//                 <p className="leading-relaxed mb-2 text-sm">
//                   {value.basicDetails.location}
//                 </p>
//                 <h2 className="text-md bold title-font text-gray-500 tracking-widest my-4">
//                   Profile
//                 </h2>
//                 <div
//                   className="leading-relaxed mb-2 text-sm"
//                   dangerouslySetInnerHTML={{
//                     __html: value.careerProfile.profileDesc
//                   }}
//                 ></div>
//                 <h2 className="text-md bold title-font text-gray-500 tracking-widest my-4">
//                   Skills
//                 </h2>
//                 {value.skills.map((skill, index) => (
//                   <p className="leading-relaxed mb-2 text-sm">
//                     {skill.skillName}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Resume;

