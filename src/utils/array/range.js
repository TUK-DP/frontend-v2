// start => 시작하는 숫자
// end => 끝나는 숫자 (없으면 start가 끝나는 숫자가 됨) end 는 배열에 포함하지 않음
// ex) range(5) => [0, 1, 2, 3, 4]
// ex) range(3, 6) => [3, 4, 5]
export const range = (start, end) => {
  let _start = 0;
  let length;
  if (!end) {
    length = start;
  }

  if (end) {
    _start = start;
    length = end - start;
  }

  return Array.from({ length }, (_, i) => _start + i);
};
