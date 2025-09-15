// ambil data project
export const getProjects = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/project`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// ambil data project berdasarkan id
export const getProjectById = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/project/${id}`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.log("errorBody", errorBody);

      throw new Error(`Failed to fetch data: ${errorBody}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
