# 11ty snowpack skeleton

clean barebones snowpack 11ty base with a workaround for those who couldn't get hmr working with snowpack's 11ty starter.

## amazing non-features

- doesn't assume you (want to) use postcss or tailwind or webpack
- basic minification for inline page-specific/critical css
- external global/app css file and example template css for shared styles

> ✨ bootstrapped with create snowpack app (csa) and modded (see above).

## credits

i gutted the basic structer or more complex starters and others (11st was useful) and only left in 
or added parts useful for a modular structure.

## scripts

### yarn start

runs the app in the development mode.
open http://localhost:8080 to view it in the browser.

the page will reload if you make edits.

### yarn build

builds a static copy of your site to the `dist/` folder.
11ty's html is outputted to `/build`, but i couldn't get 
snowpack's hmr to work when sharing an output folder, so 
this is mounted with snowpack.

tl;dr you can ignore `/build` for now and i'll try to update with a non-hacky solution

your app is ready to be deployed!
