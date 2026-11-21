import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/admin';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json({ message: 'Username and password required' }, { status: 400 });
    }

    const admin = await Admin.findOne({ username });
    const isHashed = admin && /^\$2[aby]\$/.test(admin.password);
    const valid = admin && (isHashed
      ? await bcrypt.compare(password, admin.password)
      : admin.password === password);
    if (!valid) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      process.env.JWT_SECRET!
      
    );



    return NextResponse.json({
      message: 'Login successful',
      token,
      admin: { username: admin.username, role: admin.role },
    });
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
