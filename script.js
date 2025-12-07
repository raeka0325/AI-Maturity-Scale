// 問題資料
const questions = [
    {
        category: "1. AI願景與策略",
        question: "貴組織是否有明確的AI策略與願景？",
        options: [
            "沒有明確的AI策略，僅有零星的AI項目",
            "正在討論AI策略，但尚未正式定案",
            "有明確的AI策略，並與部分業務目標對齊",
            "AI策略與整體業務策略完全對齊，並定期檢討",
            "AI策略驅動組織創新，持續優化並引領產業"
        ]
    },
    {
        category: "2. 治理框架",
        question: "貴組織是否建立了AI治理框架？",
        options: [
            "沒有任何治理機制",
            "有基本的使用規範，但未系統化",
            "建立了正式的AI治理框架和政策",
            "治理框架涵蓋風險管理、合規性等多個面向",
            "治理框架持續演進，並成為產業標竿"
        ]
    },
    {
        category: "3. AI倫理與合規",
        question: "貴組織對AI倫理的重視程度如何？",
        options: [
            "尚未考慮AI倫理議題",
            "開始意識到倫理的重要性",
            "制定了AI倫理準則",
            "倫理準則融入所有AI項目的開發流程",
            "倫理實踐獲得外部認證，成為產業典範"
        ]
    },
    {
        category: "4. 領導力與組織支持",
        question: "高階主管對AI的支持程度如何？",
        options: [
            "缺乏高階主管的關注和支持",
            "有初步興趣但投入有限",
            "高階主管積極支持並參與決策",
            "設有專職的AI領導角色（如AI長）",
            "AI成為董事會層級的策略議題"
        ]
    },
    {
        category: "5. 資源配置",
        question: "AI相關預算的規劃如何？",
        options: [
            "沒有專門的AI預算",
            "有少量預算用於AI實驗",
            "有明確的AI預算和投資計畫",
            "預算配置與策略目標緊密結合",
            "持續投資AI並有明確的ROI追蹤"
        ]
    }
];

// 成熟度等級定義
const maturityLevels = {
    1: {
        name: "Level 1 - 初始階段",
        description: "組織對AI的認識和應用處於起步階段，缺乏系統化的策略和治理機制。AI項目多為零散的實驗性質，缺乏整體規劃。",
        color: "#dc3545"
    },
    2: {
        name: "Level 2 - 發展階段",
        description: "組織開始認識到AI的重要性，正在探索和討論AI策略。開始建立基本的治理規範，但執行還不夠一致。",
        color: "#fd7e14"
    },
    3: {
        name: "Level 3 - 定義階段",
        description: "組織已建立明確的AI策略和治理框架，AI項目與部分業務目標對齊。開始系統化地推動AI應用。",
        color: "#ffc107"
    },
    4: {
        name: "Level 4 - 管理階段",
        description: "AI策略與整體業務策略完全整合，治理機制成熟且有效執行。組織能夠持續追蹤和優化AI項目的成效。",
        color: "#28a745"
    },
    5: {
        name: "Level 5 - 優化階段",
        description: "AI已成為組織的核心競爭力，持續創新並引領產業發展。治理實踐成為標竿，並積極參與產業標準制定。",
        color: "#007bff"
    }
};

// 改進建議
const recommendations = {
    1: [
        "建立AI願景：召集高階主管workshop，共同討論和制定組織的AI願景和初步策略",
        "設立AI工作小組：成立跨部門的AI探索小組，研究AI應用的可能性",
        "基礎教育訓練：為管理層和員工提供AI基礎知識培訓，提升整體認知",
        "試點項目：選擇1-2個低風險、高價值的業務場景進行AI試點",
        "建立基本規範：制定AI使用的基本準則，特別關注資料隱私和安全"
    ],
    2: [
        "正式化AI策略：將AI策略文件化，明確目標、範圍和優先順序",
        "建立治理委員會：成立AI治理委員會，定期審查AI項目和政策",
        "制定路線圖：規劃未來1-3年的AI發展路線圖，包含關鍵里程碑",
        "預算規劃：為AI項目編列專門預算，確保資源投入",
        "建立審核流程：標準化AI項目的提案、審核和批准流程",
        "倫理框架初稿：開始制定AI倫理準則，考慮公平性、透明度等議題"
    ],
    3: [
        "策略深化：將AI策略與各業務單位的目標深度整合，確保一致性",
        "治理框架完善：擴展治理框架，涵蓋風險管理、模型監控、審計等面向",
        "建立AI CoE：成立AI卓越中心，提供最佳實踐指導和技術支援",
        "人才發展計畫：制定AI人才培養和引進策略，建立專業團隊",
        "合規機制：建立完整的法規遵循機制，主動追蹤相關法規變化",
        "成效衡量：建立AI項目的KPI體系，定期評估成效和ROI"
    ],
    4: [
        "策略動態調整：建立策略檢討機制，根據市場和技術變化及時調整",
        "治理自動化：導入AI治理工具，自動化監控、審計和合規流程",
        "創新文化深化：建立激勵機制，鼓勵全員參與AI創新",
        "生態系統建設：與外部夥伴、學術機構建立AI生態系統",
        "倫理領導：在產業中倡導負責任的AI實踐，提升品牌形象",
        "知識管理：建立AI知識庫和最佳實踐分享平台"
    ],
    5: [
        "持續創新：投資前瞻性AI研究，保持技術領先地位",
        "產業領導：參與或主導產業標準和最佳實踐的制定",
        "AI民主化：將成功經驗和工具開放給產業，建立領導地位",
        "全球擴展：將成功的AI治理模式推廣到全球營運據點",
        "社會責任：積極參與AI對社會影響的討論，展現企業責任",
        "生態系統領導：成為AI生態系統的核心節點，引領產業發展"
    ]
};

