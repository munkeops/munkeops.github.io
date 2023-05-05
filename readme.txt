in cases of issues with install and build do the following - 

- fix dependencies

    npm install --legacy-peer-deps

- fix node version issues

    export NODE_OPTIONS=--openssl-legacy-provider