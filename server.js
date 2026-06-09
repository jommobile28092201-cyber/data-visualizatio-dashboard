const express = require('express');
const app = express();
const PORT = 3000;

// 🟢 Endpoint ที่ 1: Hello API
app.get('/api/hello', (req, res) => {
    res.send('ยินดีด้วย! คุณสร้าง API แรกสำเร็จแล้ว 🎉');
});
// 🟢 Endpoint ที่ 2: About Me
app.get('/api/about-me', (req, res) => {
    res.send('ชื่อ วรนุช ชูพระรส ชื่อเล่น มุก อายุ20สาขาเเทคโนโลยีสารสนเทศ');
});

// สั่งให้ Server เปิดใช้งานที่ Port 3000
app.listen(PORT, () => {
    console.log(`Server กำลังวิ่งอยู่ที่ http://localhost:${PORT}`);
});