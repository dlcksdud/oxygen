// HTML ��� ��������
const informationSection = document.getElementById('information');
const contactSection = document.getElementById('contact');

// ��ũ Ŭ�� �� �̺�Ʈ ó��
informationSection.addEventListener('click', function() {
    // ó���� ���� ǥ��
    informationSection.innerHTML = `
        <h2>ó���� ����</h2>
        <p>ó������ ���� ������ ���⿡ �ۼ��ϼ���.</p>
    `;
});

contactSection.addEventListener('click', function() {
    // ��� ��ȭ��ȣ �Ǵ� īī���� ����ä�ù����� �̵�
});
