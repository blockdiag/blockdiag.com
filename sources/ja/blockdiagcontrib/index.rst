====================================
blockdiag レンダラプラグインの作り方
====================================

blockdiag レンダラプラグインとは
================================

blockdiag は `サンプル`_ のように
各ノードの形状を変化させることができます。

.. _サンプル: http://tk0miya.bitbucket.org/blockdiag/build/html/examples.html#shape-of-nodes

この各ノードの形状をレンダリングするプログラムが
blockdiag レンダラ(blockdiag node renderer)です。
blockdiag レンダラは setuptools を利用したプラグイン構造になっているため、
標準のパーツでは物足りない場合に好きな形状を組み込むことができます。


blockdiag レンダラを作ろう
==========================

ここでは blockdiag レンダラのサンプルである `blockdiagcontrib-square` を参考に、
プラグインの作り方を説明します。
blockdiagcontrib-square は正方形の形状を描画するためのサンプルレンダラです。

.. _blockdiagcontrib-square: https://bitbucket.org/tk0miya/blockdiagcontrib-square/

hg コマンドで blockdiagcontrib-square を取得しておくと参考になるでしょう。

.. code-block:: none

   % hg clone https://bitbucket.org/tk0miya/blockdiagcontrib-square/src


レンダラパッケージの構成
------------------------

レンダラパッケージは以下のファイルで構成されます。

.. list-table::
   :header-rows: 1

   * - ファイル名
     - 概要
   * - README.txt
     - blockdiag レンダラの説明書です。
   * - bootstrap.py
     - buildout 構成ファイルです。
   * - buildout.cfg
     - buildout 構成ファイルです。
   * - setup.py
     - setuptools 用の設定ファイルです。
       パッケージ名やプラグイン用の設定を行います。
   * - MANIFEST.in
     - パッケージング用の構成ファイルです。
   * - blockdiagcontrib/__init__.py
     - 
   * - blockdiagcontrib/square.py
     - blockdiag レンダラの本体です。


パッケージの情報を設定する：setup.py
------------------------------------

setup.py にはレンダラのパッケージ情報が記載されています。
必要に応じ適切な情報に書き換えてください。
主な書き換え箇所はパッケージ名(name)、作者の情報(author, author_email, url) です。

