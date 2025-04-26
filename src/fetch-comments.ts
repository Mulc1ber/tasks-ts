interface DataComments {
  id: number;
  email: string;
}

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = async (url: string): Promise<DataComments[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: DataComments[] = await response.json();

  return data;
};

getData(COMMENTS_URL)
  .then((data) => {
    data.forEach(({ id, email }) => {
      console.log(`ID: ${id}, Email: ${email}`);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
