"use client";
import Button from "../../components/ui/button.jsx";
import Input from "../../components/ui/input.jsx";
const page = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-6 min-[320px]:min-h-[90vh] ">
                <Input
                    type="Admin"
                    autoComplete={"off"}
                    id={"adminInput"}
                    pageHolder={"Admin ID"}
                    width={"half"}
                />

                <Input
                    type="Admin"
                    autoComplete={"off"}
                    id={"adminInput"}
                    pageHolder={"Password"}
                    width={"half"}
                />

                <Button
                    type="submit"
                    input={"Login"}
                    color="blue"
                    padding={"padding2"}
                    margin="marginTop"
                />

                <Button
                    input="SET WEBSITE TO UNDER CONSTRUCTION"
                    color="red"
                    width={"fit-content"}
                    padding={"padding2"}
                    margin="marginTop"
                    type={"submit"}
                    onClick={() => {
                        localStorage.setItem("isUnderConstruction", "true");
                        console.log("is under construction set to true");
                    }}
                />

                <Button
                    color="green"
                    input="SET WEBSITE TO LIVE"
                    padding={"padding2"}
                    type="button"
                    width={'fit-content'}
                    onClick={() => {
                        localStorage.setItem("isUnderConstruction", "false");
                    }}
                />
            </div>
        </>
    );
};
export default page;
