import React from 'react';

const basics = {
  arrow: <><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></>,
  arrowUp: <><path d="M5 19 19 5"/><path d="M8 5h11v11"/></>,
  chevron: <path d="m6 9 6 6 6-6"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  cross: <><path d="M6 6 18 18M18 6 6 18"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  menu: <><path d="M4 8h16M4 16h16"/></>,
  phone: <path d="M8 3H6a3 3 0 0 0-3 3c0 8.3 6.7 15 15 15a3 3 0 0 0 3-3v-2l-5-3-2.5 2.3a16 16 0 0 1-4.8-4.8L11 8 8 3z"/>,
  mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></>,
  battery: <><rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 10v4M6 12h10"/></>,
  camera: <><rect x="3" y="6" width="18" height="14" rx="3"/><path d="m8 6 2-3h4l2 3"/><circle cx="12" cy="13" r="4"/></>,
  phoneDevice: <><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 19h2"/></>,
  tool: <path d="M19 4a6 6 0 0 0-8 8l-7 7a2 2 0 0 0 3 3l7-7a6 6 0 0 0 8-8l-4 4-4-4z"/>,
  refresh: <><path d="M20 11a8 8 0 0 0-14-5L3 9"/><path d="M3 4v5h5"/><path d="M4 13a8 8 0 0 0 14 5l3-3"/><path d="M21 20v-5h-5"/></>,
  shield: <><path d="M12 2 20 6v6c0 5-3 8-8 10C7 20 4 17 4 12V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></>,
  spark: <><path d="M12 2 9.6 9.6 2 12l7.6 2.4L12 22l2.4-7.6L22 12l-7.6-2.4z"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></>,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M5 16H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1"/></>,
  send: <><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></>,
  telegram: <><path d="m21.5 3.5-3.4 16c-.2 1-.8 1.2-1.6.7l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.2c.4-.4-.1-.6-.6-.3l-11.1 7-4.8-1.5c-1-.3-1-1 .2-1.5L19.8 2c.9-.4 2 .3 1.7 1.5z"/></>,
  upload: <><path d="M12 16V4m-5 5 5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></>,
  trash: <><path d="M4 7h16M10 3h4M6 7l1 14h10l1-14M10 11v6M14 11v6"/></>,
  percent: <><circle cx="7" cy="7" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 19 19 5"/></>,
  headphones: <><path d="M4 13v-2a8 8 0 1 1 16 0v2"/><rect x="3" y="13" width="4" height="7" rx="2"/><rect x="17" y="13" width="4" height="7" rx="2"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></>,
  filter: <><path d="M4 7h16M7 12h10M10 17h4"/></>,
  quote: <path d="M7 8H4v6h5v-5H6V6h5v3zM18 8h-3v6h5v-5h-3V6h5v3z"/>,
  star: <path d="m12 2 3.1 6.3 7 1-5 4.9 1.2 7-6.3-3.3-6.3 3.3 1.2-7-5-4.9 7-1z"/>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/></>,
  laptop: <><rect x="4" y="3" width="16" height="13" rx="2"/><path d="M2 20h20l-2-4H4z"/></>,
  vk: <path d="M3 7h3c.1 4 2.3 7 3.2 7.6V7h3v4.4c1-1 2.6-2.9 3-4.4H18c-.5 2.1-2.3 4.5-3.2 5.4 1.1.6 3.1 2.6 4.1 4.6H16c-1-1.5-2.5-2.9-3.8-3.2V17h-1C6.7 17 3.7 12.8 3 7z"/>,
  dot: <circle cx="12" cy="12" r="6"/>,
};

export function Icon({name='arrow', size=20, strokeWidth=1.8, className='', ...props}) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>{basics[name] ?? basics.arrow}</svg>
}

