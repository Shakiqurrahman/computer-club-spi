import React from 'react';

const NoticeCard = ({notice}) => {
    console.log(notice);
    return (
        <>
      {notice && (
        <div className="rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full h-[300px]" src={notice?.thumbnail} alt={notice.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{notice.notice_name}</div>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Date: {notice.date}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Time: {notice.time}
            </span>
          </div>
        </div>
      )}
    </>
    );
};

export default NoticeCard;