var button = document.getElementById('generateBtn');
var container = document.getElementById('gridContainer');

button.addEventListener('click', function() {
    // 이미지가 30개인지 확인
    if (container.childElementCount >= 30) {
        // 확인 메시지 보여주기
        var isConfirmed = confirm("이미지가 30개 찼습니다. 모두 지울까요?");
        if (isConfirmed) {
            // 모든 이미지 지우기
            container.innerHTML = "";
        }
    } else {
        // 랜덤한 숫자 생성
        var randomNum = Math.random();

        // 이미지 URL
        var imageUrl = "https://picsum.photos/200/300?random=" + randomNum;

        // 새로운 img 태그 생성
        var img = document.createElement('img');

        // img 태그의 src 속성 설정
        img.src = imageUrl;

        // 클릭 이벤트 리스너 추가
        img.addEventListener('click', function() {
            // 클릭된 이미지 삭제
            container.removeChild(img);
        });

        // img 태그를 container의 자식으로 추가
        container.appendChild(img);
    }
});