let gid = 0;
export function DeviceIllustration({variant='front',color='blue',className='',size='md',screenIssue=false}) {
  const gradients={blue:['#6B8EF9','#223A91','#0D1638'], lilac:['#C9BFF9','#7D75B6','#373552'], lime:['#D1EDAB','#7BA778','#2A513D'], silver:['#D5E3EF','#7D92AA','#384759'], rose:['#EEC8CB','#BA808F','#684457']};
  const shades=gradients[color]||gradients.blue;
  const ident=React.useId().replaceAll(':','');
  const front=variant==='front'||variant==='broken';
  return <svg className={`device-art device-art--${size} ${className}`} role="img" aria-label={front?'Иллюстрация смартфона с экраном':'Иллюстрация смартфона с камерами'} viewBox="0 0 240 380" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`${ident}-metal`} x1=".05" y1="0" x2=".95" y2="1"><stop stopColor="#EEF4FF"/><stop offset=".27" stopColor={shades[0]}/><stop offset=".7" stopColor={shades[1]}/><stop offset="1" stopColor="#172138"/></linearGradient>
      <linearGradient id={`${ident}-scr`} x1=".1" y1=".05" x2=".9" y2="1"><stop stopColor={shades[0]}/><stop offset=".48" stopColor={shades[1]}/><stop offset="1" stopColor={shades[2]}/></linearGradient>
      <linearGradient id={`${ident}-shine`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".65"/><stop offset=".55" stopColor="#fff" stopOpacity="0"/></linearGradient>
      <filter id={`${ident}-shadow`} x="-40%" y="-30%" width="180%" height="170%"><feGaussianBlur stdDeviation="10"/></filter>
    </defs>
    <ellipse cx="130" cy="359" rx="79" ry="11" fill="#0C1023" opacity=".24" filter={`url(#${ident}-shadow)`}/>
    <rect x="31" y="7" width="178" height="351" rx="33" fill="#0A0F1B" stroke="#63718F" strokeWidth="1.5"/>
    <rect x="36" y="11" width="168" height="343" rx="29" fill={`url(#${ident}-metal)`}/>
    {front? <>
      <rect x="40.5" y="15" width="159" height="334" rx="26" fill="#05070B"/>
      <rect x="44" y="19" width="152" height="326" rx="24" fill={`url(#${ident}-scr)`}/>
      <path d="M47 263c29-75 107-103 149-165v246H44v-31c8-16 3-25 3-50z" fill="#9DDDFE" opacity=".18"/>
      <path d="M52 286c46-136 74-102 131-200" stroke="#E4E9FF" strokeWidth="51" strokeLinecap="round" opacity=".11" fill="none"/>
      <path d="M48 164C97 96 133 141 196 24" stroke="#C9E5FF" strokeWidth="23" strokeLinecap="round" opacity=".23" fill="none"/>
      <circle cx="134" cy="215" r="106" fill={`url(#${ident}-shine)`} opacity=".17"/>
      <rect x="84" y="23" width="72" height="19" rx="10" fill="#05070C"/>
      <circle cx="143" cy="31.5" r="3" fill="#1C253E"/>
      <rect x="104" y="330" width="34" height="3" rx="1.5" fill="#e8efff" opacity=".52"/>
      {screenIssue && <g stroke="#e6edff" fill="none" strokeWidth="1.3" opacity=".9"><path d="m53 101 49 21-18 54 26 37-33 57"/><path d="m102 122 12-39 44-16-29-43"/><path d="m84 176 68 8 39 71"/><path d="m110 213 32 43-12 86"/><path d="m142 256 31-30 21-15"/></g>}
    </>:<>
      <rect x="40" y="16" width="160" height="333" rx="28" fill={`url(#${ident}-scr)`}/>
      <rect x="47" y="24" width="95" height="105" rx="26" fill={shades[0]} opacity=".92" stroke="#fff" strokeOpacity=".4" strokeWidth="1.5"/>
      {[[77,55],[118,90],[77,100]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="19" fill="#131C2E" stroke="#B7C9E3" strokeWidth="3"/><circle cx={x} cy={y} r="12" fill="#203454"/><circle cx={x-3} cy={y-4} r="4" fill="#6592CD"/><circle cx={x} cy={y} r="7" stroke="#728BAE" strokeWidth="1.5" fill="none"/></g>)}
      <circle cx="120" cy="55" r="4" fill="#212C42"/><circle cx="120" cy="55" r="2" fill="#FFE7AD"/>
      <path d="M58 175c65-33 96 41 133 19v153H42V211z" fill="#fff" opacity=".045"/>
      <path d="M48 34v290" stroke="#fff" opacity=".14" strokeWidth="2"/>
    </>}
    <rect x="26" y="91" width="4" height="29" rx="2" fill="#7C88A5"/><rect x="26" y="132" width="4" height="39" rx="2" fill="#7C88A5"/><rect x="210" y="116" width="4" height="54" rx="2" fill="#7C88A5"/>
  </svg>
}

