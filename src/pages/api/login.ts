import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Find the user by email in the database in the database
      const worker = await prisma.workers.findUnique({
        where: { email },
      });

      if (!worker) {
        return res.status(401).json({ error: 'No user found' });
      }

      // Compare the entered password with the hashed password in the database in the database
      const isPasswordValid = await bcrypt.compare(password, worker.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // Generate a session token (you can use a more secure method like JWT)
      const sessionToken = `session_${worker.id}_${Date.now()}`;

      // Set the session cookieion cookie
      res.setHeader(
        'Set-Cookie',
        serialize('session', sessionToken, {
          httpOnly: true, // Secure the cookie the cookie
          secure: process.env.NODE_ENV === 'production', // Use secure cookies in productionocess.env.NODE_ENV === 'production', // Use secure cookies in production
          maxAge: 60 * 60, // 1 hourmaxAge: 60 * 60, // 1 hour
          path: '/', 
        })
      );

      // Respond with success success
      return res.status(200).json({ message: 'Login successful' }); ;
    } catch (error) {
      console.error('Error during login:', error); console.error('Error during login:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else{
    return res.status(405).json({ error: 'Method not allowed' });

}  
}
