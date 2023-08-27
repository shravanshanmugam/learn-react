const API_URL = "http://localhost:8080/api";
async function get(path) {
  const response = await fetch(API_URL + path);
  if (!response.ok) {
    throw {
      message: "Something went wrong",
      status: response.status,
      statusText: response.statusText,
    };
  }
  const data = await response.json();
  return data;
}
export async function getAllVans() {
  console.log("get all vans API");
  return await get("/vans");
}

export async function getVanById({ params }) {
  console.log("get van by id API");
  return await get(`/vans/${params.id}`);
}

export async function getAllHostVans() {
  console.log("get all host vans API");
  return await get("/host/vans");
}

export async function getHostVanById({ params }) {
  console.log("get host van by id API");
  return await get(`/host/vans/${params.id}`);
}
