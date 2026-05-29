import { getStore } from "@netlify/blobs";

export default async () => {
  const store = getStore("counter");
  const data = await store.get("visits", { type: "json" });
  const count = (data && data.value) || 0;
  const newCount = count + 1;
  await store.set("visits", { value: newCount });

  return new Response(JSON.stringify({ value: newCount }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
