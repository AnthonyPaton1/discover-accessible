"use client";
import { useState, useEffect } from "react";
import React from "react";
import bookmarkProperty from "@/app/actions/BookmarkProperty";
import checkBookmarkStatus from "@/app/actions/checkBookmarkStatus";
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";

import { useSession } from "next-auth/react";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setisBookmarked] = useState(false);
  const [loading, setisLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setisLoading(false);
      return;
    }

    checkBookmarkStatus(property._id).then((res) => {
      if (res.error) toast.error(res.error);
      if (res.isBookmarked) setisBookmarked(res.isBookmarked);
      setisLoading(false);
    });
  }, [property._id, userId, checkBookmarkStatus]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to be signed in to bookmark a venue");
    }

    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error(res.error);
      setisBookmarked(res.isBookmarked);
      toast.success(res.message);
    });
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return isBookmarked ? (
    <button
      className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
      onClick={handleClick}
    >
      <FaBookmark className=" mr-2"></FaBookmark> Remove bookmark
    </button>
  ) : (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
      onClick={handleClick}
    >
      <FaBookmark className=" mr-2"></FaBookmark> Bookmark Venue
    </button>
  );
};

export default BookmarkButton;