export function HeroArtwork(){
  return <div className="hero-art" aria-hidden="true">
    <svg className="hero-halo" viewBox="0 0 550 560"><defs><radialGradient id="haloGlow"><stop stopColor="#8199FF" stopOpacity=".30"/><stop offset=".5" stopColor="#657EFF" stopOpacity=".11"/><stop offset="1" stopColor="#657EFF" stopOpacity="0"/></radialGradient></defs><circle cx="275" cy="260" r="256" fill="url(#haloGlow)"/><circle cx="275" cy="260" r="201" stroke="#7B91C8" strokeWidth="1" strokeOpacity=".17" fill="none"/><circle cx="275" cy="260" r="150" stroke="#7B91C8" strokeWidth="1" strokeOpacity=".15" fill="none"/><path d="M20 340Q280 450 530 160" fill="none" stroke="#A1FFDA" strokeOpacity=".2" strokeDasharray="5 8"/></svg>
    <div className="hero-phone-back"><DeviceIllustration variant="back" color="silver" /></div>
    <div className="hero-phone-front"><DeviceIllustration color="blue" /></div>
    <div className="float-note float-note--top"><span className="float-note__dot"/><span><b>Новое и с историей</b><small>Подберите свой iPhone</small></span></div>
    <div className="float-note float-note--bottom"><span className="float-note__symbol"><Icon name="tool" size={18}/></span><span><b>Ремонт смартфонов</b><small>Начнём с описания проблемы</small></span></div>
    <span className="orbit-point orbit-point--one"/><span className="orbit-point orbit-point--two"/>
  </div>
}

export function ServiceArtwork({kind}){
  if(kind==='repair')return <svg className="service-illustration" viewBox="0 0 300 240" role="img" aria-label="Схема ремонта смартфона">
    <defs><linearGradient id="repairScreen" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#BED2FF"/><stop offset="1" stopColor="#4B67B6"/></linearGradient></defs>
    <g transform="translate(58 10) rotate(-13 110 107)"><rect x="44" y="10" width="116" height="208" rx="19" fill="#151F30"/><rect x="49" y="15" width="106" height="198" rx="16" fill="url(#repairScreen)"/><path d="M54 74Q110 32 152 116" stroke="#D9E5FF" opacity=".5" strokeWidth="28" fill="none"/><rect x="91" y="19" width="28" height="7" rx="3" fill="#17263A"/></g>
    <g stroke="#A8BCD9" strokeWidth="2" fill="none"><path d="M40 83 14 59"/><path d="M217 52 264 35"/><path d="M218 181 270 197"/></g><circle cx="14" cy="59" r="5" fill="#A9D37C"/><circle cx="264" cy="35" r="5" fill="#A9D37C"/><circle cx="270" cy="197" r="5" fill="#A9D37C"/>
    <g transform="translate(210 78)"><rect width="65" height="79" rx="9" fill="#DFE8F4"/><rect x="13" y="13" width="39" height="53" rx="6" fill="#7C99D7"/><rect x="19" y="24" width="27" height="31" rx="4" fill="#B9CFFF"/></g>
  </svg>;
  if(kind==='trade')return <svg className="service-illustration" viewBox="0 0 300 240" role="img" aria-label="Обмен одного смартфона на другой"><defs><linearGradient id="tradeGrad" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#D8F3A4"/><stop offset="1" stopColor="#659A77"/></linearGradient></defs>
    <g transform="translate(39 34) rotate(-15 65 90)"><rect x="23" width="99" height="181" rx="19" fill="#1F3333"/><rect x="28" y="5" width="89" height="171" rx="15" fill="#799A8F"/><circle cx="56" cy="28" r="11" fill="#304F50"/><circle cx="84" cy="28" r="11" fill="#304F50"/></g>
    <g transform="translate(144 11) rotate(11 65 90)"><rect x="23" width="103" height="192" rx="20" fill="#152130"/><rect x="29" y="6" width="91" height="180" rx="15" fill="url(#tradeGrad)"/><path d="M31 110Q83 60 118 28" stroke="#FFF" opacity=".4" strokeWidth="28" fill="none"/><rect x="57" y="11" width="36" height="9" rx="4.5" fill="#182A39"/></g>
    <path d="m123 115 18-12-17-13" stroke="#223E42" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
  return <svg className="service-illustration" viewBox="0 0 300 240" role="img" aria-label="Два смартфона для выбора"><defs><linearGradient id="buyGrad" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#B0C2FF"/><stop offset=".6" stopColor="#5669C5"/><stop offset="1" stopColor="#34417E"/></linearGradient></defs>
    <g transform="translate(42 23) rotate(-16 60 95)"><rect x="14" y="6" width="110" height="191" rx="21" fill="#1E2B4A"/><rect x="19" y="11" width="100" height="180" rx="17" fill="#BEC9E8"/><rect x="30" y="22" width="51" height="58" rx="17" fill="#929FC4"/><circle cx="47" cy="42" r="11" fill="#1E2D4D"/><circle cx="65" cy="61" r="11" fill="#1E2D4D"/></g>
    <g transform="translate(135 10) rotate(13 65 100)"><rect x="13" y="2" width="115" height="210" rx="22" fill="#16213B"/><rect x="19" y="8" width="103" height="198" rx="18" fill="url(#buyGrad)"/><path d="M19 145Q74 74 121 53" stroke="#CADCFF" opacity=".35" strokeWidth="28" fill="none"/><rect x="54" y="12" width="38" height="11" rx="5.5" fill="#1A2342"/></g>
  </svg>;
}

