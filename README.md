Today's tamagoya menu  
===================
[お弁当の玉子屋](http://www.tamagoya.co.jp/)のメニューを閲覧するための Google Chrome 拡張です。

使い方
-------------
* プロジェクトをダウンロードします。  
`$ git clone git://github.com/papipupepujii/todays-tamagoya-menu`  
`$ cd todays-tamagoya-menu`

* [require.js](http://requirejs.org/) でプロジェクトの optimization をします。  
`$ r.js -o  app.build.js`  
→ optimized-tamagoya というフォルダが出来上がります。

* Chrome 拡張の[パッケージング](http://dev.screw-axis.com/doc/chrome_extensions/guide/packaging/)  をします。  
※「拡張機能のルート ディレクトリ」には、先ほど出来上がった optimized-tamagoya を指定して下さい。
