interface Props {
  option: string
  onChoose: (answer: string) => void
}

export default function AnswerItem({ option, onChoose }: Props) {
  return (
    <button className="flex gap-3 cursor-pointer" onClick={() => onChoose(option)}>
      <input type="checkbox" name="" id={option} className="cursor-pointer" />
      <p className="bg-white min-w-40 max-w-3/4 rounded-md border border-gray-100 p-4 hover:bg-gray-300 hover:translate-0.5">
        {option}
      </p>
    </button>
  )
}
