
all: html

html:
	$(MAKE) -C blockdiag html
	$(MAKE) -C blockdiag-ja html
	$(MAKE) -C blockdiagcontrib html
	$(MAKE) -C seqdiag html
	$(MAKE) -C actdiag html
	$(MAKE) -C nwdiag html

clean:
	$(MAKE) -C blockdiag clean
	$(MAKE) -C blockdiag-ja clean
	$(MAKE) -C blockdiagcontrib clean
	$(MAKE) -C seqdiag clean
	$(MAKE) -C actdiag clean
	$(MAKE) -C nwdiag clean
