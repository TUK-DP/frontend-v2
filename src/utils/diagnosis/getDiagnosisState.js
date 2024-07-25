const DIAGNOSIS_STATE = [
  {
    text: "치매 안전",
    textColor: "text-[#97D8DD]",
    backgroundColor: "bg-[#97D8DD]",
    color: "#97D8DD",
  },
  {
    text: "치매 의심",
    textColor: "text-[#FFD52F]",
    backgroundColor: "bg-[#FFD52F]",
    color: "#FFD52F",
  },
  {
    text: "치매 위험",
    textColor: "text-[#FC5C50]",
    backgroundColor: "bg-[#FC5C50]",
    color: "#FC5C50",
  },
];

// 안전, 의심, 위험
// 0 ~ 7.9 : 치매안전
// 8 ~ 14.9 : 치매의심
// 15 ~ 30 : 치매 위험
export const getDiagnosisState = (number) => {
  if (number < 8) {
    return DIAGNOSIS_STATE[0];
  }

  if (number < 15) {
    return DIAGNOSIS_STATE[1];
  }

  return DIAGNOSIS_STATE[2];
};
