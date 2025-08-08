export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-black/60 backdrop-blur-sm">
      <div className="flex space-x-2">
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.1s]"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.3s]"></span>
      </div>
    </div>
  );
}
