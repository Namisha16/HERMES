const https = require("https");
const options = {
  hostname: "www.hermes.com",
  path: "/us/en/product/chaine-d-ancre-verso-bracelet-large-model-H125409Bv00150/",
  headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9"
  }
};
https.get(options, (res) => {
  console.log("Status:", res.statusCode, "Location:", res.headers.location);
  let body = "";
  res.on("data", chunk => body += chunk);
  res.on("end", () => {
    console.log("Length:", body.length);
    const m = body.match(/assets\.hermes\.com\/is\/image\/hermesproduct\/[^\s"'\\]+/g);
    console.log("Assets:", m ? [...new Set(m)].slice(0, 10) : "none");
    if (body.includes("og:image")) {
      const og = body.match(/content="([^"]*assets\.hermes\.com[^"]*)"/);
      console.log("OG Image:", og ? og[1] : "none");
    }
  });
}).on("error", console.error);
