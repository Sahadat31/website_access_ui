import HistoryListItem from "./HistoryListItem";

const HistoryList = ({ records }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="font-medium text-gray-700 mb-4">Past Records ({records.length})</h3>
    {records.map((record) => (
      <HistoryListItem key={record._id} record={record} />
    ))}
  </div>
);

export default HistoryList;
