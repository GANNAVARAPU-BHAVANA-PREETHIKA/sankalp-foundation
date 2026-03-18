const BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || "";

export const postData = async (
  endpoint: string,
  data: any,
  isMultipart = false
) => {
  const headers: HeadersInit = isMultipart
    ? {}
    : { "Content-Type": "application/json" };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers,
    body: isMultipart ? data : JSON.stringify(data),
  });

  if (!response.ok) {
    let errorMessage = "Request failed";
    try {
      const errorData = await response.json();
      errorMessage = errorData.error || errorMessage;
    } catch {}
    throw new Error(errorMessage);
  }

  return response.json();
};
