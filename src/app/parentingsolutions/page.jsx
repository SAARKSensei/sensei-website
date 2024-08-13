"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import thumbsUp from "@/Images/thumbs-up.svg?url";
import eye from "@/Images/eye.svg?url";
import ParentIcon from "@/Images/parenticon.svg?url";

import HeartIcon from "@/Images/heartvideoicon.svg?url";
import Bookmark from "@/Images/bookmark.svg?url";
import Shareicon from "@/Images/shareicon.svg?url";
import WhatsappDivImage from "@/Images/whatsappdivimage.png";
import Emblem from "@/Images/emblem.svg?url";
import NEPImage from "@/Images/nepimage.png";
import WhatsAppIcon from "@/Images/whatsapp.svg";
import Background from "@/components/miniComps/BackGround.jsx";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { tags, news, blogsp as blogs } from "@/utils/data";
import addchild from "@/Images/addchild.png";
import childpainting from "@/Images/childpainting.png";
import Banner from "@/components/miniComps/Banner";
const Page = () => {
  const [ytData, setYtData] = useState([]);

  const [searchQuery, setSearchQuery] = useState(["Parenting"]);

  const handleTagSelect = (tag) => {
    if (searchQuery.includes(tag)) {
      setSearchQuery(searchQuery.filter((item) => item !== tag));
    } else {
      setSearchQuery([...searchQuery, tag]);
    }
  };

  const API_URL = "https://youtube-v31.p.rapidapi.com/";

  //call api and store data
  useMemo(async () => {
    const getChannelData = async (channelId) => {
      try {
        const response = await axios.get(`${API_URL}channels`, {
          params: {
            part: "snippet,statistics",
            id: channelId,
            fields:
              "items(kind, id,snippet(title, description, customUrl, publishedAt))",
          },
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_YOUTUBE_RAPID_API_KEY,
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
          },
        });
        return response?.data?.items;
      } catch (error) {
        //console.log(error);
      }
    };
    const getChannelIds = (videos) => {
      const channelIds = videos
        .map((item) => item?.snippet?.channelId)
        .join(",");
      return channelIds;
    };
    const getVideoData = async (videoId) => {
      try {
        const response = await axios.get(`${API_URL}videos`, {
          params: {
            //process.env.NEXT_PUBLIC_YOUTUBE_RAPID_API_KEY,
            part: "snippet,statistics,contentDetails",
            id: videoId,
            fields:
              "items(id,snippet(channelId,channelTitle,publishedAt,thumbnails,title),contentDetails/duration,statistics(viewCount,likeCount))",
          },
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_YOUTUBE_RAPID_API_KEY,
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
          },
        });
        return response?.data?.items;
      } catch (error) {
        console.log(error);
      }
    };
    const getSearchData = async () => {
      try {
        const q = searchQuery.join("|");
        const response = await axios.get(`${API_URL}search`, {
          params: {
            part: "id",
            maxResults: 20,
            q,
            relevanceLanguage: "en",
            type: "video",
            fields: "items(id(videoId))",
          },
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_YOUTUBE_RAPID_API_KEY,
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
          },
        });
        return response.data.items.map((item) => item.id.videoId).join(",");
      } catch (error) {
        //console.log(error);
      }
    };
    const ids = await getSearchData();
    // console.log(ids);
    if (ids?.length === 0) return;

    const videos = await getVideoData(ids);
    // console.log("vd", videos);
    const Ids = getChannelIds(videos);

    const channelDetails = await getChannelData(Ids);

    // console.log("cd", channelDetails);
    const vd = await videos.map((video, index) => {
      return {
        ...video,
        snippet: {
          ...video.snippet,
          thumbnails:
            video.snippet.thumbnails?.maxres ||
            video.snippet.thumbnails?.standard ||
            video.snippet.thumbnails?.high ||
            video.snippet.thumbnails?.medium ||
            video.snippet.thumbnails?.default,
        },
        channel: {
          thumbnail: channelDetails[index]?.snippet?.thumbnails?.default.url,
        },
      };
    });
    // console.log("vd", vd);
    setYtData(vd);
  }, [searchQuery]);
  function formatCompactNumber(number) {
    if (number < 1000) {
      return number;
    } else if (number >= 1000 && number < 1000000) {
      return (number / 1000).toFixed(1) + "K";
    } else if (number >= 1000000 && number < 1000000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000000000 && number < 1000000000000) {
      return (number / 1000000000).toFixed(1) + "B";
    } else if (number >= 1000000000000 && number < 1000000000000000) {
      return (number / 1000000000000).toFixed(1) + "T";
    }
  }

  const currentUserData = useSelector((state) => state?.currentUser?.data);

  return (
    <div className="my-10 flex h-screen w-screen flex-col gap-10 overflow-x-hidden">
      <Background />
      <Banner />
      <div className="container mx-auto flex h-fit w-full flex-col gap-10 px-4 lg:flex-row xl:px-0">
        <div className="flex h-full w-full flex-col items-start gap-8 md:justify-between xl:max-h-[629px] xl:flex-wrap">
          <div className="flex w-full">
            <Image
              src={ParentIcon}
              alt="parentIcon"
              className="rounded-full shadow-lg"
            />
            <div className="ml-5 flex flex-col justify-center gap-2">
              <p className="font-Nunito text-xl font-bold md:text-3xl">
                {currentUserData?.name}
              </p>
              <p className="textlg font-Nunito font-normal md:text-xl">
                {currentUserData?.phoneNumber}
              </p>
              <p className="textlg font-Nunito font-normal md:text-xl">
                {currentUserData?.email}
              </p>
            </div>
            {/* <Link href={"/parent/account"} className="cursor-pointer ml-auto mb-auto">
              <Image
                src={editl}
                sizes="auto"
                alt="Edit"
              />
            </Link> */}
          </div>
          <div className="relative flex w-full flex-col justify-around rounded-2xl p-4 shadow-lg sm:h-[396px] sm:max-h-[calc(100vw*396/736)] md:gap-4 xl:p-10">
            <Image
              src={childpainting}
              alt="childpainting"
              fill
              sizes="auto"
              className="absolute left-0 top-0 -z-[1] rounded-2xl object-cover"
            />
            <h1 className="text-left font-Nunito text-lg font-semibold text-white min-[1300px]:text-2xl">
              This Weekend
            </h1>
            <div>
              <span className="text-left font-Nunito text-2xl font-bold text-white md:text-[42px] md:leading-[42px]">
                Teach your child how to make responsible decisions and &nbsp;
              </span>
              <span className="text-left font-Nunito text-2xl font-normal text-white md:pt-4 md:text-[42px]">
                Social Emotional Learning
              </span>
            </div>
            <Link
              href="/funactivity"
              className="m-4 ml-0 flex h-fit w-fit cursor-pointer items-center rounded-[40px] bg-white p-4 font-Nunito text-base font-bold text-black md:mt-10 md:p-8 md:py-6 md:text-xl"
            >
              Try Our Fun Activities
            </Link>
          </div>
        </div>
        <div className="relative h-fit max-w-[492px] rounded-2xl bg-gradient-to-t from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] shadow-lg lg:h-[629px] lg:min-w-[492px]">
          <h1 className="p-4 text-left font-Nunito text-2xl font-bold text-white md:text-[42px] md:leading-[42px]">
            Prioritize your child&apos;s emotional health today!{" "}
          </h1>
          {/* <Link
            href={"/childdetails"}
            className="w-fit relative z-10 mx-4 h-[42px] md:mx-10 p-4 py-6 md:p-8 flex items-center rounded-[40px] bg-white text-black text-base md:text-xl font-Nunito font-bold cursor-pointer"
          >
            Enroll your child
          </Link> */}
          <Link
            href={"/survey"}
            className="mx-4 flex h-fit w-fit cursor-pointer items-center rounded-[40px] bg-white p-4 font-Nunito text-base font-bold text-black md:p-8 md:py-6 md:text-xl"
          >
            Take a FREE test{" "}
          </Link>
          <Image
            src={addchild}
            alt="addchild"
            sizes="auto"
            className="-top-[82px] right-2 -z-[0] w-full object-contain lg:relative"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-4 px-4 font-Nunito text-base font-semibold xl:px-0">
        <h1 className="w-fit bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] bg-clip-text text-left font-Nunito text-2xl font-bold leading-normal text-transparent xl:text-[42px] xl:font-extrabold">
          For Parents{" "}
        </h1>
        <div className="flex w-full gap-4 overflow-x-scroll whitespace-nowrap pb-3">
          {tags &&
            tags.map((tag, index) => (
              <div
                key={index}
                onClick={() => handleTagSelect(tag)}
                className={`border-2 ${
                  searchQuery.includes(tag)
                    ? "bg-[#FF8B13] text-white"
                    : "border-[#2C3D68] text-[#2C3D68]"
                } cursor-pointer rounded-[18px] px-3 py-2.5 font-Nunito text-base font-semibold`}
              >
                {tag}
              </div>
            ))}
        </div>
        <div className="grid w-full grid-flow-col grid-rows-1 gap-4 overflow-y-scroll whitespace-nowrap md:gap-10">
          {ytData &&
            ytData.map((data, index) => (
              <div
                className="h-fit w-[300px] sm:h-[310px] sm:w-[400px]"
                key={index}
              >
                <Link
                  target="_blank"
                  href={`https://www.youtube.com/watch?v=${data.id}`}
                  className="relative block h-[200px] w-full sm:h-[258px]"
                >
                  <Image
                    src={data.snippet.thumbnails.url}
                    alt={data.snippet.title}
                    fill
                    sizes="auto"
                    className="rounded-xl object-cover"
                  />
                  <div className="absolute bottom-0 flex h-[51px] w-full items-center justify-between rounded-b-xl bg-[#FF8B13] px-2">
                    <p className="whitespace-normal font-Nunito text-base font-semibold text-white">
                      {`${data.snippet.title.slice(0, 30)}...`}
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="flex h-[35px] w-[35px] items-center justify-between rounded-[100%] bg-white">
                        <Image
                          src={HeartIcon}
                          alt="heartIcon"
                          sizes="auto"
                          className="translate-x-[6px]"
                        />
                      </p>
                      <p className="flex h-[35px] w-[35px] items-center justify-between rounded-[100%] bg-white">
                        <Image
                          src={Bookmark}
                          alt="bookmark"
                          sizes="auto"
                          className="translate-x-[6px]"
                        />
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="flex items-center gap-2 py-2">
                  {data.channel?.thumbnail && (
                    <Image
                      src={data.channel?.thumbnail}
                      alt="ytuser"
                      sizes="auto"
                      width={30}
                      height={30}
                      className="rounded-full object-cover"
                    />
                  )}
                  <p className="max-w-[200px] overflow-hidden text-black">
                    {data.snippet.channelTitle}
                  </p>
                  <Image
                    src={thumbsUp}
                    alt="thumbsUp"
                    sizes="auto"
                    className="ml-auto pb-1"
                  />
                  <span className="text-black">
                    {formatCompactNumber(data.statistics.likeCount)}
                  </span>
                  <Image src={eye} alt="eye" sizes="auto" className="" />
                  <span className="text-black">
                    {formatCompactNumber(data.statistics.viewCount)}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-5 px-4 md:flex-row xl:px-0">
        <div className="relative h-[300px] w-full rounded-[20px] lg:h-[278px]">
          <div className="absolute z-0 h-full w-full">
            <Image
              src={WhatsappDivImage}
              alt="whatsapp div image"
              sizes="auto"
              className="h-full w-full"
            />
          </div>
          <div className="absolute z-10 flex h-full flex-col justify-between p-5 lg:p-10">
            <p className="flex w-max flex-col font-Nunito text-white">
              <span className="text-3xl font-bold sm:text-4xl">
                Dealing with
              </span>
              <span className="text-2xl font-semibold italic sm:text-3xl">
                parenting challenges?
              </span>
              <span className="text-3xl font-bold sm:text-4xl">
                Have questions?
              </span>
            </p>
            <div className="flex w-full flex-wrap gap-2">
              <Link
                href={"https://chat.whatsapp.com/IF6DAynLe9BBXZiszV7Dfw"}
                target="_blank"
                className="flex w-52 items-center justify-center gap-2.5 rounded-[30px] bg-white px-6 py-2"
              >
                <WhatsAppIcon className="text-secondary" />
                <p className="font-Nunito text-lg font-extrabold leading-[18px] tracking-normal text-[#2C3D68]">
                  Chat with us
                </p>
              </Link>
              <Link
                href={"https://whatsapp.com/channel/0029VaY3B4Z8qIzuGlRTwQ0F"}
                target="_blank"
                className="flex w-52 items-center justify-center gap-2.5 rounded-[30px] bg-white px-6 py-2"
              >
                <WhatsAppIcon className="text-secondary" />
                <p className="font-Nunito text-lg font-extrabold leading-[18px] tracking-normal text-[#2C3D68]">
                  Get Updates
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] w-full rounded-[20px] lg:h-[278px]">
          <div className="absolute z-0 h-full w-full">
            <Image
              src={NEPImage}
              alt="NEP image"
              sizes="auto"
              className="h-full w-full"
            />
          </div>
          <div className="absolute z-10 flex h-full w-full items-center justify-between pr-11">
            <div className="flex h-full w-full flex-col justify-between p-5 lg:p-10">
              <p className="flex flex-col font-Nunito text-[#2C3D68]">
                <span className="text-3xl font-bold sm:text-4xl">
                  Take a look at the
                </span>
                <span className="text-2xl font-semibold italic sm:text-3xl">
                  National Education Policy
                </span>
              </p>
              <Link
                href={
                  "https://www.education.gov.in/sites/upload_files/mhrd/files/nep_update/National_Education_Policy_2020_en.pdf"
                }
                target="_blank"
                className="flex h-12 w-28 items-center justify-center rounded-[30px] bg-white px-6 py-2 font-Nunito text-lg font-extrabold leading-[18px] tracking-normal text-[#2C3D68]"
              >
                Explore
              </Link>
            </div>
            <Image src={Emblem} sizes="auto" alt="emblem" />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-4 px-4 font-Nunito text-base font-semibold xl:px-0">
        <h1 className="w-fit bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] bg-clip-text text-left font-Nunito text-2xl font-bold leading-normal text-transparent min-[1300px]:text-[42px] min-[1300px]:font-extrabold">
          Parenting Blogs & News
        </h1>
        <div className="flex flex-wrap gap-8 lg:flex-nowrap">
          <div className="flex flex-grow-[50%] flex-wrap gap-4 md:gap-10">
            {blogs.map((blog) => (
              <Link
                target="_blank"
                href={blog.link}
                key={blog.id}
                className="flex flex-col rounded-lg bg-white shadow-xl sm:w-[364px]"
              >
                <div className="relative mb-2 h-[230px] w-full">
                  <Image
                    src={blog.image}
                    fill
                    sizes="auto"
                    className="rounded-lg object-cover"
                    alt="cardImage"
                  />
                </div>
                <div className="flex w-full flex-col gap-2 px-5">
                  <div className="flex w-full flex-col gap-2">
                    <div className="flex h-[30px] gap-2 border-b-2 border-[#f97316] text-[#2C3D68]">
                      <p className="line-clamp-1">{blog.tagLines}</p>
                      <p className="font-bold">.</p>
                      <p className="whitespace-nowrap">{blog.date}</p>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] bg-clip-text font-Nunito text-xl text-transparent">
                        {blog.title}
                      </h1>
                      <p className="line-clamp-3 text-[#2C3D68]">
                        {blog.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pb-2">
                    {blog?.logo !== "" ? (
                      <Image
                        className="rounded-full object-cover"
                        width={36}
                        height={36}
                        src={blog.logo}
                        sizes="auto"
                        alt="logo"
                      />
                    ) : (
                      <div className="h-[36px] w-[36px] rounded-full bg-slate-200"></div>
                    )}
                    <div>
                      <h1>{blog.blogger}</h1>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex h-[594px] flex-col gap-3 sm:w-[432px]">
            <div className="h-[35px] w-full border-b-4 border-[#f97316]">
              <h1 className="text-xl">Latest NEWS</h1>
            </div>
            {news.map((ns) => (
              <div
                key={ns.id}
                className="flex h-[159px] w-full flex-col gap-5 border-b-2 border-[#f97316]"
              >
                <div className="flex h-[102px] gap-5">
                  <div className="relative h-[102px] w-full rounded-lg sm:w-[185px]">
                    <Image
                      src={ns.image}
                      fill
                      sizes="auto"
                      className="rounded-lg object-cover"
                      alt="Cardimage"
                    />
                  </div>
                  <div className="flex h-[102px] flex-col gap-2">
                    <h1 className="mt-2 line-clamp-2 text-xl text-[#2C3D68]">
                      {ns.title}
                    </h1>
                    <div className="flex items-center gap-3 text-[#2C3D68]">
                      <div className="h-[36px] min-w-[36px] rounded-full bg-slate-100"></div>
                      <p className="line-clamp-1">{ns.blogger}</p>
                    </div>
                  </div>
                </div>
                <div className="flex h-[22px] w-full justify-between text-[#2C3D68]">
                  <div className="flex gap-2">
                    <p>12 mins read</p>
                    <p>.</p>
                    <p>{ns.date || "April 8, 2024"}</p>
                  </div>
                  <div>
                    <Image src={Shareicon} sizes="auto" alt="shareIcon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

//Promo ticket
{
  /* <div className="hidden bg-white w-full h-[198px] md:w-[592px] rounded-lg p-3 shadow-lg">
            <div className="flex grad-bg-2 w-full h-full rounded-lg">
              <div className="w-1/2 md:w-[65%] py-4 px-3 flex flex-col justify-center items-center border-r-[1px] border-dotted relative md:gap-2">
                <div className="flex flex-col font-Nunito font-bold text-base justify-center items-center md:gap-2">
                  <p className="text-[#2C3D68] text-center">
                    Refer a Parent, And Get Discount
                  </p>
                  <p className="text-white">04/10</p>
                </div>
                <div className="bg-white rounded-lg h-16 w-[138px] p-1 flex flex-col justify-center items-center">
                  <p className="font-Nunito font-bold text-sm text-[#2C3D68]">
                    20+ Invite friends
                  </p>
                  <Image src={InviteIcon} alt="invite icons" className="" />
                </div>
                <div className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-white top-0 -right-8 rounded-b-[150px] rounded-l-[150px]"></div>
              </div>
              <div className="w-1/2 md:w-[35%] flex flex-col justify-center items-center gap-5 relative">
                <div className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-white -bottom-8 left-0 rounded-t-[150px] rounded-r-[150px]"></div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-base font-Nunito font-bold text-white">
                    RU684F
                  </p>
                  <p className="text-base font-Nunito font-bold text-yellow-100">
                    Your Invite Code
                  </p>
                </div>
                <div className="w-[129px] h-8 bg-white rounded-lg p-1 text-center font-extrabold font-Nunito text-base">
                  Invite Parents
                </div>
              </div>
            </div>
          </div> */
}
