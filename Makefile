
all: html

update_txconfig:
	$(MAKE) -C sources/en gettext
	bin/sphinx-intl update-txconfig-resources --transifex-project-name blockdiag.com --locale-dir sources/ja/locale --pot-dir _build/en/locale
	bin/tx push -s

html:
	$(MAKE) -C sources/en html
	$(MAKE) -C sources/ja html

clean:
	$(MAKE) -C sources/en clean
	$(MAKE) -C sources/ja clean
