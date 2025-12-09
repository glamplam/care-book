import React from 'react';

const HighlightBox: React.FC<{ children: React.ReactNode; icon?: React.ReactNode }> = ({ children, icon }) => (
  <div className="bg-[#f3ece7] border-l-4 border-accent p-6 my-8 rounded-r-md font-serif italic text-lg leading-relaxed shadow-sm">
    {icon && <div className="mb-2 text-accent">{icon}</div>}
    {children}
  </div>
);

const TipBox: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8 shadow-sm">
    <span className="block text-green-700 font-bold mb-2 font-sans flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m5 6 2.5 1.5"/><path d="m19 6-2.5 1.5"/><path d="M12 18v4"/><path d="m5 18 2.5-1.5"/><path d="m19 18-2.5-1.5"/><circle cx="12" cy="12" r="3"/></svg>
      {title}
    </span>
    <div className="text-stone-700 text-sm md:text-base leading-relaxed">{children}</div>
  </div>
);

const SectionTitle: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
  <h2 id={id} className="text-2xl md:text-3xl font-bold text-subAccent mt-16 mb-6 pt-6 border-t border-stone-200 scroll-mt-24 font-sans">
    {children}
  </h2>
);

const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-bold text-accent mt-10 mb-4 font-sans flex items-center gap-2">
    <span className="w-1.5 h-6 bg-accent rounded-full inline-block"></span>
    {children}
  </h3>
);

const ElementCard: React.FC<{ title: string; color: string; desc: string; keywords: string }> = ({ title, color, desc, keywords }) => (
  <div className={`p-4 rounded-xl text-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 ${color}`}>
    <h4 className="font-bold text-xl mb-1">{title}</h4>
    <p className="text-sm opacity-90 font-medium">{desc}</p>
    <p className="text-xs opacity-80 mt-2 pt-2 border-t border-white/30">{keywords}</p>
  </div>
);

const GridItem: React.FC<{ title: string; list: string[]; desc: string }> = ({ title, list, desc }) => (
  <div className="border border-stone-200 p-5 bg-white rounded-lg shadow-sm hover:border-accent/30 transition-colors">
    <strong className="block text-lg font-bold text-subAccent mb-3 pb-2 border-b border-stone-100 font-sans">{title}</strong>
    <ul className="text-sm text-stone-600 mb-3 space-y-1">
      {list.map((item, idx) => <li key={idx} className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>{item}</li>)}
    </ul>
    <p className="text-stone-800 font-medium">{desc}</p>
  </div>
);

