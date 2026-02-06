// ข้อมูลสมาชิก 
const memberData = [
    { name: "น.ส.ธิติมา ปู่นาค", role: "ประธานนักเรียน", quote: "เป็นผู้นำและตัวแทนนักเรียนทั้งโรงเรียน \n กำหนดทิศทางและนโยบายของสภานักเรียน \n ประสานงานกับครูและผู้บริหาร \n ดูแลภาพรวมการทำงานของทุกฝ่าย", img: "images/gift.jpg" },
    { name: "น.ส.ฐิติวรากร เจียรนัย", role: "รองประธานนักเรียน", quote: "ช่วยงานและทำหน้าที่แทนประธานเมื่อไม่อยู่ \n ควบคุมและติดตามงานแต่ละฝ่าย \n ช่วยแก้ปัญหาและตัดสินใจร่วมกับประธาน", img: "images/tomato.jpg" },
    { name: "น.ส.ปฐมาวดี เกษแก้วร", role: "รองประธานนักเรียน", quote: "ช่วยงานและทำหน้าที่แทนประธานเมื่อไม่อยู่ \n ควบคุมและติดตามงานแต่ละฝ่าย \n ช่วยแก้ปัญหาและตัดสินใจร่วมกับประธาน", img: "images/pluem.jpg" },
    { name: "น.ส.กนกพร ที่เจริญ", role: "วิชาการ", quote: "ส่งเสริมกิจกรรมด้านการเรียน \n รับฟังปัญหาเรื่องการเรียนของนักเรียน \nประสานงานโครงการติวหรือช่วยเพื่อนเรียน", img: "images/ice.jpg" },
    { name: "นายวัชพล นามหอมจันทร์", role: "กิจกรรม", quote: "วางแผนและจัดกิจกรรมของโรงเรียน \n สร้างกิจกรรมที่นักเรียนมีส่วนร่วม \n ดูแลความเรียบร้อยระหว่างจัดกิจกรรม", img: "images/james.jpg" },
    { name: "น.ส.นันทภัค ศรีพูลพันธ์", role: "ประชาสัมพันธ์", quote: "เผยแพร่ข่าวสารของสภานักเรียน \n ดูแลสื่อ เช่น ป้ายประกาศ โซเชียลมีเดีย \n สร้างภาพลักษณ์ที่ดีให้สภานักเรียน", img: "images/phak.jpg" },
    { name: "นายภูวนาถ ศิลาทอง", role: "ฝ่ายปกครอง", quote: "ดูแลระเบียบวินัยของนักเรียน \n ช่วยสอดส่องความเรียบร้อยในโรงเรียน \n รับฟังและช่วยแก้ปัญหาความขัดแย้ง", img: "images/pae.jpg" },
    { name: "นายภคพล กรีกรน", role: "เหรัญญิก", quote: "ดูแลเงินและงบประมาณของสภานักเรียน \n จัดทำบัญชีรายรับ–รายจ่ายอย่างโปร่งใส \n รายงานการใช้เงินให้สมาชิกทราบ", img: "images/fluke.jpg" },
   
];


document.addEventListener('DOMContentLoaded', () => {
    // 1. จัดการส่วน "รู้จักเรา" และ "จุดยืน" จาก Config
    if (typeof SITE_CONFIG !== 'undefined') {
        // อัปเดตคำบรรยายรู้จักพรรค
        const aboutDesc = document.getElementById('aboutDescription');
        const aboutImg = document.getElementById('aboutImage');
        if (aboutDesc) aboutDesc.innerText = SITE_CONFIG.aboutUs.description;
        if (aboutImg) aboutImg.src = SITE_CONFIG.aboutUs.image;

        // โหลดข้อมูลจุดยืน (Standpoints)
        const standGrid = document.getElementById('standpointGrid');
        if (standGrid) {
            SITE_CONFIG.standpoints.forEach(s => {
                const card = document.createElement('div');
                card.className = 'stand-card';
                card.innerHTML = `
                    <i class="fa-solid ${s.icon}"></i>
                    <h4>${s.title}</h4>
                    <p>${s.text}</p>
                `;
                standGrid.appendChild(card);
            });
        }
    }
        // 2. ตรวจสอบสถานะเปิด/ปิดนโยบาย (Online Config) 
     // 2. ตรวจสอบสถานะเปิด/ปิดนโยบาย (จากหลังบ้าน)
const policyOpen = localStorage.getItem("policyOpen") === "true";

if (policyOpen && typeof SITE_CONFIG !== 'undefined') {
    const title = document.getElementById('policyTitle');
    const content = document.getElementById('policyContent');
    const box = document.getElementById('policyBox');

    if (title) title.innerText = "นโยบายหลักพรรคเบอร์ 3";
    if (box) box.style.background = "var(--red)";
    if (content) content.innerHTML = SITE_CONFIG.policyDetail;
}
   

    // 3. โหลดรายชื่อสมาชิก (Candidates Grid) 
    const grid = document.getElementById('teamGrid');
    if (grid) {
        memberData.forEach(member => {
            const card = document.createElement('div');
            card.className = 'member-card';
            card.innerHTML = `
                <img src="${member.img}" class="card-img" loading="lazy">
                <div class="card-info">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                </div>
            `;
            // เมื่อคลิกที่การ์ดสมาชิก ให้เปิด Modal
           card.onclick = () => {
    document.getElementById('modalImg').src = member.img;
    document.getElementById('modalName').innerText = member.name;
    document.getElementById('modalRole').innerText = member.role;
    document.getElementById('modalQuote').innerText = `"${member.quote}"`;
    document.getElementById('memberModal').style.display = 'flex';
};

            grid.appendChild(card);
        });
    }
});

// 4. จัดการ Modal (ปิดหน้าต่าง)
const modal = document.getElementById('memberModal');
const closeBtn = document.querySelector('.close-modal');

if (closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
}

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
};
const targetDate = new Date("2026-02-13T09:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.querySelector(".countdown-popup").innerHTML =
            "<div style='color:white;font-weight:800;font-size:0.9rem'>⛔ สิ้นสุดการรอคอย</div>";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("cd-days").innerText = String(days).padStart(2, '0');
    document.getElementById("cd-hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("cd-minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("cd-seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);
