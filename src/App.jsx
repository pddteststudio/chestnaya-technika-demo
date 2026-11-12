import React, {useEffect, useMemo, useRef, useState} from 'react';
import {company, phoneModels, repairBrands, repairProblems, faq} from './data.js';
import {Icon, DeviceIllustration, HeroArtwork, ServiceArtwork, ExplodedPhone, ExchangeArtwork, CityArtwork} from './illustrations.jsx';

const phoneFilterLabels=['Все','На каждый день','Камера','Pro'];

function useReveal(){
  useEffect(()=>{
    const els=[...document.querySelectorAll('[data-reveal]')];
    if(typeof IntersectionObserver==='undefined'){els.forEach(el=>el.classList.add('is-visible'));return;}
    const obs=new IntersectionObserver(entries=>entries.forEach(item=>{if(item.isIntersecting){item.target.classList.add('is-visible');obs.unobserve(item.target)}}),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
    els.forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[]);
}

async function copyToClipboard(text){
  if(navigator.clipboard?.writeText) {
    try {await navigator.clipboard.writeText(text);return true;} catch { /* fallback */ }
  }
  try {
    const field=document.createElement('textarea');
    field.value=text;field.style.position='fixed';field.style.left='-9999px';
    document.body.appendChild(field);field.select();
    const success=document.execCommand('copy');field.remove();return !!success;
  } catch{return false;}
}

function Action({children,href,onClick,variant='primary',className='',icon='arrowUp',type='button',disabled=false,...props}){
  const classes=`action action--${variant} ${className}`;
  const content=<>{children}<Icon name={icon} size={18}/></>;
  if(href)return <a className={classes} href={href} onClick={onClick} {...props}>{content}</a>;
  return <button className={classes} onClick={onClick} type={type} disabled={disabled} {...props}>{content}</button>;
}

function SectionHead({overline,title,lead,dark=false}){
  return <div className={`section-head ${dark?'section-head--dark':''}`} data-reveal>
    <div className="eyebrow"><span className="eyebrow__dot"/>{overline}</div>
    <h2>{title}</h2>
    {lead&&<p>{lead}</p>}
  </div>;
}

function Header(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>30);
    onScroll();window.addEventListener('scroll',onScroll,{passive:true});
    return()=>window.removeEventListener('scroll',onScroll);
  },[]);
  useEffect(()=>{document.body.classList.toggle('mobile-nav-open',menuOpen);return()=>document.body.classList.remove('mobile-nav-open')},[menuOpen]);
  const close=()=>setMenuOpen(false);
  return <header className={`topbar ${scrolled?'topbar--scrolled':''}`}>
    <div className="container nav-inner">
      <a className="brand" href="#top" aria-label="Честная-Техника, на главную" onClick={close}><span className="brand-logo"><span>Ч</span><span className="brand-logo__dot"/></span><span className="brand-words">ЧЕСТНАЯ<span>ТЕХНИКА</span></span></a>
      <nav id="primary-navigation" className={`nav-links ${menuOpen?'nav-links--open':''}`} aria-label="Основная навигация">
        <a href="#directions" onClick={close}>Что делаем</a><a href="#models" onClick={close}>Смартфоны</a><a href="#repair" onClick={close}>Ремонт</a><a href="#trade-in" onClick={close}>Выкуп</a><a href="#contacts" onClick={close}>Контакты</a>
        <a href={company.telegram} target="_blank" rel="noreferrer" className="mobile-nav-contact" onClick={close}><Icon name="telegram" size={17}/> Telegram</a>
      </nav>
      <div className="nav-side"><a href={company.tel} className="nav-phone">{company.phone}</a><a className="nav-contact" href="#contacts"><Icon name="arrowUp" size={17}/><span className="sr-only">Перейти к контактам</span></a></div>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen?'Закрыть меню':'Открыть меню'} onClick={()=>setMenuOpen(x=>!x)}><Icon name={menuOpen?'cross':'menu'} size={24}/></button>
    </div>
  </header>;
}

