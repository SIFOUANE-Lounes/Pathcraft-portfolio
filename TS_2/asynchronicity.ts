function simulateApiCall(shouldSucceed: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data received successfully!");
      } else {
        reject(new Error("API call failed!"));
      }
    }, 1000);
  });
}

async function fetchData(shouldSucceed: boolean): Promise<void> {
  console.log("Fetching data...");
  try {
    const result = await simulateApiCall(shouldSucceed);
    console.log("[OK]", result);
  } catch (error) {
    console.error("[KO]", error);
  }
}

fetchData(true)
  .then(() => fetchData(false))
  .then(() => {
    fetchData(true);
    fetchData(false);
  });
