============================================
blockdiag - simple diagram images generator
============================================

`blockdiag` and its family generate diagram images from simply text file:

.. blockdiag::

   diagram {
     blockdiag -> generates -> "block-diagrams";
     blockdiag -> is -> "very easy!";

     blockdiag [color = "greenyellow"];
     "block-diagrams" [color = "pink"];
     "very easy!" [color = "orange"];
   }

Features:

* Supports many types of diagrams
   * block diagram (w/ blockdiag)
   * sequence diagram (w/ seqdiag)
   * activity diagram (w/ actdiag)
   * logical network diagram (w/ nwdiag)
* Generates beautiful diagram images from simple text format (similar to graphviz's DOT format)
* Layouts diagram elements automatically
* Embeds to many documentations; Sphinx, Trac, Redmine and some wikis


Enjoy documentation with blockdiag !

Table of contents
==================

.. toctree::
   :maxdepth: 1

   blockdiag/index
   seqdiag/index
   actdiag/index
   nwdiag/index

Resources
==========
* Author
   * Takeshi KOMIYA ( `@tk0miya <http://twitter.com/tk0miya>`_ ) <i.tkomiya at gmail.com>
* Google Groups: `<http://groups.google.com/group/blockdiag-discuss/topics>`_
* Twitter: #blockdiag
* Interactive Shell: `<http://interactive.blockdiag.com/>`_
* blockdiag
   * PyPI: `<http://pypi.python.org/pypi/blockdiag/>`_
   * Repository: `<https://bitbucket.org/tk0miya/blockdiag/>`_
* seqdiag
   * PyPI: `<http://pypi.python.org/pypi/seqdiag/>`_
   * Repository: `<https://bitbucket.org/tk0miya/seqdiag/>`_
* actdiag
   * PyPI: `<http://pypi.python.org/pypi/actdiag/>`_
   * Repository: `<https://bitbucket.org/tk0miya/actdiag/>`_
* nwdiag
   * PyPI: `<http://pypi.python.org/pypi/nwdiag/>`_
   * Repository: `<https://bitbucket.org/tk0miya/nwdiag/>`_
* Issue Tracker: `<https://bitbucket.org/tk0miya/blockdiag/issues?status=new&status=open>`_