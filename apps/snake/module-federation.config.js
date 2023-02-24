module.exports = {
  name: 'snake',
  exposes: {
    './Module': 'apps/snake/src/app/remote-entry/entry.module.ts',
  },
};
