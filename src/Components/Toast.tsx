import React, { useState } from "react";
interface ToastProps {
    message: string;
    type?: "success" | "error" | "info" | "warning";
    duration?: number;
}

const Toast = (props: ToastProps) => {
    const { message, type = "info", duration = 5000 } = props;
    const [visible, setVisible] = useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
        setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    const toastStyles = {
        success: "bg-black text-green-500 border-green-500",
        error: "bg-black text-red-500 border-red-500",
        info: "bg-blue-100 text-blue-700 border-blue-500",
        warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
    };

    return (
        <div
        className={`fixed z-30 top-16 lg:top-24 mx-auto w-full max-w-sm p-4 rounded-lg border-l-4 shadow-lg
            ${toastStyles[type]} flex items-center space-x-4`}
        >
        <span className="flex-1">{message}</span>
        <button
            onClick={() => setVisible(false)}
            className="text-gray-300 hover:text-gray-400 focus:outline-none"
        >
            ✕
        </button>
        </div>
    );
};

export default Toast;
