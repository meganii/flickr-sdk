/**
 * GET /v2/tags/trending/2014/12?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=hcf5y35QQWMOpoiw+RY+b83OMBo=
 *
 * host: api.flickr.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "POST, GET, OPTIONS, DELETE, PUT, PATCH");
  res.setHeader("access-control-expose-headers", "X-Total-Count, Link");
  res.setHeader("x-application-context", "application:prod-bf1");
  res.setHeader("set-cookie", ["BX=73f2rc1ba2vcm&b=3&s=d4;Path=/;Domain=.flickr.com;Expires=Sun, 21-Jan-2018 00:53:42 GMT"]);
  res.setHeader("expires", "Thu, 01 Jan 1970 00:00:00 GMT");
  res.setHeader("x-total-count", "153");
  res.setHeader("link", "<http://api.flickr.com/media-catalog/v2/tags/trending/2014/12?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=hcf5y35QQWMOpoiw%2BRY%2Bb83OMBo%3D&pageNumber=0>; rel=\"first\", <http://api.flickr.com/media-catalog/v2/tags/trending/2014/12?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=hcf5y35QQWMOpoiw%2BRY%2Bb83OMBo%3D&pageNumber=15>; rel=\"last\", <http://api.flickr.com/media-catalog/v2/tags/trending/2014/12?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=hcf5y35QQWMOpoiw%2BRY%2Bb83OMBo%3D&pageNumber=1>; rel=\"next\"");
  res.setHeader("content-type", "application/json; charset=UTF-8");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("date", "Fri, 22 Jan 2016 00:53:42 GMT");
  res.setHeader("age", "1");
  res.setHeader("server", "ATS");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 r16.ycpi.sjb.yahoo.net (ApacheTrafficServer [cMsSfW])");
  res.setHeader("y-trace", "BAEAQAAAAADB9kP30nCdxwAAAAAAAAAA8XuRYYha60UAAAAAAAAAAAAFKeGmiGYeAAUp4aaMzaDyyMiCAAAAAA--");

  res.write(new Buffer("H4sIAAAAAAAAAA==", "base64"));
  res.write(new Buffer("xVxbc9s4lv4riB+mLyNLBO/09mYnl0m3t5N0tpPd7t3xlAskQQkWBagJ0LLSNU/7S+ZxH7pqprZqf0Dnj+05oGxJlkTKY1a1nXIsEsCHG8/3nYND/+nnE8PGb9mMn5ydTNh8vjwZnFRMTk/OqDM4mU+UUa+FNidnf/r5ROQnZz83187h1xPX9wLqxnEUBVBLLSSv7HVKPRpTGnonfxmcGGFKbPw7aHXMyZxVLBeaQ4Wc66wScyOUhPvnpNac/O6nWpl/ei7G5BvO8uYTKVRFZqripKjl8EJeyFdwQasZV5IPiGoaHlfqmmtyShjJ1GymJFFZVlcVlxmHSs9r07TDiTBEaFvfTIQcEz3nmWAlFDqXZLaE6rU01fK2ZU0YQEtlEGIxIEzmxEw4dNZUfHX3qtaGsBn7iO01MNBLzssBKcUUICV0q2CiWhpW8ts2mPlM39a6nUCcYZbZLtzOpUs9z3H/8NbxodDdvWelYBoKQHs30Fx1acR0KqCEbBbz2eo6+bC6fk1fptjk3ergpfcTVuX2agxrpQ0zGntQMJjLFwh0cuYlMewEnFMuze1F13GwvPjItd0aC5GbCZR1PWh2wsV4goV8PxqclCpjqzWeGDPXZ6NRRocIJbKiFNm0GkLjI3dEgyQabeypS566vhOyiNNLNbyaj2E73SHBnTUQjOdROEVAoygJAWd2H4c6GzhR2BOM2YVx/Q2cKOgJKL0PFG7Omx/7PeF83BlQsLk++KEXnJ/u4+BM3U1bX7Om76PEm7sgdPraBtnOrIWbQNSlj9rXbhpGLMxzGl1Odp4fx483F+hxKxTERREVSeqEl9P7SJ7rbJoEt6e5kw3OnwcnQs/rFMYAxjGvSyO5BpsEmJoVYAhNVfO//Bn7syY6ofSa5mgXzcVRHPkJTFG8xXJREkde6G9y3KtK5EBFU87nYMnvM9y7utSMvLYUSK55BUQjgSxkrojkwC1kNCLvKug9lEEOuRZ8gXwC5JGWLJteyNPf4OtCvis5A7ZDen4lKl6oG9s9RlJujB1GCR/5DYxZINvaccAVIBH4WRtRio/srqodfS2RpYGcMwNTIXTNsEwmPv2fJDknpdJNq1wPyW8zbBj3V+nTF8DO0N0R/M8rdvbVKH1KzmFnSE58bUt8l15xI67V6DWXmp8RW+Su/jtYt9uL3wqTTbgE8k9BqaCEIEWzX358+VuO8Vk5riVMeM5hOSbwC8w6r65ZDr/CSr4HnUQqfHpv7/D8Qn755TNjKpHWuLdP3yr5AvVBhToKPr2EnXCtyYuKwyMNY31hBZnGavevkWe2GVj6/8V28HLTDCg5+Ni0hPP3m03ReUGWqiYLoSfEKDIBaQR7HyZuXglpeA47db60S6wKWFWQltZ0DMi8eW6gJDzohmUGVOGwGcp7QQyqQnh8ONgElRoOZsU+Frb4XDAiZnO8afcOPBMc7CM8d7bhu4dr3TbDfsiZGCusMPyNZuuQio2SxI0cHzRssE/DTmCzZdO1dn3H0lKRV7ySn/7717/KnH/c0K8ru7ulXr2D6jXw/R3xSqm/T7xS6gZbmuV4SvRGbuz5ozVTXAJ1+1Gc5izZ1a403mLEx8B4ThzwgqYs3JWum9KIPmowGyg7yjUKN3WElbF94OwIV39z0sK+Jq0/3doK05dsbQVpV63UCY93xlpxdlTrlsLz3Z5gHiPwZgrE053E88LOSIYX+EHiwre3HcnwKKrPcFPkLYDEiVQERQAY+wUDWkeZ9vmC21iAkCBoRFryL3YUIHKpETOuLfsbpqfacgtWGwMpojhYxRq2C2BkBlCBfjCcMCQYAFnFIBaKFLwsmSYTIJOBrUSAiV6yykw+AyQlSm5IBmQksZsLKIldt2TFZ0PyA44Hfl0CvaMM4za8gfSjNIwD1JtZYmkGn8YS7eigKZ7zTORQGvRpLYVWtn9VLQlbsOVwaCM1oGevhap1ucRilh01ykQNooiRCUjCf7642yKLxWK4sTvs8ujRVTAduV7oJTRO3JhenDx9CRJiQt4bVpHnMCRgPPZ08LD23CT2XD9wEgfae29UNTOVUqBgNflBQOOgboSpgXZdbNzGax7WPo3dhNIgdNvbx9btRH0lnn7A2YF/KI2lEbK2jxBOKmskBUwdrAFewq2Yw4qQlqaH5Pta2iXH9WjiUBhzwu1iUL0LQ7QoYWVYs91mCheXnNstYgHHFZvbvY0LNyCg9ggrUPJr3uwZcFwWxD5sAwyr6VqY1d6GrcXRyVmSBezOJ1+NxNODIS54yOI4CA+pA5jQtTS4UmrKgJqdzYjW6indlgT0kCSgPg12NEHk7ZUEYBg2TNvDwll+mIw2DMulnxceKAI39TrCWfGjYKLYS7LATekeSbAVzfIeFMZogemIZnnRg6IYLUDt0SzXe1BsoQWn12hWC06P0awWlHZd4CZ9jaZdF1Da13Z7jDCYgCVfx34Ct0sYhCEwT5Q4/vYJB/QoCZ1wSxeMkVUXaIHRAC6EzHf4X6IJlxpMc8OwDJx/DUQLNngOFjwn9RxpcrYkM6g+JFpZLaCVyobW+s6UNivmJilYwub0AXkb4yTAIlscBbNbsrpiH1nJ5ZitTfpyCP7VWM+Vaabboe7IoSO8eAqsb4YTMysvTqDhEpqSqlBlqRbAZDhEexLze5JyYIZGKugMvNcnSGXYh8sDX3gPv5+L8RicWeQiOUVxA8S20+/91Ho5FYxV7GYEXYGaA1Kqa14uUfTACNEX/1bAfUvZRSORwM/WILmUxJDC2RcrdtMT8DehuKrtdF4poCmUQedEswUw2fDgQDrmeGjqWVo2nd43gc1t20GC/vt+TcEyjqtrW3mNrf9X0/q79Qrua/y2nm1+p/X7Pc353h7OVWXgg7Cq6hBlu4nvUy+OgbLDfZS9CbTmbnuVrC/f8vft07TF3/4h+g6jYJe+XT/ax9++G294p26MMe8jbVA8imgQj9YG4DJOnCQqXBa5XcdRQfIIGMaSNIoiSp0O/g6PN6itKB30HcbHE0QrTsdZlHs837XC9EferTB9cXcryA51bx+mUK8fmMcwKt84S4k7z1JoSN3QdcDvcrcPU1zwlZKtw5R3YIgmGVuU5DUOd6LwAOJrwcBF+QHMwW4CgSR/vJnjocGQkG+gCpIMsJnA+2eEemjTnwGfgp+MRn9v+3ldWY+JaHSskIxf8bSqGfgxwJL+kDxDwhYlq0pMFJCFGNcVEMkCo8JAZMg4SJLniIyExMDxMjAg4Bfww0nKsukASkBt6wyvggha3JAlZ+DClQz8K0s/5A2ogpX7bFsjt/Fly7eWxxjGgk3FwPfC06IByIUFYGNewxT7ANYfBitMUw/dcttyQH/9mxt/5npD6jQ5Fm+J9+vffPpZkAyp11z64UIeDOeCuY0971BKwgIMc6nUeG353xsO8/M1q3B2jZKb4dxm5beTEQ4af5o4zm42AmjLvekIUejR9eMSuA84v09GcRh7o439eumkTuD4LvdYl/1/gGXeg8MZiwMnSBzWRQDH00w7TFc6gnM8bbYDdVCAf7w9a8fpjwPacfoigXaUdgcuCPqatR0HzneScFM+PcDB3oPkpn7ouW6ex5dFR+IDfUCKxR6kgkc8yD0v9ToTH/wHuKX7xhQwnkcOLeKuxAf3+CBI+yo9hqxTzmojirq8o2y0vB2xcSeioRe7O+kPdMcBLnPwoXK21Dvk/OVrLjJG3kTky7cqM6Ksb0jgzGakGNGhQ7589e//ek7+g5fXgu31Y2eKMbnhtl7N9zovz+H+mFeNK3ow3hglQQy7AOjL2UdfFmvNXd8CDdVsKsj7icrZ1kEkve+0BNEh4vL9JN7hLc9N9not249d5B5vfj0=", "base64"));
  res.write(new Buffer("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", "base64"));
  res.end();
};
