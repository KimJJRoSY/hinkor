export default function useWord() {
  const getBackgroundColors = (position: string) => {
    if (position === 'noun_m') return 'bg-[#ABD8F5]'
    else if (position === 'noun_f') return 'bg-[#FF9595]'
    else if (position === 'verb_i') return 'bg-[#FEE99D]'
    else if (position === 'verb_t') return 'bg-[#FFB200]'
    else if (position === 'adj') return 'bg-[#A5D993]'
    else if (position === 'adv') return 'bg-[#D9D9D9]'
    else return 'bg-[#C59BFF]'
  }
  const getPosition = (position: string) => {
    if (position === 'noun_m') return 'n'
    else if (position === 'noun_f') return 'fn'
    else if (position === 'verb_i') return 'vi'
    else if (position === 'verb_t') return 'vt'
    else if (position === 'adj') return 'a'
    else if (position === 'adv') return 'ad'
    else return '정보없음'
  }
  const onSpeak = (word: string) => {
    const utter = new SpeechSynthesisUtterance(word)
    utter.lang = 'hi-IN'
    speechSynthesis.speak(utter)
  }
  return {
    getBackgroundColors,
    getPosition,
    onSpeak,
  }
}
