const API_URL = "http://localhost:8080/api";
async function post(path, formData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const response = await fetch(API_URL + path, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw {
      message: data.message,
      status: response.status,
      statusText: response.statusText,
    };
  }
  return data;
}
export async function loginUser(creds) {
  return post("/login", creds);
}
