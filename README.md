## Digraph Server

### Tech stack

-  mongodb as graph storage
-  mongoose as orm
-  express as web server
-  joint.js as frontend designer

### setup

```sh
npm install
node app.js
```

of course you need to setup the fronend part as well, just check out the [code here](https://github.com/abruzzi/diagraph-prototype) and make a symbol link:

```sh
ln -s <path-to-frontend>/diagraph-prototype/* <path-to-backend>public/
```
