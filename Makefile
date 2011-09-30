
all: html

html:
	$(MAKE) -C sources/en html
	$(MAKE) -C sources/ja html

clean:
	$(MAKE) -C sources/en clean
	$(MAKE) -C sources/ja clean
