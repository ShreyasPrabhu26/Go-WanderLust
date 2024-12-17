import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
    )
}

export default LoadingSpinner