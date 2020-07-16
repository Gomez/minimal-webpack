

# Install

    $ python3.7 -m venv .
    $ ./bin/pip install -r https://dist.plone.org/release/5.2.2-pending/requirements.txt
    $ ./bin/buildout
    $ ./bin/instance fg
    $ cd resources && npm install && npm run-script watch

# Setup

1. Install eea.facetednavigation
2. Activate webpack theme
3. Configure facetednavigation with a checkbox widget:
    - Catalog index: Review state
    - Catalog: Yes
4. View facetednavigation, click on a review state -> No refresh
