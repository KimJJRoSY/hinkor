interface Props {
  value: number
  current: number
  total: number
}
export default function ProgressBar({ value, current, total }: Props) {
  return (
    <div className="px-4  w-full">
      <p className="text-white text-base">
        {current}/{total}
      </p>
      <div className="w-full h-3 bg-gray-50 rounded ">
        <div
          className="h-full bg-accent rounded transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
