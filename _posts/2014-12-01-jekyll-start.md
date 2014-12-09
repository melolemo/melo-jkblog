---
layout: post
title:  "Jekyll を始める"
date:   2014-12-01
categories: jekyll
---
Jekyll とは、Ruby 製のシンプルなブログを構築するジェネレーターです。一般的に GitHub Pages に Git で Deploy して使用するため開発系の仕事をしている人たちに人気があるようです。Ruby や Git を理解していない素人には、少し敷居が高いような感じがしますが、手軽に始められるなどの記事も散見されましたので、トライしてみることにします。


# Jekyll のインストール

## PC 環境

今回は、下記のような環境にインストールします。

- Windows 8.1
- Ruby 2.0.0p598 (2014-11-13) [i386-mingw32]
- DEVELOPMENT KIT
- Git for windows version 1.9.4.msysgit.2
- Msys2
- Console2 + Nyaos 3.3.9
- Jekyll 2.5.2

## 準備

Jekyll を使用するには、Ruby をインストールする必要があります。また、DEVELOPMENT KIT も必要なので一緒にインストールします。

### Ruby のインストール

[Ruby Installer](http://rubyinstaller.org/downloads/) のサイトから使用するバージョンの Ruby をダウンロードします。ダウンロードした Ruby のバージョンに合わせて、DEPELOPMENT KIT もダウンロードします。
今回は、Ruby 2.0.0p598 ( 32bit版 )をインストールしました。それぞれインストールが完了したら、DEPELOPMENT KIT をインストールしたディレクトリに移動し、Ruby コマンドプロンプトで下記のコマンドを実行します。

~~~ bash
$ ruby dk.rb init
$ ruby dk.rb install
~~~

Gem を最新のバージョンにします。

~~~ bash
$ gem install rubygems-update
$ update_rubygems
~~~

正常にインストールが完了したか、バージョンを表示させるコマンドで確認します。

~~~ bash
$ ruby -v
ruby 2.0.0p598 (2014-11-13) [i386-mingw32]

$ gem -v
2.4.5
~~~

上記のようにバージョンが表示されると思います。これで、Ruby を使用する事ができます。


### Jekyll のインストール

本家のサイトによると Jekyll は、「下記のコマンドだけで手軽に始める事ができる」みたいな記述がされています。

~~~ bash
~ $ gem install jekyll
~ $ jekyll new myblog
~ $ cd myblog
~/myblog $ jekyll serve
# => Now browse to http://localhost:4000
~~~

上記の内容は、

- Jekyll のインストール
- myblog というディレクトリに Jekyll のブログのひな形を作成
- myblog ディレクトリに移動
- サーバー起動（ビルド後にサーバー起動）

ブラウザで、http:/localhost:4000 にアクセスするとブログのひな形が表示されるという内容です。

しかし、Windows の場合は、悲しいことにエラーになってしまします。
エラーの原因は、記事に syntaxhighlighter の記述があるためです。Jekyll は、syntaxhighlighter の初期値が pygments になっていますが、Windows は、pygments に対応していないようです。

一般的な対応策として、syntaxhighlighter を pygments と互換性のある Rouge に変更する方法があります。手順は、下記のようになります。

Rouge のインストール

~~~ bash
$ gem install rouge
~~~

_config.yml に下記の内容を追加する

~~~ bash
highlighter: rouge
~~~

Jekyll の古いバージョンでは、別途、Python をインストールし、Python で、pygments をインストールすると Windows でも pygments が利用できるようですが、現在のバージョンは、_config.yml に下記の内容を追加することで、pygments が使用できるようになります。

~~~ bash
highlighter: pygmentize
~~~

pygments ではなく pygmentize であることに注意してください。


まだ何か、メッセージが出ています。Windows の場合は、wdm が必要みたいなメッセージが・・・

wdm をインストールします。

~~~ bash
$ gem install wdm
~~~

Jekyll を実行してメッセージが出ないことを確認します。


## Bundler を使用して Jekyll をインストールする

下記の内容の Gemfile を作成します。

~~~ ruby
# A sample Gemfile
source "https://rubygems.org"

gem "jekyll"
gem "wdm", ">= 0.1.0"
~~~

Bundler を使用して Jekyll をインストールします。

~~~ bash
$ bundle install --path vendor/bundle
~~~

あとは、Jekyll のルールに従ってブログを構築していきます。Jekyll の場合は、middleman のようにカレントディレクトリーにひな形を作成することができません。ひな形を利用したい場合は一旦、jekyll new sample で、sample ディレクトリにひな形を作成し、中身をカレントディレクトリに移動後、sample ディレクトリを削除するなど工夫をすることになります。


この状態で、jekyll serve を実行するとエラーとなりますので、_config.yml に下記の内容を追加します。

~~~ ruby
exclude: ['vendor']
~~~

## まとめ

### Windows で Jekyll を使用する場合の注意

- syntaxhighlighter を使用する場合、_config.yml に highlighter: pygmentize を追加する。または、Rouge をインストールして対応する。
- wdm をインストールする。

### Bundler を使用してインストールする場合の注意

- _config.yml に exclude: ['vendor'] を追加する。
