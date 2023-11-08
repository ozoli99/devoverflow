import React from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";

const Answer = () => {
    const form = useForm<z.infer<typeof AnswerSchema>>();
    return <Form></Form>;
};

export default Answer;
