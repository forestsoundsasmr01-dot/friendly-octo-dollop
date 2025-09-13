# AI Microservice SaaS Pipeline Example

## Start (local/dev)
```bash
# (1) Start Redis
docker-compose up -d redis
# (2) Start AI Service (API)
cd ai_service && uvicorn main:app --reload --port 8000
# (3) Start Celery worker
cd ai_service && celery -A tasks worker --loglevel=info
# (4) Start Next.js frontend
cd frontend && npm install && npm run dev
```

## Workflow
- FE อัปโหลดไฟล์ > เลือกโมเดล > ส่งไป AI API > Celery ประมวลผล > FE polling status > ดาวน์โหลดผลลัพธ์
- เพิ่ม/เทรนโมเดลใหม่ได้ที่ /train API
- เพิ่มโมเดลใหม่ใน models.py

## Production
- ใช้ Docker Compose
- ใส่ Auth, ใช้ Redis/DB จริง, ใช้ S3/MinIO, เพิ่ม security