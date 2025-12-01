"use client";
import Button from "../components/ui/button";
import Link from "next/link";

const question = () => {
    const questionBank = [
        {
            id: 1,
            question: "What do you think about this website?",
            answer: ["good", "bad", "neutral"],
        },
        {
            id: 2,
            question: "what is your first thought you see me",
            answer: ["positive", "negative", "neutral"],
        },
    ];
    return questionBank;
};

const Question = () => {
    return (
        <div>
            {question().map((q) => {
                return (
                    <div
                        key={q.id}
                        className="flex h-screen  justify-center text-center items-center flex-col"
                    >
                        <Link href={"/admin"}>
                            <Button
                                margin={"marginBottom"}
                                input={"admin"}
                                color={"blue"}
                            />
                        </Link>
                        <p>
                            To go homepage "click the admin button'
                            <br />
                            <p>click "to hide the question"</p>
                        </p>
                        <div className="bg-[#FFF8D4] p-3.5 shadow-2 shadow-black rounded-2xl">
                            <div className="flex flex-col">
                                <p className="text-2xl text-black">
                                    {q.question}
                                </p>
                                <div className="mx-auto mt-2">
                                    {q.answer &&
                                        q.answer.map((ans) => (
                                            <Button
                                                key={ans}
                                                color="blue"
                                                input={ans}
                                                customPadding={"3px"}
                                                display="block"
                                                customMargin="10px"
                                                width=".btn { display: inline-block; padding: 8px 20px; min-width: 150px; }
"
                                            />
                                        ))}
                                </div>
                            </div>
                            <div className="flex justify-around mt-1">
                                <Button
                                    input="previous"
                                    customColor={"#04BF45"}
                                    margin="margin"
                                    // customBgColor={#C5D9D0/}
                                />
                                <Button
                                    input="next"
                                    customColor={"#04BF45"}
                                    margin="margin"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default Question;
