import { Loader } from 'lucide-react'

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100dvh-220px)] gap-4 bg-white rounded-b-md rounded-r-md border border-gray-200 ">
      <Loader
        className="text-primary animate-spin spin-5s"
        size={40}
        style={{ animationDuration: '3s' }}
      />
      <p className="text-primary">로딩중</p>
    </div>
  )
}