// 狀態管理
let currentQuestion = 0;
let answers = {};

// 初始化
function init() {
    renderQuestions();
    updateUI();
}

// 渲染所有問題
function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        questionDiv.id = `question-${index}`;

        let optionsHTML = '';
        q.options.forEach((option, optIndex) => {
            const value = optIndex + 1;
            const checked = answers[index] === value ? 'checked' : '';
            const selected = answers[index] === value ? 'selected' : '';
            optionsHTML += `
                <div class="option ${selected}" onclick="selectOption(${index}, ${value})">
                    <input type="radio" name="q${index}" value="${value}" id="q${index}_${value}" ${checked}>
                    <label for="q${index}_${value}">${option}</label>
                </div>
            `;
        });

        questionDiv.innerHTML = `
            <h2 class="category-title">${q.category}</h2>
            <div class="question">
                <div class="question-text">${q.question}</div>
                <div class="options">
                    ${optionsHTML}
                </div>
            </div>
        `;

        container.appendChild(questionDiv);
    });
}

// 開始評估
function startAssessment() {
    document.getElementById('coverPage').classList.add('hidden');
    document.getElementById('assessmentSection').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 選擇答案
function selectOption(questionIndex, value) {
    answers[questionIndex] = value;

    // 更新選中狀態
    const options = document.querySelectorAll(`#question-${questionIndex} .option`);
    options.forEach(opt => opt.classList.remove('selected'));
    event.currentTarget.classList.add('selected');

    // 更新radio按鈕
    document.getElementById(`q${questionIndex}_${value}`).checked = true;

    updateUI();

    // 只有在選擇當前顯示的題目時才自動跳轉
    if (questionIndex === currentQuestion) {
        // 自動跳到下一題或顯示結果
        setTimeout(() => {
            if (questionIndex < questions.length - 1) {
                currentQuestion = questionIndex + 1;
                updateUI();
            } else {
                // 最後一題，顯示結果
                showResults();
            }
        }, 500);
    }
}

// 下一題
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateUI();
    }
}

// 上一題
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateUI();
    }
}

// 更新UI
function updateUI() {
    // 更新問題顯示
    const allQuestions = document.querySelectorAll('.question-container');
    allQuestions.forEach((q, index) => {
        q.classList.toggle('active', index === currentQuestion);
    });

    // 更新計數器
    document.getElementById('questionCounter').textContent =
        `問題 ${currentQuestion + 1} / ${questions.length}`;

    // 更新進度條（基於當前問題位置）
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // 更新按鈕狀態
    const prevBtn = document.getElementById('prevBtn');
    prevBtn.disabled = currentQuestion === 0;
}

// 顯示結果
function showResults() {
    // 計算原始總分（5-25分）
    let rawScore = 0;
    Object.values(answers).forEach(value => {
        rawScore += value;
    });

    // 轉換為10分制（2-10分）
    const totalScore = (rawScore * 0.4).toFixed(1);

    // 計算成熟度等級（基於平均分）
    const avgScore = rawScore / questions.length;
    let level;
    if (avgScore < 1.5) level = 1;
    else if (avgScore < 2.5) level = 2;
    else if (avgScore < 3.5) level = 3;
    else if (avgScore < 4.5) level = 4;
    else level = 5;

    // 顯示結果
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('maturityLevel').textContent = `Level ${level}`;
    document.getElementById('levelTitle').textContent = maturityLevels[level].name;
    document.getElementById('levelDescription').textContent = maturityLevels[level].description;

    // 設定等級顏色
    const maturityLevelDiv = document.querySelector('.maturity-level');
    maturityLevelDiv.style.background = maturityLevels[level].color;

    // 更新等級指示器
    const dots = document.querySelectorAll('.level-dot');
    const connectors = document.querySelectorAll('.level-connector');

    dots.forEach((dot, index) => {
        const dotLevel = index + 1;
        dot.classList.remove('current', 'passed');

        if (dotLevel === level) {
            dot.classList.add('current');
        } else if (dotLevel < level) {
            dot.classList.add('passed');
        }
    });

    connectors.forEach((connector, index) => {
        connector.classList.remove('active');
        if (index < level - 1) {
            connector.classList.add('active');
        }
    });

    // 顯示建議
    const recommendationsList = document.getElementById('recommendationsList');
    recommendationsList.innerHTML = '';
    recommendations[level].forEach(rec => {
        const div = document.createElement('div');
        div.className = 'recommendation-item';
        div.textContent = rec;
        recommendationsList.appendChild(div);
    });

    // 切換顯示
    document.getElementById('assessmentSection').style.display = 'none';
    document.getElementById('results').classList.add('show');

    // 滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 確認重新開始
function confirmRestart() {
    if (confirm('確定要重新開始評估嗎？目前的進度將會遺失。')) {
        resetAssessment();
    }
}

// 重新評估
function resetAssessment() {
    currentQuestion = 0;
    answers = {};
    renderQuestions();
    updateUI();

    // 切換顯示 - 回到封面
    document.getElementById('results').classList.remove('show');
    document.getElementById('assessmentSection').style.display = 'none';
    document.getElementById('coverPage').classList.remove('hidden');

    // 滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 頁面載入時初始化
window.onload = init;
