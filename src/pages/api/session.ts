import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = req.cookies.session;

  if (session) {
    return res.status(200).json({ isLoggedIn: true });
  } else {
    return res.status(200).json({ isLoggedIn: false });
  }
}