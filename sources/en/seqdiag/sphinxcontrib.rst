=======================
sphinxcontrib-seqdiag
=======================

`sphinxcontrib-seqdiag` is sphinx extension for embedding seqdiag diagrams.
You can embed block diagrams with `seqdiag` directive.

.. code-block:: text

   .. seqdiag::

       diagram admin {
         A -> B -> C;
       }

.. seqdiag::

    diagram admin {
      A -> B -> C;
    }

Setting
=======

.. You can see available package at `PyPI <http://pypi.python.org/pypi/sphinxcontrib-seqdiag>`_.

You can get archive file at http://bitbucket.org/birkenfeld/sphinx-contrib/

Install
-------

.. code-block:: bash

   $ sudo easy_install sphinxcontrib-seqdiag


Configure Sphinx
----------------

To enable this extension, add ``sphinxcontrib.seqdiag`` module to extensions 
option at :file:`conf.py`. 

.. code-block:: python

   # Enabled extensions
   extensions = ['sphinxcontrib.seqdiag']

   # Fontpath for seqdiag (truetype font)
   seqdiag_fontpath = '/usr/share/fonts/truetype/ipafont/ipagp.ttf'


Directive
=========

.. describe:: .. seqdiag:: [filename]

   This directive insert a sequence diagram into the generated document.
   If filename is specified, sphinx reads external file as source script of blockfile.
   In another case, seqdiag directive takes code block as source script.

   Examples::

      .. seqdiag:: foobar.diag

      .. seqdiag::

         diagram {
            // some diagrams are here.
         }


   This directive is able to generate thumbnail images using ``maxwidth`` option.
   ``maxwidth`` option takes pixel-size of image's width.

   Examples::

      .. seqdiag::
         :maxwidth: 240

         diagram {
            // some diagrams are here.
         }

   .. versionadded:: 0.2.0

   This directive is able to generate description table using ``desctable`` option and
   `description` attribute

   Input::

      .. seqdiag::
         :desctable:

         {
            A -> B -> C;
            A [description = "first node"];
            B [description = "second node"];
            C [description = "third node"];
         }

   Output

   .. seqdiag::
      :desctable:

      {
         A -> B -> C;
         A [description = "first node"];
         B [description = "second node"];
         C [description = "third node"];
      }


Configuration File Options
==========================

.. confval:: seqdiag_fontpath

   This is a path for renderring fonts. You can use truetype font (.ttf) file path.
   You can specify single path with string, or multiple paths using array.

   .. versionadded:: 0.1.1

      seqdiag_fontpath allows fontpath array

.. confval:: seqdiag_antialias

   If :confval:`seqdiag_antialias`: is True, seqdiag generates images
   with anti-alias filter.
