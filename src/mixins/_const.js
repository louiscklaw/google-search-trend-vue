// _const.js

const DEFAULT_HASH = "#helloworld";
const localhost_API = "http://localhost:8082";
const API_BASE_URL =
  "https://us-central1-louislabs-com.cloudfunctions.net/google-trends-crawler";

const Q_DAILY_TRENDS = "dailyTrends";
const Q_INTEREST_OVER_TIME = "interestOverTime";
const Q_INTEREST_BY_REGION = "interestByRegion";
const Q_REAL_TIME_TRENDS = "realTimeTrends";
const Q_RELATED_QUERIES = "relatedQueries";
const Q_RELATED_TOPICS = "relatedTopics";

const TYPE_TRENDS = "trends";

export default {
  DEFAULT_HASH: DEFAULT_HASH,
  localhost_API: localhost_API,
  API_BASE_URL: API_BASE_URL,
  Q_DAILY_TRENDS: Q_DAILY_TRENDS,
  Q_INTEREST_OVER_TIME: Q_INTEREST_OVER_TIME,
  Q_INTEREST_BY_REGION: Q_INTEREST_BY_REGION,
  Q_REAL_TIME_TRENDS: Q_REAL_TIME_TRENDS,
  Q_RELATED_QUERIES: Q_RELATED_QUERIES,
  Q_RELATED_TOPICS: Q_RELATED_TOPICS,
  TYPE_TRENDS: TYPE_TRENDS,
  CHART_COLORS: [
    'rgb(246, 229, 141)',
    'rgb(255, 190, 118)',
    'rgb(255, 121, 121)',
    'rgb(186, 220, 88)',
    'rgb(223, 249, 251)',
    'rgb(249, 202, 36)',
    'rgb(240, 147, 43)',
    'rgb(235, 77, 75)',
    'rgb(106, 176, 76)',
    'rgb(199, 236, 238)',
    'rgb(126, 214, 223)',
    'rgb(224, 86, 253)',
    'rgb(104, 109, 224)',
    'rgb(48, 51, 107)',
    'rgb(149, 175, 192)',
    'rgb(34, 166, 179)',
    'rgb(190, 46, 221)',
    'rgb(72, 52, 212)',
    'rgb(19, 15, 64)',
    'rgb(83, 92, 104)',
  ]
};
