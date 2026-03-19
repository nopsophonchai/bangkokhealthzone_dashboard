import { useState, useEffect } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import heroImg from './assets/bkkimg.png'

function App() {

  const [page, setPage] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  
  const links = [
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_q2bvte5p1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_rqomss6r1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_rbluau7r1d",
    "https://app3.msdbangkok.go.th/carsystem/dashboard",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_cy6xs8uq1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_xgsutq4r1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_83prc1vq1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_jsbzkgxq1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_e2yuns5s1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_6eyqi74p1d",
    "https://script.google.com/macros/s/AKfycbye5dywQy-wnPaZ3FN1LvqkPt4_ONuamM6EjdVsFuXDVLe5L3WGyAXTKSb6pZLV6WlP/exec",
    "https://script.google.com/macros/s/AKfycbzkUi3lzt1-9S6JGIjT70iVA2pbIb5BeL1KuQKiQ93UGuo_We81Lc3yN_AsFaYHMFK5/exec",
    // "",
    // "",
    "https://script.google.com/macros/s/AKfycbxC4dAVZS45PZrZsr2NPOH0-SYFC344eiNow_fhfKG2-cUiRcaA6cs-lm8uQvgiDjX8/exec",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_w85alpzq1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_f8b7s20q1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_qe9aq31q1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_v6zeol2q1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_uotg9a7q1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_ght5t18q1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_8ajulnbr1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_qaxlhikr1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_jm9y6amr1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_aado5zmr1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_m2w54unr1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_rznx1lor1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_dp60v4or1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_1q4l8a0r1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_i6cru60r1d",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_blhnjq2r1d",
    "https://app.powerbi.com/view?r=eyJrIjoiOWZiZjQ5OGMtYWNhMy00NTg1LTgxNjItYWYyNWU4ZDZhZDcxIiwidCI6ImRjMWI3ODc0LTE1ZTItNGQzYy05YWRmLWVhNDkxZTM2NmRhZSIsImMiOjEwfQ%3D%3D",
    "https://lookerstudio.google.com/embed/reporting/6c73a671-d9fe-4d5a-817d-09765335dcb1/page/i31LE",
    "https://lookerstudio.google.com/embed/reporting/6c73a671-d9fe-4d5a-817d-09765335dcb1/page/p_k1lncqppmd",
    "https://lookerstudio.google.com/embed/reporting/95c399dc-110c-4a78-bd0f-172689422a1b/page/p_0rrdluks1d",
  ]

    const [frame, setFrame] = useState(
    links[0]
  )

  const names = [
    "นโยบายที่ 1 สอบถาม/รับเรื่อง/ปรึกษาปัญหาสุขภาพ 1/4",
    "นโยบายที่ 1 สอบถาม/รับเรื่อง/ปรึกษาปัญหาสุขภาพ 2/4",
    "นโยบายที่ 1 สอบถาม/รับเรื่อง/ปรึกษาปัญหาสุขภาพ 3/4",
    "นโยบายที่ 1 สอบถาม/รับเรื่อง/ปรึกษาปัญหาสุขภาพ 4/4",
    "นโยบายที่ 2 หมอถึงบ้าน 1/2",
    "นโยบายที่ 2 หมอถึงบ้าน 2/2",
    "นโยบายที่ 3 ศูนย์เทคโนฯ สุขภาพดี",
    "นโยบายที่ 4 บริการตรวจสุขภาพเชิงรุก Commulance",
    "นโยบายที่ 5 เยี่ยมบ้าน แบบไร้รอยต่อ",
    "นโยบายที่ 6 การส่งต่อไร้พรมแดน",
    "นโยบายที่ 7 Motorlance",
    "นโยบายที่ 8 เอราวัณทันใจ",
    "นโยบายที่ 9 1 ชุมชน 1 AED",
    "นโยบายที่ 10 Preventive Urban Medicine",
    "นโยบายที่ 11 คลินิกเฉพาะทาง",
    "​นโยบายที่ 12 เพิ่ม ศบส. พลัส ​และยกระดับศูนย์แพทย์ชุมชนเมือง",
    "นโยบายที่ 13 แผนที่ข้อมูลระบบสุขภาพ​ และพื้นที่เสี่ยง",
    "​นโยบายที่ 14 บริการสุขภาพ สาขาโรคเบาหวาน",
    "​นโยบายที่ 15 บริการสุขภาพ สาขาโรคหลอดเลือดสมอง",
    "นโยบายที่ 15 บริการสุขภาพ สาขาโรคหัวใจ",
    "​นโยบายที่ 16 คลินิกผู้สูงอายุครบวงจรทั่ว กทม.",
    "​นโยบายที่ 17 ศูนย์เวชศาสตร์เพื่อการฟื้นฟูและการดูแลแบบประคับประคอง 4 มุม",
    "นโยบายที่ 18 ศูนย์โรคมะเร็งครบวงจร",
    "นโยบายที่ 19 บริการเจาะเลือด ใกล้บ้านคุณ",
    "​นโยบายที่ 20 ร้านยาใกล้บ้าน",
    "นโยบายที่ 21 ชมรมผู้สูงอายุประจำเขต",
    "นโยบายที่ 22 Smart day care center",
    "นโยบายที่ 23 นักสืบฝุ่น ปี 2",
    "นโยบายที่ 24 อาสาสมัครเทคโนโลยี",
    "นโยบายที่ 25 ตรวจสุขภาพ 1 ล้านคน",
    "นโยบายที่ 26 การจัดการภาวะฉุกเฉินทางสาธารณสุข (SHERT) ​1/2",
    "นโยบายที่ 26 การจัดการภาวะฉุกเฉินทางสาธารณสุข (SHERT) 2/2",
    "​นโยบายที่ 27 วิ่งล้อมเมือง",
  ]
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
  const timer = setTimeout(() => {
    setShowIntro(false);
  }, 2500); 

  return () => clearTimeout(timer);
}, []);

  function increasePage() {
    const newPage = (page + 1) % links.length
    setPage(newPage)
    setFrame(links[newPage])
  }

  function decreasePage() {
    const newPage = (page - 1 + links.length) % links.length
    setPage(newPage)
    setFrame(links[newPage])
  }

  function openPage(index) {
    setPage(index)
    console.log(links[index])
    
    setFrame(links[index])
  }

  return (
    
    <div className="layout">
      {showIntro && (
      <div className="intro">
        <img src={heroImg} alt="intro" />
      </div>
    )}
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
  <button
    className="toggle"
    onClick={() => setSidebarOpen(!sidebarOpen)}
  >
    {sidebarOpen ? "❮" : "❯"}
  </button>

  <div className="sidebar-content">
    {names.map((name, index) => (
      <Button
        key={index}
        onClick={() => openPage(index)}
        className="jelly-btn"
        style={{
          width: "100%",
          justifyContent: "flex-start",
          fontWeight: "bold",

        }}
      >
        {name}
      </Button>
    ))}
  </div>
</div>
      <div className="center">
        <iframe
          src={frame}
          title="dashboard"
          style={{ border: "none", width: "100%", height: "100%" }}
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default App