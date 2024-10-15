imageEl = document.querySelector("#doggoImage");

async function getData() {
  const url = "https://dog.ceo/api/breeds/image/random";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    imageEl.src = json.message;
  } catch (error) {
    console.log(error.message);
  }
}

getData();
