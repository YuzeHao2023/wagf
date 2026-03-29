export interface Fellow {
  id: string;
  name: { [key: string]: string };
  title: { [key: string]: string };
  organization: { [key: string]: string };
  bio: { [key: string]: string };
  expertise: { [key: string]: string[] };
  image: string;
  email?: string;
  website?: string;
}

export const fellows: Fellow[] = [
  {
    id: "1",
    name: {
      en: "Prof. Wei Zhang",
      zh: "张伟教授",
      "zh-TW": "張偉教授",
      ja: "張偉教授",
      ko: "장웨이 교수",
      es: "Prof. Wei Zhang"
    },
    title: {
      en: "Chief Economist",
      zh: "首席经济学家",
      "zh-TW": "首席經濟學家",
      ja: "チーフエコノミスト",
      ko: "수석 이코노미스트",
      es: "Economista Jefe"
    },
    organization: {
      en: "World Academy of Green Finance",
      zh: "世界绿色金融科学院",
      "zh-TW": "世界綠色金融科學院",
      ja: "世界グリーン金融アカデミー",
      ko: "세계 그린 금융 아카데미",
      es: "Academia Mundial de Finanzas Verdes"
    },
    bio: {
      en: "Professor Wei Zhang has over 20 years of research experience in green finance and sustainable development. He has served as a consultant to several international financial institutions and is committed to promoting the formulation and implementation of carbon neutrality policies.",
      zh: "张伟教授在绿色金融和可持续发展领域拥有超过20年的研究经验。他曾担任多家国际金融机构的顾问，致力于推动碳中和政策的制定与实施。",
      "zh-TW": "張偉教授在綠色金融和可持續發展領域擁有超過20年的研究經驗。他曾擔任多家國際金融機構的顧問，致力於推動碳中和政策的制定與實施。",
      ja: "張偉教授は、グリーン金融と持続可能な開発の分野で20年以上の研究経験があります。彼はいくつかの国際金融機関の顧問を務め、カーボンニュートラル政策の策定と実施の推進に取り組んでいます。",
      ko: "장웨이 교수는 그린 금융 및 지속 가능한 개발 분야에서 20년 이상의 연구 경험을 보유하고 있습니다. 그는 여러 국제 금융 기관의 고문을 역임했으며 탄소 중립 정책의 수립 및 이행을 촉진하는 데 전념하고 있습니다.",
      es: "El profesor Wei Zhang tiene más de 20 años de experiencia en investigación en finanzas verdes y desarrollo sostenible. Se ha desempeñado como consultor para varias instituciones financieras internacionales y está comprometido a promover la formulación e implementación de políticas de neutralidad de carbono."
    },
    expertise: {
      en: ["Carbon Finance", "Macroeconomics", "Climate Policy"],
      zh: ["碳金融", "宏观经济", "气候政策"],
      "zh-TW": ["碳金融", "宏觀經濟", "氣候政策"],
      ja: ["カーボンファイナンス", "マクロ経済学", "気候政策"],
      ko: ["탄소 금융", "거시경제학", "기후 정책"],
      es: ["Finanzas de Carbono", "Macroeconomía", "Política Climática"]
    },
    image: "https://picsum.photos/seed/fellow1/400/500",
    email: "zhangwei@wagf.org"
  },
  {
    id: "2",
    name: {
      en: "Dr. Sarah Jenkins",
      zh: "莎拉·詹金斯博士",
      "zh-TW": "莎拉·詹金斯博士",
      ja: "サラ・ジェンキンス博士",
      ko: "사라 젠킨스 박사",
      es: "Dra. Sarah Jenkins"
    },
    title: {
      en: "Senior Research Fellow",
      zh: "资深研究员",
      "zh-TW": "資深研究員",
      ja: "シニアリサーチフェロー",
      ko: "시니어 리서치 펠로우",
      es: "Investigadora Senior"
    },
    organization: {
      en: "Oxford Sustainable Finance Programme",
      zh: "牛津大学可持续金融项目",
      "zh-TW": "牛津大學可持續金融項目",
      ja: "オックスフォード持続可能な金融プログラム",
      ko: "옥스퍼드 지속 가능한 금융 프로그램",
      es: "Programa de Finanzas Sostenibles de Oxford"
    },
    bio: {
      en: "Dr. Jenkins is a leading expert in ESG integration and impact investing. Her research focuses on the intersection of biodiversity and financial risk.",
      zh: "詹金斯博士是 ESG 整合和影响力投资方面的领先专家。她的研究重点是生物多样性与金融风险的交集。",
      "zh-TW": "詹金斯博士是 ESG 整合和影響力投資方面的領先專家。她的研究重點是生物多樣性與金融風險的交集。",
      ja: "ジェンキンス博士は、ESG統合とインパクト投資の第一人者です。彼女の研究は、生物多様性と金融リスクの交差点に焦点を当てています。",
      ko: "젠킨스 박사는 ESG 통합 및 임팩트 투자의 선도적인 전문가입니다. 그녀의 연구는 생물 다양성과 금융 리스크의 교차점에 초점을 맞추고 있습니다.",
      es: "La Dra. Jenkins es una experta líder en integración ESG e inversión de impacto. Su investigación se centra en la intersección de la biodiversidad y el riesgo financiero."
    },
    expertise: {
      en: ["ESG", "Impact Investing", "Biodiversity Finance"],
      zh: ["ESG", "影响力投资", "生物多样性金融"],
      "zh-TW": ["ESG", "影響力投資", "生物多樣性金融"],
      ja: ["ESG", "インパクト投資", "生物多様性金融"],
      ko: ["ESG", "임팩트 투자", "생물 다양성 금융"],
      es: ["ESG", "Inversión de Impacto", "Finanzas de Biodiversidad"]
    },
    image: "https://picsum.photos/seed/fellow2/400/500",
    website: "https://example.com/sarah"
  },
  {
    id: "3",
    name: {
      en: "Ming Li",
      zh: "李明",
      "zh-TW": "李明",
      ja: "李明",
      ko: "이명",
      es: "Ming Li"
    },
    title: {
      en: "Executive Director",
      zh: "执行理事",
      "zh-TW": "執行理事",
      ja: "専務理事",
      ko: "상임 이사",
      es: "Director Ejecutivo"
    },
    organization: {
      en: "Green Development Foundation",
      zh: "绿色发展基金会",
      "zh-TW": "綠色發展基金會",
      ja: "グリーン開発財団",
      ko: "녹색 개발 재단",
      es: "Fundación de Desarrollo Verde"
    },
    bio: {
      en: "Mr. Ming Li has a deep background in green bond markets and renewable energy financing. He has led several large-scale green infrastructure financing projects in Asia.",
      zh: "李明先生在绿色债券市场和可再生能源融资方面具有深厚背景。他主导了多个亚洲大型绿色基础设施项目的融资工作。",
      "zh-TW": "李明先生在綠色債券市場和可再生能源融資方面具有深厚背景。他主導了多個亞洲大型綠色基礎設施項目的融資工作。",
      ja: "李明氏は、グリーンボンド市場と再生可能エネルギーファイナンスに深い背景を持っています。彼はアジアのいくつかの大規模なグリーンインフラファイナンスプロジェクトを主導してきました。",
      ko: "이명 씨는 그린 본드 시장과 재생 에너지 금융 분야에서 깊은 배경을 가지고 있습니다. 그는 아시아의 여러 대규모 그린 인프라 금융 프로젝트를 주도했습니다.",
      es: "El Sr. Ming Li tiene una sólida formación en los mercados de bonos verdes y la financiación de energías renovables. Ha liderado varios proyectos de financiación de infraestructuras verdes a gran escala en Asia."
    },
    expertise: {
      en: ["Green Bonds", "Renewable Energy Financing", "Infrastructure"],
      zh: ["绿色债券", "可再生能源融资", "基础设施"],
      "zh-TW": ["綠色債券", "可再生能源融資", "基礎設施"],
      ja: ["グリーンボンド", "再生可能エネルギーファイナンス", "インフラ"],
      ko: ["그린 본드", "재생 에너지 금융", "인프라"],
      es: ["Bonos Verdes", "Financiación de Energías Renovables", "Infraestructura"]
    },
    image: "https://picsum.photos/seed/fellow3/400/500"
  }
];
