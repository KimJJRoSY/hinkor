interface Props {
  value: number
}
export default function ProgressBar({ value }: Props) {
  return (
    <div className="w-full h-3 bg-gray-50 rounded ">
      <div
        className="h-full bg-accent rounded transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
