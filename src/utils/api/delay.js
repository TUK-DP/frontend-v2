export const delay = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

// promise 요청의 응답을 최소 milliseconds 만큼 지연시키는 함수
// 응답이 와도 milliseconds 지난 후에 응답을 반환한다.
export const delayFetch = async (fetcher, milliseconds) => {
  const responseList = await Promise.allSettled([delay(milliseconds), fetcher]);

  if (responseList[1].status === "rejected") {
    throw responseList[1].reason;
  }

  return responseList[1].value;
};
