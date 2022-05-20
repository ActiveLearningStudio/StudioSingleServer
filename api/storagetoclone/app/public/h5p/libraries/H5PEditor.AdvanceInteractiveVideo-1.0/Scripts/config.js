const KalturaConfig = {
  secret: "USER_SECRET_KEY",

  userId: "USER_ID",

  type: "SESSION_TYPE", // Could be 0 or 2

  partnerId: "USER_PARTNER_ID",

  expiry: "",

  privileges: "",
};

const YoutubeConfig = {
  channelId: "YOUTUBE_CHANNEL_ID",

  maxResults: "", // Set The video search limit (optional)

  key: "YOUTUBE_API_KEY",

  order: "ORDER", // can be searchSortUnspecified, date, rating, viewCount, relevance, title, videoCount

  part: "PART", // snippet
};

const VimeoConfig = {
  bearerToken: "AUTHENTICATION_TOKKEN ",

  channelId: "VIMEO_CHANNEL_ID", // NUMBER ONLY

  perPage: "PER_PAGE_ITEMS", // 5
};
