/* eslint-disable react/prop-types */


const DeleteConfirmBox = ({ onDelete, onCancel ,className}) => {



  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ` + `${className}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
        <p className="mb-4">Do you really want to delete this item?</p>
        <div className="space-x-4">
          <button
            onClick={onDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Yes, Delete
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmBox;