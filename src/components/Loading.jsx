import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center">
                 <span className="loading loading-dots loading-lg"></span>
            </div>
        </div>
    );
};

export default Loading;
