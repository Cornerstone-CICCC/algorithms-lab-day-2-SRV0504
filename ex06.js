// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

const getQueryParams = url =>
    Object.fromEntries(new URL(url).searchParams.entries())



console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }