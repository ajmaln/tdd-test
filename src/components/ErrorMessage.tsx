

const ErrorMessage = ({ error, onClose }: { error: string, onClose: () => void }) =>
    <div className="animate-bounce-once mt-4 p-4 bg-red-50 rounded-lg border border-red-200 relative">
        <div className="flex items-center space-x-3">
            <p className="text-red-700">{error}</p>
        </div>
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-red-400 hover:text-red-600"
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>

export default ErrorMessage