import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import getSidebarFormDivs, { baseUrl } from "../../assets/staticAssets/data";
import { inputFieldType, sidebarFormType } from "../../types/appTypes";
import { useSelector } from "react-redux";
import { RootState, store } from "../../store";
import { initializePodCast } from "../../features/podCastSlice";
import { useDispatch } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { cloudinaryUrl } from "../../assets/staticAssets/data";
import axios from "axios";
import BackDrop from "../homeComponents/BackDrop";
import { PayloadAction } from "@reduxjs/toolkit";
import { Root } from "postcss";
import { Slide } from "react-awesome-reveal";
import { Button } from "@material-ui/core";
import { setShowBackDrop, setPodcastPostedSucessfully } from "../../features/pageSlice";
import Alert from '@mui/material/Alert'
import { setShowAlerts, setLoading, setMessage } from "../../features/pageSlice";
function UpdateForm(props: { podcastTopudate: any; setOpenUpdateModal: (arg0: boolean) => void; }) {
    const isLoading = useSelector((store: RootState) => store.page.isLoading);
    const podcast = props.podcastTopudate;
    const sidebarFormDivs = getSidebarFormDivs();
    const dispatch = useDispatch();
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const [coverImages, setCoverImages] = useState<File[]>([]);
    const [coverLinks, setCoverLinks] = useState<String[]>();
    const showBackDrop = useSelector(
        (store: RootState) => store.page.showBackDrop
    );
    const podcastTobeSaved = useSelector(
        (store: RootState) => store.podcasts.podcast
    );
    const user = JSON.parse(localStorage.getItem("user")!);
    const [value, setValue] = useState<string>();
    const [coverImageFile, setCoverimageFile] = useState<any>();
    const [podcastdFile, setPodCastFile] = useState<any>();
    const formData = new FormData();
    const podcastCreatedSucessfully = useSelector((store: RootState) => store.page.podcastPostedSucessfully);
    const podcastt = useSelector((store: RootState) => store.podcasts.podcast);
    const reference = useRef(null);
    const updatePodcast = () => {

        const authorization = {
            headers: {
                Authorization: `Bearer ${user.token.token}`,
                "Content-Type": "multipart/form-data"
            },
        };

        formData.append('podcast', podcastdFile)
        formData.append('name', podcastt.title);
        formData.append('description', podcastt.shortDescription);
        formData.append('price', podcastt.price);
        formData.append('category', podcast.category);
        formData.append('cover', coverImageFile)
        dispatch(setLoading(true))
        axios({
            url: `${baseUrl}/admin/podcast/${podcast?.id}`,
            data: formData,
            method: "PATCH",
            headers: authorization.headers
        }
        )
            .then((response) => {
                dispatch(setPodcastPostedSucessfully(true))
                setTimeout(() => {
                    dispatch(setShowBackDrop('hide'))
                }, 500)
                dispatch(setShowAlerts(true))
                setTimeout(() => {
                    dispatch(setShowAlerts(false))
                }, 5000)
                document.getElementById("main")?.scrollIntoView({ behavior: "smooth" })
                props.setOpenUpdateModal(false);
                dispatch(setLoading(false))
                dispatch(setMessage({ message: "Podcast updated successfully" }))

            })
            .catch((error) => {
                setMessage(error.response.data.error)
                dispatch(setPodcastPostedSucessfully(false))
                dispatch(setShowBackDrop('hide'))
                dispatch(setShowAlerts(true))
                setTimeout(() => {
                    dispatch(setShowAlerts(false))
                }, 5000)
                document.getElementById("main")?.scrollIntoView({ behavior: "smooth" })
                dispatch(setLoading(true))
            });
    };
    const getDivClass = (index: number): String => {
        if (index === 0) {
            return isDarkMode
                ? "md:h-[35vh] h-[50vh] rounded  flex  flex-col space-y-4  bg-[#212529]"
                : "md:h-[35vh] h-[50vh] r rounded  flex flex-col space-y-4  bg-white";
        }
        return isDarkMode
            ? "md:h-[22vh] h-[50vh] rounded flex flex-col space-y-4  bg-[#212529]"
            : "md:h-[22vh] h-[50vh] rounded flex flex-col space-y-4  bg-white";
    };

    const getInputValue = (inputField: inputFieldType, div: sidebarFormType, inputIndex: Number, divIndex: Number) => {
        if (divIndex == 0) {
            if (inputIndex == 0) {
                // return podcast.status
                return "";
            } else if (inputIndex == 1) {
                return "";

            }
        } else if (divIndex == 1) {
            if (inputIndex == 0) {
                // return /
            }
        } else if (divIndex == 2) {
            if (inputIndex == 0) {
                return podcast == null ? "" : podcast.category;
            }
        } else if (divIndex == 3) {
            // if (inputIndex == 0) {
            return podcast == null ? "" : podcast.description
            // }
        }

    }

    const getInput = (inputField: inputFieldType, divTitle: String, inputIndex: Number, divIndex: Number, div: sidebarFormType) => {
        if (inputField.type === "select") {
            return (
                <select
                    defaultValue={getInputValue(inputField, div, inputIndex, divIndex)}
                    onChange={(e) =>
                        dispatch(
                            initializePodCast({ key: divTitle, value: e.target.value })
                        )
                    }
                    className={
                        isDarkMode
                            ? "w-[100%]  border border-[0.1px]  border-[#32383e] rounded  sm:h-[50%] pl-3 focus:outline-0 bg-[#2a2f34] h-[100%]"
                            : "w-[100%]  border border-[0.1px]  border-[#32383e] rounded  pl-3 focus:outline-0 bg-white h-[100%]"
                    }
                    name="select"
                >
                    {inputField.options?.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}
                    <option value="main">main</option>
                </select>
            );
        } else if (inputField.type === "button") {
            return (
                <button className="w-[100%] bg-[#405189] rounded hover:bg-[#364574] text-[#fff] h-[100%]">
                    Filters
                </button>
            );
        } else {
            return (
                <input
                    defaultValue={getInputValue(inputField, div, inputIndex, divIndex)}
                    onChange={(e) =>
                        dispatch(
                            initializePodCast({
                                key: divTitle,
                                value: e.target.value.toString(),
                            })
                        )
                    }
                    className={
                        isDarkMode
                            ? "bg-[#2a2f34] border border-[0.1px]  border-[#32383e]  rounded focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] sm:h-[50%] h-[100%]"
                            : "bg-white border border-[0.1px]  border-[#32383e]  rounded focus:outline-0 fous:border focus:border-[#32383e] pl-4 sm:h-[50%]  w-[100%] h-[100%]"
                    }
                    placeholder={inputField.placeholder.toString()}
                    type={inputField.type.toString()}
                />
            );
        }
    };
    const config = {
        style: {
            backgroundColor: "white",
            color: "#2a2f34",
        },
    };
    return (
        <div
            id="main"
            ref={reference}
            className={
                isDarkMode === true
                    ? "w-[100%]  font-poppins flex md:flex-row flex-col space-y-4 md:space-y-0  justify-between text-[0.80rem] h-[100%]"
                    : "w-[100%] text-[#212529] font-poppins flex md:flex-row flex-col space-y-4 md:space-y-0  justify-between text-[0.80rem] h-[100%]"
            }
        >
            <div
                className={
                    isDarkMode === true
                        ? "md:w-[67%] flex  items-center  bg-[#212529] h-[40%] font-sans md:h-[90%]"
                        : "md:w-[67%] flex  items-center  bg-white  h-[100%] font-sans md:h-[90%]"
                }
            >
                <div className="flex w-[95%]  mx-auto  h-[95%]">
                    <div className=" w-[100%] w-[100%]  flex-col space-y-8 md:space-y-5 h-[100%]">
                        <div className=" flex w-[100%] h-[20%]  md:h-[10%] flex-col space-y-2 mx-auto">

                            <div className="md:h-[100%] h-[100%] w-[100%]">
                                <input
                                    defaultValue={podcast == null ? "" : podcast.name}
                                    onChange={(e) =>
                                        dispatch(
                                            initializePodCast({
                                                key: "title",
                                                value: e.target.value.toString(),
                                            })
                                        )
                                    }
                                    placeholder="Enter product title"
                                    className={
                                        isDarkMode
                                            ? "bg-[#262A2F] border border-[0.1px]  border-[#32383e]   focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[40%] md:h-[60%]"
                                            : "bg-white border border-[0.1px]  border-[#32383e]   focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[40%] md:h-[60%]"
                                    }
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="w-[100%] flex  space-y-2 h-[30%]   flex-col space-y-10 mx-auto">
                            <div className="flex  flex-col h-[10%]">
                                <h1 className="text-[0.90rem]">
                                    Podcast phumbnail or cover image
                                </h1>
                                <p className="text-[#7c7f90]">
                                    Drag &amp; drop the podcast cover image here
                                </p>
                            </div>
                            <div
                                className={
                                    isDarkMode
                                        ? " text-center text-[1rem]  flex justify-center items-center bg-[#212529]  border-[0.1px]  border-[#32383e] border-dashed  text-[#CED4DA]   focus:outline-0 fous:border  focus:border-[#32383e] pl-4  w-[100%] h-[80%]"
                                        : " text-center text-[#495057] flex justify-center items-center text-[1rem] bg-white  border-[0.1px]  border-[#32383e] border-dashed  text-[#CED4DA]   focus:outline-0 fous:border items-center  focus:border-[#32383e] pl-4  w-[100%] h-[80%]"
                                }
                            >
                                <div className="container">
                                    <div >
                                        <input id="file-input" hidden type="file" onChange={(e) => setCoverimageFile(e.target.files![0])} />
                                        <label htmlFor="file-input">
                                            Drag 'n' drop the cover image here
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] flex  space-y-2 h-[40%]   flex-col space-y-6 mx-auto">
                            <div className="flex  flex-col h-[10%]">
                                <h1 className="text-[0.90rem]">Podcast File</h1>
                                <p className="text-[#7c7f90]">
                                    Drag &amp; drop the podcast file here
                                </p>
                            </div>
                            <div
                                className={
                                    isDarkMode
                                        ? " text-center text-[1rem]  flex justify-center items-center bg-[#212529]  border-[0.1px]  border-[#32383e] border-dashed  text-[#CED4DA]   focus:outline-0 fous:border  focus:border-[#32383e] pl-4  w-[100%] h-[80%]"
                                        : " text-center text-[#495057] flex justify-center items-center text-[1rem] bg-white  border-[0.1px]  border-[#32383e] border-dashed  text-[#CED4DA]   focus:outline-0 fous:border items-center  focus:border-[#32383e] pl-4  w-[100%] h-[80%]"
                                }
                            >
                                <div className="container">
                                    <div >
                                        <input hidden id="file-input1" onChange={(e) => setPodCastFile(e.target.files![0])} type="file" />
                                        <label htmlFor="file-input1">
                                            Drag 'n' drop some files here
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[99%] h-[12%]   items-center justify-end">
                            <Button
                                variant="outlined"
                                style={{ backgroundColor: "#0ab39c", font: "bold", fontFamily: "poppins", color: "#fff", borderRadius: "rounded", height: "50%", width: "13%" }}
                                onClick={updatePodcast}
                            >
                                {isLoading ? <span className='w-[50%] mx-auto flex justify-between items-center'>
                                    <svg aria-hidden="true" className="mr-2 w-5  h-8 t w-[10%]   ext-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </span> : <span>Update</span>}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[32%]  font-sans  h-[60%] md:h-[90%] ">
                <div className="w-[100%] h-[100%] flex flex-col space-y-8 mx-auto">
                    {sidebarFormDivs.map((div, index) => (
                        <div className={getDivClass(index).toString()} key={index}>
                            <div className="border border-[0.1px]  border-[#32383e]    border-x-0 border-t-0">
                                <p className="p-3">{div.title}</p>
                            </div>
                            <div className="w-[95%] flex flex-col h-[60%] space-y-4 mx-auto">
                                {div.inputs.map((input, indexx) => (
                                    <div
                                        className="flex flex-col h-[70%] md:h-[78%] space-y-7"
                                        key={index}
                                    >
                                        <div className="flex h-[10%]">
                                            <h1 className="text-[0.90rem] text-[#7c7f90]">
                                                {input.label}
                                            </h1>
                                        </div>
                                        {getInput(input, input.label, indexx, index, div)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex w-[99%] h-[16%] block md:hidden   items-center justify-end">
                        <Button
                            variant="outlined"
                            style={{ backgroundColor: "#0ab39c", font: "bold", fontFamily: "poppins", color: "#fff", borderRadius: "rounded", height: "50%", width: "13%" }}
                            onClick={updatePodcast}
                        >
                            {isLoading ? <span className='w-[50%] mx-auto flex justify-between items-center'>
                                <svg aria-hidden="true" className="mr-2 w-5  h-8 t w-[10%]   ext-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </span> : <span>Update</span>}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateForm;
