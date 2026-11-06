const STORAGE_KEY = 'hsk6-context-lab-data-v2';
const PROGRESS_KEY = 'hsk6-context-lab-progress-v2';

const demoData = {
  schemaVersion: 2,
  lessons: [
    {
      id: 'urban-life-001',
      title: '城市生活与公共资源',
      subtitle: 'Học từ qua chủ đề thành phố, áp lực và quyền lợi công cộng',
      level: 'HSK6',
      estimatedMinutes: 28,
      targetWords: [
        { word: '维护', pinyin: 'wéihù', meaning: 'duy trì, bảo vệ', pos: '动词', collocations: ['维护权益', '维护秩序'] },
        { word: '缓解', pinyin: 'huǎnjiě', meaning: 'làm dịu, giảm bớt', pos: '动词', collocations: ['缓解压力', '缓解矛盾'] },
        { word: '趋势', pinyin: 'qūshì', meaning: 'xu hướng', pos: '名词', collocations: ['发展趋势', '明显趋势'] },
        { word: '不可避免', pinyin: 'bùkě bìmiǎn', meaning: 'không thể tránh khỏi', pos: '短语', collocations: ['不可避免的问题', '是不可避免的'] },
        { word: '促进', pinyin: 'cùjìn', meaning: 'thúc đẩy', pos: '动词', collocations: ['促进发展', '促进交流'] },
        { word: '采取', pinyin: 'cǎiqǔ', meaning: 'áp dụng, thực hiện', pos: '动词', collocations: ['采取措施', '采取行动'] }
      ],
      exercises: [
        {
          id: 'urban-1',
          type: 'cloze_choice',
          title: '选词填空 · 搭配',
          context: '为了_____消费者的合法权益，相关部门决定进一步完善投诉处理机制。',
          prompt: 'Chọn từ phù hợp nhất với ngữ cảnh.',
          options: ['维护', '缓解', '促进', '采取'],
          answer: 0,
          explanation: '“维护权益” là collocation cố định và rất thường gặp trong văn viết HSK6. “采取” thường đi với 措施 / 行动.',
          targetWords: ['维护']
        },
        {
          id: 'urban-2',
          type: 'cloze_choice',
          title: '选词填空 · 语境判断',
          context: '面对上下班高峰期的交通压力，政府准备_____一系列措施，增加公共交通班次。',
          prompt: 'Chọn từ phù hợp nhất.',
          options: ['维护', '趋势', '采取', '不可避免'],
          answer: 2,
          explanation: '“采取措施” = áp dụng/thực hiện biện pháp. Đây là kết hợp từ rất điển hình trong đề đọc và viết HSK6.',
          targetWords: ['采取']
        },
        {
          id: 'urban-3',
          type: 'reading',
          title: '阅读理解 · 城市更新',
          passage: '近年来，越来越多的城市开始重新规划老城区。一方面，政府希望通过改善公共交通和增加绿地来缓解居民的生活压力；另一方面，也要维护具有历史价值的建筑。专家指出，城市更新并不是简单地拆旧建新，而是在发展与保护之间找到平衡。随着居民对生活质量要求的提高，这种更重视可持续发展的城市规划已经成为一种明显趋势。',
          question: '根据这段话，城市更新最需要注意什么？',
          options: ['尽量拆除所有旧建筑', '只增加城市绿地', '在发展和保护之间取得平衡', '减少居民使用公共交通'],
          answer: 2,
          evidence: '“城市更新并不是简单地拆旧建新，而是在发展与保护之间找到平衡。”',
          explanation: 'C là câu paraphrase trực tiếp ý chính của câu cuối phần giữa. Các đáp án khác chỉ lấy một chi tiết rồi tuyệt đối hóa.',
          targetWords: ['缓解', '维护', '趋势']
        },
        {
          id: 'urban-4',
          type: 'fill_blank',
          title: '词语回忆 · 主动输出',
          context: '在快速发展的过程中，出现一些新的社会问题几乎是________的。',
          prompt: 'Điền 1 từ/cụm từ trong lesson sao cho tự nhiên nhất.',
          acceptedAnswers: ['不可避免', '不可避免的'],
          explanation: '“是不可避免的 / 几乎是不可避免的” dùng để nói một tình huống khó có thể tránh khỏi.',
          targetWords: ['不可避免']
        },
        {
          id: 'urban-5',
          type: 'listening',
          title: '听力 · 工作与城市交通',
          script: '女：听说公司准备调整上下班时间，是真的吗？男：是的。最近地铁太挤了，公司希望通过错峰上班缓解大家通勤的压力。女：那挺好的，不过新安排刚开始的时候，大家不适应也是不可避免的。',
          question: '公司为什么准备调整上下班时间？',
          options: ['为了减少员工数量', '为了缓解员工通勤压力', '为了延长工作时间', '为了取消地铁补贴'],
          answer: 1,
          explanation: '男方明确说“希望通过错峰上班缓解大家通勤的压力”。',
          targetWords: ['缓解', '不可避免']
        },
        {
          id: 'urban-6',
          type: 'rewrite',
          title: '改写句子 · HSK6 表达升级',
          context: '城市的发展会让不同地区的人有更多交流机会。',
          prompt: 'Dùng “促进” viết lại câu trên theo phong cách văn viết tự nhiên hơn.',
          sampleAnswer: '城市的发展能够促进不同地区居民之间的交流。',
          explanation: '“促进 + 名词” thường dùng trong văn nghị luận: 促进交流 / 促进发展 / 促进合作。',
          targetWords: ['促进']
        },
        {
          id: 'urban-7',
          type: 'writing',
          title: '短写作 · 城市生活',
          prompt: '请用100—140字回答：大城市应该怎样提高居民的生活质量？',
          guidance: 'Cố gắng lập luận theo 2–3 ý. Dùng ít nhất 3 từ mục tiêu của lesson.',
          minChars: 100,
          maxChars: 140,
          requiredWords: ['维护', '缓解', '促进', '采取', '趋势', '不可避免'],
          sampleAnswer: '我认为，大城市要提高居民的生活质量，首先应该采取更有效的交通管理措施，增加公共交通班次，从而缓解上下班高峰期的压力。其次，城市发展不能只追求速度，还要维护居民的基本权益，并保护公共空间。随着人们对生活环境要求的提高，建设更宜居的城市已经成为一种明显趋势。',
          targetWords: ['维护', '缓解', '促进', '采取', '趋势', '不可避免']
        }
      ]
    },
    {
      id: 'study-ai-001',
      title: '人工智能与学习效率',
      subtitle: 'Luyện cách dùng từ HSK6 trong chủ đề học tập và công nghệ',
      level: 'HSK6',
      estimatedMinutes: 22,
      targetWords: [
        { word: '效率', pinyin: 'xiàolǜ', meaning: 'hiệu suất, hiệu quả', pos: '名词', collocations: ['提高效率', '学习效率'] },
        { word: '依赖', pinyin: 'yīlài', meaning: 'phụ thuộc, dựa vào', pos: '动词', collocations: ['依赖技术', '过度依赖'] },
        { word: '针对', pinyin: 'zhēnduì', meaning: 'nhằm vào, đối với', pos: '介词/动词', collocations: ['针对问题', '有针对性'] },
        { word: '调整', pinyin: 'tiáozhěng', meaning: 'điều chỉnh', pos: '动词', collocations: ['调整计划', '及时调整'] },
        { word: '掌握', pinyin: 'zhǎngwò', meaning: 'nắm vững', pos: '动词', collocations: ['掌握知识', '掌握方法'] }
      ],
      exercises: [
        {
          id: 'ai-1', type: 'cloze_choice', title: '选词填空 · 逻辑搭配',
          context: '这套系统会_____学生经常出错的知识点自动生成练习。',
          prompt: 'Chọn từ đúng.', options: ['掌握', '针对', '调整', '依赖'], answer: 1,
          explanation: '“针对 + 对象/问题” = nhằm vào một đối tượng/vấn đề cụ thể.', targetWords: ['针对']
        },
        {
          id: 'ai-2', type: 'reading', title: '阅读理解 · AI 学习助手',
          passage: '人工智能可以根据学生的答题记录分析薄弱环节，并及时调整练习难度。这确实有助于提高学习效率。不过，如果学生过度依赖系统给出的答案，就可能忽视独立思考。技术真正的价值，不是替学生完成学习任务，而是帮助他们更快地发现问题、掌握方法。',
          question: '作者最赞成下面哪种观点？',
          options: ['人工智能应该替学生完成作业', '学生应该完全拒绝人工智能', '人工智能适合辅助学习，但不能代替独立思考', '学习效率越高，学习效果一定越好'],
          answer: 2,
          evidence: '“技术真正的价值，不是替学生完成学习任务，而是帮助他们更快地发现问题、掌握方法。”',
          explanation: 'C tổng hợp đúng hai vế: AI có ích nhưng không được thay thế tư duy độc lập.', targetWords: ['效率', '调整', '依赖', '掌握']
        },
        {
          id: 'ai-3', type: 'fill_blank', title: '词语回忆 · 主动输出',
          context: '如果发现原来的复习计划不适合自己，就应该及时________。',
          prompt: 'Điền từ phù hợp.', acceptedAnswers: ['调整'],
          explanation: '“调整计划” là collocation tự nhiên: điều chỉnh kế hoạch.', targetWords: ['调整']
        },
        {
          id: 'ai-4', type: 'writing', title: '短写作 · AI 与学习',
          prompt: '请用90—120字回答：你认为学生应该怎样合理使用人工智能学习？',
          guidance: 'Dùng ít nhất 3 từ mục tiêu.', minChars: 90, maxChars: 120,
          requiredWords: ['效率', '依赖', '针对', '调整', '掌握'],
          sampleAnswer: '我认为，学生可以利用人工智能提高学习效率，例如针对自己的薄弱环节生成练习，并根据结果及时调整学习计划。但是，不能过度依赖工具给出的答案。真正重要的是理解错误的原因，掌握解决问题的方法。只有把技术和独立思考结合起来，人工智能才能真正帮助学习。',
          targetWords: ['效率', '依赖', '针对', '调整', '掌握']
        }
      ]
    }
  ]
};

