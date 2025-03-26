import React from "react";

const LogoutModal = ({ show, onClose, onConfirm }) => {
    if (!show) {
    return null;
}

return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Are you sure you want to log out?
        </h2>
        <div className="flex justify-end gap-4">
        <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium transition-all duration-200">
            Cancel
        </button>
            <button
            onClick={onConfirm}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold transition-all duration-200 shadow-md">
            Log Out
        </button>
        </div>
    </div>
    </div>
);
};

export default LogoutModal;