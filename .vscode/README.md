# My little Next.js Boilerplate

 Starter code for a clean Next.js + TypeScript + ESLint project with tailwindcss v2,  next-auth, urql, jotai and strapi v4 as backend.
 Config of ESLint, TypesScript is based on [paulintrognon](https://github.com/paulintrognon)'s blog post [Start a clean Next.js project with TypeScript, ESLint and Prettier](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js)

## Get started

```sh
# Install dependencies
yarn install

# Enable husky
yarn husky install

# Enable husky to run ESlint and tsc on every commit 
yarn husky add .husky/pre-commit "yarn tsc --noEmit && yarn eslint --fix . && yarn prettier --write ."

# Start dev server
yarn dev
```

Note: If you want to skip the check, you can add a `--no-verify` flag to your commit command. For example: `git commit --no-verify -m "Update README.md"`

## Further reading

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Urql](https://formidable.com/open-source/urql/)
- [Jotai](https://jotai.org/)
- [strapi.io](https://strapi.io/)
