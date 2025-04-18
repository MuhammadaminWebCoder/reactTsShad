import { Loader2 } from "lucide-react"

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Loader2 className="h-16 w-16 animate-spin text-blue-500" />
      <p className="mt-4 font-semibold text-2xl">Loading...</p>
    </div>
  )
}

export default Loading
