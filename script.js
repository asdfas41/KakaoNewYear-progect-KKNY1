
// 새해 날짜 설정
const target = new Date(2027, 0, 1);

// D-Day 계산
function updateDday() {
    const today = new Date();

    const startToday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const difference = target - startToday;

    const days = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    const dday = document.getElementById("dday");
    const message = document.getElementById("message");

    if (days > 0) {
        dday.textContent = `D-${days}`;
        message.textContent = `2027년까지 ${days}일 남았어!`;
    } else {
        dday.textContent = "HAPPY NEW YEAR!";
        message.textContent = "🎉 새해 복 많이 받아!";
    }
}

// 프로필 문구 복사
async function copyMessage() {
    const today = new Date();

    const startToday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const days = Math.ceil(
        (target - startToday) / 86400000
    );

    const text = days > 0
        ? `🎆 2027년 새해까지 D-${days}!`
        : "🎉 새해 복 많이 받아!";

    try {
        await navigator.clipboard.writeText(text);
        alert("프로필 문구 복사 완료!");
    } catch (error) {
        alert("복사에 실패했어. HTTPS 환경에서 다시 시도해 줘.");
    }
}

// 실행
updateDday();

document.getElementById("copyButton")
    .addEventListener("click", copyMessage);
