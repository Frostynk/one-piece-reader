
    const container = document.getElementById('chapterContainer');
    const chapters = Array.from(container.getElementsByClassName('chapter-link'));
    const searchInput = document.getElementById('searchInput');

    function sortChapters(ascending = true) {
      const sorted = [...chapters].sort((a, b) => {
        const numA = parseInt(a.textContent.match(/\d+/));
        const numB = parseInt(b.textContent.match(/\d+/));
        return ascending ? numA - numB : numB - numA;
      });

      container.innerHTML = '';
      sorted.forEach(link => container.appendChild(link));
    }

    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      chapters.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.style.display = text.includes(searchTerm) ? '' : 'none';
      });
    });