function Hero(){
  return <section className="hero" id="top">
    <div className="hero-glow"/>
    <div className="container hero-layout">
      <div className="hero-copy">
        <span className="hero-kicker"><span className="live-dot"/>ОМСК · ГАГАРИНА, 14</span>
        <h1>Техника<br/><span>на твоей</span><br/>стороне<span className="title-period">.</span></h1>
        <p className="hero-lead">Нужен iPhone, ремонт смартфона или хочется обменять старое устройство? Начни с простого запроса — мы поможем его составить.</p>
        <div className="hero-actions"><Action href="#models">Выбрать смартфон</Action><Action href="#repair" variant="outline-light" icon="tool">Нужен ремонт</Action></div>
        <div className="hero-footnote"><Icon name="info" size={15}/><span>Независимая демонстрационная версия сайта</span></div>
      </div>
      <HeroArtwork/>
    </div>
    <div className="container"><div className="hero-bottom"><span><Icon name="phoneDevice" size={18}/> Покупка и подбор</span><span><Icon name="tool" size={18}/> Ремонт телефонов</span><span><Icon name="refresh" size={18}/> Выкуп и обмен</span><a href={company.maps} target="_blank" rel="noreferrer">Оценки и отзывы на 2ГИС <Icon name="arrowUp" size={16}/></a></div></div>
  </section>;
}

function Benefits(){return <section className="benefits" aria-label="Преимущества формата сайта"><div className="container benefits-grid">
  <div className="benefit" data-reveal><span className="benefit-icon"><Icon name="phoneDevice" size={23}/></span><div><b>Сначала — подходящий вариант</b><p>Помогаем подготовить точный запрос о смартфоне, без бесконечной переписки.</p></div></div>
  <div className="benefit" data-reveal><span className="benefit-icon"><Icon name="tool" size={23}/></span><div><b>Проблема понятна заранее</b><p>Выбери устройство и неисправность, чтобы обращение было предметным.</p></div></div>
  <div className="benefit" data-reveal><span className="benefit-icon"><Icon name="refresh" size={23}/></span><div><b>Технике можно дать новую жизнь</b><p>Опиши состояние устройства для предварительного обсуждения выкупа.</p></div></div>
</div></section>}

function Directions(){return <section className="section section-directions" id="directions">
  <div className="container"><SectionHead overline="Три направления" title={<>Всё, что нужно<br/>твоей технике.</>} lead="Покупка, обслуживание и обмен — в одном месте. Выбери свою задачу."/>
    <div className="directions-grid">
      {[{kind:'buy',label:'Выбрать iPhone',title:'Смартфон, который подходит именно тебе',description:'Сориентируйся в линейке моделей и подготовь запрос о наличии.',link:'#models',icon:'phoneDevice'},
        {kind:'repair',label:'Диагностика и ремонт',title:'Случилось что-то со смартфоном?',description:'Экран, аккумулятор, камера или зарядка — начни с описания проблемы.',link:'#repair',icon:'tool'},
        {kind:'trade',label:'Выкуп и Trade-in',title:'Пора двигаться дальше',description:'Укажи параметры устройства и обсуди возможную оценку или обмен.',link:'#trade-in',icon:'refresh'}].map(item=><a href={item.link} className={`direction direction--${item.kind}`} key={item.kind} data-reveal>
          <div className="direction-top"><span className="direction-label"><Icon name={item.icon} size={16}/>{item.label}</span><span className="direction-arrow"><Icon name="arrowUp" size={22}/></span></div>
          <ServiceArtwork kind={item.kind}/>
          <h3>{item.title}</h3><p>{item.description}</p>
        </a>)}
    </div>
  </div>
</section>}

