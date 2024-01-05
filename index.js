const express = require("express");
const app = express();
const port = 3000;
const { generateToken04 } = require("./server/zegoServerAssistant");

app.get("/api/access_token", (req, res) => {
  const appID = 1895976251;
  const serverSecret = "791989cf7fff77dc11d56cbeba41b1ff";
  const userId = req.query.userID;
  const effectiveTimeInSeconds = 3600;
  const payload = "";
  // Build token
  const token = generateToken04(
    appID,
    userId,
    serverSecret,
    effectiveTimeInSeconds,
    payload
  );
  // console.log("token:", token);
  // res.json({ appID, serverSecret, userId, effectiveTimeInSeconds, payload });
  res.json({ token });
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`);
});
