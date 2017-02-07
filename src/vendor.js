/* This file contains references to the vender libraries
  we're using in the project. This is used by webpack
  in the production build only*. A separate bundle for vendor
  code is useful since it's unlikely to change as often
  as the application's code. So all the libraries we reference
  here will be written to vendor.js so they can be
  cached until one of them change. So basically, this avoides
  customrs having to download a huge JS file anytime a line
  of code changes. They only have to download vendor.js when a
  vender library changes which should be less frequest.
  Any files that aren't referenced her will bundled into
  main.js for the production build.
  */

  /*eslint-disable no-unused-vars */

  import fetch from 'whatwg-fetch';
