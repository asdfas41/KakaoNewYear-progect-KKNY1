
// 2027년 새해 날짜
const target = new Date(2027, 0, 1);

// 남은 날짜 계산
function getDays() {
    const today = new Date();

    const startToday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    return Math.ceil(
        (target - startToday) / 86400000
    );
}

// 오늘 날짜와 D-Day 표시
function updateDday() {
    const today = new Date();

    // 오늘 날짜 만들기
    const todayText = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
    });

    // 화면에 오늘 날짜 표시
    document.getElementById("today").textContent = todayText;

    // 남은 날짜 계산
    const days = getDays();

    const dday = document.getElementById("dday");
    const message = document.getElementById("message");

    if (days > 0) {
        dday.textContent = `D-${days}`;
        message.textContent = `2027년까지 ${days}일 남았어!`;
    } else {
        dday.textContent = "HAPPY NEW YEAR!";
        message.textContent = "🎉 새해 복 많이 받아!";
    }

    // 오늘 날짜가 포함된 프로필 문구 만들기
    const profileText = days > 0
        ? `📅 ${todayText} | 🎆 2027년 새해까지 D-${days}!`
        : `📅 ${todayText} | 🎉 새해 복 많이 받아!`;

    document.getElementById("profileText").textContent = profileText;
}

// 프로필 문구 복사
async function copyMessage() {
    const text = document.getElementById("profileText").textContent;

    try {
        await navigator.clipboard.writeText(text);
        alert("프로필 문구 복사 완료!");
    } catch (error) {
        alert("복사에 실패했어. 다시 시도해 줘.");
    }
}

// 웹사이트 실행
updateDday();

// 복사 버튼 연결
document.getElementById("copyButton")
    .addEventListener("click", copyMessage);