function Models({notify}){
  const [filter,setFilter]=useState('Все');
  const [selected,setSelected]=useState('');
  const visible=useMemo(()=>phoneModels.filter(model=>model.filters.includes(filter)),[filter]);
  async function requestModel(model){
    setSelected(model.name);
    const ok=await copyToClipboard(`Здравствуйте! Подскажите, пожалуйста, есть ли сейчас в наличии ${model.name}? Интересуют доступные варианты, фактическое состояние, цена и условия покупки.`);
    notify(ok?'Запрос по модели скопирован':'Не удалось скопировать. Разрешите доступ к буферу обмена.');
  }
  return <section className="section models-section" id="models">
    <div className="container">
      <div className="models-head"><SectionHead overline="Витрина выбора" title={<>Знакомый iPhone.<br/><span className="text-blue">Новый сценарий.</span></>} lead="Здесь собраны линейки, о которых можно спросить в магазине. Это не список товаров в наличии и не актуальный прайс."/>
        <div className="model-caption"><Icon name="info" size={18}/><span>Уточняйте реальное наличие, стоимость и состояние конкретного экземпляра перед покупкой.</span></div>
      </div>
      <div className="model-toolbar"><div className="pills" role="group" aria-label="Фильтр моделей">{phoneFilterLabels.map(label=><button type="button" className={`pill ${filter===label?'pill--active':''}`} aria-pressed={filter===label} onClick={()=>setFilter(label)} key={label}>{label}</button>)}</div><span className="results-count">Моделей для запроса: {visible.length}</span></div>
      <div className="model-grid" aria-live="polite">{visible.map((model,i)=><article className="model-item" key={model.id} style={{'--model-delay':`${i*60}ms`}}>
        <div className={`model-art model-art--${model.color}`}><span className="model-art-label">{model.label}</span><DeviceIllustration variant={model.variant} color={model.color} size="product"/><span className="model-art-decoration"/></div>
        <div className="model-info"><div><h3>{model.name}</h3><p>{model.note}</p></div><button type="button" className="model-request" onClick={()=>requestModel(model)} aria-label={`Скопировать запрос о ${model.name}`}><Icon name="arrowUp" size={19}/></button></div>
      </article>)}</div>
      {selected&&<p className="model-selected" role="status"><Icon name="check" size={18}/> Последний подготовленный запрос: {selected}. Текст скопирован при успешном доступе к буферу.</p>}
      <div className="models-bottom"><div className="models-bottom-icon"><Icon name="spark" size={28}/></div><div><strong>Не знаешь, с какой модели начать?</strong><p>Ответь на три вопроса — получишь готовый текст для консультации.</p></div><a href="#phone-picker" className="inline-link">Подобрать под себя <Icon name="arrow" size={19}/></a></div>
    </div>
  </section>;
}

function PhonePicker({notify}){
  const [budget,setBudget]=useState('до 25 000 ₽');
  const [condition,setCondition]=useState('Любое');
  const [purpose,setPurpose]=useState('Камера и фото');
  const text=`Здравствуйте! Помогите, пожалуйста, подобрать iPhone.\nБюджет: ${budget}.\nСостояние: ${condition}.\nГлавный приоритет: ${purpose}.\nПодскажите, какие модели и конкретные экземпляры сейчас доступны, их цены, состояние аккумулятора, историю ремонта и условия покупки.`;
  async function handleCopy(){const ok=await copyToClipboard(text);notify(ok?'Запрос на подбор скопирован':'Копирование недоступно — выделите текст вручную.');}
  return <section id="phone-picker" className="picker-section"><div className="container picker-grid">
    <div className="picker-aside" data-reveal><div className="eyebrow"><span className="eyebrow__dot"/>Подбор по задачам</div><h2>Хороший выбор<br/>начинается<br/><em>с пары вопросов.</em></h2><p>Без выдуманных цен и обещаний наличия. Соберём запрос, с которым проще начать разговор.</p><div className="picker-device"><DeviceIllustration color="lilac" variant="front"/><div className="picker-circle picker-circle--a"/><div className="picker-circle picker-circle--b"/></div></div>
    <div className="picker-form" data-reveal><div className="form-heading"><span className="form-kicker">Личный подбор</span><h3>Какой смартфон ищешь?</h3></div>
      <fieldset className="choice-group"><legend>Комфортный бюджет</legend><div className="choice-list">{['до 25 000 ₽','25 000–40 000 ₽','40 000–60 000 ₽','более 60 000 ₽'].map(b=><button type="button" className={`choice ${budget===b?'choice--selected':''}`} key={b} aria-pressed={budget===b} onClick={()=>setBudget(b)}>{b}</button>)}</div></fieldset>
      <fieldset className="choice-group"><legend>Состояние</legend><div className="choice-list">{['Новое','Б/у','Любое'].map(c=><button type="button" className={`choice ${condition===c?'choice--selected':''}`} key={c} aria-pressed={condition===c} onClick={()=>setCondition(c)}>{c}</button>)}</div></fieldset>
      <fieldset className="choice-group"><legend>Что важнее?</legend><div className="choice-list">{['Камера и фото','Автономность','Производительность','Компактность'].map(p=><button type="button" className={`choice ${purpose===p?'choice--selected':''}`} key={p} aria-pressed={purpose===p} onClick={()=>setPurpose(p)}>{p}</button>)}</div></fieldset>
      <div className="request-preview"><span className="request-preview-label"><Icon name="spark" size={17}/> Твой запрос</span><p>Бюджет: <b>{budget}</b> · Состояние: <b>{condition}</b> · Приоритет: <b>{purpose}</b></p></div>
      <Action onClick={handleCopy} icon="copy" className="full-width">Скопировать запрос</Action><small className="form-hint">Ничего не отправляется автоматически. После копирования можно связаться с магазином через <a href={company.telegram} target="_blank" rel="noreferrer">Telegram</a>.</small>
    </div>
  </div></section>;
}

