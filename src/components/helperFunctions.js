function formatDate(date) {
  if (date === "") return;
  return new Date(date + "-1").toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
  });
}

export { formatDate };
