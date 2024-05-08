import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { Bookmarks as BookmarksT, load } from "../src/bookmarksStore";
import NavBar from "../src/components/NavBar";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarksT>({});

  useEffect(() => {
    setBookmarks(load());
  }, []);

  return (
    <div className="prose mx-6 py-6 flex flex-col space-y-4 h-full sm:mx-auto">
      <NavBar />
      <h2 className="relative text-center border rounded-lg p-2 m-0">Bookmarks</h2>
      <div className="border rounded-lg p-4 flex-grow-1 h-fit overflow-auto space-y-4">
        {/* TODO: sort the bookmarks by quote date */}
        {Object.keys(bookmarks).map((bookmark) => {
          const [month, date] = bookmark.split(" ");
          return (
            <div key={bookmark}>
              <Link as={NextLink} href={`/${month}/${date}`}>
                {bookmark}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
