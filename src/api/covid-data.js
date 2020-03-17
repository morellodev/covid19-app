export async function getCovidData() {
  const data = await fetch("/api/data", {
    mode: "no-cors"
  });

  return await data.json();
}
