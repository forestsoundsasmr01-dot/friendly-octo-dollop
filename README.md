000FFF
# DocAI — Starter Repo

This repository contains a minimal starter for the DocAI project.

## Structure
- frontend/ : Next.js minimal frontend (pages: index, signup, features, upload)
- backend/ : Express + TypeScript backend with upload endpoint and worker (BullMQ)

## Quick start (backend)
1. Install dependencies:
   ```
   cd backend
   npm install
   ```
2. Copy `.env.example` to `.env` and fill your credentials.
3. Start Redis (needed for BullMQ).
4. Start backend server:
   ```
   npm run dev
   ```
5. Start worker in another terminal:
   ```
   npx ts-node-dev src/worker.ts
   ```

## Quick start (frontend)ผมสร้างชุดไฟล์โค้ด starter สำหรับโปรเจกต์ DocAI (frontend + backend + worker) และบีบเป็น ZIP ให้แล้ว — ดาวน์โหลดได้ที่ลิงก์ด้านล่าง:

ดาวน์โหลด DocAI starter code (ZIP)

ภายใน ZIP มี:

frontend/ (Next.js skeleton: pages, tailwind config, package.json)

backend/ (Express + TypeScript: upload endpoint, worker, package.json, .env.example)

README.md (คำสั่งรันและคำแนะนำ)


ถัดไปผมช่วยอะไรต่อได้บ้าง:

ขยายฟีเจอร์ (เช่น เพิ่มการแยกข้อความจาก PDF ด้วย pdf-parse และ mammoth)

ตั้งค่า OpenAI call ให้เหมาะกับการ chunking และประหยัดโควต้า

ช่วยตั้งค่า Stripe/Omise webhook + subscription flow

สร้าง UI Dashboard สำหรับดูประวัติเอกสาร/ผลสรุป

1. Install dependencies:
   ```
   cd frontend
   npm install
   ```
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` (e.g. http://localhost:4000)
3. Start frontend:
   ```
   npm run dev
   ```

## Notes
- The OpenAI usage is demonstrated in worker.ts — replace with proper text extraction logic (pdf-parse, mammoth) in production.
- This is a minimal skeleton to get you started quickly.
CREATE TABLE helloworld (phrase TEXT);
INSERT INTO helloworld VALUES ("Hello, World!");
INSERT INTO helloworld VALUES ("Goodbye, World!");

SELECT * FROM helloworld WHERE phrase = "Hello, World!";
