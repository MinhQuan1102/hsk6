# HSK6 Context Lab

MVP web học HSK6 theo **context-first learning**: không dùng flashcard. Mỗi word set được đóng gói thành một lesson gồm nhiều dạng bài để học sinh gặp lại và chủ động sử dụng từ trong ngữ cảnh gần với HSK6.

## Flow nội dung

1. Bạn gửi danh sách từ cần học cho ChatGPT.
2. ChatGPT generate một file lesson JSON theo schema v2.
3. Vào **Content Studio → Import lesson** và kéo file JSON vào.
4. Lesson xuất hiện ngay ở **Học & luyện tập**.
5. Kết quả từng bài được gắn với `targetWords` để track từ nào học sinh đang yếu.

## Dạng bài đang hỗ trợ

- `cloze_choice`: chọn từ điền vào ngữ cảnh.
- `reading`: đọc hiểu HSK6 + evidence + giải thích.
- `listening`: nghe bằng browser Speech API + transcript.
- `fill_blank`: chủ động nhớ lại từ.
- `rewrite`: viết lại câu với từ mục tiêu.
- `writing`: đoạn viết ngắn, hiển thị từ mục tiêu đã sử dụng + bài mẫu.

## Chạy local

```bash
python3 -m http.server 4173
```

Mở `http://localhost:4173`.

## Deploy Vercel

Đây là static site, không cần build step.

- Framework Preset: Other
- Build Command: để trống
- Output Directory: `.`

## Dữ liệu

- Lesson library: `localStorage`
- Progress: `localStorage`
- Import lesson: JSON schema v2
- Có sẵn `demo-lesson.json` để test import.

## Ghi chú

Writing/Rewrite hiện dùng self-assessment + bài mẫu, chưa gọi AI thật. Khi nối AI nên dùng API route/serverless function để giữ API key ở server, không đặt key trong frontend.
