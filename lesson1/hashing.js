const crypto = require("crypto");

const data = "This is my data";

const hash = crypto.createHash("sha256").update(data).digest("hex");

console.log("Hashed data:", hash);