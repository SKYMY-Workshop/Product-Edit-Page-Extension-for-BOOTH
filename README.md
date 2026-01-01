# Product Edit Page Extension for BOOTH

BOOTHの商品編集画面における「商品説明」等の入力欄幅を商品ページ相当に拡張し、縦方向も文字数に応じて自動的に拡張するChrome拡張機能です。

A Chrome extension that automatically expands and adjusts the size of input fields on the BOOTH product editing screen to match the actual product page layout.

## 動作イメージ / Demo

<table>
  <tr>
    <th width="50%">Before (適用前)</th>
    <th width="50%">After (適用後)</th>
  </tr>
  <tr>
    <td><img src="適用前.gif" width="100%" alt="Before Application"></td>
    <td><img src="適用後.gif" width="100%" alt="After Application"></td>
  </tr>
</table>

👉 **最新版のダウンロード / Download:** 

https://github.com/SKYMY-Workshop/Product-Edit-Page-Extension-for-BOOTH/releases

## インストール方法 / Installation

1. **ダウンロード**: 上記リンク（Releases）から `Source code.zip` をダウンロードし、解凍します。
2. **拡張機能管理ページを開く**: Chromeブラウザのアドレスバーに `chrome://extensions/` と入力して開きます。
3. **デベロッパーモード**: 右上の **「デベロッパーモード」** スイッチを **ON** にします。
4. **読み込み**: 左上の **「パッケージ化されていない拡張機能を読み込む」** をクリックし、手順1で解凍したフォルダを選択します。

> **⚠️ 注意 / Important**
> 指定したフォルダを後から移動・削除すると拡張機能が動作しなくなります。あらかじめ **マイドキュメント** や **Program Files** など、移動しない場所に保存してから読み込んでください。

## 🗑️ アンインストール方法 / Uninstallation

1. Chromeのツールバーにあるパズルピースアイコン（拡張機能）をクリックし、**「拡張機能を管理」** を選択します。
2. 一覧から **Product Edit Page Extension** を探し、**「削除」** をクリックします。
3. インストール時に保存したフォルダを削除します。

---

## 主な機能 / Features

**🇯🇵 日本語**
* **レイアウト自動調整**: 拡張機能を有効にすると、編集画面の入力欄が実際の表示幅（最大720px）に合わせて広がります。
* **高さの自動拡張**: テキスト量に応じて入力欄の高さが自動的に伸び縮みします（`field-sizing` 対応）。これにより、スクロールせずに全体を確認しやすくなります。

---

## 🛠️ カスタマイズ / Customization

動作設定（幅や高さの制限）を変更したい場合は、フォルダ内の `content.js` にある定数を直接編集してください。

```javascript
// content.js
const SETTINGS = {
  width: 100,       // 幅の割合 (%) / Width percentage
  minHeight: 200,   // 最小高さ (px) / Minimum height
  maxWidth: '720px' // 最大幅 (px) / Maximum width
};

```
## 注意事項 / Notes

* **非公式ツールです**: この拡張機能はBOOTH公式のツールではありません。
* **仕様変更のリスク**: BOOTHのUIアップデートにより、予告なく動作しなくなる可能性があります。
* **Unofficial Tool**: This extension is not an official BOOTH tool.
* **Compatibility**: It may stop working unexpectedly due to BOOTH UI updates.

## 免責事項 / Disclaimer

本拡張機能をご利用いただく前に、以下の免責事項を必ずご確認ください。

* **非公式ツールであること**
    本拡張機能は個人の開発者によって作成された非公式ソフトウェアです。pixiv Inc. および BOOTH 公式とは一切関係ありません。本ツールに関するお問い合わせを BOOTH 事務局へ送ることはお控えください。

* **保証の否認**
    本拡張機能は「現状有姿（as is）」で提供されます。開発者は、本拡張機能の完全な動作、特定の目的への適合性、および不具合がないことを保証しません。また、BOOTH の仕様変更により、予告なく動作しなくなっても修正の義務を負いません。

* **責任の制限**
    本拡張機能の使用によって生じた、いかなる直接的・間接的な損害（商品説明文の消失、レイアウト崩れ、機会損失、アカウントへの影響などを含むがこれに限らない）について、開発者は一切の責任を負いません。ご利用は利用者ご自身の責任において行ってください。

* **権利の帰属**
    「BOOTH」は、ピクシブ株式会社の商標または登録商標です。

* **BOOTHへの問い合わせ禁止**
    本ツールが原因で不具合が生じた場合でも、BOOTH公式へのお問い合わせは絶対に行わないでください。

## 謝辞 / Acknowledgments

BOOTHという素晴らしいプラットフォームを提供してくださっている pixiv Inc. に感謝します。
また、本ツールの開発にあたり、以下のコードおよび nekobako 様の知見を参考にさせていただきました。

* [nekobako/content.js (Gist)](https://gist.github.com/nekobako/81cc427b7c80fe072ca82907b9da026f)

## ライセンス / License

MIT License. 詳細は [LICENSE](./LICENSE) を参照してください。

## 🔄 更新履歴 / Changelog

* **v1.0.0**
    * 初回リリース