let data = loadData();
let progress = loadProgress();
let activeLessonId = data.lessons[0]?.id || null;
let exerciseIndex = 0;
let draftAnswer = null;
let submitted = false;
let revealAssist = false;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function uid(prefix = 'id') { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`; }

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoData));
    return clone(demoData);
  }
  try {
    const parsed = JSON.parse(raw);
    return normalizeLibrary(parsed);
  } catch {
    return clone(demoData);
  }
}

function loadProgress() {
  const raw = localStorage.getItem(PROGRESS_KEY);
  const fallback = { answers: 0, correct: 0, streak: 6, completedExercises: {}, wordStats: {}, selfRated: {} };
  if (!raw) return fallback;
  try { return { ...fallback, ...JSON.parse(raw) }; } catch { return fallback; }
}

function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function saveProgress() { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); updateProgressUI(); }

function normalizeLibrary(input) {
  if (input?.schemaVersion === 2 && Array.isArray(input.lessons)) return input;
  if (input?.id && Array.isArray(input.targetWords) && Array.isArray(input.exercises)) {
    return { schemaVersion: 2, lessons: [input] };
  }
  throw new Error('Không đúng schema lesson pack v2');
}

function normalizeLesson(input) {
  const lesson = input?.schemaVersion === 2 && Array.isArray(input.lessons) ? input.lessons[0] : input;
  if (!lesson || typeof lesson !== 'object') throw new Error('Thiếu lesson object');
  if (!lesson.title) throw new Error('Thiếu title');
  if (!Array.isArray(lesson.targetWords) || !lesson.targetWords.length) throw new Error('targetWords phải là mảng có ít nhất 1 từ');
  if (!Array.isArray(lesson.exercises) || !lesson.exercises.length) throw new Error('exercises phải là mảng có ít nhất 1 bài');
  const normalized = clone(lesson);
  normalized.id = normalized.id || uid('lesson');
  normalized.level = normalized.level || 'HSK6';
  normalized.estimatedMinutes = Number(normalized.estimatedMinutes || Math.max(10, normalized.exercises.length * 4));
  normalized.targetWords = normalized.targetWords.map((w, index) => {
    if (typeof w === 'string') return { word: w, pinyin: '', meaning: '', pos: '', collocations: [] };
    if (!w.word) throw new Error(`targetWords[${index}] thiếu word`);
    return { word: w.word, pinyin: w.pinyin || '', meaning: w.meaning || '', pos: w.pos || '', collocations: Array.isArray(w.collocations) ? w.collocations : [] };
  });
  normalized.exercises = normalized.exercises.map((ex, index) => ({ ...ex, id: ex.id || `${normalized.id}-ex-${index + 1}`, targetWords: Array.isArray(ex.targetWords) ? ex.targetWords : [] }));
  return normalized;
}

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove('show'), 1900);
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}

function setView(view) {
  $$('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
  $('#studyView').classList.toggle('active', view === 'study');
  $('#studioView').classList.toggle('active', view === 'studio');
  if (view === 'study') {
    $('#eyebrow').textContent = 'STUDENT SPACE';
    $('#pageTitle').textContent = 'Học từ bằng ngữ cảnh 🌱';
    $('#pageSubtitle').textContent = 'Không flashcard — mỗi từ phải xuất hiện trong bài tập gần với HSK6.';
    renderStudy();
  } else {
    $('#eyebrow').textContent = 'CONTENT STUDIO';
    $('#pageTitle').textContent = 'Lesson Studio ✏️';
    $('#pageSubtitle').textContent = 'Import lesson JSON được tạo từ danh sách từ mục tiêu.';
    renderStudio();
  }
}

function getLesson(id = activeLessonId) {
  return data.lessons.find(l => l.id === id) || data.lessons[0] || null;
}

function completedCount(lesson) {
  if (!lesson) return 0;
  const done = progress.completedExercises[lesson.id] || [];
  return new Set(done).size;
}

function updateProgressUI() {
  const lesson = getLesson();
  const total = lesson?.exercises?.length || 0;
  const done = completedCount(lesson);
  const percent = total ? Math.round((done / total) * 100) : 0;
  $('#sidebarProgressText').textContent = `${done} / ${total} bài`;
  $('#sidebarPercent').textContent = `${percent}%`;
  $('#sidebarProgressBar').style.width = `${percent}%`;
  $('#streakValue').textContent = progress.streak || 0;
}

function totalTargetWords() {
  return new Set(data.lessons.flatMap(l => l.targetWords.map(w => w.word))).size;
}

function weakWords(limit = 5) {
  return Object.entries(progress.wordStats)
    .map(([word, stat]) => ({ word, ...stat, accuracy: stat.attempts ? stat.correct / stat.attempts : 0 }))
    .filter(x => x.attempts > 0 && x.accuracy < 0.8)
    .sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts)
    .slice(0, limit);
}

function renderStudy() {
  const lesson = getLesson();
  const accuracy = progress.answers ? Math.round((progress.correct / progress.answers) * 100) : 0;
  const weak = weakWords();

  $('#studyView').innerHTML = `
    <div class="section-grid dashboard-grid">
      <article class="card hero-card">
        <div class="hero-top">
          <div>
            <p class="eyebrow">CONTEXT-FIRST HSK6</p>
            <h2>Mỗi set từ = một mini lesson hoàn chỉnh 🌸</h2>
            <p>Từ mục tiêu được lặp lại qua nhiều dạng bài: điền từ, đọc hiểu, nghe, chủ động nhớ lại và viết. Học sinh không cần lật flashcard.</p>
          </div>
          <div class="goal-time"><strong>${data.lessons.length}</strong><span>lesson packs</span></div>
        </div>
        <div class="context-flow">
          <span>① Nhận từ trong câu</span><b>→</b><span>② Hiểu trong bài đọc/nghe</span><b>→</b><span>③ Tự nhớ lại</span><b>→</b><span>④ Dùng khi viết</span>
        </div>
      </article>
      <aside class="section-grid">
        <div class="stat-grid">
          <div class="stat-card"><strong>${totalTargetWords()}</strong><span>Từ mục tiêu</span></div>
          <div class="stat-card"><strong>${progress.answers}</strong><span>Lượt trả lời</span></div>
          <div class="stat-card"><strong>${accuracy}%</strong><span>Độ chính xác</span></div>
          <div class="stat-card"><strong>${weak.length}</strong><span>Từ cần ôn</span></div>
        </div>
        <article class="card card-pad">
          <div class="mini-title">TỪ ĐANG YẾU</div>
          <div class="weak-word-list">
            ${weak.length ? weak.map(w => `<span>${escapeHtml(w.word)} · ${Math.round(w.accuracy * 100)}%</span>`).join('') : '<p>Chưa đủ dữ liệu. Làm vài bài trước nhé 🌱</p>'}
          </div>
        </article>
      </aside>
    </div>

    <section class="lesson-section">
      <div class="section-heading">
        <div><p class="eyebrow">LESSON LIBRARY</p><h2>Chọn một word set để luyện</h2></div>
        <span>${data.lessons.length} lesson</span>
      </div>
      <div class="lesson-grid">
        ${data.lessons.map(l => lessonCard(l)).join('')}
      </div>
    </section>

    ${lesson ? renderLessonWorkspace(lesson) : '<div class="card empty">Chưa có lesson. Hãy import ở Content Studio.</div>'}
  `;

  $$('[data-lesson]').forEach(btn => btn.onclick = () => {
    activeLessonId = btn.dataset.lesson;
    exerciseIndex = 0; draftAnswer = null; submitted = false; revealAssist = false;
    renderStudy();
    document.querySelector('.lesson-workspace')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  bindExerciseEvents();
  updateProgressUI();
}

function lessonCard(lesson) {
  const done = completedCount(lesson);
  const total = lesson.exercises.length;
  const percent = total ? Math.round(done / total * 100) : 0;
  const selected = lesson.id === activeLessonId;
  return `
    <button class="lesson-card ${selected ? 'active' : ''}" data-lesson="${escapeHtml(lesson.id)}">
      <div class="lesson-card-top"><span>${escapeHtml(lesson.level || 'HSK6')}</span><b>${lesson.estimatedMinutes || 20} phút</b></div>
      <h3>${escapeHtml(lesson.title)}</h3>
      <p>${escapeHtml(lesson.subtitle || '')}</p>
      <div class="word-bubbles">${lesson.targetWords.slice(0, 6).map(w => `<i>${escapeHtml(w.word)}</i>`).join('')}${lesson.targetWords.length > 6 ? `<i>+${lesson.targetWords.length - 6}</i>` : ''}</div>
      <div class="lesson-progress"><span style="width:${percent}%"></span></div>
      <small>${done}/${total} bài hoàn thành</small>
    </button>`;
}

function renderLessonWorkspace(lesson) {
  exerciseIndex = Math.max(0, Math.min(exerciseIndex, lesson.exercises.length - 1));
  const ex = lesson.exercises[exerciseIndex];
  const percent = lesson.exercises.length ? Math.round((exerciseIndex / lesson.exercises.length) * 100) : 0;
  return `
    <article class="card lesson-workspace">
      <div class="lesson-head">
        <div>
          <p class="eyebrow">${escapeHtml(lesson.level || 'HSK6')} · ${lesson.targetWords.length} TỪ MỤC TIÊU</p>
          <h2>${escapeHtml(lesson.title)}</h2>
          <p>${escapeHtml(lesson.subtitle || '')}</p>
        </div>
        <button class="soft-btn" id="toggleWordBank">Xem word bank</button>
      </div>
      <div id="wordBank" class="word-bank" style="display:none">
        ${lesson.targetWords.map(w => `
          <div class="word-row">
            <div><strong>${escapeHtml(w.word)}</strong><span>${escapeHtml(w.pinyin)}</span></div>
            <p>${escapeHtml(w.meaning)} ${w.pos ? `· ${escapeHtml(w.pos)}` : ''}</p>
            ${w.collocations?.length ? `<small>${w.collocations.map(escapeHtml).join(' · ')}</small>` : ''}
          </div>`).join('')}
      </div>
      <div class="exercise-nav">
        <button class="soft-btn" id="prevExercise" ${exerciseIndex === 0 ? 'disabled' : ''}>← Trước</button>
        <div class="exercise-step"><span>Bài ${exerciseIndex + 1} / ${lesson.exercises.length}</span><div><i style="width:${Math.round((exerciseIndex + 1) / lesson.exercises.length * 100)}%"></i></div></div>
        <button class="soft-btn" id="nextExercise">${exerciseIndex === lesson.exercises.length - 1 ? 'Về đầu ↺' : 'Tiếp →'}</button>
      </div>
      <div id="exerciseBody">${renderExercise(ex, lesson)}</div>
    </article>`;
}

function renderExercise(ex, lesson) {
  if (!ex) return '<div class="empty">Lesson chưa có bài tập.</div>';
  const typeLabel = ({ cloze_choice: '选词填空', reading: '阅读理解', listening: '听力', fill_blank: '主动回忆', rewrite: '改写', writing: '写作' })[ex.type] || ex.type;
  const targetAfterSubmit = (submitted || ['rewrite', 'writing'].includes(ex.type)) && ex.targetWords?.length
    ? `<div class="target-note">Từ mục tiêu: ${ex.targetWords.map(w => `<b>${escapeHtml(w)}</b>`).join(' · ')}</div>` : '';

  if (['cloze_choice', 'reading', 'listening'].includes(ex.type)) {
    return `
      <div class="question-box">
        <div class="exercise-meta"><span>${escapeHtml(typeLabel)}</span><b>${escapeHtml(ex.title || '')}</b></div>
        ${ex.type === 'reading' ? `<div class="passage">${escapeHtml(ex.passage || ex.context || '')}</div>` : ''}
        ${ex.type === 'listening' ? `<div class="audio-box"><button class="audio-btn" id="playAudio">▶</button><div><strong>Nghe đoạn hội thoại</strong><small>Transcript chỉ hiện khi bạn chủ động mở.</small></div></div>` : ''}
        ${ex.type === 'cloze_choice' ? `<div class="context-sentence">${escapeHtml(ex.context || '')}</div>` : ''}
        <h4>${escapeHtml(ex.question || ex.prompt || '')}</h4>
        <div class="options">
          ${(ex.options || []).map((opt, i) => `<button class="option ${draftAnswer === i ? 'selected' : ''} ${submitted && i === ex.answer ? 'correct' : ''} ${submitted && draftAnswer === i && i !== ex.answer ? 'wrong' : ''}" data-answer="${i}">${String.fromCharCode(65 + i)}. ${escapeHtml(opt)}</button>`).join('')}
        </div>
        <div class="answer-actions">
          <button class="primary-btn" id="submitChoice">Kiểm tra đáp án</button>
          ${ex.type === 'listening' ? '<button class="soft-btn" id="toggleTranscript">Xem transcript</button>' : ''}
        </div>
        ${ex.type === 'listening' ? `<div id="transcript" class="explanation" style="display:${revealAssist ? 'block' : 'none'}"><strong>Transcript</strong><br>${escapeHtml(ex.script || '')}</div>` : ''}
        ${submitted ? feedbackHtml(ex, draftAnswer === ex.answer) : ''}
        ${targetAfterSubmit}
      </div>`;
  }

  if (ex.type === 'fill_blank') {
    const correct = submitted && isTypedCorrect(ex, String(draftAnswer || ''));
    return `
      <div class="question-box">
        <div class="exercise-meta"><span>${escapeHtml(typeLabel)}</span><b>${escapeHtml(ex.title || '')}</b></div>
        <div class="context-sentence">${escapeHtml(ex.context || '')}</div>
        <h4>${escapeHtml(ex.prompt || '')}</h4>
        <input id="typedAnswer" class="typed-answer" autocomplete="off" placeholder="输入词语…" value="${escapeHtml(draftAnswer || '')}">
        <div class="answer-actions"><button class="primary-btn" id="submitTyped">Kiểm tra</button></div>
        ${submitted ? feedbackHtml(ex, correct) : ''}
        ${targetAfterSubmit}
      </div>`;
  }

  if (ex.type === 'rewrite') {
    return `
      <div class="question-box">
        <div class="exercise-meta"><span>${escapeHtml(typeLabel)}</span><b>${escapeHtml(ex.title || '')}</b></div>
        <div class="context-sentence">${escapeHtml(ex.context || '')}</div>
        <h4>${escapeHtml(ex.prompt || '')}</h4>
        <textarea id="rewriteText" class="long-answer short" placeholder="在这里改写句子……">${escapeHtml(draftAnswer || '')}</textarea>
        <div class="answer-actions"><button class="primary-btn" id="showRewrite">Xem gợi ý & tự đánh giá</button></div>
        ${revealAssist ? `<div class="feedback-box"><strong>Gợi ý tự nhiên</strong><p class="chinese-copy">${escapeHtml(ex.sampleAnswer || '')}</p><p>${escapeHtml(ex.explanation || '')}</p><div class="self-rate"><button class="soft-btn" data-self-rate="hard">Cần ôn lại</button><button class="primary-btn" data-self-rate="good">Tôi dùng được ✓</button></div></div>` : ''}
        ${targetAfterSubmit}
      </div>`;
  }

  if (ex.type === 'writing') {
    const text = String(draftAnswer || '');
    const hits = (ex.requiredWords || []).filter(w => text.includes(w));
    return `
      <div class="question-box">
        <div class="exercise-meta"><span>${escapeHtml(typeLabel)}</span><b>${escapeHtml(ex.title || '')}</b></div>
        <div class="writing-prompt">${escapeHtml(ex.prompt || '')}</div>
        <p class="writing-guide">${escapeHtml(ex.guidance || '')}</p>
        <textarea id="writingText" class="long-answer" placeholder="在这里写你的答案……">${escapeHtml(text)}</textarea>
        <div class="writing-meter"><span id="charCount">${[...text].length} ký tự</span><span>Đã dùng: <b id="wordHitCount">${hits.length}</b>/${(ex.requiredWords || []).length} từ mục tiêu</span></div>
        <div class="required-words">${(ex.requiredWords || []).map(w => `<i class="${text.includes(w) ? 'used' : ''}">${escapeHtml(w)}</i>`).join('')}</div>
        <div class="answer-actions"><button class="primary-btn" id="showWriting">Xem bài mẫu & tự đánh giá</button></div>
        ${revealAssist ? `<div class="feedback-box"><strong>Bài mẫu tham khảo</strong><p class="chinese-copy">${escapeHtml(ex.sampleAnswer || '')}</p><p>Đừng chép lại bài mẫu. So sánh cách triển khai ý, collocation và cách nối câu.</p><div class="self-rate"><button class="soft-btn" data-self-rate="hard">Cần ôn lại</button><button class="primary-btn" data-self-rate="good">Tôi dùng được ✓</button></div></div>` : ''}
        ${targetAfterSubmit}
      </div>`;
  }

  return `<div class="empty">Dạng bài “${escapeHtml(ex.type)}” chưa được hỗ trợ.</div>`;
}

function feedbackHtml(ex, correct) {
  return `<div class="explanation"><strong>${correct ? '✅ Chính xác' : '💡 Chưa đúng'}</strong>${ex.evidence ? `<p><b>Evidence:</b> ${escapeHtml(ex.evidence)}</p>` : ''}<p>${escapeHtml(ex.explanation || '')}</p></div>`;
}

function isTypedCorrect(ex, value) {
  const normalize = s => String(s).trim().replace(/[。.!！?？\s]/g, '');
  return (ex.acceptedAnswers || []).some(ans => normalize(ans) === normalize(value));
}

function recordAutoResult(lesson, ex, correct) {
  const done = progress.completedExercises[lesson.id] || [];
  const firstCompletion = !done.includes(ex.id);
  if (firstCompletion) {
    done.push(ex.id);
    progress.completedExercises[lesson.id] = done;
    progress.answers += 1;
    if (correct) progress.correct += 1;
    (ex.targetWords || []).forEach(word => {
      const stat = progress.wordStats[word] || { attempts: 0, correct: 0 };
      stat.attempts += 1;
      if (correct) stat.correct += 1;
      progress.wordStats[word] = stat;
    });
    saveProgress();
  }
}

function recordSelfResult(lesson, ex, good) {
  const key = `${lesson.id}:${ex.id}`;
  if (progress.selfRated[key]) return toast('Bài này đã được ghi nhận rồi 🌱');
  progress.selfRated[key] = good ? 'good' : 'hard';
  const done = progress.completedExercises[lesson.id] || [];
  if (!done.includes(ex.id)) done.push(ex.id);
  progress.completedExercises[lesson.id] = done;
  (ex.targetWords || []).forEach(word => {
    const stat = progress.wordStats[word] || { attempts: 0, correct: 0 };
    stat.attempts += 1;
    if (good) stat.correct += 1;
    progress.wordStats[word] = stat;
  });
  saveProgress();
  toast(good ? 'Đã ghi nhận là dùng được ✓' : 'Đã đưa từ vào nhóm cần ôn');
}

function rerenderExerciseOnly() {
  const lesson = getLesson();
  const ex = lesson?.exercises?.[exerciseIndex];
  const body = $('#exerciseBody');
  if (body && lesson && ex) {
    body.innerHTML = renderExercise(ex, lesson);
    bindExerciseEvents();
  }
}

function bindExerciseEvents() {
  const lesson = getLesson();
  if (!lesson) return;
  const ex = lesson.exercises[exerciseIndex];

  const toggleWordBank = $('#toggleWordBank');
  if (toggleWordBank) toggleWordBank.onclick = () => {
    const bank = $('#wordBank');
    const open = bank.style.display === 'none';
    bank.style.display = open ? 'grid' : 'none';
    toggleWordBank.textContent = open ? 'Ẩn word bank' : 'Xem word bank';
  };

  const prev = $('#prevExercise');
  if (prev) prev.onclick = () => {
    if (exerciseIndex === 0) return;
    exerciseIndex -= 1; draftAnswer = null; submitted = false; revealAssist = false; renderStudy();
    document.querySelector('.lesson-workspace')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const next = $('#nextExercise');
  if (next) next.onclick = () => {
    exerciseIndex = exerciseIndex === lesson.exercises.length - 1 ? 0 : exerciseIndex + 1;
    draftAnswer = null; submitted = false; revealAssist = false; renderStudy();
    document.querySelector('.lesson-workspace')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  $$('[data-answer]').forEach(btn => btn.onclick = () => {
    draftAnswer = Number(btn.dataset.answer);
    submitted = false;
    rerenderExerciseOnly();
  });

  const submitChoice = $('#submitChoice');
  if (submitChoice) submitChoice.onclick = () => {
    if (draftAnswer === null) return toast('Chọn một đáp án trước nhé 🌸');
    submitted = true;
    recordAutoResult(lesson, ex, draftAnswer === ex.answer);
    rerenderExerciseOnly();
  };

  const playAudio = $('#playAudio');
  if (playAudio) playAudio.onclick = () => {
    if (!('speechSynthesis' in window)) return toast('Trình duyệt này không hỗ trợ speech synthesis');
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(ex.script || '');
    utterance.lang = 'zh-CN'; utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };
  const toggleTranscript = $('#toggleTranscript');
  if (toggleTranscript) toggleTranscript.onclick = () => { revealAssist = !revealAssist; rerenderExerciseOnly(); };

  const typed = $('#typedAnswer');
  if (typed) typed.oninput = () => { draftAnswer = typed.value; submitted = false; };
  const submitTyped = $('#submitTyped');
  if (submitTyped) submitTyped.onclick = () => {
    draftAnswer = $('#typedAnswer')?.value || '';
    if (!String(draftAnswer).trim()) return toast('Điền đáp án trước nhé');
    submitted = true;
    recordAutoResult(lesson, ex, isTypedCorrect(ex, draftAnswer));
    rerenderExerciseOnly();
  };

  const rewriteText = $('#rewriteText');
  if (rewriteText) rewriteText.oninput = () => draftAnswer = rewriteText.value;
  const showRewrite = $('#showRewrite');
  if (showRewrite) showRewrite.onclick = () => {
    draftAnswer = $('#rewriteText')?.value || '';
    if (!String(draftAnswer).trim()) return toast('Hãy thử tự viết trước khi xem gợi ý ✍️');
    revealAssist = true; rerenderExerciseOnly();
  };

  const writingText = $('#writingText');
  if (writingText) writingText.oninput = () => {
    draftAnswer = writingText.value;
    $('#charCount').textContent = `${[...writingText.value].length} ký tự`;
    const hits = (ex.requiredWords || []).filter(w => writingText.value.includes(w));
    $('#wordHitCount').textContent = hits.length;
    $$('.required-words i').forEach(i => i.classList.toggle('used', writingText.value.includes(i.textContent)));
  };
  const showWriting = $('#showWriting');
  if (showWriting) showWriting.onclick = () => {
    draftAnswer = $('#writingText')?.value || '';
    const min = ex.minChars || 50;
    if ([...String(draftAnswer).trim()].length < Math.min(min, 40)) return toast('Hãy viết thêm một chút trước khi xem bài mẫu ✍️');
    revealAssist = true; rerenderExerciseOnly();
  };

  $$('[data-self-rate]').forEach(btn => btn.onclick = () => recordSelfResult(lesson, ex, btn.dataset.selfRate === 'good'));
}

function renderStudio() {
  $('#studioView').innerHTML = `
    <div class="studio-layout">
      <aside class="card studio-menu">
        <button class="active" data-studio-tab="import">📥 Import lesson</button>
        <button data-studio-tab="library">📚 Lesson library</button>
        <button data-studio-tab="format">🧩 JSON format</button>
        <button data-studio-tab="data">💾 Backup</button>
      </aside>
      <section class="card studio-content" id="studioContent"></section>
    </div>`;
  $$('[data-studio-tab]').forEach(btn => btn.onclick = () => {
    $$('[data-studio-tab]').forEach(x => x.classList.toggle('active', x === btn));
    renderStudioTab(btn.dataset.studioTab);
  });
  renderStudioTab('import');
}

function renderStudioTab(tab) {
  const el = $('#studioContent');
  if (!el) return;

  if (tab === 'import') {
    el.innerHTML = `
      <div class="mini-title">IMPORT LESSON PACK</div>
      <h2 style="margin:8px 0 8px">Thêm lesson từ file mình generate cho bạn</h2>
      <p class="studio-desc">Workflow đề xuất: bạn gửi mình danh sách từ → mình tạo lesson JSON theo schema bên dưới → bạn kéo file vào đây → lesson xuất hiện ngay bên khu học viên.</p>
      <label class="drop-zone" id="dropZone">
        <div class="drop-icon">📄</div>
        <strong>Kéo thả file .json vào đây</strong>
        <span>hoặc bấm để chọn file</span>
        <input id="lessonFileInput" type="file" accept="application/json,.json" hidden>
      </label>
      <div class="or-line"><span>hoặc paste JSON</span></div>
      <textarea id="lessonJsonInput" class="json-input" placeholder='{"schemaVersion":2,"lessons":[...]}'></textarea>
      <div class="answer-actions"><button id="importJsonBtn" class="primary-btn">Validate & Import</button><button id="loadSampleBtn" class="soft-btn">Điền JSON mẫu</button></div>
      <div id="importResult"></div>`;

    const fileInput = $('#lessonFileInput');
    const dropZone = $('#dropZone');
    fileInput.onchange = async e => { const file = e.target.files[0]; if (file) importLessonText(await file.text()); };
    ['dragenter', 'dragover'].forEach(name => dropZone.addEventListener(name, e => { e.preventDefault(); dropZone.classList.add('dragging'); }));
    ['dragleave', 'drop'].forEach(name => dropZone.addEventListener(name, e => { e.preventDefault(); dropZone.classList.remove('dragging'); }));
    dropZone.addEventListener('drop', async e => { const file = e.dataTransfer.files[0]; if (file) importLessonText(await file.text()); });
    $('#importJsonBtn').onclick = () => importLessonText($('#lessonJsonInput').value);
    $('#loadSampleBtn').onclick = () => $('#lessonJsonInput').value = JSON.stringify({ schemaVersion: 2, lessons: [demoData.lessons[0]] }, null, 2);
  }

  if (tab === 'library') {
    el.innerHTML = `
      <div class="mini-title">LESSON LIBRARY</div><h2 style="margin:8px 0 8px">${data.lessons.length} lesson đang có</h2>
      <p class="studio-desc">Import cùng <code>id</code> sẽ thay thế lesson cũ, rất tiện khi mình sửa nội dung cho bạn rồi generate file mới.</p>
      <div class="list-wrap">
        ${data.lessons.map(lesson => `<div class="content-row lesson-row"><div><strong>${escapeHtml(lesson.title)}</strong><small>${lesson.targetWords.length} từ · ${lesson.exercises.length} bài · ${lesson.estimatedMinutes || 20} phút</small><div class="word-bubbles compact">${lesson.targetWords.map(w => `<i>${escapeHtml(w.word)}</i>`).join('')}</div></div><div class="row-actions"><button class="soft-btn" data-export-lesson="${escapeHtml(lesson.id)}">Export</button><button class="danger-btn" data-delete-lesson="${escapeHtml(lesson.id)}">Xóa</button></div></div>`).join('') || '<div class="empty">Chưa có lesson.</div>'}
      </div>`;
    $$('[data-delete-lesson]').forEach(btn => btn.onclick = () => {
      data.lessons = data.lessons.filter(l => l.id !== btn.dataset.deleteLesson);
      if (activeLessonId === btn.dataset.deleteLesson) activeLessonId = data.lessons[0]?.id || null;
      saveData(); renderStudioTab('library'); toast('Đã xóa lesson');
    });
    $$('[data-export-lesson]').forEach(btn => btn.onclick = () => {
      const lesson = getLesson(btn.dataset.exportLesson);
      downloadJson({ schemaVersion: 2, lessons: [lesson] }, `${lesson.id}.json`);
    });
  }

  if (tab === 'format') {
    el.innerHTML = `
      <div class="mini-title">SCHEMA V2</div><h2 style="margin:8px 0 8px">Format mình sẽ dùng khi generate lesson cho bạn</h2>
      <p class="studio-desc">Bạn chỉ cần gửi danh sách từ. Phần còn lại mình sẽ tự chọn chủ đề, ngữ cảnh, độ khó và phân bố từ vào nhiều bài.</p>
      <div class="schema-notes">
        <div><strong>targetWords</strong><span>Thông tin từ + collocation để hiện ở word bank.</span></div>
        <div><strong>exercises[].targetWords</strong><span>Giúp web track chính xác từ nào đang được kiểm tra.</span></div>
        <div><strong>id</strong><span>Giữ ổn định để import file mới có thể update lesson cũ.</span></div>
      </div>
      <pre class="schema-code">${escapeHtml(JSON.stringify(sampleSchema(), null, 2))}</pre>
      <div class="answer-actions"><button id="downloadTemplateBtn" class="primary-btn">Tải template JSON</button><button id="downloadDemoBtn" class="soft-btn">Tải lesson demo</button></div>`;
    $('#downloadTemplateBtn').onclick = () => downloadJson(sampleSchema(), 'hsk6-lesson-template.json');
    $('#downloadDemoBtn').onclick = () => downloadJson({ schemaVersion: 2, lessons: [demoData.lessons[0]] }, 'hsk6-demo-context-lesson.json');
  }

  if (tab === 'data') {
    el.innerHTML = `
      <div class="mini-title">BACKUP</div><h2 style="margin:8px 0 8px">Sao lưu toàn bộ thư viện</h2>
      <p class="studio-desc">Export tất cả lesson thành một file. Progress học sinh vẫn lưu riêng trong trình duyệt.</p>
      <div class="answer-actions"><button id="exportAllBtn" class="primary-btn">Export all lessons</button><button id="resetProgressBtn" class="soft-btn">Reset progress</button></div>
      <textarea readonly class="json-input tall">${escapeHtml(JSON.stringify(data, null, 2))}</textarea>`;
    $('#exportAllBtn').onclick = () => downloadJson(data, 'hsk6-context-library.json');
    $('#resetProgressBtn').onclick = () => {
      progress = { answers: 0, correct: 0, streak: 6, completedExercises: {}, wordStats: {}, selfRated: {} };
      saveProgress(); toast('Đã reset progress');
    };
  }
}

function importLessonText(text) {
  const result = $('#importResult');
  try {
    if (!String(text || '').trim()) throw new Error('Chưa có JSON để import');
    const parsed = JSON.parse(text);
    const lessons = parsed?.schemaVersion === 2 && Array.isArray(parsed.lessons) ? parsed.lessons : [parsed];
    if (!lessons.length) throw new Error('File không có lesson');
    const normalizedLessons = lessons.map(normalizeLesson);
    normalizedLessons.forEach(lesson => {
      const index = data.lessons.findIndex(x => x.id === lesson.id);
      if (index >= 0) data.lessons[index] = lesson; else data.lessons.push(lesson);
    });
    saveData();
    if (!activeLessonId) activeLessonId = normalizedLessons[0].id;
    if (result) result.innerHTML = `<div class="feedback-box"><strong>✅ Import thành công ${normalizedLessons.length} lesson</strong><p>${normalizedLessons.map(l => escapeHtml(l.title)).join(' · ')}</p></div>`;
    toast('Import lesson thành công 🌸');
  } catch (error) {
    if (result) result.innerHTML = `<div class="feedback-box error"><strong>Không import được</strong><p>${escapeHtml(error.message || 'JSON không hợp lệ')}</p></div>`;
    toast('JSON chưa đúng format');
  }
}

function sampleSchema() {
  return {
    schemaVersion: 2,
    lessons: [
      {
        id: 'lesson-topic-001',
        title: 'Tên lesson',
        subtitle: 'Mô tả ngắn',
        level: 'HSK6',
        estimatedMinutes: 25,
        targetWords: [
          { word: '维护', pinyin: 'wéihù', meaning: 'duy trì, bảo vệ', pos: '动词', collocations: ['维护权益', '维护秩序'] }
        ],
        exercises: [
          {
            id: 'lesson-topic-001-ex-1',
            type: 'cloze_choice',
            title: '选词填空',
            context: '为了_____消费者的合法权益，相关部门出台了新规定。',
            prompt: '选择最恰当的词。',
            options: ['维护', '缓解', '促进', '调整'],
            answer: 0,
            explanation: 'Giải thích đáp án và collocation.',
            targetWords: ['维护']
          }
        ]
      }
    ]
  };
}

function downloadJson(value, filename) {
  const blob = new Blob([JSON.stringify(value, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}

$$('.nav-item').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
$('#resetDemoBtn').addEventListener('click', () => {
  data = clone(demoData);
  progress = { answers: 0, correct: 0, streak: 6, completedExercises: {}, wordStats: {}, selfRated: {} };
  activeLessonId = data.lessons[0]?.id || null;
  exerciseIndex = 0; draftAnswer = null; submitted = false; revealAssist = false;
  saveData(); saveProgress();
  toast('Đã khôi phục lesson demo');
  setView(document.querySelector('.nav-item.active')?.dataset.view || 'study');
});

renderStudy();
updateProgressUI();
