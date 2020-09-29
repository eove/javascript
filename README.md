# Javascript

Collection of packages or configurations used to help us programming in Javascript

This is a monorepository, subprojects are in [packages](/packages) directory.

## Packages

Available packages:

- [@eove/eslint-config-node](/packages/eslint-config-node): Node eslint shareable configuration
- [@eove/eslint-config-react-native](/packages/eslint-config-react-native): React Native eslint shareable configuration

## For developers

### Installation

Just clone repository:

```
git clone https://github.com/eove/javascript.git
```

Then [bootstrap](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme) with [lerna](https://github.com/lerna/lerna):

```
npm install
npm run bootstrap
```

### Publishing

Packages are published on [npmjs.org](https://www.npmjs.com/).

Just use `npx lerna publish <version>` to publish.