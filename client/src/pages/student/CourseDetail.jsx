import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetCourseByIdQuery } from "@/features/api/courseApi";
import { BadgeInfo, PlayCircle } from "lucide-react";
import React from "react";
import ReactPlayer from "react-player";
import { useNavigate,useParams } from "react-router-dom";

const CourseDetail = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, isError } =
        useGetCourseByIdQuery(courseId);

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>Failed to load course details</h1>;

    const course = data?.course || data;

    console.log(course?.lectures?.[0]);

    return (
        <div className="mt-20 space-y-5">
            <div className="bg-[#2D2F31] text-white">
                <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2">
                    <h1 className="font-bold text-2xl md:text-3xl">
                        {course?.courseTitle}
                    </h1>

                    <p className="text-base md:text-lg">
                       {course?.subTitle} 
                    </p>

                    <p>
                        Created By{" "}
                        <span className="text-[#C0C4FC] underline italic">
                            {course?.creator?.name}
                        </span>
                    </p>

                    <div className="flex items-center gap-2 text-sm">
                        <BadgeInfo size={16} />
                        <p>Last updated {course?.createdAt?.split("T")[0]}</p>
                    </div>

                    <p>
                        Students enrolled: {course?.enrolledStudents?.length || 0}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10">
                <div className="w-full lg:w-1/2 space-y-5">
                    <h1 className="font-bold text-xl md:text-2xl">
                        Description
                    </h1>

                    <div
                        className="text-sm"
                        dangerouslySetInnerHTML={{
                            __html: course?.description || "",
                        }}
                    />

                    <Card>
                        <CardHeader>
                            <CardTitle>Course Content</CardTitle>
                            <CardDescription>
                                {course?.lectures?.length || 0} Lectures
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-3">
                            {course?.lectures?.map((lecture, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 text-sm"
                                >
                                    <PlayCircle size={14} />
                                    <p>{lecture?.lectureTitle}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                <div className="w-full lg:w-1/3">
                    <Card>
                        <CardContent className="p-4 flex flex-col">
                            <div className="w-full aspect-video mb-4">
                                {course?.lectures?.[0]?.videoUrl ? (
                                    <ReactPlayer
                                        width="100%"
                                        height="100%"
                                        url={course?.lectures?.[0]?.videoUrl}
                                        controls={true}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full border rounded">
                                        No Preview Video
                                    </div>
                                )}
                            </div>

                            <h1 className="font-medium">
                                {course?.lectures?.[0]?.lectureTitle || "Lecture Title"}
                            </h1>

                            <Separator className="my-2" />

                            <p className="font-medium text-green-600">
                                ✓ Free Course
                            </p>
                        </CardContent>

                        <CardFooter>
                            <Button className="w-full">
                                Start Learning
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