function Repair({notify}){
  const [brand,setBrand]=useState('Apple');
  const [model,setModel]=useState('');
  const [issue,setIssue]=useState('screen');
  const [details,setDetails]=useState('');
  const [step,setStep]=useState(0);
  const [image,setImage]=useState(null);
  const [fileName,setFileName]=useState('');
  const imgRef=useRef(null);
  useEffect(()=>()=>{if(image)URL.revokeObjectURL(image)},[image]);
  const currentIssue=repairProblems.find(p=>p.id===issue)||repairProblems[0];
  const issueName=currentIssue.label==='Другое'?'Другая неисправность':currentIssue.label;
  const repairText=`Здравствуйте! Нужна консультация по ремонту смартфона.\nБренд: ${brand}.\nМодель: ${model.trim()||'уточню при обращении'}.\nПроблема: ${issueName}.\nОписание: ${details.trim()||'Прошу уточнить возможные причины и ориентировочную стоимость диагностики/ремонта.'}\nПодскажите, пожалуйста, сроки и предварительную стоимость. ${fileName?'При необходимости могу отдельно отправить фотографию устройства.':''}`;
  async function handleCopy(){const ok=await copyToClipboard(repairText);notify(ok?'Описание ремонта скопировано':'Не удалось скопировать запрос. Попробуйте вручную.');}
  function onFile(e){
    const file=e.target.files?.[0];if(!file)return;
    if(!file.type.startsWith('image/')){notify('Можно выбрать только изображение');return;}
    if(file.size>10*1024*1024){notify('Выберите изображение размером до 10 МБ');return;}
    const url=URL.createObjectURL(file);setImage(url);setFileName(file.name);
  }
  return <section className="section repair-section" id="repair"><div className="container">
    <div className="repair-top"><SectionHead dark overline="Ремонт смартфонов" title={<>Есть проблема?<br/><span>Найдём, с чего начать.</span></>} lead="Укажи модель и симптомы. Форма составит понятный запрос для сервиса — без отправки данных с сайта."/>
      <div className="repair-top-caption"><span className="caption-line"/><span>Экран · Аккумулятор · Камера · Зарядка</span></div>
    </div>
    <div className="repair-workspace">
      <div className="repair-visual" data-reveal><div className="repair-visual-head"><span className="visual-live"><span/>Схема устройства</span><span>Интерактивная иллюстрация</span></div><ExplodedPhone active={issue}/><div className="repair-visual-bottom"><Icon name={issue==='screen'?'phoneDevice':issue==='battery'?'battery':issue==='camera'?'camera':issue==='charge'?'tool':'info'} size={24}/><div><b>{issueName}</b><span>{currentIssue.description}</span></div></div></div>
      <div className="repair-form" data-reveal>
        <div className="step-markers" aria-label="Этапы заявки">{['Устройство','Проблема','Описание'].map((label,i)=><button key={label} type="button" onClick={()=>setStep(i)} className={`step-marker ${step===i?'step-marker--active':''} ${step>i?'step-marker--done':''}`} aria-label={`Перейти к этапу: ${label}`} aria-current={step===i?'step':undefined}><span/><small>{label}</small></button>)}</div>
        <div className="step-body" key={step}>
          {step===0&&<><span className="form-kicker">Расскажи об устройстве</span><h3>Что будем ремонтировать?</h3><div className="field"><label>Производитель</label><div className="brand-choices">{repairBrands.map(b=><button type="button" key={b} onClick={()=>setBrand(b)} aria-pressed={brand===b} className={`choice ${brand===b?'choice--selected':''}`}>{b}</button>)}</div></div><div className="field"><label htmlFor="repair-model">Модель смартфона</label><input id="repair-model" placeholder="Например, iPhone 13 или Samsung A54" value={model} onChange={e=>setModel(e.target.value)} maxLength={80}/></div></>}
          {step===1&&<><span className="form-kicker">Опиши симптомы</span><h3>Что случилось?</h3><div className="issue-grid">{repairProblems.map(p=><button type="button" key={p.id} className={`issue ${issue===p.id?'issue--active':''}`} onClick={()=>setIssue(p.id)} aria-pressed={issue===p.id}><span className="issue-icon"><Icon name={p.id==='screen'?'phoneDevice':p.id==='battery'?'battery':p.id==='camera'?'camera':p.id==='charge'?'tool':'plus'} size={24}/></span><b>{p.label}</b><small>{p.description}</small></button>)}</div></>}
          {step===2&&<><span className="form-kicker">Остался один шаг</span><h3>Добавь детали, если нужно</h3><div className="field"><label htmlFor="repair-details">Как проявляется неисправность?</label><textarea id="repair-details" rows="4" value={details} maxLength={700} onChange={e=>setDetails(e.target.value)} placeholder="Например: после падения экран мерцает, но телефон включается"/></div><div className="upload-wrap"><label className="upload-area" htmlFor="repair-photo"><Icon name="upload" size={24}/><span>{fileName||'Добавить фотографию для просмотра'}</span><small>Только локальный предпросмотр, до 10 МБ</small></label><input ref={imgRef} type="file" id="repair-photo" accept="image/*" onChange={onFile}/>{image&&<div className="upload-preview"><img src={image} alt="Локальный предпросмотр выбранного изображения"/><button type="button" onClick={()=>{setImage(null);setFileName('');if(imgRef.current)imgRef.current.value='';}} aria-label="Удалить выбранную фотографию"><Icon name="cross" size={16}/></button></div>}</div><p className="privacy-note"><Icon name="lock" size={16}/> Фото не загружается на сервер. В текстовом запросе будет указано, что его можно прислать отдельно.</p></>}
        </div>
        <div className="step-actions"><button className="step-back" type="button" onClick={()=>setStep(s=>Math.max(0,s-1))} disabled={step===0}><Icon name="arrow" className="icon-back" size={18}/>Назад</button>{step<2?<Action onClick={()=>setStep(s=>Math.min(2,s+1))}>Продолжить</Action>:<Action onClick={handleCopy} icon="copy">Скопировать заявку</Action>}</div>
      </div>
    </div>
    <p className="repair-disclaimer"><Icon name="info" size={17}/> Демоверсия не принимает заказы и не устанавливает стоимость ремонта. Всё согласовывается напрямую с сервисом.</p>
  </div></section>;
}

