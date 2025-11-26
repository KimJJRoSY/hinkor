import fs from 'fs'

const msgFile = process.argv[2]
const msg = fs.readFileSync(msgFile, 'utf-8').trim()

const commitRegex = /^(feat|fix|docs|style|refactor|test|chore)(\(#\d+\)): .+$/

if (!commitRegex.test(msg)) {
  console.error(`
❌ 커밋 메시지 규칙 위반!

형식:
  작업타입(#이슈번호): 작업 내용

예시:
  feat(#1): 로그인 로직 추가
  fix(#2): API 오류 수정
`)

  process.exit(1) // 실패 → 커밋 중단
}
