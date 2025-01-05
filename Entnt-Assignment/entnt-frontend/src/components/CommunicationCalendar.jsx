import { useState } from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useTheme } from "@mui/material";


const CommunicationCalendar = ({ communications, onEdit, onDelete }) => {
  const [date, setDate] = useState(new Date());

  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Communication Calendar</h1>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
        <div className="bg-white shadow-md p-5 rounded-lg">
          <Calendar 
            onChange={handleDateChange} 
            value={date} 
            className="rounded-lg border-blue-400"
          />
        </div>
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Communications on {date.toLocaleDateString()}
          </h2>
          <div className="space-y-4">
            {communications
              .filter(
                (comm) =>
                  new Date(comm.date).toDateString() === date.toDateString()
              )
              .map((comm   /* ,idx*/ ) => (
                <div
                  key={comm.id /*idx */}
                  className="p-4 bg-blue-100 rounded-md shadow-sm hover:shadow-lg transition"
                >
                  <p className="font-medium text-blue-800">
                     {comm.type.name} with {comm.company.name}
                  </p>
                  <p className="text-gray-600 text-sm">{comm.notes}</p>
                  <div className="mt-2 flex gap-2 pl-4">
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() => onEdit(comm)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => onDelete(comm.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            {communications.filter(
              (comm) =>
                new Date(comm.date).toDateString() === date.toDateString()
            ).length === 0 && (
              <p className="text-gray-500">No communications for this date.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
CommunicationCalendar.propTypes = {
  communications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      notes: PropTypes.string,
      //id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired, // Callback for editing a communication
  onDelete: PropTypes.func.isRequired, // Callback for deleting a communication
};


export default CommunicationCalendar;
//export default CommunicationCalendar;