function TradeIn({notify}){
  const [model,setModel]=useState('');
  const [memory,setMemory]=useState('128 ГБ');
  const [battery,setBattery]=useState('85–94%');
  const [condition,setCondition]=useState('Есть небольшие следы использования');
  const [repairs,setRepairs]=useState('Не знаю / нужно уточнить');
  const [defects,setDefects]=useState('');
  const text=`Здравствуйте! Хотелось бы узнать возможность выкупа или обмена смартфона.\nМодель: ${model.trim()||'уточню'}; память: ${memory}.\nСостояние аккумулятора: ${battery}.\nВнешнее состояние: ${condition}.\nИстория ремонта: ${repairs}.\nДополнительно: ${defects.trim()||'готов(а) уточнить при обсуждении'}.\nПодскажите условия оценки и возможность Trade-in.`;
  async function handleCopy(){const ok=await copyToClipboard(text);notify(ok?'Заявка на оценку скопирована':'Не удалось скопировать. Попробуйте вручную.');}
  return <section className="trade-section" id="trade-in"><div className="container trade-grid">
    <div className="trade-intro" data-reveal><div className="eyebrow"><span className="eyebrow__dot"/>Выкуп и обмен</div><h2>Старый телефон.<br/><em>Новые планы.</em></h2><p>Хочешь обновиться? Расскажи о своём смартфоне. Составим запрос на предварительную оценку без необоснованных обещаний цены.</p><ExchangeArtwork/><div className="trade-footnote"><Icon name="refresh" size={22}/><span>Возможность и условия выкупа и Trade-in уточняйте у компании.</span></div></div>
    <div className="trade-panel" data-reveal><div className="trade-panel-heading"><span>Предварительная анкета</span><Icon name="spark" size={22}/></div><h3>Расскажи о своём устройстве</h3>
      <div className="field-grid"><div className="field"><label htmlFor="trade-model">Модель</label><input id="trade-model" placeholder="Например, iPhone 13 Pro" value={model} onChange={e=>setModel(e.target.value)} maxLength={90}/></div><div className="field"><label htmlFor="trade-memory">Объём памяти</label><div className="select-wrap"><select id="trade-memory" value={memory} onChange={e=>setMemory(e.target.value)}>{['64 ГБ','128 ГБ','256 ГБ','512 ГБ','1 ТБ','Другой'].map(v=><option key={v}>{v}</option>)}</select><Icon name="chevron" size={17}/></div></div></div>
      <div className="field-grid"><div className="field"><label htmlFor="trade-battery">Состояние аккумулятора</label><div className="select-wrap"><select id="trade-battery" value={battery} onChange={e=>setBattery(e.target.value)}>{['95–100%','85–94%','75–84%','Менее 75%','Не знаю'].map(v=><option key={v}>{v}</option>)}</select><Icon name="chevron" size={17}/></div></div><div className="field"><label htmlFor="trade-condition">Внешнее состояние</label><div className="select-wrap"><select id="trade-condition" value={condition} onChange={e=>setCondition(e.target.value)}>{['Отличное','Есть небольшие следы использования','Есть заметные повреждения','Требуется ремонт'].map(v=><option key={v}>{v}</option>)}</select><Icon name="chevron" size={17}/></div></div></div>
      <div className="field"><label htmlFor="trade-repairs">Менялись ли детали?</label><div className="select-wrap"><select id="trade-repairs" value={repairs} onChange={e=>setRepairs(e.target.value)}>{['Нет, не ремонтировался','Да, были замены или ремонт','Не знаю / нужно уточнить'].map(v=><option key={v}>{v}</option>)}</select><Icon name="chevron" size={17}/></div></div>
      <div className="field"><label htmlFor="trade-extra">Дополнительно</label><textarea id="trade-extra" rows="3" placeholder="Царапины, комплект, нюансы работы..." value={defects} onChange={e=>setDefects(e.target.value)} maxLength={500}/></div>
      <Action onClick={handleCopy} icon="copy" className="full-width">Скопировать запрос на оценку</Action><small className="form-hint">Окончательная цена не рассчитывается автоматически. Текст можно переслать вручную после согласования с компанией.</small>
    </div>
  </div></section>;
}

