 import type { Types } from "mongoose";

export interface ICourse {
    courseId:string,
    title:string,
    slug:string,
    type:string,
    image:string,
    fee : string,
    rating:number;
    totalRating:number;
    totalStudentEnroll:number;
    mentor:Types.ObjectId;
    courseStart:string;
    duration:number;
    lectures:number;
    totalExam:number;
    totalProject:number;
    courseDetails:string;
    courseOverview:string;
    carriculam:string[];
    courseIncludes:{icon:string,text:string}[],
    softwareIncludes:string[];
    jobOptions:string[];


}