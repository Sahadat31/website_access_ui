import IssueItem from "./IssueItem";

const IssueList = ({ issues }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="font-medium text-gray-700 mb-4">Issues Found ({issues.length})</h3>
    {issues.map((issue) => (
      <IssueItem key={issue.id} issue={issue} />
    ))}
  </div>
);

export default IssueList;
