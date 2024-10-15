// Select the image element where the random dog image will be displayed
const imageEl = document.querySelector("#doggoImage");

// Asynchronous function to fetch a random dog image
async function getData() {
  const url = "https://dog.ceo/api/breeds/image/random"; // API endpoint for random dog images

  try {
    // Fetch the data from the API
    const response = await fetch(url);

    // Check if the response is not OK (status not in the 200–299 range)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`); // Throw error if request fails
    }

    // Parse the response body as JSON
    const json = await response.json();

    // Update the image element's source to the fetched image URL
    imageEl.src = json.message;
  } catch (error) {
    // Log any error that occurs during the fetch or parsing process
    console.log(error.message);
  }
}

// Call the function to fetch and display the dog image
getData();