.. code-block:: python

   setup(
        name='blockdiagcontrib-square',
        version=version,
        description='noderenderer plugin for blockdiag',
        long_description=long_description,
        classifiers=classifiers,
        keywords=['diagram','generator'],
        author='Takeshi Komiya',
        author_email='i.tkomiya at gmail.com',
        url='http://tk0miya.bitbucket.org/blockdiag/build/html/index.html',
        license='PSL',

また、パッケージ名に合わせて entry_points も書き換えます。
(square を置き換える)

.. code-block:: python

   entry_points="""
      [blockdiag_noderenderer]
      square = blockdiagcontrib.square
   """,


blockdiag レンダラを書き換える
------------------------------

図形の情報を設定する：__init__()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

__init__() メソッドではノード描画の基本設定を行います。

.. list-table::
   :header-rows: 1

   * - パラメータ名
     - 意味
   * - node
     - 描画対象となるノードです。
       blockdiag.element.DiagramNode のインスタンスです。
   * - metrix
     - 座標を決める際に利用するパラメータ情報です。
       blockdiag.DiagramMetrix.DiagramMetrix のインスタンスです。

__init__() メソッドで設定できる項目はエッジの接点とテキスト描画領域の二つです。

エッジの接点
   他の図形からのエッジ(矢印)が接続される接点を定義します。
   設定箇所は上下左右の 4箇所です。
   self.connectors 配列に 上、右、下、左 の順で座標を格納します。
   初期値はセルの上下左右の四辺の中心です。

テキスト描画領域
   テキストを描画する箇所を定義します。
   self.textarea 配列に描画虜域の x1, y1, x2, y2 座標を格納します。
   初期値はセル領域全体です。

   参考：minidiamond や endpoint などのレンダラでは、
   図形が小さいため描画領域を図形の外側に配置しています。


ノードの基本系である Box (長方形)から設定を変更する必要がない場合は、
特別に設定を行う必要はありません。
なお、__init__() メソッドを定義する場合は
かならず super() 関数で親クラスの __init__() を呼び出す必要があります。


以下、blockdiagcontrib-square の説明。

.. code-block:: python

   def __init__(self, node, metrix=None):
       # 初期化処理：かならず super() を呼ぶこと
       super(Square, self).__init__(node, metrix)

       # ノードの縦、横の短い辺を求める
       # 図形を大きくするため、少しだけ(cellSize 分)大きくする
       r = min(metrix.nodeWidth, metrix.nodeHeight) / 2 + metrix.cellSize / 2

       # ノードの中心座標を求める
       # 他にも左上、右上などの座標を調べることができます。
       # (See blockdiag.DiagramMetrix.NodeMetrix)
       pt = metrix.cell(node).center()

       # 接点を設定する (配列は上、右、下、左の順)
       self.connectors = [XY(pt.x, pt.y - r),  # top
                          XY(pt.x + r, pt.y),  # right
                          XY(pt.x, pt.y + r),  # bottom
                          XY(pt.x - r, pt.y)]  # left

       # テキスト描画領域を設定する (正方形と同じ大きさに設定)
       self.textbox = (pt.x - r, pt.y - r, pt.x + r, pt.y + r)



図形を描画する：render_shape()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

render_shape() メソッドではノードの描画を行います。

.. list-table::
   :header-rows: 1

   * - パラメータ名
     - 意味
   * - drawer
     - 描画エンジンです。
       フォーマットにあわせて ImageDrawEx, SVGImageDraw, PDFImageDraw の
       いずれかが渡されます。
   * - format
     - 出力フォーマットです。'PNG', 'SVG', 'PDF' のいずれかが渡されます。
   * - \*\*kwargs
     - 描画パラメータです。

       kwargs['shadow'] 
           影を描画する場合に True が指定されます。

       kwargs['outline'] 
           図形の線を描画するときの色が指定されます。

       kwargs['fill'] 
           図形を塗りつぶすときの色が指定されます。

render_shape() メソッドでは渡されるパラメータによって、
以下のように動きを変える必要があります。

* kwargs['shadow'] が指定された場合は影を描画する
   * 黒く塗りつぶされた図形を描画する必要がある
   * 描画エリアの内側の装飾は描画しなくてもよい
      * note の内側に折れた部分、mail の封筒のふた部分など
* 背景画像(self.node.background)が設定されている場合
   * 図形の塗りつぶし、画像の読み込み、線の順に描画する


以下、blockdiagcontrib-square の説明。

.. code-block:: python

   def render_shape(self, drawer, format, **kwargs):
       outline = kwargs.get('outline')
       fill = kwargs.get('fill')

       if kwargs.get('shadow'):
           # 影を描画する
           box = self.shift_shadow(self.textbox)
           drawer.rectangle(box, fill=fill, outline=fill,
                          filter='transp-blur')

       elif self.node.background:
           # 背景画像がある場合は塗りつぶし→画像→外枠の順に描する
           drawer.rectangle(self.textbox, fill=self.node.color,
                            outline=self.node.color)
           drawer.loadImage(self.node.background, self.textbox)
           drawer.rectangle(self.textbox, fill="none", outline=outline,
                            style=self.node.style)

       else:
           # 普通に描画する
           drawer.rectangle(self.textbox, fill=self.node.color,
                            outline=outline, style=self.node.style)

レンダラをインストールする：setup()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

setup() 関数ではレンダラのインストールを行います。
install_renderer() 関数にパッケージ名とレンダラクラスを渡します。

ここで登録した名称が .diag ファイルで指定される名称になります。

以下、blockdiagcontrib-square の説明。

.. code-block:: python

   def setup(self):
       # square という名称でレンダラクラスを登録
       # → hoge [shape = square] として利用可能になる
       install_renderer('square', Square)


blockdiag レンダラの公開
========================

blockdiag 本体への取り込み
--------------------------

よく使われそうなレンダラは blockdiag と一緒に配布すると
他のユーザも幸せになれると思います。

素敵なレンダラを作った場合は @tk0miya に声をかけてください。


PyPI での公開
-------------

@shimizukawa の `PyPIデビュー`_ あたりを一読してから以下のコマンドを叩くとよいでしょう。

.. _PyPIデビュー: http://www.freia.jp/taka/docs/pyhack4/pypi/index.html

.. code-block:: none

   setup.py register sdist upload

PyPI にレンダラをアップロードした後、@tk0miya に声をかけると喜びます。


その他参考情報
==============

より深い情報が必要な場合は blockdiag に同梱されている
レンダラの実装を参照してください。


描画 API
========

あとで書く(予定)。

それまでは blockdiag.ImageDrawEx に定義されている関数を見てください。
