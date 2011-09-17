.. _interactive shell for blockdiag:

======================================
デモ：interactive shell for blockdiag
======================================

このページは `blockdiag` を Web ブラウザから利用できるようにしたデモページです。
入力フォームのテキストをリアルタイムに変換し、
ブラウザ上で閲覧することができます。

.. note::

   このデモページは IE に対応していません。

入力フォーム
============

.. raw:: html

   <textarea id="diagram" cols="75" rows="10" style="font-size: 14pt; font-family: monospace;">{
      A -> B -> C;
           B -> D;
   }</textarea><br />


出力された図
============

.. raw:: html

   <div id="diagram_image"></div>
