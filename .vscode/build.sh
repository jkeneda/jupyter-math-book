#!/bin/bash
# jb build --all ./ # if e.g. new _static files aren't updating right; rebuilds the whole book from scratch
jb build ./
ghp-import -n -p -f _build/html
