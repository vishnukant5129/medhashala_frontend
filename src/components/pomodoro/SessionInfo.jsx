const SessionInfo = ({ mode, sessionCount }) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold capitalize">
                {mode.replace("-", " ")}
            </h2>

            <p className="text-gray-500 mt-2">
                Session #{sessionCount}
            </p>
        </div>
    );
};

export default SessionInfo;