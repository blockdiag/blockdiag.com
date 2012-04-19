=======================
sphinxcontrib-blockdiag
=======================

`sphinxcontrib-blockdiag` is sphinx extension for embedding blockdiag diagrams.
You can embed block diagrams with `blockdiag` directive.

.. code-block:: text

   .. blockdiag::

       blockdiag admin {
         top_page -> config -> config_edit -> config_confirm -> top_page;
       }

.. blockdiag::

    blockdiag admin {
      top_page -> config -> config_edit -> config_confirm -> top_page;
    }

Setting
=======

.. You can see available package at `PyPI <http://pypi.python.org/pypi/sphinxcontrib-blockdiag>`_.

You can get archive file at http://bitbucket.org/birkenfeld/sphinx-contrib/

Install
-------

.. code-block:: bash

   > easy_install sphinxcontrib-blockdiag


Configure Sphinx
----------------

To enable this extension, add ``sphinxcontrib.blockdiag`` module to extensions 
option at :file:`conf.py`. 

.. code-block:: python

   # Enabled extensions
   extensions = ['sphinxcontrib.blockdiag']

   # Fontpath for blockdiag (truetype font)
   blockdiag_fontpath = '/usr/share/fonts/truetype/ipafont/ipagp.ttf'


Directive
=========

.. describe:: .. blockdiag:: [filename]

   This directive inserts a block diagram into the generated document.
   If filename is specified, sphinx reads external file as source script of blockfile.
   In another case, blockdiag directive takes code block as source script.

   Examples::

      .. blockdiag:: foobar.diag

      .. blockdiag::

         blockdiag {
            // some diagrams are here.
         }


   This directive is able to generate thumbnail images using ``maxwidth`` option.
   ``maxwidth`` option takes pixel-size of image's width.

   Examples::

      .. blockdiag::
         :maxwidth: 240

         blockdiag {
            // some diagrams are here.
         }

   .. versionadded:: 0.9.0

   This directive is able to generate description table using ``desctable`` option and
   `description` attribute

   Input::

      .. blockdiag::
         :desctable:

         blockdiag {
            A -> B -> C;
            A [description = "browsers in each client"];
            B [description = "web server"];
            C [description = "database server"];
         }

   Output

   .. blockdiag::
      :desctable:

      blockdiag {
         A -> B -> C;
         A [description = "browsers in each client"];
         B [description = "web server"];
         C [description = "database server"];
      }


Configuration File Options
==========================

.. confval:: blockdiag_fontpath

   This is a path for renderring fonts. You can use truetype font (.ttf) file path.
   You can specify single path with string, or multiple paths using array.

   .. versionadded:: 0.1.1

      blockdiag_fontpath allows fontpath array

.. confval:: blockdiag_antialias

   If :confval:`blockdiag_antialias`: is True, blockdiag generates images
   with anti-alias filter.

.. confval:: blockdiag_html_image_format

   You can specify image format on converting docs to HTML
   using :confval:`blockdiag_html_image_format` .
   :confval:`blockdiag_html_image_format` accepts 'PNG' or 'SVG' .

.. confval:: blockdiag_tex_image_format

   You can specify image format on converting docs to TeX
   using :confval:`blockdiag_html_image_format` .
   :confval:`blockdiag_html_image_format` accepts 'PNG' or 'PDF' .

   If you set PDF, you will get clear diagram images as vector format.
   (*) reportlab is needed .
