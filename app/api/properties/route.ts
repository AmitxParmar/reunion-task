import { NextResponse } from "next/server";

export function GET(req: Request, res: Response) {
    NextResponse.json({ message: "Hello?" })
}