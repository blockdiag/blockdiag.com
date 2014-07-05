====================
sphinxcontrib-nwdiag
====================

`sphinxcontrib-nwdiag` is sphinx extension for embedding nwdiag diagrams.
You can embed network diagrams with `nwdiag`, `rackdiag` and `packetdiag` directives.

.. code-block:: text

   .. nwdiag::

       nwdiag {
         network dmz {
             web01;
             web02;
         }
       }

.. nwdiag::

   nwdiag {
     network dmz {
         web01;
         web02;
     }
   }

Setting
=======

You can get archive file at http://bitbucket.org/birkenfeld/sphinx-contrib/

Install
-------

.. code-block:: bash

   $ sudo pip install sphinxcontrib-nwdiag


Configure Sphinx
----------------

To enable this extension, add ``sphinxcontrib.nwdiag``, ``sphinxcontrib.rackdiag`` and
``sphinxcontrib.packetdiag`` modules to extensions
option at :file:`conf.py`.

.. code-block:: python

   # Enabled extensions
   extensions = ['sphinxcontrib.nwdiag',
                 'sphinxcontrib.rackdiag',
                 'sphinxcontrib.packetdiag']

   # Fontpath for nwdiag series (truetype font)
   nwdiag_fontpath = '/usr/share/fonts/truetype/ipafont/ipagp.ttf'

.. note::

   If you write documents including multibyte characters,
   you have to set fontpath to `nwdiag_fontpath`.


Directive
=========

.. describe:: .. nwdiag:: [filename]

   This directive inserts a network diagram into the document.
   When `filename` argument is specified, the extension reads a diagram definitiom from file.
   In another case, it reads from code block.

   Examples::

      .. nwdiag:: foobar.diag

      .. nwdiag::

         nwdiag {
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
     .. deprecated:: 1.4.0
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

       .. nwdiag::
          :desctable:

          nwdiag {
             network {
               A [address = 192.168.0.1, description = "web server01"];
               B [address = 192.168.0.2, description = "web server02"];
             }
             network {
               A [address = 172.0.0.1];
               C [address = 172.0.0.2, description = "database server"];
             }
          }

     Generated:

     .. nwdiag::
        :desctable:

        nwdiag {
           network {
             A [address = 192.168.0.1, description = "web server01"];
             B [address = 192.168.0.2, description = "web server02"];
           }
           network {
             A [address = 172.0.0.1];
             C [address = 172.0.0.2, description = "database server"];
           }
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

.. describe:: .. rackdiag:: [filename]

   This directive inserts a rack diagram into the document.
   When `filename` argument is specified, the extension reads a diagram definitiom from file.
   In another case, it reads from code block.

   Examples::

      .. rackdiag:: foobar.diag

      .. rackdiag::

         rackdiag {
            // some diagrams are here.
         }

   `rackdiag` directive recognize options same as `nwdiag` directive.

.. describe:: .. packetdiag:: [filename]

   This directive inserts a packet diagram into the document.
   When `filename` argument is specified, the extension reads a diagram definitiom from file.
   In another case, it reads from code block.

   Examples::

      .. packetdiag:: foobar.diag

      .. packetdiag::

         packetdiag {
            // some diagrams are here.
         }

   `packetdiag` directive recognize options same as `nwdiag` directive.

Configuration File Options
==========================

.. confval:: nwdiag_fontpath = str or list of str

   The paths to truetype fonts.
   `nwdiag_fontpath` option accepts both single path string and list of paths.

   .. versionadded:: 0.1.1

      `nwdiag_fontpath` accepts fontpath list

.. confval:: nwdiag_fontmap = str

   The path to fontmap definitions.

.. confval:: nwdiag_antialias = bool

   Render diagrams in antialias mode or not.

.. confval:: nwdiag_html_image_format = "PNG" or "SVG"

   The output image format at generating HTML docs.

.. confval:: nwdiag_latex_image_format = "PNG" or "PDF"

   The output image format at generating PDF docs (through LaTeX).
   When a value of "PDF" is specified, you can get clear diagram images.
   In which case, reportlab_ library is required.

   .. _reportlab: https://pypi.python.org/pypi/reportlab

.. confval:: nwdiag_tex_image_format = "PNG" or "PDF"

   .. deprecated:: 1.4.0
      Use ``nwdiag_latex_image_format`` option.

   Same as "nwdiag_latex_image_format" option.

.. confval:: nwdiag_debug = bool

   Enable debug mode of nwdiag.
