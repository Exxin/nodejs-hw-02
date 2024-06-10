import express from "express";
const index = express();

index.listen(3000, () => console.log("Server running on 3000 PORT"));
