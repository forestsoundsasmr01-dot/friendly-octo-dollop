import type { NextApiRequest, NextApiResponse } from "next";

// ตัวอย่าง mock ประวัติงาน AI (ควรเชื่อมต่อ DB จริงใน production)
const mockHistory = [
  {
    job_id: "a1b2c3d4",
    model: "brighten",
    status: "done",
    created_at: "2025-09-13T12:00:00Z",
  },
  {
    job_id: "b2c3d4e5",
    model: "contrast",
    status: "pending",
    created_at: "2025-09-13T12:30:00Z",
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // ใน production: filter by user from session/JWT
  res.status(200).json(mockHistory);
}