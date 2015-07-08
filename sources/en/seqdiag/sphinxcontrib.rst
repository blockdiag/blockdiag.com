=====================
sphinxcontrib-seqdiag
=====================

`sphinxcontrib-seqdiag` is sphinx extension for embedding seqdiag diagrams.
You can embed sequence diagrams with `seqdiag` directive.

.. code-block:: text

   .. seqdiag::

       seqdiag admin {
         A -> B -> C;
       }

.. seqdiag::

    seqdiag admin {
      A -> B -> C;
    }

Setting
=======

You can get archive file at http://bitbucket.org/birkenfeld/sphinx-contrib/

Install
-------

.. code-block:: bash

   $ sudo pip install sphinxcontrib-seqdiag


Configure Sphinx
----------------

To enable this extension, add ``sphinxcontrib.seqdiag`` module to extensions 
option at :file:`conf.py`. 

.. code-block:: python

   # Enabled extensions
   extensions = ['sphinxcontrib.seqdiag']

   # Fontpath for seqdiag (truetype font)
   seqdiag_fontpath = '/usr/share/fonts/truetype/ipafont/ipagp.ttf'

.. note::

   If you write documents including multibyte characters,
   you have to set fontpath to `seqdiag_fontpath`.


Directive
=========

.. describe:: .. seqdiag:: [filename]

   This directive inserts a sequence diagram into the document.
   When `filename` argument is specified, the extension reads a diagram definitiom from file.
   In another case, it reads from code block.

   Examples::

      .. seqdiag:: foobar.diag

      .. seqdiag::

         seqdiag {
            // some diagrams are here.
         }

   In addition, the following options are recognized:

   ``alt`` : text
     Alternate text: a short description of the diagram,
     displayed by applications that cannot display diagram.

   ``height`` : length
     The desired height of the diagram.
     When the "scale" option is also specified, they are combined.
     For example, a height of 200px and a scale of 50 is equivalent to
     a height of 100px with no scale.

   ``width`` : length
     The width of the diagram.
     As with "height" above, when the "scale" option is also specified,
     they are combined.

   ``scale`` : integer percentage
     The uniform scaling factor of the image.
     The default is "100%", i.e. no scaling.

   ``maxwidth`` : length
     .. deprecated:: 0.7.0
        Use ``width`` option.

     Same as "width" option.

   ``align`` : "left", "center" or "right"
     The horizontal alignment of the diagram.

   ``caption`` : text
     The caption of the diagram.

   ``desctable`` :
     Description Table: a table that describes each diagram elements (cf. nodes, edges)
     When this option is specified, Sphinx generates Description Table from diagram,
     corrects descriptons from `description` attribute of each node and edges.

     Example::

       .. seqdiag::
          :desctable:

          seqdiag {
             A -> B -> C;
             A [description = "browsers in each client"];
             B [description = "web server"];
             C [description = "database server"];
          }

     Generated:

     .. seqdiag::
        :desctable:

        seqdiag {
           A -> B -> C;
           A [description = "browsers in each client"];
           B [description = "web server"];
           C [description = "database server"];
        }

   ``figwidth`` : "image", length
     The width of the figure.
     A special value of "image" is allowed, in which case
     the included diagram's actual width is used.

   ``figclass`` : text
     Set a `classes` attribute value on the figure element.

   ``name`` : text
     Set a `names` attribute value on the diagram-image element.
     This allows hyperlink references to the diagram using text as reference name.

   ``class`` : text
     Set a `classes` attribute value on the diagram-image element.


Configuration File Options
==========================

.. confval:: seqdiag_fontpath = str or list of str

   The paths to truetype fonts.
   `seqdiag_fontpath` option accepts both single path string and list of paths.

   .. versionadded:: 0.1.1

      `seqdiag_fontpath` accepts fontpath list

.. confval:: seqdiag_fontmap = str

   The path to fontmap definitions.

.. confval:: seqdiag_antialias = bool

   Render diagrams in antialias mode or not.

.. confval:: seqdiag_transparency = bool

   Render diagrams as transparency or not.

   .. versionadded:: 0.8.0

.. confval:: seqdiag_html_image_format = "PNG" or "SVG"

   The output image format at generating HTML docs.

.. confval:: seqdiag_latex_image_format = "PNG" or "PDF"

   The output image format at generating PDF docs (through LaTeX).
   When a value of "PDF" is specified, you can get clear diagram images.
   In which case, reportlab_ library is required.

   .. _reportlab: https://pypi.python.org/pypi/reportlab

.. confval:: seqdiag_tex_image_format = "PNG" or "PDF"

   .. deprecated:: 0.7.0
      Use ``seqdiag_latex_image_format`` option.

   Same as "seqdiag_latex_image_format" option.

.. confval:: seqdiag_debug = bool

   Enable debug mode of seqdiag.