export function ExplodedPhone({active='screen'}){
  const parts=[{id:'screen',label:'Экран'},{id:'battery',label:'Аккумулятор'},{id:'camera',label:'Камера'},{id:'charge',label:'Разъём'}];
  return <svg className="exploded-phone" viewBox="0 0 520 480" aria-label="Интерактивная схема компонентов смартфона" role="img">
    <defs><linearGradient id="expFront" x1="0" x2=".9" y1="0" y2="1"><stop stopColor="#C5D3FF"/><stop offset="1" stopColor="#6E8BE5"/></linearGradient><linearGradient id="expBack" x1="0" x2=".8" y1="0" y2="1"><stop stopColor="#495981"/><stop offset="1" stopColor="#182641"/></linearGradient></defs>
    <g transform="translate(102 77) rotate(-13 150 175)">
      <rect x="120" y="14" width="188" height="355" rx="30" fill="#111B2E" stroke="#536989" strokeWidth="4"/>
      <rect x="129" y="22" width="170" height="339" rx="23" fill="url(#expBack)"/>
      <g className={active==='camera'?'is-active':''}><rect x="157" y="48" width="89" height="102" rx="20" fill="#415675" stroke="#94ACCC" strokeWidth="2"/>
        {[[179,76],[223,105],[179,121]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="18" fill="#131F31" stroke="#C3D5EA" strokeWidth="3"/>)}
        <circle cx="223" cy="74" r="6" fill="#F5DC93"/>
      </g>
      <g className={active==='battery'?'is-active':''}><rect x="154" y="160" width="116" height="151" rx="12" fill="#D3E69B" opacity={active==='battery'?'.95':'.45'}/><rect x="167" y="172" width="90" height="121" rx="7" fill="#23334B"/><path d="M193 207h35M194 229h35M194 251h26" stroke="#91B4BE" strokeWidth="4" strokeLinecap="round"/></g>
      <g className={active==='charge'?'is-active':''}><rect x="194" y="344" width="44" height="12" rx="5" fill={active==='charge'?'#C7F68A':'#7485A3'}/></g>
      <g className={active==='screen'?'is-active':''} transform="translate(-114,-10)"><rect x="112" y="24" width="176" height="337" rx="27" fill="#142031" stroke="#88A1BE" strokeWidth="4"/><rect x="120" y="31" width="160" height="322" rx="22" fill="url(#expFront)"/><path d="M121 272Q200 156 280 101" stroke="#FFF" strokeOpacity=".28" strokeWidth="40" fill="none"/><rect x="167" y="36" width="63" height="15" rx="8" fill="#101927"/></g>
    </g>
    <g fill="none" stroke="#96ACCB" strokeWidth="1.5"><path d="M77 88H27"/><path d="M369 155h108"/><path d="M365 282h107"/><path d="M376 386h99"/></g>
    <g fill="#C7F68A"><circle cx="27" cy="88" r="4"/><circle cx="477" cy="155" r="4"/><circle cx="472" cy="282" r="4"/><circle cx="475" cy="386" r="4"/></g>
  </svg>
}

