# PeoplesOpen.Net

[![Build Status](https://travis-ci.org/sudomesh/peoplesopen-front.svg?branch=master)](https://travis-ci.org/sudomesh/peoplesopen-front)

This repo stores the content and builds the static html for the [peoplesopen.net](http://peoplesopen.net/) website, excluding the `blog/` and `gardenmesh/` directories.

### Make changes

If you want to change the text/links/images on a page, simply edit the `index.md` file in the corresponding page directory in `src/`.

If you want to add a new page that will live at, say, https://peoplesopen.net/sour-raccoons, create the `src/sour-raccoons` directory, and put an `index.md` in it.

### View your changes locally

First you'll need to install [node.js](https://nodejs.org). Then:

```
cd peoplesopen-front
npm install               (install all the dependencies needed by our gulpfile)
npm install -g npx        (npx comes with new versions of npm)
```

Now you're ready. This command runs a local webserver:

```
npm run dev
```

And this one rebuilds the `web/` directory with your latest changes:

```
npm run build
```

### Publish 

After gaining ssh access to the peoplesopen.net webserver, run:

```
npm run publish
```

which is just an alias for `npx gulp && scp -r web/* root@peoplesopen.net:/var/www/peoplesopen.net/public-current`.

### Structure

```
- lib/                    # helpers used by the gulpfile

- src/                    # page content and assets live here
-- about/                 
--- index.md              # every page has an index.md that lives
                          # in a directory corresponding to the page's url
                          # (e.g. peoplesopen.net/about)

                          # at the top of the index.md, you can specify
                          # the page title and the name of the template to use
                          # to render the page (see templates/)

-- assets/
--- files/
--- fonts/
--- images/
--- javascript/
--- stylesheets/

- templates/              # reused html lives here (e.g. page layouts)
-- html.twig              # this is the base html used for all pages
-- layout/
--- homepage.twig         # this is the html used for the homepage
--- two-columns.twig      # this is the layout used for pages with the "Let's Hack" sidebar

- config.yml              # project settings (e.g. website title)

- gulpfile.js             # turns .scss and .md files into css and html files
                          # in the web/ directory

- package-lock.json       # these files keep track of dependencies used by the gulpfile 
- package.json
```
