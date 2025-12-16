import { RefObject } from 'react'

interface Props {
  inputRef: RefObject<HTMLInputElement | null>
  onChange: (value: string) => void
}

export default function SearchBar({ inputRef, onChange }: Props) {
  return (
    <input
      ref={inputRef}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white w-full p-2 rounded-md border border-gray-300 outline-none focus:border-primary focus:ring-primary focus:ring-2"
      type="text"
      placeholder="검색어를 입력해 주세요"
    />
  )
}
