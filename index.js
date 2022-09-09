import { cricketCaptain } from "./cricketCaptain.js";

const cricketCountryCaptain = cricketCaptain.map((item) => {
  const country = item["country"];
  const testCaptainName = item["testCaptain"];
  const odiCaptainName = item["odiCaptain"];
  const t20CaptainName = item["t20Captain"];

  const iccTestRanking = item["iccTestRank"];
  const iccOdiRanking = item["iccOdiRank"];
  const iccT20Ranking = item["iccT20Rank"];

  const cricketCountryCaptainDetails =
    country +
    " Ranking In (Test, Odi, T20): " +
    "(" +
    iccTestRanking +
    "," +
    iccOdiRanking +
    "," +
    iccT20Ranking +
    "," +
    ")" +
    "." +
    " Test Captain: " +
    testCaptainName +
    "." +
    " Odi Captain: " +
    odiCaptainName +
    "." +
    " T20 Captain: " +
    t20CaptainName +
    ".";
  console.log(cricketCountryCaptainDetails);
});
