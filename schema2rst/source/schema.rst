
Schema: sample
==============


order_history
-------------

.. list-table::
   :header-rows: 1

   * - Fullname
     - Name
     - Type
     - NOT NULL
     - PKey
     - Default
     - Comment
   * - 履歴 ID
     - id
     - INTEGER(11)
     - False
     - True
     - None
     - 
   * - ユーザ ID
     - user_id
     - INTEGER(11)
     - False
     - False
     - None
     - 
   * - 商品 ID
     - item_id
     - INTEGER(11)
     - False
     - False
     - None
     - 
   * - 数量
     - amount
     - INTEGER(11)
     - False
     - False
     - None
     - 
   * - 購入日
     - order_date
     - DATETIME
     - True
     - False
     - None
     - 

items
-----

.. list-table::
   :header-rows: 1

   * - Fullname
     - Name
     - Type
     - NOT NULL
     - PKey
     - Default
     - Comment
   * - 商品 ID
     - id
     - INTEGER(11)
     - False
     - True
     - None
     - 
   * - 商品名
     - name
     - VARCHAR(255)
     - False
     - False
     - None
     - 
   * - 種別 (1:食品, 2:文具, 3:雑貨)
     - type
     - INTEGER(11)
     - False
     - False
     - 1
     - 
   * - 説明文
     - description
     - TEXT
     - True
     - False
     - None
     - 

users
-----

.. list-table::
   :header-rows: 1

   * - Fullname
     - Name
     - Type
     - NOT NULL
     - PKey
     - Default
     - Comment
   * - ユーザ ID
     - id
     - INTEGER(11)
     - False
     - True
     - None
     - 
   * - ログイン ID
     - login_id
     - VARCHAR(16)
     - False
     - False
     - 
     - 
   * - 氏名
     - fullname
     - VARCHAR(255)
     - False
     - False
     - 
     - 
   * - メールアドレス
     - mailaddr
     - VARCHAR(255)
     - False
     - False
     - 
     - 
