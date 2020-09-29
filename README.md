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

Packges are published on:

- [npmjs.org](https://www.npmjs.com/settings/eove/packages)
- [github.com](https://github.com/orgs/eove/packages?repo_name=javascript)

Use the following command to publish to npmjs.org:

```
npx lerna publish <version>
```

Then publish packages to github.com with:

```
npx lerna publish from-package --registry https://npm.pkg.github.com
```