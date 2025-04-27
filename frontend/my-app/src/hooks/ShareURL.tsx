import { BASE_URL } from "./analyzeText";

interface IShareResult {
  score: number;
  recommendation: string;
  summary: string;
  friendName: string;
  createdAt: string;
  text: string;
}

export const ShareURL = async (uuid: string): Promise<IShareResult> => {
  try {
    const res = await fetch(`${BASE_URL}/api/result/${uuid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("서버오류:", errorText);
      throw new Error("서버 오류");
    }

    return await res.json();
  } catch (err) {
    console.error("요청 실패:", err);
    throw err;
  }
};
