const fs = require("fs");
const FILE = "/tmp/improv-counter.json";

exports.handler = async () => {
  let count = 0;
  try {
    count = JSON.parse(fs.readFileSync(FILE, "utf8")).value;
  } catch (_) {}
  count++;
  fs.writeFileSync(FILE, JSON.stringify({ value: count }));
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ value: count }),
  };
};
