import React from "react";
import booklistData from "../../utility/booklist.json";
import BookListRegulation from "./BookListRegulation";

const AllBookList = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center text-secondary">
        Diploma Booklist
      </h1>
      <div className="grid grid-cols-2 gap-6 mt-20">
        <div>
          <h2 className="text-2xl font-semibold text-center text-black">
            2016 Regulation
          </h2>
          <BookListRegulation data={booklistData} regulation="2016" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-center text-black">
            2022 Regulation
          </h2>
          <BookListRegulation data={booklistData} regulation="2022" />
        </div>
      </div>
    </div>
  );
};

export default AllBookList;
