module.exports = {
  name: 'snake',
  exposes: {
    './Module': 'apps/snake/src/app/remote-entry/entry.module.ts',
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  }
};
