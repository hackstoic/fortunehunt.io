import React from "react"

const LoadingSpinner = ({ size = "medium", text = "加载中..." }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-8 h-8", 
    large: "w-12 h-12"
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        {/* Spinning ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-accent-500 rounded-full animate-spin"></div>
        {/* Inner glow effect */}
        <div className="absolute inset-2 bg-gradient-to-r from-accent-400 to-success-400 rounded-full opacity-20 animate-pulse"></div>
      </div>
      {text && (
        <p className="mt-4 text-sm text-primary-600 animate-pulse">
          {text}
        </p>
      )}
    </div>
  )
}

export default LoadingSpinner