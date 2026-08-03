import { NextResponse } from "next/server";

const educationData = [
    {
        date: "Expected Graduation: 2027",
        title: "B.Tech in Computer Science and Information Technology",
        subtitle: "MLR Institute of Technology"
    },
    {
        date: "2021 – 2023",
        title: "Intermediate (MPC)",
        subtitle: "Chaitanya Junior College"
    },
    {
        date: "2011 – 2021",
        title: "Secondary School (SSC)",
        subtitle: "Gowtham Model School"
    }
];

export const GET = async () => {
    return NextResponse.json({
        educationData
    });
};