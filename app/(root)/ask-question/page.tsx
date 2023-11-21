import Question from "@/components/forms/Question";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ask a Question | Dev Overflow",
    description:
        "Dev Overflow is a community of 1,000,000+ developers. Join us.",
};

const Page = async () => {
    const { userId } = auth();
    if (!userId) redirect("/sign-in");

    const mongoUser = await getUserById({ userId });

    return (
        <div>
            <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
            <div className="mt-9">
                <Question mongoUserId={JSON.stringify(mongoUser?._id)} />
            </div>
        </div>
    );
};

export default Page;
