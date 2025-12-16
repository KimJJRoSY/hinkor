interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white w-full p-2 rounded-md border border-gray-300 outline-none focus:border-primary focus:ring-primary focus:ring-2"
      type="text"
      placeholder="검색어를 입력해 주세요"
    />
  )
}
