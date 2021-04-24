import Header from'./header'
import Cards from './cards'



function App() {
  return (
    <>
    <Header/>
    <div className="cardss">
    <Cards
     imgsrc='/images/1.png'
     sname='NETFLIX ANIME SERIES'
     ctitle='NARUTO SHIPPUDEN'
     clink='https://animeheaven.ru/detail/naruto-shippuuden-sub.36530'
     />
     <Cards
     imgsrc='/images/2.png'
     sname='NETFLIX ANIME SERIES'
     ctitle='DEMON SLAYER'
     clink='https://animeheaven.ru/detail/kimetsu-no-yaiba-sub.92845'
     />
     <Cards
     imgsrc='/images/3.jpg'
     sname='NETFLIX ANIME SERIES'
     ctitle='TOKYO GHOUL'
     clink='https://animeheaven.ru/detail/tokyo-ghoul-dub.85859'
     />
     <Cards
     vlinks='/videos/dbs.mp4'
     imgsrc='/images/4.jpg'
     sname='NETFLIX ANIME SERIES'
     ctitle='DRAGON BALL SUPER'
     clink='https://animeheaven.ru/detail/dragon-ball-super-sub.55887'
     />
     <Cards
     imgsrc='/images/5.jpg'
     sname='NETFLIX ANIME SERIES'
     ctitle='MY HERO ACEDEMIA'
     clink='https://animeheaven.ru/detail/boku-no-hero-academia-sub.37900'
     />
     <Cards
     imgsrc='/images/6.jpg'
     sname='NETFLIX ANIME SERIES'
     ctitle='ATTACK ON TITAN'
     clink='https://animeheaven.ru/detail/shingeki-no-kyojin-sub.33321'
     />
      <Cards
     imgsrc='/images/7.jpg'
     sname='NETFLIX ANIME SERIES'
     ctitle='BLACK CLOVER'
     clink='https://animeheaven.ru/detail/black-clover-tv.65233'
     />
    <Cards
     imgsrc='/images/8.png'
     sname='NETFLIX ANIME SERIES'
     ctitle='BLEACH'
     clink='https://animeheaven.ru/detail/bleach-sub.63474'
     />
     <Cards
     imgsrc='/images/9.png'
     sname='NETFLIX ANIME SERIES'
     ctitle='SWORD ART ONLINE'
     clink='https://animeheaven.ru/detail/sword-art-online-alicization-war-of-underworld-sub.94057'
     />
     <Cards
     imgsrc='/images/10.webp'
     sname='NETFLIX ANIME SERIES'
     ctitle='TOWER OF GOD'
     clink='https://animeheaven.ru/detail/kami-no-tou.31768'
     />
    </div>
    </>
  );
}

export default App;
