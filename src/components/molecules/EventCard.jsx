import React from "react";
import Card from "../atoms/Card";
import Heading from "../atoms/Heading";

const EventCard = ({ title, date, time, location }) => {
  return (
    <Card className="border-l-4 border-green-500">
      <div className="flex items-start">
        <div className="bg-gray-100 rounded-lg p-2 mr-3 text-center min-w-[60px]">
          <div className="font-bold text-blue-600">{date.split(" ")[0]}</div>
          <div className="text-sm">{date.split(" ")[1]}</div>
        </div>
        <div>
          <Heading level={4} className="mb-1">
            {title}
          </Heading>
          <div className="flex items-center text-gray-600 text-sm mb-1">
            <span className="mr-3">⏰ {time}</span>
            <span>📍 {location}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
