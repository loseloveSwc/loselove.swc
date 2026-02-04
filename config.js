
const SITE_CONFIG = {
    isPolicyOpen: false, 

    //รู้จักพรรค
    aboutUs: {
        title: "รู้จักพวกเราให้มากขึ้น",
        description: "ถ้าเรื่องไหนไม่ยุติธรรม พรรคเราพร้อมเสนอความคิดเห็นให้ครูและโรงเรียน\nพรรคเราจะเปิดรับความคิดเห็นจากทุกระดับ ไม่ใช่คิดแทนฝ่ายเดียว \n นโยบายของพรรคเรามาจากปัญหาที่เจอจริงในโรงเรียน \n ไม่ได้เก่งคนเดียว แต่ช่วยกันคิด ช่วยกันทำ \n ไม่ใช่แค่คนเก่ง คนดัง หรือรุ่นใดรุ่นหนึ่ง ",
        image: "images/group-photo.png"
    },

    //จุดยืนของเรา
    standpoints: [
        { icon: "fa-lightbulb", title: "ความคิดสร้างสรรค์", text: "กล้าคิดนอกกรอบเพื่อแก้ปัญหาเดิมๆ ที่เรื้อรัง" },
        { icon: "fa-hand-fist", title: "ลงมือทำจริง", text: "ไม่รอโอกาส แต่จะสร้างโอกาสให้เกิดขึ้นทันที" },
        { icon: "fa-users", title: "เข้าถึงง่าย", text: "ทุกเสียงของเพื่อนพี่น้อง คือสิ่งที่สำคัญที่สุดสำหรับเรา" }
    ],

    //นโยบาย
    policyDetail: `
        <div style="text-align: left; background: rgba(0,0,0,0.3); padding: 25px; border-radius: 15px; border: 1px dashed var(--red);">
            <p style="margin-bottom: 15px;"><i class="fa-solid fa-circle-check" style="color:var(--red)"></i> 1. ไม่รู้</p>
            <p style="margin-bottom: 15px;"><i class="fa-solid fa-circle-check" style="color:var(--red)"></i> 2. ไม่ทราบ</p>
            <p style="text-align: center; margin-top: 20px; font-weight: 800; color: var(--red);">"ผมไม่รู้"</p>
        </div>
    `
};