export function ExchangeArtwork(){return <svg className="exchange-illustration" viewBox="0 0 580 410" role="img" aria-label="Иллюстрация обмена смартфонов"><defs><linearGradient id="ex1" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#C9E998"/><stop offset="1" stopColor="#7AAB77"/></linearGradient><linearGradient id="ex2" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#D4DCFF"/><stop offset="1" stopColor="#667ED3"/></linearGradient></defs>
  <circle cx="291" cy="204" r="175" stroke="#596A50" strokeOpacity=".22" strokeWidth="2" fill="none" strokeDasharray="4 11"/><circle cx="291" cy="204" r="118" stroke="#596A50" strokeOpacity=".17" fill="none"/>
  <g className="exchange-old" transform="translate(74 47) rotate(-17 95 150)"><rect x="20" y="8" width="166" height="302" rx="29" fill="#1C2B37"/><rect x="26" y="14" width="154" height="290" rx="24" fill="#7C9B8B"/><rect x="43" y="31" width="84" height="93" rx="22" fill="#ACC4AA"/><circle cx="69" cy="60" r="19" fill="#21363E"/><circle cx="102" cy="90" r="19" fill="#21363E"/><path d="M30 170h147" stroke="#DCEFC8" opacity=".27"/></g>
  <g className="exchange-new" transform="translate(274 35) rotate(15 94 145)"><rect x="20" y="8" width="169" height="312" rx="30" fill="#172338"/><rect x="27" y="14" width="155" height="298" rx="24" fill="url(#ex2)"/><path d="M34 213C72 106 135 140 179 49" stroke="#FFF" opacity=".38" strokeWidth="38" fill="none"/><rect x="75" y="20" width="60" height="17" rx="8" fill="#111B32"/></g>
  <g transform="translate(247 185)"><circle cx="40" cy="40" r="39" fill="#11251D"/><path d="M18 40h44m-12-12 12 12-12 12" stroke="#CCF59A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></g>
  </svg>}

export function CityArtwork(){return <svg viewBox="0 0 610 250" width="100%" role="img" aria-label="Декоративная иллюстрация городских зданий, Омск"><defs><linearGradient id="cityLine" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#B1C9FC"/><stop offset="1" stopColor="#6F8CC9"/></linearGradient></defs>
  <g stroke="url(#cityLine)" strokeWidth="1.5" fill="none" opacity=".7"><path d="M1 213h609M45 213V108h97v105M142 213V61h104v152M246 213V138h68v75M314 213V82h116v131M430 213V112h102v101M532 213V162h58v51"/><path d="M65 137h21v24H65zM106 137h21v24h-21zM65 177h21v24H65zM106 177h21v24h-21zM159 82h23v30h-23zM203 82h23v30h-23zM159 131h23v30h-23zM203 131h23v30h-23zM159 179h23v30h-23zM203 179h23v30h-23zM339 108h26v27h-26zM386 108h26v27h-26zM339 152h26v27h-26zM386 152h26v27h-26zM450 137h24v24h-24zM491 137h24v24h-24zM450 174h24v24h-24zM491 174h24v24h-24z"/></g>
  <g transform="translate(319 14)"><rect x="3" y="29" width="126" height="171" rx="6" fill="#1A304E" stroke="#A1BBE4" strokeWidth="2"/><path d="M26 53h77v18H26zM26 91h77v18H26zM26 129h77v18H26zM26 167h77v18H26z" fill="#9AB6EC" opacity=".5"/><rect x="45" y="3" width="44" height="44" rx="22" fill="#C8F88A"/><path d="M67 14v22m-9-13 9-9 9 9" fill="none" stroke="#193A2C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></g>
  <path d="M0 219H610" stroke="#A5B6DB" strokeOpacity=".45"/>
</svg>}
