import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // WARNING: This is a mock authentication.
    // In a real application, you should validate credentials against a database.
    if (email === "test@example.com" && password === "password") {
      // In a real app, you'd create a session/JWT here.
      return NextResponse.json({ success: true, message: "Login successful" });
    } else {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "An unexpected error occurred." }, { status: 500 });
  }
}