function Transparency(){return <section className="section transparency-section"><div className="container transparency-grid">
  <div className="transparency-intro" data-reveal><div className="eyebrow"><span className="eyebrow__dot"/>Перед покупкой</div><h2>О состоянии техники —<br/><span className="text-blue">по существу.</span></h2><p>Если выбираешь смартфон с историей, важно заранее узнать его реальные характеристики. Вот какие вопросы стоит задать продавцу.</p><a className="inline-link" href={company.maps} target="_blank" rel="noreferrer">Посмотреть отзывы о магазине <Icon name="arrowUp" size={19}/></a></div>
  <div className="transparency-items" data-reveal>{[
    {icon:'battery',title:'Аккумулятор',text:'Уточни фактическую ёмкость и историю замены батареи.'},
    {icon:'tool',title:'Ремонт и замена деталей',text:'Попроси рассказать, что менялось в устройстве и какие функции проверены.'},
    {icon:'camera',title:'Камера, Face ID и экран',text:'Проверь основные функции непосредственно у выбранного экземпляра.'},
    {icon:'shield',title:'Документы и условия',text:'Согласуй комплектацию, чек и условия гарантии до оплаты.'}
  ].map(i=><div className="transparency-item" key={i.title}><span className="transparency-item-icon"><Icon name={i.icon} size={24}/></span><div><h3>{i.title}</h3><p>{i.text}</p></div><Icon name="check" className="transparency-tick" size={18}/></div>)}</div>
</div></section>}

function Reviews(){return <section className="section reviews-section"><div className="container reviews-grid">
  <div data-reveal><div className="eyebrow eyebrow--dark"><span className="eyebrow__dot"/>Репутация</div><h2>Не только слова.<br/>Реальные отзывы.</h2><p>Перед обращением можно изучить независимые площадки и составить своё впечатление о работе магазина.</p><Action href={company.maps} variant="outline-light" icon="arrowUp" target="_blank" rel="noreferrer">Читать на 2ГИС</Action></div>
  <div className="review-art" data-reveal><div className="rating-number">{company.rating}<span>/5</span></div><div className="rating-stars" aria-label="Пять звёзд">{Array.from({length:5},(_,i)=><Icon name="star" key={i} size={29}/>)}</div><p>Рейтинг по данным карточки {company.ratingSource} на момент исследования. Значение и число оценок на площадке могут измениться.</p><div className="review-circle review-circle--one"/><div className="review-circle review-circle--two"/><Icon name="quote" size={100} className="review-quote"/></div>
</div></section>}

