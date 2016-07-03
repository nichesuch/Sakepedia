# Sakepedia（仮）

## エレベーターピッチ

複雑かつ多種多様な日本酒の情報を一元的に収集したい  
酒蔵、酒屋、酒メディア関係者、酒のアプリ開発者向けの  
Sakepediaというサービスは  
Wikipediaのようなデータプラットフォームである。  
これは、RDF形式のLODで登録かつ利用でき、  
Sakenoteなどの個人が楽しむだけのアプリとは違って、
酒蔵、酒屋、消費者が自由にデータを登録できる機能が備わっている。

## Sakepedia（仮）が必要な背景

近年は、日本酒ブームで若者や女性に日本酒が広まってきているうえに、酒蔵の努力もあって、海外でも日本酒の評価が向上している。  
さらに、2020年には東京オリンピックが開催され、日本酒を外国人に知ってもらう大きなチャンスが控えている。

しかし、日本酒は難しい。  
多種多様なうえに、ワインのように情報が広く流通していない。  
日本人ですら、多くの人は日本酒よりもビールやワインの方が詳しいのが現実だ。  

そのうえ、アルコール度数が高いので、ビールのように早いペースで飲んで悪酔いしたり、特定名称酒ですらない普通種を飲んで日本酒は不味いと思ってしまうケースも多い。  
そもそも、美味しい日本酒を飲んだり、買ったりできるところも少ない。  

このような背景で、日本酒のデータプラットフォームを構築し、日本酒の情報を広く流通させるとともに、日本酒に関するアプリ開発を促進することが必要である。

## データの種類の定義

日本酒に関するデータは大きく次の2種類あり、以降では、この用語を用いる。

### 基礎データ

酒蔵の情報、銘柄の情報など、客観的な事実で主観によって変化しないデータ。

### ユーザーデータ

薫酒、爽酒、熟酒、醇酒の分類、相性のよい料理、適した温度など主観によって変化するデータ。

## LODチャレンジ2016までにやりたいこと

* 日本酒に関するデータ（基礎データ及びユーザーデータ）のスキーマを考案する
* 酒仙人のデータから、データを登録する（考案したスキーマのうち最低限の内容）
* ユーザーが基礎データ及びユーザーデータを登録できるようにする（考案したスキーマのうち最低限の内容）
* 登録したデータをREST-JSONとSPARQL-RDFで取得できるようにする
* 知り合いを集めてEdit-thonをする（実際に日本酒を飲んで、データを登録するパーティー）
* Edit-thonのフィードバックから改善する

## LODチャレンジ2016以後にやりたいこと

* 考案したスキーマすべてに対応する
* 知らない人にもEdit-thonに参加してもらう
* 酒蔵や酒屋にもEdit-thonに協力してもらう
* Sakepedia（仮）を使ったアプリをつくる
* 酒蔵おすすめの飲み方など、酒蔵が思うお客さんに飲んでほしいスタイルややり方をデータとして作成
* アニメに登場やJALで提供されたなどのうんちく情報をデータとして構築
* 酒蔵ツーリズムにつながるようにしたい　⇒地域の活性化につなげる
* 居酒屋や酒屋の取り扱っている銘柄の可視化
* 相性の良い料理から材料へとつながり、地域の特産物（淡路島の玉ねぎ）につなげる
* 酒蔵を介して日本酒イベントの情報へもリンクさせたい

## 東京オリンピックまでにやりたいこと

* 多言語対応
* 日本酒といえばコレという定番アプリを作る

## 利用予定のオントロジー（メモ書き）
+ [schema.org](http://schema.org/)
+ [rdf](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
+ [rdfs](http://www.w3.org/2000/01/rdf-schema#)
+ [ont](http://www.daml.org/2001/03/daml-ont#)
+ [bevon](http://rdfs.co/bevon/)
+ [DBpedia Japanese](http://ja.dbpedia.org/)