export const BookContent: React.FC = () => {
  return (
    <article className="prose prose-stone max-w-none prose-p:text-ink prose-p:leading-8 prose-headings:font-sans">
      
      {/* Chapter 1 */}
      <SectionTitle id="ch1">1장. 사주란 무엇일까요?</SectionTitle>
      
      <p>
        <strong>사주팔자(四柱八字)</strong>는 내가 태어난 순간 우주가 나에게 찍어준 '바코드'와 같습니다. 
        인간의 삶과 성격, 그리고 운명의 흐름을 설명하는 동양의 오랜 통계학이자 철학이죠. 
        네 개의 기둥인 ‘사주(四柱)’와 여덟 개의 글자인 ‘팔자(八字)’로 이루어집니다.
      </p>

      <p>
        많은 분들이 사주를 '미래를 맞히는 점'이라고 생각하지만, 사실 사주는 <strong>'내 사용 설명서'</strong>에 가깝습니다. 
        내가 어떤 엔진(기질)을 달고 태어났는지, 그리고 내가 달리는 도로(운의 흐름)가 고속도로인지 비포장도로인지를 알려주는 지도입니다.
      </p>

      <HighlightBox>
        "사주를 본다는 것은 정해진 운명에 굴복하는 것이 아니라, <br className="hidden md:block"/>
        내게 주어진 패를 확인하고 가장 잘 쓰는 법을 배우는 것입니다."
      </HighlightBox>

      <p>
        이 책은 아주 기초적인 내용부터 시작합니다. 한자를 몰라도 괜찮습니다. 요즘은 스마트폰 앱이 다 만세력을 뽑아주니까요. 
        중요한 것은 그 안에 담긴 <strong>'자연의 이치'</strong>를 이해하는 것입니다.
      </p>

      {/* Chapter 2 */}
      <SectionTitle id="ch2">2장. 만세력 이해하기</SectionTitle>
      
      <SubTitle>2-1. 만세력이란?</SubTitle>
      <p>
        사주 공부의 첫걸음은 내 사주를 열어보는 것입니다. 스마트폰 앱스토어에서 '만세력'을 검색해서 생년월일시를 입력하면 8개의 글자가 나옵니다. 
        이것이 바로 만세력입니다.
      </p>

      <TipBox title="초보자 팁: '만세력' 앱 설치하기">
        이 책을 읽으면서 자신의 생년월일을 입력해둔 만세력 화면을 옆에 두고 비교해가며 읽으시면 훨씬 이해가 빠릅니다.
      </TipBox>

      <SubTitle>2-2. 사주의 네 기둥 (궁위론)</SubTitle>
      <p>만세력에 나오는 네 개의 기둥은 각각 의미하는 시기와 대상이 다릅니다. 오른쪽에서 왼쪽으로 읽습니다.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 not-prose">
        <GridItem 
          title="1) 년주 (태어난 해)"
          list={['시기: 초년 (0~19세)', '관계: 조상, 가문, 큰 환경']}
          desc="나의 뿌리, 첫인상, 배경"
        />
        <GridItem 
          title="2) 월주 (태어난 달)"
          list={['시기: 청년기 (20~39세)', '관계: 부모, 형제, 사회생활']}
          desc="가장 강력한 기운. 직업 환경."
        />
        <GridItem 
          title="3) 일주 (태어난 날)"
          list={['시기: 중년기 (40~59세)', '관계: 나 자신, 배우자']}
          desc="사주의 핵심. '일간'은 나."
        />
        <GridItem 
          title="4) 시주 (태어난 시간)"
          list={['시기: 말년 (60세 이후)', '관계: 자녀, 아랫사람, 사생활']}
          desc="인생의 결실, 미래의 지향점."
        />
      </div>

      {/* Chapter 3 */}
      <SectionTitle id="ch3">3장. 오행 – 사주의 기본 뼈대</SectionTitle>
      <p>
        만세력의 8글자는 모두 <strong>목, 화, 토, 금, 수</strong> 다섯 가지 재료로 만들어져 있습니다. 
        내 사주에 어떤 색깔(오행)이 많은지 살펴보세요.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 my-8 not-prose">
        <ElementCard title="목(木)" color="bg-wood" desc="나무 / 초록" keywords="성장, 시작, 어질 인(仁)" />
        <ElementCard title="화(火)" color="bg-fire" desc="불 / 빨강" keywords="열정, 확산, 예절 예(禮)" />
        <ElementCard title="토(土)" color="bg-earth" desc="흙 / 노랑" keywords="중재, 믿음, 믿음 신(信)" />
        <ElementCard title="금(金)" color="bg-metal" desc="쇠 / 흰색" keywords="결단, 마무리, 의리 의(義)" />
        <ElementCard title="수(水)" color="bg-water" desc="물 / 검정" keywords="지혜, 휴식, 지혜 지(智)" />
      </div>

      <TipBox title="오행의 균형">
        특정 오행이 너무 많으면 그 기질이 과하게 나타나고(예: 불이 많으면 성격이 급함), 
        너무 없으면 그 기질이 부족하여 갈망하게 됩니다.
      </TipBox>

      {/* Chapter 4 */}
      <SectionTitle id="ch4">4장. 천간과 지지</SectionTitle>
      
      <SubTitle>4-1. 천간 (하늘의 뜻)</SubTitle>
      <p>사주 8글자 중 윗줄에 있는 4글자입니다. 나의 생각, 의지, 정신적인 면을 나타냅니다.</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-none pl-0 not-prose">
        {[
            {char:'갑(甲)', desc:'큰 나무, 리더십, 곧음'}, {char:'을(乙)', desc:'덩굴 식물, 유연함, 생활력'},
            {char:'병(丙)', desc:'태양, 공평함, 화려함'}, {char:'정(丁)', desc:'촛불/달, 집중력, 따뜻함'},
            {char:'무(戊)', desc:'큰 산, 묵직함, 신용'}, {char:'기(己)', desc:'밭 흙, 실속, 포용'},
            {char:'경(庚)', desc:'바위/무쇠, 결단력, 혁명'}, {char:'신(辛)', desc:'보석/칼, 섬세함, 예리함'},
            {char:'임(壬)', desc:'바다/호수, 포용력, 생각'}, {char:'계(癸)', desc:'빗물/안개, 감수성, 지혜'}
        ].map(item => (
            <li key={item.char} className="flex items-start py-2 border-b border-stone-100">
                <span className="font-bold text-accent min-w-[60px]">{item.char}</span>
                <span className="text-stone-700">{item.desc}</span>
            </li>
        ))}
      </ul>

      <SubTitle>4-2. 지지 (땅의 환경)</SubTitle>
      <p>아랫줄에 있는 4글자입니다. 내가 발 딛고 선 현실, 환경, 계절을 의미합니다. 동물(띠)로도 표현됩니다.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm not-prose mt-4">
          {[
              {t:'자(子/쥐)', d:'한겨울, 비밀'}, {t:'축(丑/소)', d:'겨울 끝, 인내'}, 
              {t:'인(寅/범)', d:'초봄, 시작'}, {t:'묘(卯/토끼)', d:'봄, 생명력'},
              {t:'진(辰/용)', d:'봄 끝, 이상'}, {t:'사(巳/뱀)', d:'초여름, 활동'}, 
              {t:'오(午/말)', d:'여름, 열정'}, {t:'미(未/양)', d:'여름 끝, 희생'},
              {t:'신(申/원숭이)', d:'초가을, 재주'}, {t:'유(酉/닭)', d:'가을, 도도함'}, 
              {t:'술(戌/개)', d:'가을 끝, 충직'}, {t:'해(亥/돼지)', d:'초겨울, 저장'}
          ].map(i => (
              <div key={i.t} className="bg-white border border-stone-200 p-2 rounded text-center">
                  <div className="font-bold text-subAccent">{i.t}</div>
                  <div className="text-stone-500 text-xs">{i.d}</div>
              </div>
          ))}
      </div>

      <SubTitle>4-3. 지장간 (숨겨진 비밀)</SubTitle>
      <p>
        <strong>지장간(地藏干)</strong>은 '땅 속에 숨어 있는 하늘의 기운'입니다. 
        겉으로 보이는 성격(천간/지지) 외에, 마음 깊은 곳에 숨겨진 진짜 속마음이나 잠재력을 의미합니다. 
        사주 분석의 고수들은 이 지장간을 매우 중요하게 봅니다.
      </p>

      {/* Chapter 5 */}
      <SectionTitle id="ch5">5장. 십성 – 나를 둘러싼 10가지 역할</SectionTitle>
      <p><strong>십성(육친)</strong>은 '일간(나)'을 기준으로 나머지 7글자가 어떤 관계인지 이름 붙인 것입니다. 사회적 가면이자 능력입니다.</p>
      
      <div className="space-y-4 my-6 not-prose">
        {[
            {t:'비견/겁재 (나와 같은 것)', d:'형제, 동료, 경쟁자, 자존심. 나의 세력을 의미합니다.'},
            {t:'식신/상관 (내가 생하는 것)', d:'표현력, 말, 재능, 자식(여명). 내 기운을 밖으로 뿜어내는 힘입니다.'},
            {t:'편재/정재 (내가 극하는 것)', d:'돈, 결과물, 아버지, 아내(남명). 내가 관리하고 소유하려는 대상입니다.'},
            {t:'편관/정관 (나를 극하는 것)', d:'직장, 명예, 규칙, 남편(여명), 자식(남명). 나를 통제하는 시스템입니다.'},
            {t:'편인/정인 (나를 생하는 것)', d:'공부, 문서, 계약, 어머니. 나에게 에너지를 공급하고 보호하는 힘입니다.'}
        ].map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center bg-white p-4 rounded-lg shadow-sm border border-stone-100">
                <span className="font-bold text-subAccent md:w-1/3 mb-2 md:mb-0">{item.t}</span>
                <span className="text-stone-600 md:w-2/3">{item.d}</span>
            </div>
        ))}
      </div>

      {/* Chapter 6 */}
      <SectionTitle id="ch6">6장. 합(合)과 충(冲) – 변화의 원리</SectionTitle>
      <HighlightBox>
        "사주는 멈춰있는 글자가 아닙니다. 글자끼리 만나면 사랑도 하고(合), 싸움도 합니다(冲)."
      </HighlightBox>

      <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="bg-blue-50/50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-bold text-lg text-blue-800 mb-3">합(合) - 끌림과 묶임</h4>
              <p className="text-stone-700 text-sm mb-3">글자끼리 서로 친해서 딱 붙어버리는 현상입니다. 합이 되면 고유한 성질은 약해지지만 원만해집니다.</p>
              <ul className="text-sm list-disc list-inside text-stone-600">
                  <li>장점: 원만하다, 다정하다, 협동한다.</li>
                  <li>단점: 묶여서 답답하다, 우유부단하다.</li>
              </ul>
          </div>
          <div className="bg-red-50/50 p-6 rounded-lg border border-red-100">
              <h4 className="font-bold text-lg text-red-800 mb-3">충(冲) - 충돌과 변화</h4>
              <p className="text-stone-700 text-sm mb-3">글자끼리 정반대의 기운이라 부딪히는 현상입니다. 강력한 변화와 개척을 의미하기도 합니다.</p>
              <ul className="text-sm list-disc list-inside text-stone-600">
                  <li>장점: 변화가 빠르다, 역동적이다.</li>
                  <li>단점: 불안하다, 깨진다, 이동수가 많다.</li>
              </ul>
          </div>
      </div>

      {/* Chapter 7 */}
      <SectionTitle id="ch7">7장. 12운성 – 인생의 주기</SectionTitle>
      <p>사람의 일생을 12단계로 나눈 에너지 그래프입니다. 내 글자가 지금 갓 태어난 아기 상태인지(장생), 왕성하게 활동하는 왕인지(제왕), 무덤에 들어간 상태인지(묘)를 봅니다.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm font-medium text-center not-prose my-6">
          {['장생(시작)', '목욕(멋)', '관대(패기)', '건록(자립)', '제왕(정상)', '쇠(은퇴)', '병(아픔)', '사(죽음)', '묘(무덤)', '절(끊어짐)', '태(잉태)', '양(보호)'].map(item => (
              <span key={item} className="bg-white border border-stone-200 py-2 rounded text-stone-600">
                  {item}
              </span>
          ))}
      </div>

      {/* Chapter 8 */}
      <SectionTitle id="ch8">8장. 12신살 – 특수 기운</SectionTitle>
      <p><strong>12신살</strong>은 인생에서 만나는 구체적인 사건이나 환경적인 특징을 12가지로 분류한 것입니다. 흔히 "무슨 살이 꼈다" 할 때 말하는 것이 이것입니다.</p>
      
      <TipBox title="외우는 순서">겁.재.천.지.년.월.망.장.반.역.육.화</TipBox>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          {[
             {t:'1. 겁살 (劫殺)', d:'빼앗김, 강제성. 주도권이 없는 상황.'},
             {t:'2. 재살 (災殺)', d:'수옥살. 갇혀 있는 형국. 꾀를 써야 함.'},
             {t:'3. 천살 (天殺)', d:'하늘의 벌. 불가항력적 천재지변.'},
             {t:'4. 지살 (地殺)', d:'자발적 이동. 이사, 여행, 홍보 활동.'},
             {t:'5. 년살 (年殺/도화)', d:'인기, 매력. 시선을 받는 기운.'},
             {t:'6. 월살 (月殺)', d:'고초살. 답답하지만 남을 돕는 일에 좋음.'},
             {t:'7. 망신살 (亡身殺)', d:'속살을 보임. 실력을 자랑하거나 망신당함.'},
             {t:'8. 장성살 (將星殺)', d:'장군. 주도권을 쥐고 밀고 나가는 힘.'},
             {t:'9. 반안살 (攀鞍殺)', d:'말안장. 승진, 합격, 편안한 성취.'},
             {t:'10. 역마살 (驛馬殺)', d:'타의적 이동. 바쁘게 움직여야 하는 환경.'},
             {t:'11. 육해살 (六害殺)', d:'여섯 가지 해로움. 몸이 아프거나 까다로움.'},
             {t:'12. 화개살 (華蓋殺)', d:'화려함을 덮음. 종교, 예술, 철학의 시기.'}
          ].map((item, idx) => (
              <div key={idx} className="bg-stone-50 p-4 rounded border border-stone-200">
                  <strong className="block text-accent mb-1">{item.t}</strong>
                  <span className="text-sm text-stone-600">{item.d}</span>
              </div>
          ))}
      </div>

      {/* Chapter 9 */}
      <SectionTitle id="ch9">9장. 대운과 세운 – 흐르는 시간의 힘</SectionTitle>
      <p>초보자들이 가장 많이 오해하는 것이 "사주는 정해져 있다"는 것입니다. 하지만 사주는 자동차(원국)와 도로(운)의 만남입니다. 도로는 계속 바뀝니다.</p>
      
      <SubTitle>9-1. 대운 (10년마다 바뀌는 계절)</SubTitle>
      <p>'대운'은 대박 나는 운이 아니라, <strong>'큰(大) 운의 흐름'</strong>을 말합니다. 10년 단위로 바뀌며, 내 인생의 계절이 봄에서 여름으로, 여름에서 가을로 바뀌는 것과 같습니다. 계절이 바뀌면 입는 옷(행동)이 달라져야 합니다.</p>
      
      <SubTitle>9-2. 세운 (매년 바뀌는 날씨)</SubTitle>
      <p>매년 들어오는 운(예: 2024년 갑진년)입니다. 대운이 계절이라면 세운은 그날의 날씨입니다. 계절이 좋아도 비가 올 수 있고, 계절이 나빠도 맑은 날이 있습니다.</p>

      {/* Chapter 10 */}
      <SectionTitle id="ch10">10장. 실전 해석 순서</SectionTitle>
      <p>마지막으로, 내 사주를 분석할 때 어떤 순서로 봐야 할까요? 가장 기본적인 순서를 알려드립니다.</p>

      <div className="bg-white border-2 border-accent/20 rounded-xl p-6 md:p-8 shadow-lg my-8 not-prose">
          <h4 className="text-center font-bold text-xl mb-6 text-accent">사주 분석 5단계 로드맵</h4>
          <div className="space-y-6 relative before:absolute before:left-[19px] md:before:left-[21px] before:top-4 before:bottom-4 before:w-0.5 before:bg-stone-200">
              {[
                  { step: 'STEP 1', t: '일간 확인하기', d: '나는 누구인가? (나무? 불? 흙?)' },
                  { step: 'STEP 2', t: '월지 확인하기', d: '어떤 계절에 태어났는가? (삶의 주된 환경)' },
                  { step: 'STEP 3', t: '사주의 강약 파악', d: '신강한가, 신약한가? (내 편이 많은가, 적은가)' },
                  { step: 'STEP 4', t: '용신 찾기', d: '나에게 필요한 수호신 같은 기운은?' },
                  { step: 'STEP 5', t: '대운 대입하기', d: '현재 운의 흐름이 용신(좋은 운)으로 흐르는가?' },
              ].map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                      <div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs md:text-sm shrink-0 shadow">
                          {idx + 1}
                      </div>
                      <div className="bg-stone-50 flex-1 p-4 rounded-lg border border-stone-100">
                          <span className="text-xs font-bold text-accent block mb-1">{item.step}</span>
                          <strong className="block text-ink text-lg mb-1">{item.t}</strong>
                          <p className="text-stone-500 text-sm">{item.d}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      <div className="text-center mt-20 mb-10">
        <p className="font-serif italic text-stone-500">
            사주 공부는 나를 사랑하는 과정입니다.<br/>
            이 책이 여러분의 운명 여행에 작은 나침반이 되기를 바랍니다.
        </p>
        <div className="w-16 h-1 bg-accent/20 mx-auto mt-6 mb-2"></div>
        <p className="text-xs text-stone-400">&copy; 사주명리학 입문. All rights reserved.</p>
      </div>

    </article>
  );
};
