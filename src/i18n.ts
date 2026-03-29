import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        fellows: 'Fellows',
        contact: 'Contact',
        join: 'Join Us'
      },
      all: 'All',
      hero: {
        tag: 'Leading Global Green Transition',
        title: 'World Academy of Green Finance',
        subtitle: 'Academy',
        description: 'Gathering global wisdom to build a sustainable financial future. We provide financial momentum for a greener tomorrow through rigorous academic research and innovative policy practice.',
        ctaPrimary: 'View Fellows',
        ctaSecondary: 'Learn More'
      },
      stats: {
        fellows: 'Global Fellows',
        reports: 'Research Reports',
        partners: 'Partner Institutions',
        countries: 'Countries Covered'
      },
      mission: {
        title: 'Our Mission:',
        highlight: 'Reshaping Finance, Protecting Nature',
        description: 'The World Academy of Green Finance (WAGF) was established in 2020 as an independent international academic organization. We believe that finance is not just an exchange of value, but a powerful tool for changing the world.',
        item1Title: 'Standard Setting',
        item1Desc: 'Participate in the formulation and optimization of global ESG and green bond standards.',
        item2Title: 'Innovation Driven',
        item2Desc: 'Explore the application of technologies such as blockchain and AI in green finance.',
        item3Title: 'Risk Assessment',
        item3Desc: 'Provide authoritative climate risk stress testing and environmental risk assessment.',
        quote: 'WAGF brings together the world\'s best minds to solve the most pressing challenges of our time.',
        quoteAuthor: 'Academy Council'
      },
      cta: {
        title: 'Join Global Green Finance Pioneers',
        description: 'If you have made outstanding contributions in the field of green finance, you are welcome to apply to become our Fellow.',
        button: 'Apply Now'
      },
      fellows: {
        title: 'Fellows List',
        desc: 'The Fellows of the World Academy of Green Finance consist of outstanding experts and scholars who have made significant contributions to green finance, environmental economics, and sustainable development.',
        search: 'Search name or organization...',
        filter: 'Expertise',
        viewProfile: 'View Profile',
        noResults: 'No matching Fellows found.',
        back: 'Back to List',
        contactInfo: 'Contact Info',
        website: 'Personal Website',
        bio: 'Biography',
        expertise: 'Expertise',
        research: 'Research Directions',
        publications: 'Selected Publications',
        publishedAt: 'Published in'
      },
      about: {
        title: 'About WAGF',
        description: 'The World Academy of Green Finance is a leading global green finance think tank and academic exchange platform.',
        visionTitle: 'Vision',
        visionDesc: 'To be a lighthouse in the global green finance field, leading the financial system transition to ecological civilization and achieving harmony between economic growth and environmental protection.',
        missionTitle: 'Mission',
        missionDesc: 'Through interdisciplinary research, international standard setting, and high-end talent training, we provide scientific financial solutions for global sustainable development.',
        historyTitle: 'History',
        historyItem1Title: 'Academy Founded',
        historyItem1Desc: 'World Academy of Green Finance was officially announced at the Global Sustainable Finance Summit in Geneva.',
        historyItem2Title: 'First Global Report',
        historyItem2Desc: 'Published "Global Carbon Neutral Finance Roadmap", highly praised by UNEP.',
        historyItem3Title: 'Fellows Exceed 100',
        historyItem3Desc: 'Top scholars and financiers from over 30 countries joined WAGF.',
        historyItem4Title: 'Digital Transformation',
        historyItem4Desc: 'Launched Global Green Finance Big Data Platform to provide real-time data support for policy making.',
        valuesTitle: 'Core Values',
        value1Title: 'Academic Rigor',
        value1Desc: 'Maintain an objective, neutral, and scientific research attitude, ensuring every report stands the test of time.',
        value2Title: 'Global Perspective',
        value2Desc: 'Break regional limitations, gather global wisdom, and solve climate challenges faced by all mankind.',
        value3Title: 'Unity of Knowledge and Action',
        value3Desc: 'Not only focus on theoretical research but also commit to transforming academic achievements into practical financial policies.'
      },
      contact: {
        title: 'Contact Us',
        desc: 'Whether you are seeking academic collaboration, policy consultation, or wish to apply to become a Fellow, we look forward to hearing from you.',
        office: 'Our Office',
        address: 'Address',
        addressDetail: 'No. 88 Green Finance Building, Chaoyang District, Beijing, 100020',
        email: 'Email',
        research: 'Research',
        press: 'Press',
        apply: 'Fellow Application',
        phone: 'Phone',
        switchboard: 'Switchboard',
        fax: 'Fax',
        formTitle: 'Message Us',
        name: 'Name',
        emailLabel: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        placeholderName: 'Your Name',
        placeholderMsg: 'Please describe your needs...',
        subjects: {
          collab: 'Collaboration',
          apply: 'Fellow Application',
          research: 'Academic Research',
          other: 'Other'
        }
      },
      footer: {
        desc: 'WAGF is committed to driving the global financial system transition towards green, low-carbon, and sustainable directions through academic research, policy advice, and talent training.',
        links: 'Quick Links',
        research: 'Research Areas',
        contact: 'Contact Info',
        rights: '© 2026 World Academy of Green Finance. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use'
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        about: '关于我们',
        fellows: '院士名单',
        contact: '联系我们',
        join: '加入我们'
      },
      all: '全部',
      hero: {
        tag: '引领全球绿色转型',
        title: '世界绿色金融',
        subtitle: '科学院',
        description: '汇聚全球顶尖智慧，构建可持续金融的未来。我们通过严谨的学术研究与创新的政策实践，为地球的绿色明天提供金融动力。',
        ctaPrimary: '查看院士名单',
        ctaSecondary: '了解更多'
      },
      stats: {
        fellows: '全球院士',
        reports: '研究报告',
        partners: '合作机构',
        countries: '覆盖国家'
      },
      mission: {
        title: '我们的使命：',
        highlight: '重塑金融，守护自然',
        description: '世界绿色金融科学院（WAGF）成立于 2020 年，是一个独立的国际学术组织。我们认为，金融不仅是价值的交换，更是改变世界的有力工具。',
        item1Title: '标准制定',
        item1Desc: '参与全球 ESG 与绿色债券标准的制定与优化。',
        item2Title: '创新驱动',
        item2Desc: '探索区块链、AI 等技术在绿色金融中的应用。',
        item3Title: '风险评估',
        item3Desc: '提供权威的气候风险压力测试与环境风险评估。',
        quote: 'WAGF 汇聚了全球最优秀的头脑，共同解决我们这个时代最紧迫的挑战。',
        quoteAuthor: '科学院理事会'
      },
      cta: {
        title: '加入全球绿色金融先锋',
        description: '如果您在绿色金融领域有卓越贡献，欢迎申请成为我们的院士。',
        button: '立即申请'
      },
      fellows: {
        title: '院士名单',
        desc: '世界绿色金融科学院的院士由全球在绿色金融、环境经济及可持续发展领域做出杰出贡献的专家学者组成。',
        search: '搜索姓名或机构...',
        filter: '专业领域',
        viewProfile: '查看简介',
        noResults: '没有找到匹配的院士。',
        back: '返回名单',
        contactInfo: '联系方式',
        website: '个人网站',
        bio: '个人简介',
        expertise: '专业领域',
        research: '研究方向',
        publications: '代表性著作',
        publishedAt: '发表于'
      },
      about: {
        title: '关于 WAGF',
        description: '世界绿色金融科学院（World Academy of Green Finance）是全球领先的绿色金融智库与学术交流平台。',
        visionTitle: '愿景',
        visionDesc: '成为全球绿色金融领域的灯塔，引领金融体系向生态文明转型，实现经济增长与环境保护的和谐共生。',
        missionTitle: '使命',
        missionDesc: '通过跨学科研究、国际标准制定和高端人才培养，为全球可持续发展提供科学的金融解决方案。',
        historyTitle: '发展历程',
        historyItem1Title: '科学院成立',
        historyItem1Desc: '在日内瓦举行的全球可持续金融峰会上，世界绿色金融科学院正式宣告成立。',
        historyItem2Title: '发布首份全球报告',
        historyItem2Desc: '发布《全球碳中和金融路径图》，获得联合国环境署高度评价。',
        historyItem3Title: '院士规模突破百人',
        historyItem3Desc: '来自全球 30 多个国家的顶尖学者与金融家加入 WAGF。',
        historyItem4Title: '数字化转型',
        historyItem4Desc: '启动全球绿色金融大数据平台，为政策制定提供实时数据支持。',
        valuesTitle: '核心价值观',
        value1Title: '学术严谨',
        value1Desc: '坚持客观、中立、科学的研究态度，确保每一份报告都经得起时间考验。',
        value2Title: '全球视野',
        value2Desc: '打破地域局限，汇聚全球智慧，解决全人类共同面临的气候挑战。',
        value3Title: '知行合一',
        value3Desc: '不仅关注理论研究，更致力于将学术成果转化为可落地的金融政策。'
      },
      contact: {
        title: '联系我们',
        desc: '无论您是寻求学术合作、政策咨询，还是希望申请成为院士，我们都期待听到您的声音。',
        office: '我们的办公室',
        address: '地址',
        addressDetail: '北京市朝阳区绿色金融大厦 88 号',
        email: '电子邮箱',
        research: '学术咨询',
        press: '媒体合作',
        apply: '院士申请',
        phone: '电话',
        switchboard: '总机',
        fax: '传真',
        formTitle: '在线留言',
        name: '姓名',
        emailLabel: '邮箱',
        subject: '主题',
        message: '留言内容',
        send: '发送消息',
        placeholderName: '您的姓名',
        placeholderMsg: '请描述您的需求...',
        subjects: {
          collab: '合作咨询',
          apply: '院士申请',
          research: '学术研究',
          other: '其他'
        }
      },
      footer: {
        desc: '世界绿色金融科学院致力于通过学术研究、政策建议和人才培养，推动全球金融体系向绿色、低碳和可持续方向转型。',
        links: '快速链接',
        research: '研究领域',
        contact: '联系信息',
        rights: '© 2026 世界绿色金融科学院. 保留所有权利。',
        privacy: '隐私政策',
        terms: '使用条款'
      }
    }
  },
  'zh-TW': {
    translation: {
      nav: {
        home: '首頁',
        about: '關於我們',
        fellows: '院士名單',
        contact: '聯繫我們',
        join: '加入我們'
      },
      all: '全部',
      hero: {
        tag: '引领全球绿色转型',
        title: '世界綠色金融',
        subtitle: '科學院',
        description: '匯聚全球頂尖智慧，構建可持續金融的未來。我們通過嚴謹的學術研究與創新的政策實踐，為地球的綠色明天提供金融動力。',
        ctaPrimary: '查看院士名單',
        ctaSecondary: '了解更多'
      },
      stats: {
        fellows: '全球院士',
        reports: '研究報告',
        partners: '合作機構',
        countries: '覆蓋國家'
      },
      mission: {
        title: '我們的使命：',
        highlight: '重塑金融，守護自然',
        description: '世界綠色金融科學院（WAGF）成立於 2020 年，是一個獨立的國際學術組織。我們認為，金融不僅是價值的交換，更是改變世界的有力工具。',
        item1Title: '標準制定',
        item1Desc: '參與全球 ESG 與綠色債券標準的制定與優化。',
        item2Title: '創新驅動',
        item2Desc: '探索區塊鏈、AI 等技術在綠色金融中的應用。',
        item3Title: '風險評估',
        item3Desc: '提供權威的氣候風險壓力測試與環境風險評估。',
        quote: 'WAGF 匯聚了全球最優秀的頭腦，共同解決我們這個時代最緊迫的挑戰。',
        quoteAuthor: '科學院理事會'
      },
      cta: {
        title: '加入全球綠色金融先鋒',
        description: '如果您在綠色金融領域有卓越貢獻，歡迎申請成為我們的院士。',
        button: '立即申請'
      },
      fellows: {
        title: '院士名單',
        desc: '世界綠色金融科學院的院士由全球在綠色金融、環境經濟及可持續發展領域做出傑出貢獻的專家學者組成。',
        search: '搜索姓名或機構...',
        filter: '專業領域',
        viewProfile: '查看簡介',
        noResults: '沒有找到匹配的院士。',
        back: '返回名單',
        contactInfo: '聯繫方式',
        website: '個人網站',
        bio: '個人簡介',
        expertise: '專業領域',
        research: '研究方向',
        publications: '代表性著作',
        publishedAt: '發表於'
      },
      about: {
        title: '關於 WAGF',
        description: '世界綠色金融科學院（World Academy of Green Finance）是全球領先的綠色金融智庫與學術交流平台。',
        visionTitle: '願景',
        visionDesc: '成為全球綠色金融領域的燈塔，引領金融體系向生態文明轉型，實現經濟增長與環境保護的和諧共生。',
        missionTitle: '使命',
        missionDesc: '通過跨學科研究、國際標準制定和高端人才培養，為全球可持續發展提供科學的金融解決方案。',
        historyTitle: '發展歷程',
        historyItem1Title: '科學院成立',
        historyItem1Desc: '在日內瓦舉行的全球可持續金融峰会上，世界綠色金融科學院正式宣告成立。',
        historyItem2Title: '發佈首份全球報告',
        historyItem2Desc: '發佈《全球碳中和金融路徑圖》，獲得聯合國環境署高度評價。',
        historyItem3Title: '院士規模突破百人',
        historyItem3Desc: '來自全球 30 多個國家的頂尖學者與金融家加入 WAGF。',
        historyItem4Title: '數位化轉型',
        historyItem4Desc: '啟動全球綠色金融大數據平台，為政策制定提供實時數據支持。',
        valuesTitle: '核心價值觀',
        value1Title: '學術嚴謹',
        value1Desc: '堅持客觀、中立、科學的研究態度，確保每一份報告都經得起時間考驗。',
        value2Title: '全球視野',
        value2Desc: '打破地域局限，匯聚全球智慧，解決全人類共同面臨的氣候挑戰。',
        value3Title: '知行合一',
        value3Desc: '不僅關注理論研究，更致力於將學術成果轉化為可落地的金融政策。'
      },
      contact: {
        title: '聯繫我們',
        desc: '無論您是尋求學術合作、政策諮詢，還是希望申請成為院士，我們都期待聽到您的聲音。',
        office: '我們的辦公室',
        address: '地址',
        addressDetail: '北京市朝陽區綠色金融大廈 88 號',
        email: '電子郵件',
        research: '學術諮詢',
        press: '媒體合作',
        apply: '院士申請',
        phone: '電話',
        switchboard: '總機',
        fax: '傳真',
        formTitle: '在線留言',
        name: '姓名',
        emailLabel: '郵箱',
        subject: '主題',
        message: '留言內容',
        send: '發送消息',
        placeholderName: '您的姓名',
        placeholderMsg: '請描述您的需求...',
        subjects: {
          collab: '合作諮詢',
          apply: '院士申請',
          research: '學術研究',
          other: '其他'
        }
      },
      footer: {
        desc: '世界綠色金融科學院致力於通過學術研究、政策建議和人才培養，推動全球金融體系向綠色、低碳和可持續方向轉型。',
        links: '快速連結',
        research: '研究領域',
        contact: '聯繫信息',
        rights: '© 2026 世界綠色金融科學院. 保留所有權利。',
        privacy: '隱私政策',
        terms: '使用條款'
      }
    }
  },
  ja: {
    translation: {
      nav: {
        home: 'ホーム',
        about: '私たちについて',
        fellows: 'フェロー名簿',
        contact: 'お問い合わせ',
        join: '参加する'
      },
      all: 'すべて',
      hero: {
        tag: 'グローバルなグリーン転換をリードする',
        title: '世界グリーン金融',
        subtitle: 'アカデミー',
        description: '世界の知恵を集結し、持続可能な金融の未来を築きます。厳格な学術研究と革新的な政策実践を通じて、よりクリーンな明日のための金融的推進力を提供します。',
        ctaPrimary: 'フェロー名簿を見る',
        ctaSecondary: '詳細を見る'
      },
      stats: {
        fellows: 'グローバルフェロー',
        reports: '研究レポート',
        partners: '提携機関',
        countries: '対象国'
      },
      mission: {
        title: '私たちの使命：',
        highlight: '金融を再構築し、自然を守る',
        description: '世界グリーン金融アカデミー（WAGF）は、2020年に独立した国際学術組織として設立されました。金融は単なる価値の交換ではなく、世界を変えるための強力なツールであると信じています。',
        item1Title: '標準策定',
        item1Desc: 'グローバルなESGおよびグリーンボンド標準の策定と最適化に参加します。',
        item2Title: 'イノベーション主導',
        item2Desc: 'ブロックチェーンやAIなどの技術のグリーン金融への応用を模索します。',
        item3Title: 'リスク評価',
        item3Desc: '権威ある気候リスクストレステストと環境リスク評価を提供します。',
        quote: 'WAGFは、現代の最も差し迫った課題を解決するために、世界最高の知性を結集しています。',
        quoteAuthor: 'アカデミー評議会'
      },
      cta: {
        title: 'グローバル・グリーン・ファイナンスの先駆者に加わる',
        description: 'グリーンファイナンスの分野で卓越した貢献をされた方は、ぜひ当アカデミーのフェローへの応募をご検討ください。',
        button: '今すぐ応募'
      },
      fellows: {
        title: 'フェロー名簿',
        desc: '世界グリーン金融アカデミーのフェローは、グリーン金融、環境経済、持続可能な開発の分野で顕著な貢献をした世界の優れた専門家や学者で構成されています。',
        search: '名前または機関で検索...',
        filter: '専門分野',
        viewProfile: 'プロフィールを見る',
        noResults: '一致するフェローは見つかりませんでした。',
        back: '名簿に戻る',
        contactInfo: '連絡先',
        website: '個人ウェブサイト',
        bio: '略歴',
        expertise: '専門分野',
        research: '研究方向',
        publications: '主要著作',
        publishedAt: '掲載先'
      },
      about: {
        title: 'WAGFについて',
        description: '世界グリーン金融アカデミー（World Academy of Green Finance）は、世界をリードするグリーン金融シンクタンクおよび学術交流プラットフォームです。',
        visionTitle: 'ビジョン',
        visionDesc: 'グローバルなグリーン金融分野の灯台となり、金融システムの生態文明への移行をリードし、経済成長と環境保護の調和を実現します。',
        missionTitle: '使命',
        missionDesc: '学際的な研究、国際標準の策定、高度な人材育成を通じて、世界の持続可能な開発のための科学的な金融ソリューションを提供します。',
        historyTitle: '沿革',
        historyItem1Title: 'アカデミー設立',
        historyItem1Desc: 'ジュネーブで開催されたグローバル・サステナブル・ファイナンス・サミットにて、世界グリーン金融アカデミーの設立が正式に発表されました。',
        historyItem2Title: '初のグローバルレポート発行',
        historyItem2Desc: '「グローバル・カーボンニュートラル・ファイナンス・ロードマップ」を発行し、国連環境計画（UNEP）から高い評価を受けました。',
        historyItem3Title: 'フェロー数が100名を突破',
        historyItem3Desc: '世界30カ国以上からトップクラスの学者や金融家がWAGFに加入しました。',
        historyItem4Title: 'デジタルトランスフォーメーション',
        historyItem4Desc: '政策立案にリアルタイムのデータサポートを提供するため、グローバル・グリーン・ファイナンス・ビッグデータ・プラットフォームを立ち上げました。',
        valuesTitle: 'コアバリュー',
        value1Title: '学術的厳格さ',
        value1Desc: '客観的、中立的、科学的な研究姿勢を維持し、すべてのレポートが時の試練に耐えられるようにします。',
        value2Title: 'グローバルな視点',
        value2Desc: '地域の制限を打ち破り、世界の知恵を集め、全人類が直面する気候変動の課題を解決します。',
        value3Title: '知行合一',
        value3Desc: '理論研究だけでなく、学術成果を実用的な金融政策に変換することにも尽力します。'
      },
      contact: {
        title: 'お問い合わせ',
        desc: '学術協力、政策相談、またはフェローへの応募をご希望の方は、お気軽にご連絡ください。',
        office: 'オフィス',
        address: '住所',
        addressDetail: '北京市朝陽区グリーン金融ビル88号',
        email: 'メールアドレス',
        research: '学術相談',
        press: 'メディア協力',
        apply: 'フェロー応募',
        phone: '電話',
        switchboard: '代表',
        fax: 'ファックス',
        formTitle: 'メッセージを送る',
        name: 'お名前',
        emailLabel: 'メール',
        subject: '件名',
        message: 'メッセージ内容',
        send: '送信する',
        placeholderName: 'お名前',
        placeholderMsg: 'ご要望をご記入ください...',
        subjects: {
          collab: '協力相談',
          apply: 'フェロー応募',
          research: '学術研究',
          other: 'その他'
        }
      },
      footer: {
        desc: 'WAGFは、学術研究、政策提言、人材育成を通じて、世界の金融システムをグリーン、低炭素、持続可能な方向へと導くことに尽力しています。',
        links: 'クイックリンク',
        research: '研究分野',
        contact: '連絡先情報',
        rights: '© 2026 世界グリーン金融アカデミー. All rights reserved.',
        privacy: 'プライバシーポリシー',
        terms: '利用規約'
      }
    }
  },
  ko: {
    translation: {
      nav: {
        home: '홈',
        about: '소개',
        fellows: '펠로우 명단',
        contact: '문의하기',
        join: '함께하기'
      },
      all: '전체',
      hero: {
        tag: '글로벌 그린 전환을 선도하다',
        title: '세계 그린 금융',
        subtitle: '아카데미',
        description: '글로벌 지혜를 모아 지속 가능한 금융의 미래를 구축합니다. 엄격한 학술 연구와 혁신적인 정책 실천을 통해 더 푸른 내일을 위한 금융적 모멘텀을 제공합니다.',
        ctaPrimary: '펠로우 명단 보기',
        ctaSecondary: '더 알아보기'
      },
      stats: {
        fellows: '글로벌 펠로우',
        reports: '연구 보고서',
        partners: '협력 기관',
        countries: '대상 국가'
      },
      mission: {
        title: '우리의 사명:',
        highlight: '금융을 재편하고 자연을 보호하다',
        description: '세계 그린 금융 아카데미(WAGF)는 2020년에 독립적인 국제 학술 기구로 설립되었습니다. 우리는 금융이 단순한 가치 교환이 아니라 세상을 바꾸는 강력한 도구라고 믿습니다.',
        item1Title: '표준 제정',
        item1Desc: '글로벌 ESG 및 그린 본드 표준의 제정 및 최적화에 참여합니다.',
        item2Title: '혁신 주도',
        item2Desc: '블록체인, AI 등의 기술을 그린 금융에 적용하는 방안을 모색합니다.',
        item3Title: '리스크 평가',
        item3Desc: '권위 있는 기후 리스크 스트레스 테스트 및 환경 리스크 평가를 제공합니다.',
        quote: 'WAGF는 우리 시대의 가장 시급한 과제를 해결하기 위해 세계 최고의 인재들을 한데 모읍니다.',
        quoteAuthor: '아카데미 이사회'
      },
      cta: {
        title: '글로벌 그린 금융 선구자들과 함께하세요',
        description: '그린 금융 분야에서 탁월한 공헌을 하셨다면, 저희 아카데미의 펠로우로 지원해 주시기 바랍니다.',
        button: '지금 지원하기'
      },
      fellows: {
        title: '펠로우 명단',
        desc: '세계 그린 금융 아카데미의 펠로우는 그린 금융, 환경 경제 및 지속 가능한 개발 분야에서 현저한 공헌을 한 글로벌 전문가와 학자들로 구성됩니다.',
        search: '이름 또는 기관 검색...',
        filter: '전문 분야',
        viewProfile: '프로필 보기',
        noResults: '일치하는 펠로우를 찾을 수 없습니다.',
        back: '명단으로 돌아가기',
        contactInfo: '연락처',
        website: '개인 웹사이트',
        bio: '약력',
        expertise: '전문 분야',
        research: '연구 방향',
        publications: '주요 저서',
        publishedAt: '게재처'
      },
      about: {
        title: 'WAGF 소개',
        description: '세계 그린 금융 아카데미(World Academy of Green Finance)는 세계를 선도하는 그린 금융 싱크탱크이자 학술 교류 플랫폼입니다.',
        visionTitle: '비전',
        visionDesc: '글로벌 그린 금융 분야의 등대가 되어 금융 시스템의 생태 문명 전환을 선도하고 경제 성장과 환경 보호의 조화를 실현합니다.',
        missionTitle: '사명',
        missionDesc: '학제간 연구, 국제 표준 제정 및 고급 인재 양성을 통해 글로벌 지속 가능한 개발을 위한 과학적인 금융 솔루션을 제공합니다.',
        historyTitle: '연혁',
        historyItem1Title: '아카데미 설립',
        historyItem1Desc: '제네바에서 열린 글로벌 지속 가능 금융 서밋에서 세계 그린 금융 아카데미 설립이 공식 발표되었습니다.',
        historyItem2Title: '첫 글로벌 보고서 발간',
        historyItem2Desc: 'UNEP로부터 높은 평가를 받은 "글로벌 탄소 중립 금융 로드맵"을 발간했습니다.',
        historyItem3Title: '펠로우 100명 돌파',
        historyItem3Desc: '전 세계 30여 개국의 최정상급 학자와 금융인들이 WAGF에 합류했습니다.',
        historyItem4Title: '디지털 전환',
        historyItem4Desc: '정책 입안을 위한 실시간 데이터 지원을 위해 글로벌 그린 금융 빅데이터 플랫폼을 런칭했습니다.',
        valuesTitle: '핵심 가치',
        value1Title: '학술적 엄격함',
        value1Desc: '객관적이고 중립적이며 과학적인 연구 태도를 유지하여 모든 보고서가 시간의 시험을 견딜 수 있도록 합니다.',
        value2Title: '글로벌 관점',
        value2Desc: '지역적 한계를 뛰어넘어 글로벌 지혜를 모으고 인류가 직면한 기후 위기 과제를 해결합니다.',
        value3Title: '지행합일',
        value3Desc: '이론 연구뿐만 아니라 학술 성과를 실질적인 금융 정책으로 전환하는 데에도 힘씁니다.'
      },
      contact: {
        title: '문의하기',
        desc: '학술 협력, 정책 상담 또는 펠로우 신청을 원하시면 언제든지 연락 주시기 바랍니다.',
        office: '사무실',
        address: '주소',
        addressDetail: '베이징시 차오양구 그린 금융 빌딩 88호',
        email: '이메일',
        research: '학술 상담',
        press: '미디어 협력',
        apply: '펠로우 신청',
        phone: '전화',
        switchboard: '대표 번호',
        fax: '팩스',
        formTitle: '메시지 남기기',
        name: '성함',
        emailLabel: '이메일',
        subject: '제목',
        message: '메시지 내용',
        send: '보내기',
        placeholderName: '성함',
        placeholderMsg: '요청 사항을 입력해 주세요...',
        subjects: {
          collab: '협력 상담',
          apply: '펠로우 신청',
          research: '학술 연구',
          other: '기타'
        }
      },
      footer: {
        desc: 'WAGF는 학술 연구, 정책 제언 및 인재 양성을 통해 글로벌 금융 시스템을 그린, 저탄소, 지속 가능한 방향으로 이끄는 데 전념하고 있습니다.',
        links: '빠른 링크',
        research: '연구 분야',
        contact: '연락처 정보',
        rights: '© 2026 세계 그린 금융 아카데미. All rights reserved.',
        privacy: '개인정보 처리방침',
        terms: '이용 약관'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        fellows: 'Miembros',
        contact: 'Contacto',
        join: 'Únete'
      },
      all: 'Todo',
      hero: {
        tag: 'Liderando la Transición Verde Global',
        title: 'Academia Mundial de Finanzas Verdes',
        subtitle: 'Academia',
        description: 'Reuniendo la sabiduría global para construir un futuro financiero sostenible. Proporcionamos impulso financiero para un mañana más verde a través de una investigación académica rigurosa y una práctica política innovadora.',
        ctaPrimary: 'Ver Miembros',
        ctaSecondary: 'Saber Más'
      },
      stats: {
        fellows: 'Miembros Globales',
        reports: 'Informes de Investigación',
        partners: 'Instituciones Socias',
        countries: 'Países Cubiertos'
      },
      mission: {
        title: 'Nuestra Misión:',
        highlight: 'Rediseñar las Finanzas, Proteger la Naturaleza',
        description: 'La Academia Mundial de Finanzas Verdes (WAGF) se estableció en 2020 como una organización académica internacional independiente. Creemos que las finanzas no son solo un intercambio de valor, sino una herramienta poderosa para cambiar el mundo.',
        item1Title: 'Establecimiento de Estándares',
        item1Desc: 'Participar en la formulación y optimización de los estándares globales de ESG y bonos verdes.',
        item2Title: 'Impulsado por la Innovación',
        item2Desc: 'Explorar la aplicación de tecnologías como blockchain e IA en las finanzas verdes.',
        item3Title: 'Evaluación de Riesgos',
        item3Desc: 'Proporcionar pruebas de estrés de riesgo climático y evaluación de riesgos ambientales autorizadas.',
        quote: 'WAGF reúne a las mejores mentes del mundo para resolver los desafíos más urgentes de nuestro tiempo.',
        quoteAuthor: 'Consejo de la Academia'
      },
      cta: {
        title: 'Únase a los Pioneros de las Finanzas Verdes Globales',
        description: 'Si ha realizado contribuciones destacadas en el campo de las finanzas verdes, le invitamos a postularse para convertirse en nuestro Miembro.',
        button: 'Postularse Ahora'
      },
      fellows: {
        title: 'Lista de Miembros',
        desc: 'Los Miembros de la Academia Mundial de Finanzas Verdes consisten en destacados expertos y académicos que han realizado contribuciones significativas a las finanzas verdes, la economía ambiental y el desarrollo sostenible.',
        search: 'Buscar nombre o institución...',
        filter: 'Especialidad',
        viewProfile: 'Ver Perfil',
        noResults: 'No se encontraron Miembros coincidentes.',
        back: 'Volver a la Lista',
        contactInfo: 'Información de Contacto',
        website: 'Sitio Web Personal',
        bio: 'Biografía',
        expertise: 'Especialidad',
        research: 'Direcciones de Investigación',
        publications: 'Publicaciones Seleccionadas',
        publishedAt: 'Publicado en'
      },
      about: {
        title: 'Sobre WAGF',
        description: 'La Academia Mundial de Finanzas Verdes (World Academy of Green Finance) es un think tank de finanzas verdes y una plataforma de intercambio académico líder a nivel mundial.',
        visionTitle: 'Visión',
        visionDesc: 'Ser un faro en el campo de las finanzas verdes globales, liderando la transición del sistema financiero hacia la civilización ecológica y logrando la armonía entre el crecimiento económico y la protección ambiental.',
        missionTitle: 'Misión',
        missionDesc: 'A través de la investigación interdisciplinaria, el establecimiento de estándares internacionales y la formación de talento de alto nivel, proporcionamos soluciones financieras científicas para el desarrollo sostenible global.',
        historyTitle: 'Historia',
        historyItem1Title: 'Fundación de la Academia',
        historyItem1Desc: 'La Academia Mundial de Finanzas Verdes fue anunciada oficialmente en la Cumbre Global de Finanzas Sostenibles en Ginebra.',
        historyItem2Title: 'Primer Informe Global',
        historyItem2Desc: 'Publicación de la "Hoja de Ruta Global de Finanzas Carbono Neutral", altamente elogiada por el PNUMA.',
        historyItem3Title: 'Más de 100 Miembros',
        historyItem3Desc: 'Destacados académicos y financieros de más de 30 países se unieron a la WAGF.',
        historyItem4Title: 'Transformación Digital',
        historyItem4Desc: 'Lanzamiento de la Plataforma Global de Big Data de Finanzas Verdes para brindar soporte de datos en tiempo real para la formulación de políticas.',
        valuesTitle: 'Valores Fundamentales',
        value1Title: 'Rigor Académico',
        value1Desc: 'Mantener una actitud de investigación objetiva, neutral y científica, asegurando que cada informe resista la prueba del tiempo.',
        value2Title: 'Perspectiva Global',
        value2Desc: 'Romper las limitaciones regionales, reunir la sabiduría global y resolver los desafíos climáticos que enfrenta toda la humanidad.',
        value3Title: 'Unidad de Conocimiento y Acción',
        value3Desc: 'No solo enfocarse en la investigación teórica, sino también comprometerse a transformar los logros académicos en políticas financieras prácticas.'
      },
      contact: {
        title: 'Contáctenos',
        desc: 'Ya sea que busque colaboración académica, consulta de políticas o desee postularse para convertirse en Miembro, esperamos saber de usted.',
        office: 'Nuestra Oficina',
        address: 'Dirección',
        addressDetail: 'No. 88 Edificio de Finanzas Verdes, Distrito de Chaoyang, Beijing, 100020',
        email: 'Correo Electrónico',
        research: 'Investigación',
        press: 'Prensa',
        apply: 'Postulación de Miembros',
        phone: 'Teléfono',
        switchboard: 'Centralita',
        fax: 'Fax',
        formTitle: 'Envíenos un Mensaje',
        name: 'Nombre',
        emailLabel: 'Correo',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        placeholderName: 'Su Nombre',
        placeholderMsg: 'Por favor describa sus necesidades...',
        subjects: {
          collab: 'Colaboración',
          apply: 'Postulación de Miembros',
          research: 'Investigación Académica',
          other: 'Otro'
        }
      },
      footer: {
        desc: 'WAGF se compromete a impulsar la transición del sistema financiero global hacia direcciones verdes, bajas en carbono y sostenibles a través de la investigación académica, el asesoramiento político y la formación de talento.',
        links: 'Enlaces Rápidos',
        research: 'Áreas de Investigación',
        contact: 'Información de Contacto',
        rights: '© 2026 Academia Mundial de Finanzas Verdes. Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Uso'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
