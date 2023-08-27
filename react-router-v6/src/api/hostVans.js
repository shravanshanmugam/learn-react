const API_URL = "http://localhost:8080/api";
async function get(path) {
  const response = await fetch(API_URL + path);
  console.log("response", response);
  if (!response.ok) {
    throw {
      message: "Something went wrong",
      status: response.status,
      statusText: response.statusText,
    };
  }
  const data = await response.json();
  console.log("data", data);
  return data;
}
export async function getAllHostVans() {
  console.log("get all host vans API");
  return await get("/host/vans");
}

export async function getHostVanById(id) {
  console.log("get host van by id API");
  return await get(`/host/vans/${id}`);
}
