---
sidebar_position: 1
---

export const Highlight = ({children, color, black}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: black ? '#000' : '#fff',
      padding: '7px',
      cursor: 'pointer',
    }}>
    {children}
  </span>
);

<div align="center">
    <img src="/img/fcs.png" />
    <p> FCS - Festival Comprehensive System </p> 
</div>

# ようこそ

とても見やすい見た目のDocsへようこそ！

ただの仕様書です。はい。

# どうやって見る感じ？

はい、このDocsの簡単な見方をご紹介します。

## Methods

> <Highlight color="#c1000f"> void </Highlight>


これは `何も返さない` を意味しています。

> <Highlight color="#c1c10f"> Object </Highlight>


これは `Object` を返すを意味しています。

（JSONも含まれたり）

> <Highlight color="#ff660f"> Array </Highlight>


これは `配列` を返すを意味しています。

## HTTP Methods

> <Highlight color="#00ccff"> GET </Highlight>


これは `取得専用` を意味しています。

> <Highlight color="#ffcc22"> POST </Highlight>


これは `送信専用` を意味しています。

> <Highlight color="#ffc0ff"> WebSocket </Highlight>


これは `WebSocket接続` を意味しています。

# Properties について

| 値 | 型 | いつももあるか | 説明 |
| --- | --- | --- | --- |
| Ore | String | YES | おれ |
| Some | Something | NO | なんこれ |

こんな感じで、帰ってくるであろうObjectの情報があります。

# POST Properties

| 値 | 型 | 必要なものであるか | 説明 |
| --- | --- | --- | --- |
| Ore | String | YES | おれ |
| Some | Something | NO | なんこれ |

こんな感じで、`POST`に必要なデータが書いてあります。