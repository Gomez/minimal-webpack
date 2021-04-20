Minimal setup for Plone 5.2.2 with Mosaic & facetednavigation and webpack 

# Install

    $ python3.7 -m venv .
    $ ./bin/pip install -r https://dist.plone.org/release/5.2.4/requirements.txt
    $ ./bin/buildout
    $ ./bin/instance fg
    # Add Plone Site & install Mosaic & EEA
    # Add \"{site_url}/++plone++static/components/bootstrap/\" as bootstrapPath - LESS Variable
    $ cd resources && npm install && npm run-script watch
    # Compiled successfully. < SUCCESS

# Setup

1. Install eea.facetednavigation
2. Install Mosaic
3. Activate  Minimal Webpack Theme

# Known issues

- Mosaic is missing bootstrapPath (error on compile): https://github.com/collective/plonetheme.webpacktemplate/issues/21 
- In eea.facetednavigation configuration of a search the spinner does not get removed (sometimes)  
