import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Top" />
    <h2>経歴(プロフィール)</h2>
    <h3>ござって何者？</h3>
    <p>
      Youtubeを中心に活躍するピアニスト「ござ」。(本サイトは非公式ホームページです)<br/>
      クラシック、ポップス、ジャズ、サブカル系(アニソン、ゲーム曲、ボカロ)等、幅広いレパートリー。<br/>
      即興でおこなうジャズ風、ラテン風等へのアレンジが持ち味。<br/>
      幼少期からピアノに慣れ親しんでいたが大学は音大ではない。<br/>
      <br/>
      2009年頃からピアノ動画の投稿を始めている。<br/>
      長らく知る人ぞ知る存在であったが、<br/>
      都庁のストリートピアノで菊池亮太と「丸の内サディスティック」の連弾動画をYoutubeに投稿。<br/>
      その後、それまで働いていた職場を退職しプロ転向を宣言、<br/>
      ストリートピアノで「Official髭男dism(ヒゲダン)」「ベートーベン」「パプリカ」等を演奏し徐々に知られるようになる。<br/>
      <br/>
      ストリートピアノ動画の再生回数が多いが、<br/>
      不定期に配信されるYoutube顔出しライブ配信での即興演奏がファンから人気。(稀にツイキャスでも配信する)<br/>
      ライブ配信中にチャットで弾いてほしい曲をリクエストすると、運が良ければ弾いてもらえる。<br/>
      以前は、ペンギンの被り物をしながら電子ピアノでの配信だったが、最近はグランドピアノで素顔を出して配信することが多い。(ただしマスクはしている)<br/>
      <br/>
      <a href="https://www.youtube.com/channel/UC2Kb6k-aGIaKxlNPkrdcoHA">Youtubeチャンネル</a>はこちら<br/>
      <a href="https://twitcasting.tv/gprza/">ツイキャス</a>はこちら<br/>
      <a href="https://twitter.com/gprza">Twitter</a>はこちら<br/>
      <br/>
      Youtubeで活動する以前は<Link to="https://www.nicovideo.jp/user/3359408">ニコニコ動画</Link>にて「あんだば先生」と呼ばれていた。<br/>
      <br/>
      <Link to="https://www.ymm.co.jp/magazine/piano/">月刊ピアノ</Link>にて「ござさんの All that Goza's Piano Arrange」を連載中。<br/>
      <br/>
      編曲した楽譜も販売中。<br/>
      <Link to="https://mucome.net/profile?id=2690">mucome</Link>はこちら<br/>
      <Link to="https://store.piascore.com/publishers/1343">Piascore</Link>はこちら<br/>
    </p>
    <h3>本人による経歴紹介</h3>
    <blockquote class="twitter-tweet">
      <p lang="ja" dir="ltr">
        またフォロワーさんが増えたので自己紹介<br/>
        <br/>
        ・ピアノ教室でクラシック12年<br/>
        ・中学高校で吹奏楽（エンジョイ勢）6年（クラリネットとユーフォニアム）<br/>
        ・大学でビッグバンド3年（ピアノ）<br/>
        ・配信でアニソンなどサブカル系9年<br/>
        ・子供の頃から練習の合間にポップスをちょろちょろ<br/>
        <br/>
        みたいな音楽歴です☺️☺️
      </p>
      &mdash; ござ 🎹 (@gprza) 
      <a href="https://twitter.com/gprza/status/1091724201847795712?ref_src=twsrc%5Etfw">
        February 2, 2019
      </a>
    </blockquote>
    <h3>Youtubeチャンネル紹介動画</h3>
    <p>
      <div class="youtube">
        <iframe  
          src="https://www.youtube.com/embed/FsIOsWyjz7U" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </p>
    <h3>書籍/出版物</h3>
    <p>
      <ul>
        <li>
          「総再生数1億回超え！ネットピアニストたちの動画を楽譜にしてみた結果・・・！？」ヤマハミュージックメディア(2020年1月24日発売)<br/>
          <Link to="https://www.ymm.co.jp/feature/netpianists.php">詳細はこちら</Link>
        </li>
        <li>
        「月刊ピアノ」アレンジ講座連載(2020年1月号～現在)
        </li>
        <li>
        「月刊ショパン」 2021年2月号ござ×菊池亮太対談掲載
        </li>
        <li>
        「月刊ショパン」 2021年1月号ござ×ハラミちゃん対談掲載
        </li>
      </ul>
    </p>
  </Layout>
)

export default IndexPage
