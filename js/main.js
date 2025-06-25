// 主题切换功能
(function() {
  const themeBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  function setTheme(mode) {
    if (mode === 'light') {
      root.classList.remove('dark');
      if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem('theme', 'dark');
    }
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      if (root.classList.contains('dark')) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    });
  }
  // 页面加载时初始化
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
})();

// 游戏数据定义
const allGames = [
  {
    id: 'tetris',
    name: '经典俄罗斯方块',
    description: '消除方块，挑战极限分数！',
    category: '益智',
    categoryColor: 'blue',
    imageUrl: 'assets/images/cover.jpg',
    gameUrl: 'game.html?game=tetris',
  },
  {
    id: 'sudoku',
    name: '数独大师',
    description: '逻辑推理，填满九宫格。',
    category: '益智',
    categoryColor: 'green',
    imageUrl: 'assets/images/sudoku.jpg',
    gameUrl: 'game.html?game=sudoku',
  },
  {
    id: '2048',
    name: '2048合成',
    description: '滑动数字，合成2048！',
    category: '休闲',
    categoryColor: 'yellow',
    imageUrl: 'assets/images/2048.jpg',
    gameUrl: 'game.html?game=2048',
  },
  {
    id: 'minesweeper',
    name: '扫雷挑战',
    description: '小心地雷，考验你的推理能力。',
    category: '策略',
    categoryColor: 'red',
    imageUrl: 'assets/images/minesweeper.jpg',
    gameUrl: 'game.html?game=minesweeper',
  },
];

// 导航栏搜索跳转
(function() {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  function doSearch() {
    if (!searchInput) return;
    const val = searchInput.value.trim();
    if (val) {
      window.location.href = `search.html?query=${encodeURIComponent(val)}`;
    }
  }
  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') doSearch();
    });
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', doSearch);
  }
})(); 