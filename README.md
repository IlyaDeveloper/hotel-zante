# Project hotel-zante

## Getting started

- **First clone repository** :
```
   $ git clone git@github.com:IlyaDeveloper/hotel-zante.git
```
- **Others commands**:
```
   $ npm run scss:build       // This command is building scss to css
   $ npm run dev              // This command is watching scss files

   $ npm run build            // Build project
   $ npm run deploy           // Deploy the project using ssh, so you need to enter the correct accesses options
                                 deploy[_server, _password, _path, _port] in the `.npmrc` file, if you have ssh keys installed,
                                 then the password field 'pass' can be left unchanged
                                 
   $ npm run deploy:dev          // This command is same command deploy but is update test server{ hotel.justtwic.art }

   $ npm run clean-dist       // Complete cleaning of the directory
   $ npm run copy-img         // Copying images files `assets/img/*.*` to a directory `distDir`,
                                 ignoring the parcel dimanical path/file.hash
```