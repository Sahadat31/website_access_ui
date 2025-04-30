const ScanForm = ({ url, setUrl, onSubmit }) => (
    <form onSubmit={onSubmit} className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Scan new URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={!url}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Scan
      </button>
    </form>
  );
  
  export default ScanForm;
  