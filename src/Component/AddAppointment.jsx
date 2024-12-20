import React from "react";
import { BiCalendarPlus } from "react-icons/bi";

import { useState } from "react";

export const AddAppointment = () => {
  const [toggleform, settoggleform] = useState(true);

  return (
    <>
      <div
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${
          toggleform ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <button onClick={() => settoggleform(!toggleform)}>
          <BiCalendarPlus className="inline-block align-text-top" />Click here to Add
          Appointment
        </button>

        {toggleform ? null : (
          <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
            {/* Owner Name */}
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="ownerName"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Owner Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="ownerName"
                  id="ownerName"
                  className="max-w-lg block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 sm:max-w-xs sm:text-sm border-gray-300 bg-gray-100 text-gray-900 rounded-md"
                />
              </div>
            </div>

            {/* Pet Name */}
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="petName"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Pet Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="petName"
                  id="petName"
                  className="max-w-lg block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 sm:max-w-xs sm:text-sm border-gray-300 bg-gray-100 text-gray-900 rounded-md"
                />
              </div>
            </div>

            {/* Appointment Date */}
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="aptDate"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Apt Date
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="date"
                  name="aptDate"
                  id="aptDate"
                  className="max-w-lg block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 sm:max-w-xs sm:text-sm border-gray-300 bg-gray-100 text-gray-900 rounded-md"
                />
              </div>
            </div>

            {/* Appointment Time */}
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="aptTime"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Apt Time
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="time"
                  name="aptTime"
                  id="aptTime"
                  className="max-w-lg block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 sm:max-w-xs sm:text-sm border-gray-300 bg-gray-100 text-gray-900 rounded-md"
                />
              </div>
            </div>

            {/* Appointment Notes */}
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="aptNotes"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Appointment Notes
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="aptNotes"
                  name="aptNotes"
                  rows="3"
                  className="shadow-sm focus:ring-blue-400 focus:border-blue-400 mt-1 block w-full sm:text-sm border-gray-300 bg-gray-100 text-gray-900 rounded-md"
                  placeholder="Detailed comments about the condition"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
