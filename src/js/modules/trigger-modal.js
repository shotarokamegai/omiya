class triggerModal {
  constructor(slide, swiper) {
    // let instance = swiper.swiperArry[0].swiper;
    let arry = [];
    let modalTrigger = document.getElementsByClassName('trigger-modal');
    let service = [
      {
        title: 'Z世代の自走力強化研修',
        text: 'Z世代の若手社員は、自己実現のために現職でのやりがいや成長機会を求めています。本研修では、捉え所のないキャリアをテーマに、納得いく結論を出すための思考アプローチを学びます。納得感を持ち行動し、改善行動をとっていくことで、若手が自らの未来を切り拓く自走力を高めます。',
        point: [
          {
            title: '仕事の意味づけ',
            text: '自身の進みたいキャリアを明らかにすることで、今の仕事の意味づけを行い、能動的に動けるようになる。'
          },
          {
            title: '現在と未来をつなぐ',
            text: 'キャリアと業務を構造的な思考のアプローチで結びづける。'
          },
        ]
      },
      {
        title: '構造化力強化',
        text: '多くのビジネスパーソンは論理的な思考力がなかなか高まらないというお悩みを抱えています。論理的な思考力を強化するために最も重要な構造化について徹底的にトレーニングを行います。思考を構造化することで、課題特定・コミュニケーション・問題解決の力を強化します。',
        point: [
          {
            title: '全体像を捉える',
            text: '問題やテーマを「構成要素」に分解し、漏れや重複がないように全体を把握する。'
          },
          {
            title: '階層で整理する',
            text: '結論と根拠を上下関係で整理し、論点を明確に伝える。上位概念と下位要素の関係を意識する。'
          },
          {
            title: '因果関係でつなぐ',
            text: '「なぜそうなるのか」「どうすればよいか」を因果でつなぎ、筋道だった説明や考察を可能にする。'
          },
        ]
      },
      {
        title: 'Z世代理解・ピープルマネジメント研修',
        text: 'メンバー（若手・Z世代対応）の価値観や行動特性を理解し、信頼関係を築くマネジメントの基本を学ぶ研修です。一方的な指示ではなく、対話を通じた関係構築や自律性を引き出す関わり方を習得します。世代間ギャップを乗り越え、組織のエンゲージメントと成果向上を支援します。',
        point: [
          {
            title: 'Z世代の価値観と行動特性の理解',
            text: '自律志向・心理的安全性重視・承認欲求の特徴を体系的に学ぶ。'
          },
          {
            title: '対話型マネジメントの習得',
            text: '信頼を築く1on1・フィードバックの技術を実践的に学ぶ。'
          },
          {
            title: 'チームマネジメント',
            text: '多様なメンバーが関係構築し、チームを率いていくための指針を得る。'
          },
        ]
      },
      {
        title: '上司の1on1力強化研修',
        text: '本研修は、上司と部下との1on1面談において、単なる業務の確認を超え、「承認」と「要求」を戦略的に使い分け、部下のエンゲージメントやモチベーションを高める手法を習得するプログラムです。部下の目に見えない努力や取り組みを的確に認めることで、アウトプットだけに依存しない評価方法を習得し、信頼関係を深めます。',
        point: [
          {
            title: '',
            text: '「承認」と「要求」の使い分け: 部下の成果だけでなく、見えにくい努力や工夫を認める「承認」と、さらなる成長を促す「要求」をバランスよく実施することを体感する'
          },
        ]
      },
      {
        title: '提案営業力強化研修：<br/>また会いたいと思われる営業になる',
        text: '本研修は、顧客がまた会いたい営業になるための関係性構築に焦点を当てています。いつでも会える顧客との関係を構築することで、商談数は自然と増え、売上も着実に上げることができるようになります。徹底した顧客視点に基づき、面談時の信頼関係構築や、相手がリラックスして本音を引き出せるノンバーバルコミュニケーションのテクニックを徹底指導。さらに、誰でも再現可能な具体的手法を学ぶことで、常に顧客の利益を最優先にした商談が実現できるようサポートします。',
        point: [
          {
            title: '徹底した顧客視点',
            text: '売り込みではなく、顧客のニーズと喜びにフォーカスした提案手法を習得'
          },
          {
            title: '信頼構築スキル',
            text: '面談時に自然な会話と安心感を生み出すための非言語コミュニケーション技術を強化'
          },
          {
            title: '再現性の追求',
            text: 'どの現場でも即実践できる、具体的かつ体系的なフレームワークを提供'
          },
        ]
      },
    ]

    // for (let i = 0; i < slide.length; i++) {
    //   arry.push(slide[i].innerHTML);
    // }


    for (let i = 0; i < modalTrigger.length; i++) {
      modalTrigger[i].addEventListener('click', initTriggerModal);
    }

    function initTriggerModal(e) {
      e.stopPropagation();
      let elm = e.currentTarget;
      let id = elm.getAttribute('data-target');
      let target = document.getElementById(id);

      if (target.classList.contains('active')) {
        target.classList.remove('active');
      } else {
        if (id === 'service-modal') {
          let index = elm.getAttribute('data-index');
          let data = service[index];
          let serviceModalTitle = document.getElementById('service-modal-title');
          let serviceModalText = document.getElementById('service-modal-text');
          let serviceModalPoint = document.getElementById('service-modal-point');
          let pointHtml = '';
          for (let i = 0; i < data.point.length; i++) {
            let thisPoint = data.point[i];
            pointHtml += `<div class="point">
                <div class="point-title bg-black flex items-center">
                    <p class="text-white">${thisPoint.title}</p>
                </div>
                <p class="point-text">${thisPoint.text}</p>
            </div>`;
          }

          serviceModalTitle.innerHTML = data.title;
          serviceModalText.innerHTML = data.text;
          serviceModalPoint.innerHTML = pointHtml;
        }
        target.classList.add('active');
      }
    }
  }
}

export default triggerModal