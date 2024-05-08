// HTML 요소 가져오기
const informationSection = document.getElementById('information');
const contactSection = document.getElementById('contact');

// 링크 클릭 시 이벤트 처리
informationSection.addEventListener('click', function() {
    // 처방전 정보 표시
    informationSection.innerHTML = `
        <h2>처방전 정보</h2>
        <p>처방전에 대한 내용을 여기에 작성하세요.</p>
    `;
});

contactSection.addEventListener('click', function() {
    // 상담 전화번호 또는 카카오톡 오픈채팅방으로 이동
});
