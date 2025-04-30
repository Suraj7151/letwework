import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Clear the session cookie
    res.setHeader(
      'Set-Cookie',
      serialize('session', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: -1, // Expire immediately
        path: '/',
      })
    );

    res.status(200).json({ message: 'Logout successful' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}