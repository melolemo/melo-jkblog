---
layout: post
title:  "Jekyll Start"
date:   2014-11-21
categories: jekyll
tags: web
---
ブログといえば、WordPress が有名ですが、多機能のため素人には、若干扱いにくい感じがします。
Jekyll は、シンプルなサイトジェネレータです。


Windows と Ruby は、相性が良くないと言われています。

今回は、下記のシステムにインストールすることにします。

## インストール環境

- Woindows 8.1
- Ruby 2.0.0 ( 32bit版 )
- DEVELOPMENT KIT
- Jekyll 2.5.1

## Ruby のインストール

Jekyll をインストールするには、Ruby をインストールする必要があります。当方は、Windows なので、<a href="http://rubyinstaller.org/">RubyInstaller for Windows</a> のサイトから本体をダウンロードしました。
今回は、Ruby2.0.0 ( 32bit版 ) と DEVELOPMENT KIT をインストールしました。
DEVELOPMENT KIT を利用するには、下記の作業が必要です。この作業は、DEVELOPMENT KIT をインストールしたディレクトリに移動して実行します。

~~~ bash
$ ruby dk.rb init
$ ruby dk.rb install
~~~

Gem を最新のバージョンにします。

~~~ bash
$ gem install rubygems-update
$ update_rubygems
~~~

インストールが正常に出来たか確認します。

~~~ bash
$ ruby -v
ruby 2.0.0p598 (2014-11-13) [i386-mingw32]

$ gem -v
2.4.2
~~~

## Jekyll のインストール

### Bundler を使わずにインストールする

本家サイトに記述されている通りにインストールしてみます。

~~~ bash
~ $ gem install jekyll
~ $ jekyll new myblog
~ $ cd myblog
~/myblog $ jekyll serve
# => Now browse to http://localhost:4000
~~~


現状の環境では、うまく動きません。
syntaxhilighter の payments に対応していないようです。
記事の syntaxhilighter の部分を削除すると、とりあえず動作しますが、下記のようなメッセージが表示されます。

~~~ bash

~~~

wdm をインストールします。

~~~ bash
$ gem install wdm
~~~

syntaxhighlighter は、rouge を使用することにします。

~~~ bash
$ gem install rouge
~~~

config.yml に下記の記述を追加します。

~~~ bash
highlight: rouge
~~~

### Bundler を使用してインストールする

Bundler をインストールする

~~~ bash
$ gem install bundler
~~~

Projrct ディレクトリの作成と移動

~~~ bash
$ mkdir sample
$ cd sample
~~~

Gemfile の作成

~~~ bash
$ bundle init
~~~

作成された Gemfile に下記のコードを追加します。

~~~ bash
gem "jekyll"
gem "rouge"
gem "wdm"
~~~

Gemfile は、下記のようになります

~~~ ruby
# A sample Gemfile
source "https://rubygems.org"

gem "jekyll"
gem "rouge"
gem "wdm"
~~~

Jekyll のインストール

~~~ bash
$ bundle install --path vender/bundle
~~~

これで、Jekyll のインストールは、完了です。
現在の sample ディレクトリの中は、Bundler でインストールしたので、下記のようになります。

~~~ bash
.bundle/
vender/
Gemfile
Gemfile.lock
~~~

## Jekyll コマンドを使用する

Jekyll の動作を確認します。適当な index.html ファイルを作成し Build してみます。
動作のテストだけなので、index.html の内容は、hello world などで良いと思います。
今回は、Bundler でインストールしていますので、Jekyll コマンドの前に bundle exec が必要となります。
下記のコマンドを実行します。

~~~ bash
$ bundle exec jekyll build
~~~

残念ですが、エラーとなってしまいました。

~~~ bash
ERROR: YOUR SITE COULD NOT BE BUILT:
                    ------------------------------------
                    Invalid date '0000-00-00': Post '/vender/bundle/ruby/2.0.0/gems/jekyll-2.4.0/lib/site_template/_posts/0000-00-00-welcome-to-jekyll.markdown.erb' does not have a valid date in the filename.
~~~
