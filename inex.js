/**
 * An async function
 * Get an article by its ID
 * @param  {Integer} id The article ID
 */
async function getArticleByIDAsync(id) {
  // Get the post data
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    // If the call failed, throw an error
    if (!response.ok) {
      throw "Something went wrong.";
    }

    // Otherwise, get the post JSON
    let data = await response.json();

    // Log the data to the console
    console.log(data);
  } catch (error) {
    console.warn(error);
  }
}

getArticleByIDAsync(9999);
