import React from "react";
import eventImage from "../../assets/people-img3.png";
import meetingImage from "../../assets/people-img4.png";
import { CalendarDays } from "lucide-react";

const ProgramsEvents = () => {
  const upcomingEvents = [
    {
      date: "June 20th, 2025",
      title: "General Stakeholder Meeting",
      description:
        "Annual general meeting with stakeholders scheduled to hold on 20th of June 2025.",
      image: meetingImage,
    },
    {
      date: "June 20th, 2025",
      title: "General Stakeholder Meeting",
      description:
        "Annual general meeting with stakeholders scheduled to hold on 20th of June 2025.",
      image: meetingImage,
    },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-white rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-4">
        Programs & Events
      </h2>
      <p className="text-center text-gray-600 mb-4 sm:mb-6">
        Upcoming events and past events
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Past Event */}
        <div className="relative w-full mb-12 md:mb-24 lg:mb-0">
          <img
            src={eventImage}
            alt="Past Event"
            className="rounded-lg lg:max-w-[750px] w-full  h-auto object-cover"
          />
          <div className="w-[85%] sm:w-3/4 md:w-1/2 mx-auto relative lg:mt-4 xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-mt-16 z-10 p-3 sm:p-4 border rounded-lg shadow-md bg-lightGrey">
            <div className="flex items-center mb-2">
              <CalendarDays size={18} className="mr-2" />
              <span className="font-semibold text-sm sm:text-base">
                Feb 20, 2024
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold ">
              Students Annual Conference
            </h3>
            <p className="text-darkGrey text-sm sm:text-base">
              Post graduate and undergraduate program organized by SCC, year
              2024
            </p>
            <button className="mt-3 sm:mt-4  text-red py-1.5 sm:py-2 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold hover:underline">
              Read More
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="w-full">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Upcoming Events
          </h3>
          <div className="space-y-4 sm:space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-4"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-lg object-cover w-full sm:w-2/5 lg:w-full xl:w-2/5 h-auto"
                />
                <div className="w-full sm:w-3/5 lg:w-full xl:w-3/5">
                  <div className="flex items-center text-gray-600 mb-1">
                    <CalendarDays size={16} className="mr-2" />
                    <span className="font-medium text-sm sm:text-base">
                      {event.date}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {event.description}
                  </p>
                  <a
                    href="#"
                    className="text-red font-medium hover:underline mt-1 block text-sm sm:text-base"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsEvents;
