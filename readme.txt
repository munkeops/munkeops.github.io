in cases of issues with install and build do the following - 

- fix dependencies

    npm install --legacy-peer-deps

- export NODE_OPTIONS=--openssl-legacy-provider

    fix node version issues