function Questions(){const [open,setOpen]=useState(0);return <section className="section faq-section" id="faq"><div className="container faq-grid"><div data-reveal><SectionHead overline="Ответы на вопросы" title={<>Всё важное<br/>перед обращением.</>} lead="Коротко о покупке, ремонте и работе демонстрационной версии."/></div><div className="faq-items" data-reveal>{faq.map((item,i)=><div key={item.q} className={`faq-item ${open===i?'faq-item--open':''}`}><button type="button" aria-expanded={open===i} onClick={()=>setOpen(s=>s===i?-1:i)}><span>{item.q}</span><span className="faq-toggle"><Icon name={open===i?'cross':'plus'} size={19}/></span></button><div className="faq-answer" hidden={open!==i}><p>{item.a}</p></div></div>)}</div></div></section>}

function Contacts(){return <section className="contact-section" id="contacts"><div className="container"><div className="contact-top"><div data-reveal><div className="eyebrow eyebrow--dark"><span className="eyebrow__dot"/>Контакты</div><h2>Связаться —<br/>проще простого.</h2><p>Магазин и сервис в центре Омска. Уточняйте актуальный режим работы перед визитом.</p><div className="contact-actions"><Action href={company.tel} icon="phone">Позвонить</Action><Action href={company.telegram} variant="outline-light" icon="telegram" target="_blank" rel="noreferrer">Telegram</Action></div></div><div className="contact-art" data-reveal><CityArtwork/></div></div>
    <div className="contact-details"><div><span className="contact-detail-label">Адрес</span><strong>{company.address}<br/>{company.city}</strong><a href={company.maps} target="_blank" rel="noreferrer" className="inline-link">Открыть на карте <Icon name="arrowUp" size={17}/></a></div><div><span className="contact-detail-label">Телефоны</span><a href={company.tel}>{company.phone}</a><a href={company.secondTel}>{company.secondPhone}</a></div><div><span className="contact-detail-label">Социальные сети</span><a href={company.telegram} target="_blank" rel="noreferrer"><Icon name="telegram" size={17}/> Telegram</a><a href={company.vk} target="_blank" rel="noreferrer"><Icon name="vk" size={19}/> ВКонтакте</a></div></div>
  </div></section>}

function Footer(){return <footer className="footer"><div className="container"><div className="footer-top"><a className="brand brand--footer" href="#top"><span className="brand-logo"><span>Ч</span><span className="brand-logo__dot"/></span><span className="brand-words">ЧЕСТНАЯ<span>ТЕХНИКА</span></span></a><div className="footer-nav"><a href="#models">Смартфоны</a><a href="#repair">Ремонт</a><a href="#trade-in">Выкуп</a><a href="#contacts">Контакты</a></div></div><div className="footer-bottom"><p>Независимый демонстрационный концепт. Не является официальным сайтом организации. Информация, ассортимент, цены и условия требуют согласования с владельцем. Данные форм не отправляются.</p><a href="https://t.me/milmak11" target="_blank" rel="noreferrer" className="developer-credit"><span>Разработчик</span><strong>@milmak11</strong><Icon name="arrowUp" size={14}/></a></div></div></footer>}

export default function App(){
  const [toast,setToast]=useState('');
  useReveal();
  useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(''),3500);return()=>clearTimeout(t)},[toast]);
  return <><Header/><main><Hero/><Benefits/><Directions/><Models notify={setToast}/><PhonePicker notify={setToast}/><Repair notify={setToast}/><TradeIn notify={setToast}/><Transparency/><Reviews/><Questions/><Contacts/></main><Footer/>
    <div className={`toast ${toast?'toast--visible':''}`} role="status" aria-live="polite"><Icon name="check" size={18}/><span>{toast}</span><button type="button" aria-label="Закрыть уведомление" onClick={()=>setToast('')}><Icon name="cross" size={17}/></button></div>
    <a href="#top" className="back-to-top" aria-label="Вернуться наверх"><Icon name="arrowUp" size={18}/></a>
  </>;
}
